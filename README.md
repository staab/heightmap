- Layers of resoultion x10
- Layer attributes - certain ones override, other ones merge.
    - E.g., low resolution specifies area as wasteland, higher resolution specifies subset of area as swamp; it should be tundra-y swamp.
    - Eventually we'll want models placed on the map
- Figure out a better camera so it's easier to move around. Add basic collision detection to keep it above ground.
- Define biomes
    - Color related to elevation or features
    - Elevation characteristics
- Apply vectors of biomes with stroke width and jitter to build maps
    + Use a single vector as the path of a feature, like mountains (or a series of vectors). Map that vector to a path of the closest points on the map in 2d space, jitter it to start with, draw a rectangle around it at brush width distance (with pointed ends at each extreme end). Starting at the point just beyond one end of the vector, do a weighted average between the closest vector point and the closest point of the bounding rectangle (e.g., height on vector is 10, height on rectangle is one, brush stroke is 5, would be avg(10, 10, 10, 10, 10, 1)), add jitter, and set the height (and color, etc) to that value. From this point, iterate over the heightmap around the original vector, spiraling outwards, adding the previous point calculated into the average. Reduce jitter as you near the outer edge of the brush stroke.
    + Project upper layers onto lower layers by setting each point of the subset view of the upper layer to the corresponding point below. Interpolate between each lower point in lines first, then fill out the space within the created grid.