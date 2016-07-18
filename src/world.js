import * as THREE from 'three';
import {map} from 'ramda'

const SIZE = 100

function randXZ() {
    return Math.random() * SIZE;
}

function randY() {
    return Math.random() * 20 - 10;
}

function randTriangle() {
    let center = randXZ()
    let randXZDelta = () => center + (Math.random() * 30 - 15)

    return new THREE.Triangle(
        new THREE.Vector3(randXZDelta(), randY(), randXZDelta()),
        new THREE.Vector3(randXZDelta(), randY(), randXZDelta()),
        new THREE.Vector3(randXZDelta(), randY(), randXZDelta())
    )
}

let terrain = map(() => ({
    triangle: randTriangle(),
    jitter: 0.2,//Math.random() * 1.8,
    extent: 5
}), new Array(20))

// terrain = [{
//     triangle: new THREE.Triangle(
//         new THREE.Vector3(12, 8, 0),
//         new THREE.Vector3(28, 6, 17),
//         new THREE.Vector3(0, 8, 39)
//     ),
//     jitter: 1,
//     extent: 2.5
// }];


let world = {
    minZoom: 10,
    maxZoom: 100,
    mapSize: SIZE,
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