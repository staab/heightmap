"use strict";

import * as _ from 'lodash';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';

import {Util} from './util.js';
import {Hm} from './heightmap.js';
import {Perlin, Mpd} from './noise.js';

let OrbitControls = _OrbitControls.default(THREE);

function hmToGeometry(hm, scale) {
    let geometry = new THREE.Geometry(),
        vIndex = 0,
        vertices = {};

    Util.doNested(hm.resolution, function(x, z){
        // Negative because we flip it later to get faces the right way up
        let y = -Hm.get(hm, x, z);

        geometry.vertices.push(new THREE.Vector3(x * scale, y * scale, z * scale));

        _.set(vertices, x + "." + z, vIndex);

        vIndex += 1;
    });
    Util.doNested(hm.resolution, function(x, z){
        let x1 = x + 1,
            z1 = z + 1;

        if(Hm.getSafe(hm, x1, z1) === null){
            return;
        }

        geometry.faces.push(new THREE.Face3(
            vertices[x][z],
            vertices[x1][z],
            vertices[x][z1],
        ));

        geometry.faces.push(new THREE.Face3(
            vertices[x1][z],
            vertices[x1][z1],
            vertices[x][z1],
        ));
    });

    geometry.center();
    geometry.rotateX(Util.degToRad(180));
    geometry.computeFaceNormals();

    return geometry
}

function applyTerrain(hm, terrain) {
    let slope = (terrain.start[0] - terrain.stop[0]) / (terrain.start[1] - terrain.stop[1]);

    function getLinePoints() {
        let z = terrain.start[1];

        // Make ridges contiguous for slopes > 1
        let incr = slope > 1 ? slope % 1 : slope;

        let points = [];
        for (let x = terrain.start[0]; x < terrain.stop[0]; x += incr) {
            // Use rounded version for accessing hmap, but keep float version for
            // incrementin, in case of slopes > 1
            let roundX = Math.ceil(x);

            // Elevate with old z value first, so we have a contiguous ridge
            if (Hm.getSafe(hm, roundX, z) !== null){
                points.push({x: roundX, z: z});
            }

            // Now increment z based on slope and do it again
            z = Math.ceil(x * slope);
            if (Hm.getSafe(hm, roundX, z) !== null){
                points.push({x: roundX, z: z});
            }
        }

        return _.uniq(points);
    }

    function getRegionWrap(points, width) {
        result = [];

        points.forEach(function (point) {
            result.push({x: point.x })
        });
    }

    let regions = [getLinePoints()];

    // Apply elevation to all points
    regions.forEach(function (regionPoints, index) {
        let jitter = terrain.jitter / (terrain.width - index);

        regionPoints.forEach(function(point){
            hm = Hm.set(hm, point.x, point.z, Util.jitter(terrain.elevate, jitter));
        });
    });


    return hm;
}


function Scene(world) {
    let self = this,
        width = window.innerWidth,
        height = window.innerHeight;

    _.assign(self, {
        scene: new THREE.Scene(),
        camera: new THREE.PerspectiveCamera(50, width / height, 1, world.mapSize**2),
        ambientLight: new THREE.AmbientLight(0x402020),
        pointLight1: new THREE.PointLight(0xccccff, 1, world.mapSize**2),
        pointLight2: new THREE.PointLight(0xccccff, 1, world.mapSize**2),
        renderer: new THREE.WebGLRenderer(),
        camDist: world.maxZoom - world.minZoom,
        lastCamPos: null,
        world: world,
        level: 0
    });

    // Set point light position
    self.pointLight1.position.set(300, 300, 1000);
    self.pointLight2.position.set(-300, -300, 1000);

    // Renderer
    self.renderer.setSize(width, height);

    // Set our camera up
    self.camera.position.set(self.camDist, self.camDist, self.camDist);
    self.camera.lookAt(new THREE.Vector3(0, 0, 0));
    self.lastCamPos = self.camera.position.clone();

    // Add stuff to the scene
    self.scene.add(self.camera);
    self.scene.add(self.ambientLight);
    self.scene.add(self.pointLight1);
    self.scene.add(self.pointLight2);

    // Add it to the body
    document.body.appendChild(self.renderer.domElement);

    // Add some controls
    new OrbitControls(self.camera);

    // Add some terrain
    self.createTerrain(self.level);

    // Render it up
    self.render();
}


Scene.prototype.createTerrain = function createTerrain() {
    let self = this;
    let level = self.world.levels[self.level];

    // Heightmap
    let hmScale = 1;
    let hm = Hm.create(self.world.mapSize / hmScale)

    // Apply terrain to heightmap
    level.terrain.forEach(function (terrain) {
        hm = applyTerrain(hm, terrain);
    });

    // THREE objects
    let geometry = hmToGeometry(hm, hmScale);
    let material = new THREE.MeshLambertMaterial({color: 0x993311});
    let land = new THREE.Mesh(geometry, material);

    geometry.computeFaceNormals();
    land = new THREE.Mesh(geometry, material);

    // Add it
    self.scene.add(land);

    // save it for later
    self.land = land;
};

Scene.prototype.switchLevel = function switchLevel(index) {
    let self = this;
    let curLevel = self.world.levels[self.level];
    let newLevel = self.world.levels[index];

    // Zoom the camera
    self.camera.position.multiplyScalar(newLevel.scale / curLevel.scale);

    // Re-create the level
    self.scene.remove(self.land);
    self.createTerrain();

    // Change curLevel now
    self.level = index;
};

Scene.prototype.zoom = function zoom() {
    let self = this;
    let camPos = self.camera.position;
    let camDist = Math.cbrt(camPos.x**2 + camPos.y**2 + camPos.z**2);

    if (camDist < self.world.minZoom && self.level !== self.world.levels.length - 1) {
        self.switchLevel(self.level + 1);
    } else if (camDist > self.world.maxZoom && self.level !== 0) {
        self.switchLevel(self.level - 1);
    } else if (camDist < self.world.minZoom || camDist > self.world.maxZoom) {
        // Prevent zooming in/out too far
        camPos.copy(self.lastCamPos);
    }
};

Scene.prototype.render = function render() {
    var self = this;

    // Throttle framerate a bit so we don't send our computer to space
    setTimeout(function(){
        requestAnimationFrame(self.render.bind(self));
    }, 100);

    // Handle zoom
    self.zoom()

    // Save stuff for later
    self.lastCamPos = self.camera.position.clone();

    self.renderer.render(self.scene, self.camera);
};

export {Scene};