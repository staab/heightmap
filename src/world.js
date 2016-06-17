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
                line: new THREE.Line3(
                    new THREE.Vector3(13, 3, 15),
                    new THREE.Vector3(18, 10, 27)
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