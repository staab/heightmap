"use strict";

let Util = {
    withinOpen: (low, v, high) => low <= v && v <= high,
    withinClosed: (low, v, high) => low < v && v < high,
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

export {Util};