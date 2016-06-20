import * as THREE from 'three';

let world = {
    minZoom: 10,
    maxZoom: 100,
    mapSize: 50,
    levels: [
        {
            name: 'top',
            scale: 1,
            terrain: [{
                triangle: new THREE.Triangle(
                    new THREE.Vector3(10, 0, 0),
                    new THREE.Vector3(30, 5, 0),
                    new THREE.Vector3(10, 10, 20)
                ),
                jitter: 1,
                width: 3
            }]
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