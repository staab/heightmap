let world = {
    minZoom: 10,
    maxZoom: 100,
    mapSize: 500,
    levels: [
        {
            name: 'top',
            scale: 1,
            terrain: [{
                start: [10, 10],
                stop: [300, 490],
                elevate: 10,
                jitter: 1,
                width: 10
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