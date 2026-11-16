[@ue-too/board](../globals.md) / minZoomLevelBaseOnWidth

# Function: minZoomLevelBaseOnWidth()

> **minZoomLevelBaseOnWidth**(`boundaries`, `canvasWidth`, `canvasHeight`, `cameraRotation`): `number` \| `undefined`

Defined in: [packages/board/src/utils/zoomlevel-adjustment.ts:202](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/zoomlevel-adjustment.ts#L202)

Calculates minimum zoom level based only on boundary width.

## Parameters

### boundaries

The world-space boundaries

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

Minimum zoom level, or undefined if width is not defined

## Remarks

Similar to [minZoomLevelBaseOnDimensions](minZoomLevelBaseOnDimensions.md) but only considers the
width constraint. Useful when height is unbounded or not relevant.

Calculates zoom needed to fit the boundary width within the canvas,
accounting for rotation:
- Width projection on canvas X-axis: `width * cos(rotation)`
- Width projection on canvas Y-axis: `width * sin(rotation)`

Takes the maximum of these to ensure the width fits regardless of
how rotation distributes it across canvas axes.

## Example

```typescript
const boundaries = {
  min: { x: 0 },
  max: { x: 1000 }
};

const zoom = minZoomLevelBaseOnWidth(boundaries, 800, 600, 0);
// Result: 0.8 (800/1000)
```

## See

[minZoomLevelBaseOnDimensions](minZoomLevelBaseOnDimensions.md) for full calculation
