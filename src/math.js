const DIMENSION_NAMES = ['x', 'y', 'z', 'w']

const apply = (fn, args) => fn.apply(null, args)

export const Scalar = scalar => scalar

Scalar.sum = (...scalars) => scalars.reduce((result, scalar) => result + scalar)

export const Vec = (...scalars) => {
    // Alias scalars on the vector as keys
    scalars.forEach((scalar, index) => scalars[DIMENSION_NAMES[index]] = scalars[index])

    return scalars
}

Vec.multScalar = (vec, scalar) => vec.map(value => value * scalar)

Vec.divScalar = (vec, scalar) => vec.map(value => value / scalar)

Vec.add = (...vecs) => {
    return vecs.reduce((result, vec) => {
        return result.map((scalar, index) => scalar + vec[index])
    })
}

Vec.sub = (...vecs) => {
    return vecs.reduce((result, vec) => {
        return result.map((scalar, index) => scalar - vec[index])
    })
}

Vec.mag = (vec) => {
    return Math.sqrt(apply(Scalar.sum, vec.map(scalar => Math.pow(scalar, 2))))
}

Vec.norm = (vec) => {
    return Vec.divScalar(vec, Vec.mag(vec))
}

Vec.dist = (vec1, vec2) => Vec.mag(Vec.sub(vec1, vec2))

Vec.dot = (vec1, vec2) => apply(Scalar.sum, vec1.map((scalar, index) => scalar * vec2[index]))

Vec.projectParallel = (base, vec) => {
    base = Vec.norm(base)

    return Vec.multScalar(base, Vec.dot(base, vec))
}

Vec.projectPerpendicular = (base, vec) => {
    return Vec.sub(vec, Vec.projectParallel(base, vec))
}

Vec.cross = (vec1, vec2) => {
    return Vec(vec1.y * vec2.z - vec1.z * vec2.y,
               vec1.z * vec2.x - vec1.x * vec2.z,
               vec1.x * vec2.y - vec1.y * vec2.x)
}

Vec.triple = (vec1, vec2, vec3) => Vec.dot(vec1, Vec.cross(vec2, vec3))