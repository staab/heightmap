import * as THREE from 'three';
import {map} from 'ramda'

function randXZ() {
    return Math.random() * 50;
}

function randY() {
    return Math.random() * 30 - 15;
}

let terrain = map(() => ({
    triangle: new THREE.Triangle(
        new THREE.Vector3(randXZ(), randY(), randXZ()),
        new THREE.Vector3(randXZ(), randY(), randXZ()),
        new THREE.Vector3(randXZ(), randY(), randXZ())
    ),
    jitter: 1.0,//Math.random() * 1.8,
    extent: 1.5
}), new Array(0))

terrain.push({
    triangle: new THREE.Triangle(
        new THREE.Vector3(-10, 0, -10),
        new THREE.Vector3(-10, 0, 60),
        new THREE.Vector3(60, 10, 60)
    ),
    jitter: 1.0,
    extent: 1.5
})

terrain = [{
    triangle: new THREE.Triangle(
        new THREE.Vector3(12, 8, 18),
        new THREE.Vector3(28, 6, 17),
        new THREE.Vector3(0, 8, 39)
    ),
    jitter: 1.2,
    extent: 1.5
}];


let world = {
    minZoom: 10,
    maxZoom: 100,
    mapSize: 50,
    levels: [
        {
            name: 'top',
            scale: 1,
            terrain: terrain
        },
        {
            name: 'mid',
            scale: 10,
            terrain: []
        },
        {
            name: 'bottom',
            scale: 100,
            terrain: []
        },
    ]
};

export {world};