"use strict";

import {Util} from './util.js';
import * as THREE from 'three';

// Translates a Line3 to an array of contiguous points projected onto
// the heightmap, ignoring the y value
function lineToPoints(line) {
    let rise = line.end.z - line.start.z,
        run = line.end.x - line.start.x,
        slope = rise / run,
        distance = line.distance(),
        ySlope = (line.end.y - line.start.y) / Math.sqrt(rise**2 + run**2),
        x = line.start.x,
        z = line.start.z,
        points = [];

    while(Math.abs(line.end.x - x) > 0 && Math.abs(line.end.z - z) > 0) {
        let y = line.start.y + ySlope * Math.sqrt((line.start.x - x)**2 + (line.start.z - z)**2);

        points.push(new THREE.Vector3(Math.floor(x), y, Math.floor(z)));
        points.push(new THREE.Vector3(Math.ceil(x), y, Math.ceil(z)));

        if (slope > 1) {
            z += 1;
            x += 1/slope;
        } else {
            z += slope;
            x += 1;
        }
    }

    return points;
};


// Get a bounding rectangle at width distance from the terrain line
function getRegionWrap(points, width) {
    let result = [];

    points.forEach(function (point, index) {
        let plusX = point.x + width;
        let minusX = point.x - width;
        let plusZ = Math.round(point.z + width * slope);
        let minusZ = Math.round(point.z - width * slope);

        result.push({x: plusX, z: plusZ});
        result.push({x: minusX, z: minusZ});

        if (index === 0){
            let x = plusX;
            while(x > minusX){
                x -= 1;
                result.push({x: x, z: minusZ});
            }

            let z = plusZ;
            while(z > minusZ){
                z -= 1;
                result.push({x: minusX, z: z});
            }
        } else if (index === points.length - 1){
            let x = plusX;
            while(x > minusX){
                x -= 1;
                result.push({x: x, z: plusZ});
            }

            let z = plusZ;
            while(z > minusZ){
                z -= 1;
                result.push({x: plusX, z: z});
            }
        }
    });
    console.log(result);
    return result;
}


let Hm = {
    create(resolution) {
        let hm = _.map(new Array(Math.pow(resolution, 2)), function(){
            return 0.0;
        });

        return _.assign(hm, {
            resolution: resolution,
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
    },
    toGeometry(hm, scale) {
        let geometry = new THREE.Geometry(),
            vIndex = 0,
            vertices = {};

        Util.doNested(hm.resolution, function(x, z){
            // Negative because we flip it later to get faces the right way up
            let y = -Hm.get(hm, x, z);

            geometry.vertices.push(new THREE.Vector3(x * scale, y * scale, z * scale));

            _.set(vertices, x + "." + z, vIndex);

            vIndex += 1;
        });
        Util.doNested(hm.resolution, function(x, z){
            let x1 = x + 1,
                z1 = z + 1;

            if(Hm.getSafe(hm, x1, z1) === null){
                return;
            }

            geometry.faces.push(new THREE.Face3(
                vertices[x][z],
                vertices[x1][z],
                vertices[x][z1],
            ));

            geometry.faces.push(new THREE.Face3(
                vertices[x1][z],
                vertices[x1][z1],
                vertices[x][z1],
            ));
        });

        geometry.center();
        geometry.rotateX(Util.degToRad(180));
        geometry.computeFaceNormals();

        return geometry
    },
    applyTerrain(hm, terrain) {
        let ridge = lineToPoints(terrain.line);

        ridge.forEach(function(point){
            hm = Hm.set(hm, point.x, point.z, Util.jitter(point.y, terrain.jitter));
        });

        return hm;
    }
};

export {Hm};