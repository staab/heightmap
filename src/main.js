"use strict";

import * as _ from 'lodash';
import * as THREE from 'three';
import * as _OrbitControls from 'three-orbit-controls';

let OrbitControls = _OrbitControls.default(THREE);

let Util = {
    withinOpen: (low, v, high) => low <= v && v <= high,
    withinclosed: (low, v, high) => low < v && v < high,
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

let Mpd = {
    initCorners(hm) {
        hm = Hm.set(hm, 0, 0, Math.random());
        hm = Hm.set(hm, 0, hm.last, Math.random());
        hm = Hm.set(hm, hm.last, 0, Math.random());
        hm = Hm.set(hm, hm.last, hm.last, Math.random());

        return hm;
    },
    displace(hm, lx, rx, by, ty, spread) {
        let cx = Util.average(lx, rx),
            cy = Util.average(by, ty),
            // Positions
            bottomLeft = Hm.get(hm, lx, by),
            bottomRight = Hm.get(hm, rx, by),
            topLeft = Hm.get(hm, lx, ty),
            topRight = Hm.get(hm, rx, ty),
            // Midpoints of sides
            top = Util.average(topLeft, topRight),
            left = Util.average(bottomLeft, topLeft),
            bottom = Util.average(bottomLeft, bottomRight),
            right = Util.average(bottomRight, topRight),
            center = Util.average(top, left, bottom, right);

        hm = Hm.set(hm, cx, by, Util.jitter(bottom, spread));
        hm = Hm.set(hm, cx, ty, Util.jitter(top, spread));
        hm = Hm.set(hm, lx, cy, Util.jitter(left, spread));
        hm = Hm.set(hm, rx, cy, Util.jitter(right, spread));
        hm = Hm.set(hm, cx, cy, Util.jitter(center, spread));

        return hm;
    },
    displacement(hm, spread) {
        var iter = 0;

        hm = Mpd.initCorners(hm);

        while(iter < hm.exponent){
            let chunks = Math.pow(2, iter),
                chunkWidth = (hm.resolution - 1) / chunks;

            Util.doNested(chunks, function(xChunk, yChunk){
                let leftX = chunkWidth * xChunk,
                    rightX = leftX + chunkWidth,
                    bottomY = chunkWidth * yChunk,
                    topY = bottomY + chunkWidth;

                hm = Mpd.displace(hm, leftX, rightX, bottomY, topY, spread);
            });

            iter += 1;
            spread *= 1 / iter;
        }

        return hm;
    }
};

function Scene(exponent, spread){
    _.assign(this, {
        camera: null,
        light: null,
        scene: null,
        renderer: null,
        mesh: null,
        controls: null,
        exponent: exponent,
        spread: spread,
    });

    this.init();
    this.createTerrain();
    this.animate();
}

Scene.prototype.init = function init(){
    let self = this,
        width = window.innerWidth,
        height = window.innerHeight;

    self.scene = new THREE.Scene();

    self.camera = new THREE.PerspectiveCamera(50, width / height, 1, 10000);
    self.scene.add(self.camera);

    self.light = new THREE.PointLight(0xffffff, 1, 10000);
    self.light.position.set(1000, 1000, 1000);
    self.scene.add(self.light);

    self.renderer = new THREE.WebGLRenderer();
    self.renderer.setSize(width, height);

    self.controls = new OrbitControls(self.camera);

    document.body.appendChild(self.renderer.domElement);
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
        waterGeometry = new THREE.PlaneGeometry(radius * 2, radius * 2),
        landMaterial,
        waterMaterial,
        land,
        water;

    // Set up material
    landMaterial = new THREE.MeshLambertMaterial({color: 0x993311});
    waterMaterial = new THREE.MeshLambertMaterial({color: 0x224488, opacity: 0.8, transparent: true});

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
    requestAnimationFrame(this.animate.bind(this));
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