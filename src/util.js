import {sum, identity, equals, complement} from 'ramda'

export const withinOpen = (low, v, high) => low <= v && v <= high

export const withinClosed = (low, v, high) => low < v && v < high

export const randAroundZero = (spread) => (spread * 2 * Math.random()) - spread

export const jitter = (value, spread) => value + randAroundZero(spread)

export const average = (...items) => {
    items = items.filter(complement(equals(undefined)))

    return sum(items) / items.length
}

export const doNested = (width, fn) =>{
    for(let x = 0; x < width; x++) {
        for(let y = 0; y < width; y++) {
            fn(x, y);
        }
    }
}

export const degToRad = (deg) => deg * Math.PI / 180

export const radToDeg = (rad) => rad * 180 / Math.PI
