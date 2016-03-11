"use strict";

import * as _ from 'lodash';

import {Util} from './util.js';
import {Hm} from './heightmap.js';

let Perlin = {
    fade (t) {
        return t * t * t * (t * (t * 6 - 15) + 10)
    },
    lerp (t, a, b) {
        return a + t * (b - a)
    },
    grad(hash, x, y, z) {
        // convert lo 4 bits of hash code into 12 gradient directions.
        var h = hash & 15;
        var u = h < 8 ? x : y,
             v = h<4 ? y : h==12||h==14 ? x : z;
      return ((h&1) == 0 ? u : -u) + ((h&2) == 0 ? v : -v);
    },
    scale (n) {
        return (1 + n)/2
    },
    noise(x, y, z) {
        let p = new Array(512),
            permutation = [
                151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7,
                225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190,
                6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203,
                117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20,
                125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27,
                166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230,
                220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25,
                63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169,
                200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173,
                186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118,
                126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182,
                189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163,
                70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98,
                108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
                251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51,
                145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157,
                184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236,
                205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215,
                61, 156, 180
           ];

        _.range(0, 255).foreach(function(i){
            p[256+i] = p[i] = permutation[i];

        });

        // find unit cube that contains point.
        var X = Math.floor(x) & 255,
            Y = Math.floor(y) & 255,
            Z = Math.floor(z) & 255;

        // find relative x,y,z of point in cube.
            x -= Math.floor(x);
            y -= Math.floor(y);
            z -= Math.floor(z);

        // compute fade curves for each of x,y,z.
        var u = fade(x),
            v = fade(y),
            w = fade(z);

        // hash coordinates of the 8 cube corners
        var A = p[X] + Y,
            AA = p[A] + Z,
            AB = p[A + 1] + Z,
            B = p[X + 1] + Y,
            BA = p[B] + Z,
            BB = p[B + 1] + Z;

        // add blended results from 8 corners of cube
        return scale(
            lerp(
                w,
                lerp(
                    v,
                    lerp(u, grad(p[AA], x, y, z), grad(p[BA], x - 1, y, z)),
                    lerp(u, grad(p[AB], x, y - 1, z), grad(p[BB], x - 1, y - 1, z))
                ),
                lerp(
                    v,
                    lerp(u, grad(p[AA + 1], x, y, z - 1), grad(p[BA + 1], x - 1, y, z - 1)),
                    lerp(u, grad(p[AB + 1], x, y - 1, z - 1), grad(p[BB + 1], x - 1, y - 1, z - 1 ))
                )
            )
        );
    }
};

let Mpd = {
    initCorners(hm) {
        hm = Hm.set(hm, 0, 0, Math.random());
        hm = Hm.set(hm, 0, hm.last, Math.random());
        hm = Hm.set(hm, hm.last, 0, Math.random());
        hm = Hm.set(hm, hm.last, hm.last, Math.random());

        return hm;
    },
    displace(hm, lx, rx, by, ty, spread) {
        let cx = Util.average(lx, rx),
            cy = Util.average(by, ty),
            // Positions
            bottomLeft = Hm.get(hm, lx, by),
            bottomRight = Hm.get(hm, rx, by),
            topLeft = Hm.get(hm, lx, ty),
            topRight = Hm.get(hm, rx, ty),
            // Midpoints of sides
            top = Util.average(topLeft, topRight),
            left = Util.average(bottomLeft, topLeft),
            bottom = Util.average(bottomLeft, bottomRight),
            right = Util.average(bottomRight, topRight),
            center = Util.average(top, left, bottom, right);

        hm = Hm.set(hm, cx, by, Util.jitter(bottom, spread));
        hm = Hm.set(hm, cx, ty, Util.jitter(top, spread));
        hm = Hm.set(hm, lx, cy, Util.jitter(left, spread));
        hm = Hm.set(hm, rx, cy, Util.jitter(right, spread));
        hm = Hm.set(hm, cx, cy, Util.jitter(center, spread));

        return hm;
    },
    displacement(hm, spread) {
        var iter = 0;

        hm = Mpd.initCorners(hm);

        while(iter < hm.exponent){
            let chunks = Math.pow(2, iter),
                chunkWidth = (hm.resolution - 1) / chunks;

            Util.doNested(chunks, function(xChunk, yChunk){
                let leftX = chunkWidth * xChunk,
                    rightX = leftX + chunkWidth,
                    bottomY = chunkWidth * yChunk,
                    topY = bottomY + chunkWidth;

                hm = Mpd.displace(hm, leftX, rightX, bottomY, topY, spread);
            });

            iter += 1;
            spread *= 1 / iter;
        }

        return hm;
    }
};

export {Perlin, Mpd};