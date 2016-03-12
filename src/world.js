"use strict";

import * as _ from 'lodash';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';

import {Util} from './util.js';
import {Hm} from './heightmap.js';
import {Perlin, Mpd} from './noise.js';

let OrbitControls = _OrbitControls.default(THREE);

// map size
// factor out algorithm and objects
// add hierarchy for objects

function World(size){
    let self = this,
        radius = size/2,
        width = window.innerWidth,
        height = window.innerHeight;

    _.assign(self, {
        scene: new THREE.Scene(),
        // Give us a little extra breathing room
        camera: new THREE.PerspectiveCamera(45, width / height, 1, radius + radius/5),
        ambientLight: new THREE.AmbientLight(0xeeeeee),
        renderer: new THREE.WebGLRenderer()
    });

    // Camera
    self.camera.position.set(radius/2, radius/2, radius/2);
    self.camera.lookAt(new THREE.Vector3(0, 0, 0));

    // Renderer
    self.renderer.setSize(width, height);

    // Add stuff to the scene
    self.scene.add(self.camera);
    self.scene.add(self.ambientLight);

    // Add it to the body
    document.body.appendChild(self.renderer.domElement);

    // Add some controls
    new OrbitControls(self.camera);

    self.animate();
}

World.prototype.animate = function animate() {
    var self = this;

    requestAnimationFrame(self.animate.bind(self));

    self.renderer.render(self.scene, self.camera);
}

export {World};