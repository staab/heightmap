"use strict";

import {Util} from './util.js';

let Hm = {
    create(exponent) {
        let resolution = 1 + Math.pow(2, exponent),
            hm;

        hm = _.map(new Array(Math.pow(resolution, 2)), function(){
            return 0.0;
        });

        return _.assign(hm, {
            resolution: resolution,
            exponent: exponent,
            last: resolution - 1
        });
    },
    getIndex(hm, x, y) {
        return x + (y * hm.resolution);
    },
    get(hm, x, y) {
        return hm[Hm.getIndex(hm, x, y)];
    },
    getSafe(hm, x, y) {
        return Util.withinOpen(0, x, hm.last) && Util.withinOpen(0, y, hm.last)
            ? Hm.get(hm, x, y) : null;
    },
    set(hm, x, y, v) {
        hm[Hm.getIndex(hm, x, y)] = v;

        return hm;
    },
    normalize(hm) {
        let min = _.min(hm),
            span = _.max(hm) - min;

        return hm.map(function(v){
            return (v - min) / span;
        });
    },
    noise(hm) {
        return hm.map(Math.random);
    }
};

export {Hm};