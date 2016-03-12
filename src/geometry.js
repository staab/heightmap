"use strict";

import * as THREE from 'three';

// http://catlikecoding.com/unity/tutorials/cube-sphere/
function createCubeSphere(segments, radius){
    let geometry = new THREE.BoxGeometry(1, 1, 1, segments, segments, segments);

    geometry.vertices.forEach(function(vertex){
        vertex.multiplyScalar(2);

        let x = vertex.x,
            y = vertex.y,
            z = vertex.z;

        vertex.setX(radius * x * Math.sqrt(1 - (y*y/2) - (z*z/2) + (y*y*z*z/3)));
        vertex.setY(radius * y * Math.sqrt(1 - (z*z/2) - (x*x/2) + (z*z*x*x/3)));
        vertex.setZ(radius * z * Math.sqrt(1 - (x*x/2) - (y*y/2) + (x*x*y*y/3)));
    });

    geometry.verticesNeedUpdate = true;
    geometry.computeFaceNormals();

    return geometry;
}

export {createCubeSphere};