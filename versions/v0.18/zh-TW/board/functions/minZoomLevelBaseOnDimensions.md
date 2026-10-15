[@ue-too/board](../globals.md) / minZoomLevelBaseOnDimensions

# Function: minZoomLevelBaseOnDimensions()

> **minZoomLevelBaseOnDimensions**(`boundaries`, `canvasWidth`, `canvasHeight`, `cameraRotation`): `number` \| `undefined`

Defined in: [packages/board/src/utils/zoomlevel-adjustment.ts:57](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/zoomlevel-adjustment.ts#L57)

Calculates minimum zoom level to fit boundaries within canvas at any rotation.

## Parameters

### boundaries

The world-space boundaries to fit

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

### canvasWidth

`number`

Canvas width in pixels

### canvasHeight

`number`

Canvas height in pixels

### cameraRotation

`number`

Camera rotation angle in radians

## Returns

`number` \| `undefined`

Minimum zoom level, or undefined if boundaries are incomplete

## Remarks

This function ensures the entire boundary region remains visible regardless
of camera rotation. It considers both width and height projections of the
rotated boundaries.

When boundaries are rotated, they occupy a larger axis-aligned bounding box.
This function calculates the minimum zoom needed to fit that box:

For each dimension (width/height):
1. Project boundary width onto canvas width axis: `width * cos(rotation)`
2. Project boundary height onto canvas width axis: `height * cos(rotation)`
3. Calculate zoom needed for each projection
4. Take the maximum of all zoom levels

Returns undefined if boundaries don't have both width and height defined.

Used when canvas is resized to automatically adjust zoom to keep content visible.

## Example

```typescript
const boundaries = {
  min: { x: 0, y: 0 },
  max: { x: 1000, y: 500 }
};

// No rotation, 800x600 canvas
const zoom1 = minZoomLevelBaseOnDimensions(boundaries, 800, 600, 0);
// Result: 1.2 (600/500, height is limiting)

// 45 degree rotation
const zoom2 = minZoomLevelBaseOnDimensions(
  boundaries, 800, 600, Math.PI / 4
);
// Result: higher zoom (rotated bounds need more space)
```

## See

 - [minZoomLevelBaseOnWidth](minZoomLevelBaseOnWidth.md) for width-only calculation
 - [minZoomLevelBaseOnHeight](minZoomLevelBaseOnHeight.md) for height-only calculation
