"use strict"

import {always, uniq, assocPath, map} from 'ramda'
import {average, degToRad, doNested, jitter, withinOpen} from './util.js'
import * as THREE from 'three'

// Translates a Line3 to an array of contiguous points projected onto
// the heightmap, ignoring the y value
function lineToPoints(line) {
    let rise = line.end.z - line.start.z,
        run = line.end.x - line.start.x,
        // Make sure we're going the right direction
        zSign = rise >= 0 ? 1 : -1,
        xSign = run >= 0 ? 1 : -1,
        slope = Math.abs(rise / run),
        ySlope = (line.end.y - line.start.y) / Math.sqrt(rise**2 + run**2),
        x = line.start.x,
        z = line.start.z,
        points = []

    // If the line's start and end points are the same
    if (isNaN(slope)) {
        return []
    }

    while(Math.round(Math.abs(line.end.x - x)) > 0 || Math.round(Math.abs(line.end.z - z)) > 0) {
        let y = line.start.y + ySlope * Math.sqrt((line.start.x - x)**2 + (line.start.z - z)**2)

        points.push(new THREE.Vector3(Math.floor(x), y, Math.floor(z)))
        points.push(new THREE.Vector3(Math.ceil(x), y, Math.ceil(z)))

        if (Math.abs(slope) > 1) {
            z += zSign
            x += xSign * (1/slope)
        } else {
            z += zSign * slope
            x += xSign
        }

        if(Math.abs(x) > 1000){
            break
        }
    }

    return uniq(points)
}

function linesToPoints(...lines) {
    return uniq(lines.reduce(function(points, line) {
        return points.concat(lineToPoints(line))
    }, []))
}


function getTriangleCenter(triangle) {
    let center = new THREE.Vector3()

    // Get the midpoint of the triangle by averaging corners
    center.addVectors(triangle.a, triangle.b)
    center.add(triangle.c)
    center.divideScalar(3)

    return center
}


function scaleTriangle(triangle, scale) {
    let center = getTriangleCenter(triangle)
    let result = new THREE.Triangle()

    let newA = new THREE.Vector3()
    newA.subVectors(triangle.a, center)
    newA.multiplyScalar(scale)
    newA.add(center)

    let newB = new THREE.Vector3()
    newB.subVectors(triangle.b, center)
    newB.multiplyScalar(scale)
    newB.add(center)

    let newC = new THREE.Vector3()
    newC.subVectors(triangle.c, center)
    newC.multiplyScalar(scale)
    newC.add(center)

    return new THREE.Triangle(newA, newB, newC)
}


// This gets the y value at the given 2d coordinates
function getYinTriangle(triangle, x, z) {
    let p1 = triangle.a
    let p2 = triangle.b
    let p3 = triangle.c

    let a = -(p3.z*p2.y-p1.z*p2.y-p3.z*p1.y+p1.y*p2.z+p3.y*p1.z-p2.z*p3.y)
    let b = (p1.z*p3.x+p2.z*p1.x+p3.z*p2.x-p2.z*p3.x-p1.z*p2.x-p3.z*p1.x)
    let c = (p2.y*p3.x+p1.y*p2.x+p3.y*p1.x-p1.y*p3.x-p2.y*p1.x-p2.x*p3.y)
    let d = -a*p1.x-b*p1.y-c*p1.z

    return -(a*x+c*z+d)/b
}


function pointIsInTriangle(triangle, x, y, z) {
    let barycoord = triangle.barycoordFromPoint(new THREE.Vector3(x, y, z))

    return barycoord.x > 0 && barycoord.y > 0 && barycoord.z > 0
}


function angleBetweenPoints(a, b) {
    return Math.atan2(b.z - a.z, b.x - a.x) * 180 / Math.PI
}


function sortPointsClockwise(center, points) {
    let result = []

    // Sort by distance from center descending first
    points.sort(function(a, b){
        return b.distanceTo(center) - a.distanceTo(center)
    })

    let maxDist = points[0].distanceTo(center)
    let minDist = maxDist - 1

    while(minDist > 0) {
        let chunk = []

        // Get concentric circles around center point
        points.forEach(function(point) {
            if (withinOpen(minDist, point.distanceTo(center), maxDist)) {
                chunk.push(point)
            }
        })

        // Sort the circle clockwise by angle at center from first point
        // http://math.stackexchange.com/questions/1018164/sorting-a-list-of-points-in-2-d-clockwise
        let refPoint = chunk[0]
        chunk.sort(function (a, b) {
            return angleBetweenPoints(refPoint, a) - angleBetweenPoints(refPoint, b)
        })

        result.push(chunk)
        maxDist -= 1
        minDist -= 1
    }

    return result
}


let Hm = {
    create(resolution) {
        let hm = map(always(0.0), new Array(Math.pow(resolution, 2)))

        return {...hm, resolution: resolution, last: resolution - 1}
    },
    getIndex(hm, x, y) {
        return x + (y * hm.resolution)
    },
    get(hm, x, y) {
        return hm[Hm.getIndex(hm, x, y)]
    },
    getSafe(hm, x, y) {
        return withinOpen(0, x, hm.last) && withinOpen(0, y, hm.last)
            ? Hm.get(hm, x, y) : null
    },
    getInTriangle(hm, triangle) {
        let points = []

        doNested(hm.resolution, function(x, z){
            let y = getYinTriangle(triangle, x, z)

            if (pointIsInTriangle(triangle, x, y, z)) {
                points.push(new THREE.Vector3(x, y, z))
            }
        })

        return points
    },
    set(hm, x, y, v) {
        hm[Hm.getIndex(hm, x, y)] = v

        return hm
    },
    normalize(hm) {
        let min = min(hm),
            span = max(hm) - min

        return hm.map(function(v){
            return (v - min) / span
        })
    },
    noise(hm) {
        return hm.map(Math.random)
    },
    toGeometry(hm, scale) {
        let geometry = new THREE.Geometry(),
            vIndex = 0,
            vertices = {}

        doNested(hm.resolution, function(x, z){
            // Negative because we flip it later to get faces the right way up
            let y = -Hm.get(hm, x, z)

            geometry.vertices.push(new THREE.Vector3(x * scale, y * scale, z * scale))

            vertices = assocPath([x, z], vIndex, vertices)

            vIndex += 1
        })
        doNested(hm.resolution, function(x, z){
            let x1 = x + 1,
                z1 = z + 1

            if(Hm.getSafe(hm, x1, z1) === null){
                return
            }

            geometry.faces.push(new THREE.Face3(
                vertices[x][z],
                vertices[x1][z],
                vertices[x][z1],
            ))

            geometry.faces.push(new THREE.Face3(
                vertices[x1][z],
                vertices[x1][z1],
                vertices[x][z1],
            ))
        })

        geometry.center()
        geometry.rotateX(degToRad(180))
        geometry.computeFaceNormals()

        return geometry
    },
    applyTerrain(hm, terrain) {
        let triangle = scaleTriangle(terrain.triangle, terrain.extent)
        let center = getTriangleCenter(triangle)
        let chunks = sortPointsClockwise(center, Hm.getInTriangle(hm, triangle))
        let tiers = chunks.length

        chunks.reduce((tier, points) => {
            points.forEach((point) => {
                let yWeight = map(always(Hm.get(hm, point.x, point.z)), new Array(Math.floor(tier)))
                yWeight.push(jitter(point.y, terrain.jitter))
                // yWeight = yWeight.concat(map(always(jitter(point.y, terrain.jitter)), new Array(Math.floor(tiers - tier))))

                hm = Hm.set(hm, point.x, point.z, average(...yWeight))
            })

            return tier - 1
        }, tiers)

        // points.reduce(function (prevY, point) {
        //     let dist = point.distanceTo(center)

        //     // Jitter y from position in terrain triangle
        //     let y = point.y//jitter(point.y, terrain.jitter)

        //     // Average in the previous point
        //     y = average(prevY, y)

        //     // If it's outside the triangle, bring it closer to its original position
        //     let originalY = Hm.get(hm, point.x, point.z)
        //     let distWeight = Math.floor(dist**1.5 / maxDist)
        //     let yWeight = (new Array(distWeight)).map(always(originalY))
        //     y = average(y, ...yWeight)

        //     // Set it to the heightmap
        //     hm = Hm.set(hm, point.x, point.z, y)

        //     return y
        // }, points[0].y)

        return hm
    }
}

export {Hm}