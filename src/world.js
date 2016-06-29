import * as THREE from 'three';
import * as _ from 'lodash';

function randXZ() {
    return Math.random() * 50;
}

function randY() {
    return Math.random() * 30 - 15;
}

let terrain = _.map(new Array(1), function(){
    return {
        triangle: new THREE.Triangle(
            new THREE.Vector3(randXZ(), randY(), randXZ()),
            new THREE.Vector3(randXZ(), randY(), randXZ()),
            new THREE.Vector3(randXZ(), randY(), randXZ())
        ),
        jitter: Math.random() * 2,
        extent: 1.5
    };
});

terrain = [{
    triangle: new THREE.Triangle(
        new THREE.Vector3(12, 8, 18),
        new THREE.Vector3(28, 6, 17),
        new THREE.Vector3(0, 8, 39)
    ),
    jitter: 1.7563185790613423,
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