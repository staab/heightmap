"use strict";

import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';

import {Hm} from './heightmap.js';

let OrbitControls = _OrbitControls.default(THREE);


function Scene(world) {
    let self = this,
        width = window.innerWidth,
        height = window.innerHeight;

    Object.assign(self, {
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
        hm = Hm.applyTerrain(hm, terrain);
    });

    // THREE objects
    let geometry = Hm.toGeometry(hm, hmScale);
    let material = new THREE.MeshLambertMaterial({color: 0x993311});
    let land = new THREE.Mesh(geometry, material);

    geometry.computeFaceNormals();
    land = new THREE.Mesh(geometry, material);

    // Add it
    self.scene.add(land);

    // Edges helper
    let edges = new THREE.EdgesHelper(land, 0xaa8811);
    self.scene.add(edges);

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
    // self.zoom()

    // Save stuff for later
    self.lastCamPos = self.camera.position.clone();

    self.renderer.render(self.scene, self.camera);
};

export {Scene};