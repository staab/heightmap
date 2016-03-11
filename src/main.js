"use strict";

import * as _ from 'lodash';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';
import {Perlin, Mpd} from './noise.js';

let OrbitControls = _OrbitControls.default(THREE);

let Util = {
    withinOpen: (low, v, high) => low <= v && v <= high,
    withinClosed: (low, v, high) => low < v && v < high,
    randAroundZero: (spread) => (spread * 2 * Math.random()) - spread,
    jitter: (value, spread) => value + Util.randAroundZero(spread),
    average: (...items) => _.sum(items) / items.length,
    doNested(width, fn){
        for(let x = 0; x < width; x++) {
            for(let y = 0; y < width; y++) {
                fn(x, y);
            }
        }
    }
};

let Hm = {
    create(exponent) {
        let resolution = 1 + Math.pow(2, exponent),
            hm;

        hm = _.map(new Array(Math.pow(resolution, 2)), function(){
            return 0.0;
        });

        return _.assign(hm, {
            resolution: resolution,
            exponent: exponent,
            last: resolution - 1
        });
    },
    getIndex(hm, x, y) {
        return x + (y * hm.resolution);
    },
    get(hm, x, y) {
        return hm[Hm.getIndex(hm, x, y)];
    },
    getSafe(hm, x, y) {
        return Util.withinOpen(0, x, hm.last) && Util.withinOpen(0, y, hm.last)
            ? Hm.get(hm, x, y) : null;
    },
    set(hm, x, y, v) {
        hm[Hm.getIndex(hm, x, y)] = v;

        return hm;
    },
    normalize(hm) {
        let min = _.min(hm),
            span = _.max(hm) - min;

        return hm.map(function(v){
            return (v - min) / span;
        });
    },
    noise(hm) {
        return hm.map(Math.random);
    }
};



function Scene(exponent, spread){
    let self = this,
        width = window.innerWidth,
        height = window.innerHeight;

    _.assign(self, {
        scene: new THREE.Scene(),
        camera: new THREE.PerspectiveCamera(50, width / height, 1, 10000),
        ambientLight: new THREE.AmbientLight(0x402020),
        pointLight1: new THREE.PointLight(0xccccff, 1, 100000),
        pointLight2: new THREE.PointLight(0xccccff, 1, 100000),
        renderer: new THREE.WebGLRenderer(),
        exponent: exponent,
        spread: spread,
    });

    // Set point light position
    self.pointLight1.position.set(300, 300, 1000);
    self.pointLight2.position.set(-300, -300, 1000);

    // Renderer
    self.renderer.setSize(width, height);

    // Add stuff to the scene
    self.scene.add(self.camera);
    self.scene.add(self.ambientLight);
    self.scene.add(self.pointLight1);
    self.scene.add(self.pointLight2);

    // Add it to the body
    document.body.appendChild(self.renderer.domElement);

    // Add some controls
    new OrbitControls(self.camera),

    // Animate
    self.createTerrain();
    self.animate();
}

Scene.prototype.init = function init(){
}

Scene.prototype.hmToGeometry = function hmToGeometry(hm, scale) {
    let geometry = new THREE.Geometry(),
        vIndex = 0,
        vertices = {};

    Util.doNested(hm.resolution, function(x, y){
        let z = Hm.get(hm, x, y);

        geometry.vertices.push(new THREE.Vector3(x * scale, y * scale, z * scale));

        _.set(vertices, x + "." + y, vIndex);

        vIndex += 1;
    });
    Util.doNested(hm.resolution, function(x, y){
        let x1 = x + 1,
            y1 = y + 1;

        if(Hm.getSafe(hm, x1, y1) === null){
            return;
        }

        geometry.faces.push(new THREE.Face3(
            vertices[x][y],
            vertices[x1][y],
            vertices[x][y1],
        ));

        geometry.faces.push(new THREE.Face3(
            vertices[x1][y],
            vertices[x1][y1],
            vertices[x][y1],
        ));
    });

    geometry.computeFaceNormals();

    return geometry
};

Scene.prototype.createTerrain = function createTerrain() {
    let self = this,
        scale = 50,
        hm = Mpd.displacement(Hm.create(self.exponent), self.spread),
        radius = (hm.resolution / 2) * scale,
        landGeometry = self.hmToGeometry(hm, scale),
        waterGeometry = new THREE.PlaneGeometry(radius * 2, radius * 2, hm.resolution, hm.resolution),
        landMaterial,
        waterMaterial,
        land,
        water;

    // Set up material
    landMaterial = new THREE.MeshLambertMaterial({color: 0x993311});
    waterMaterial = new THREE.MeshLambertMaterial({color: 0x2288aa, opacity: 0.8, transparent: true});

    land = new THREE.Mesh(landGeometry, landMaterial);
    land.rotation.x -= Math.PI / 2;
    land.position.x -= radius;
    land.position.z += radius;

    waterGeometry.computeFaceNormals();
    water = new THREE.Mesh(waterGeometry, waterMaterial);
    water.rotation.x -= Math.PI / 2;

    // Reposition camera
    self.camera.position.set(radius, radius, radius);
    self.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Add it
    self.scene.add(land);
    self.scene.add(water);

    // save it for the render loop
    self.land = land;
    self.water = water;
}

Scene.prototype.animate = function animate() {
    var self = this;

    requestAnimationFrame(this.animate.bind(this));

    // Jitter
    self.water.geometry.vertices.map(function(vertex) {
        vertex.setZ(Util.jitter(vertex.z, 1));
    });
    self.water.geometry.verticesNeedUpdate = true;

    this.render();
}

Scene.prototype.render = function render() {
    this.renderer.render(this.scene, this.camera);

}

window.THREE = THREE;
window.Util = Util;
window.Hm = Hm;
window.Mpd = Mpd;
window.Scene = Scene;

window.s = new Scene(6, 10);