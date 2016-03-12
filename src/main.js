"use strict";

import * as THREE from 'three';

import {World} from './world.js';
import * as Geometry from './geometry.js';

window.world = new World(100);

let geometry = Geometry.createCubeSphere(10, 5);
let material = new THREE.MeshLambertMaterial({color: 0x00aaaa});
let mesh = new THREE.Mesh(geometry, material);
let edges = new THREE.EdgesHelper(mesh, 0x008800);

window.world.scene.add(mesh);
window.world.scene.add(edges);




// Scene.prototype.hmToGeometry = function hmToGeometry(hm, scale) {
//     let geometry = new THREE.Geometry(),
//         vIndex = 0,
//         vertices = {};

//     Util.doNested(hm.resolution, function(x, y){
//         let z = Hm.get(hm, x, y);

//         geometry.vertices.push(new THREE.Vector3(x * scale, y * scale, z * scale));

//         _.set(vertices, x + "." + y, vIndex);

//         vIndex += 1;
//     });
//     Util.doNested(hm.resolution, function(x, y){
//         let x1 = x + 1,
//             y1 = y + 1;

//         if(Hm.getSafe(hm, x1, y1) === null){
//             return;
//         }

//         geometry.faces.push(new THREE.Face3(
//             vertices[x][y],
//             vertices[x1][y],
//             vertices[x][y1],
//         ));

//         geometry.faces.push(new THREE.Face3(
//             vertices[x1][y],
//             vertices[x1][y1],
//             vertices[x][y1],
//         ));
//     });

//     geometry.computeFaceNormals();

//     return geometry
// };

// Scene.prototype.createTerrain = function createTerrain() {
//     let self = this,
//         scale = 50,
//         hm = Mpd.displacement(Hm.create(self.exponent), self.spread),
//         radius = (hm.resolution / 2) * scale,
//         landGeometry = self.hmToGeometry(hm, scale),
//         waterGeometry = new THREE.PlaneGeometry(radius * 2, radius * 2, hm.resolution, hm.resolution),
//         landMaterial,
//         waterMaterial,
//         land,
//         water;

//     // Set up material
//     landMaterial = new THREE.MeshLambertMaterial({color: 0x993311});
//     waterMaterial = new THREE.MeshLambertMaterial({color: 0x2288aa, opacity: 0.8, transparent: true});

//     land = new THREE.Mesh(landGeometry, landMaterial);
//     land.rotation.x -= Math.PI / 2;
//     land.position.x -= radius;
//     land.position.z += radius;

//     waterGeometry.computeFaceNormals();
//     water = new THREE.Mesh(waterGeometry, waterMaterial);
//     water.rotation.x -= Math.PI / 2;

//     // Reposition camera
//     self.camera.position.set(radius, radius, radius);
//     self.camera.lookAt(new THREE.Vector3(0, 0, 0));

//     // Add it
//     self.scene.add(land);
//     self.scene.add(water);

//     // save it for the render loop
//     self.land = land;
//     self.water = water;
// }