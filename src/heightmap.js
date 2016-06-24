"use strict";

import {Util} from './util.js';
import * as THREE from 'three';
import * as _ from 'lodash';

// Translates a Line3 to an array of contiguous points projected onto
// the heightmap, ignoring the y value
function lineToPoints(line) {
    let rise = line.end.z - line.start.z,
        run = line.end.x - line.start.x,
        // Make sure we're going the right direction
        zSign = rise >= 0 ? 1 : -1,
        xSign = run >= 0 ? 1 : -1,
        slope = rise / run,
        distance = line.distance(),
        ySlope = (line.end.y - line.start.y) / Math.sqrt(rise**2 + run**2),
        x = line.start.x,
        z = line.start.z,
        points = [];

    // If the line's start and end points are the same
    if (isNaN(slope)) {
        return [];
    }

    while(Math.abs(line.end.x - x) > 0 && Math.abs(line.end.z - z) > 0) {
        let y = line.start.y + ySlope * Math.sqrt((line.start.x - x)**2 + (line.start.z - z)**2);

        points.push(new THREE.Vector3(Math.floor(x), y, Math.floor(z)));
        points.push(new THREE.Vector3(Math.ceil(x), y, Math.ceil(z)));

        if (slope > 1) {
            z += zSign * 1;
            x += xSign * (1/slope);
        } else {
            z += zSign * (slope);
            x += xSign * 1;
        }
    }

    return points;
}


function getTriangleCenter(triangle) {
    let center = new THREE.Vector3();

    // Get the midpoint of the triangle by averaging corners
    center.addVectors(triangle.a, triangle.b);
    center.add(triangle.c);
    center.divideScalar(3);

    return center
}


function scaleTriangle(triangle, scale) {
    let center = getTriangleCenter(triangle);
    let result = new THREE.Triangle();

    let newA = new THREE.Vector3();
    newA.subVectors(triangle.a, center);
    newA.multiplyScalar(scale);
    newA.add(center);

    let newB = new THREE.Vector3();
    newB.subVectors(triangle.b, center);
    newB.multiplyScalar(scale);
    newB.add(center);

    let newC = new THREE.Vector3();
    newC.subVectors(triangle.c, center);
    newC.multiplyScalar(scale);
    newC.add(center);

    return new THREE.Triangle(newA, newB, newC);
}


// This gets the y value at the given 2d coordinates
function getYinTriangle(triangle, x, z) {
    let p1 = triangle.a;
    let p2 = triangle.b;
    let p3 = triangle.c;

    let a = -(p3.z*p2.y-p1.z*p2.y-p3.z*p1.y+p1.y*p2.z+p3.y*p1.z-p2.z*p3.y);
    let b = (p1.z*p3.x+p2.z*p1.x+p3.z*p2.x-p2.z*p3.x-p1.z*p2.x-p3.z*p1.x);
    let c = (p2.y*p3.x+p1.y*p2.x+p3.y*p1.x-p1.y*p3.x-p2.y*p1.x-p2.x*p3.y);
    let d = -a*p1.x-b*p1.y-c*p1.z;

    return -(a*x+c*z+d)/b;
}


function pointIsInTriangle(triangle, x, y, z) {
    let barycoord = triangle.barycoordFromPoint(new THREE.Vector3(x, y, z));

    return barycoord.x > 0 && barycoord.y > 0 && barycoord.z > 0;
}


function sortPointsClockwise(center) {
    // http://stackoverflow.com/a/6989383/1467342
    // this is wrong.
    return function (a, b) {
        if (a.x - center.x >= 0 && b.x - center.x < 0){
            return 1;
        }

        if (a.x - center.x < 0 && b.x - center.x >= 0){
            return -1;
        }

        if (a.x - center.x == 0 && b.x - center.x == 0) {
            if (a.y - center.y >= 0 || b.y - center.y >= 0){
                return a.y > b.y;
            }

            return b.y > a.y;
        }

        // compute the cross product of vectors (center -> a) x (center -> b)
        let det = (a.x - center.x) * (b.y - center.y) - (b.x - center.x) * (a.y - center.y);
        if (det < 0) {
            return 1;
        }

        if (det > 0) {
            return -1;
        }

        // points a and b are on the same line from the center
        // check which point is closer to the center
        let d1 = (a.x - center.x) * (a.x - center.x) + (a.y - center.y) * (a.y - center.y);
        let d2 = (b.x - center.x) * (b.x - center.x) + (b.y - center.y) * (b.y - center.y);

        return d1 - d2;
    }
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
    getInTriangle(hm, triangle) {
        let points = [];

        Util.doNested(hm.resolution, function(x, z){
            let y = getYinTriangle(triangle, x, z);

            if (pointIsInTriangle(triangle, x, y, z)) {
                points.push(new THREE.Vector3(x, y, z));
            }
        });

        return points;
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
        let triangle = scaleTriangle(terrain.triangle, terrain.extent);
        let center = getTriangleCenter(triangle);
        let points = Hm.getInTriangle(hm, triangle);

        // points.sort(sortPointsClockwise(center));
        points.sort(function(point1, point2) {
            return point1.distanceTo(center) - point2.distanceTo(center);
        });

        points.reduce(function (prevY, current) {
            let y = Util.average(prevY, Util.jitter(current.y, terrain.jitter));
            hm = Hm.set(hm, current.x, current.z, y);

            return y;
        }, points[0].y);

        return hm;
    }
};

export {Hm};