let world = {
    minZoom: 10,
    maxZoom: 100,
    mapSize: 50,
    levels: [
        {
            name: 'top',
            scale: 1,
            terrain: [{
                start: [13, 15],
                stop: [18, 17],
                elevate: 10,
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