[@ue-too/board](../globals.md) / pointIsInViewPort

# Function: pointIsInViewPort()

> **pointIsInViewPort**(`point`, `viewPortWidth`, `viewPortHeight`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `boolean`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:314](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/coordinate-conversion.ts#L314)

Checks if a world point is currently visible in the viewport.

## Parameters

### point

`Point`

Point in world coordinates

### viewPortWidth

`number`

Viewport width in CSS pixels

### viewPortHeight

`number`

Viewport height in CSS pixels

### cameraPosition

`Point`

Camera position in world coordinates

### cameraZoomLevel

`number`

Camera zoom level

### cameraRotation

`number`

Camera rotation in radians

## Returns

`boolean`

True if point is visible in viewport, false otherwise

## Remarks

A point is visible if it falls within the rectangular viewport bounds.
This uses canvas coordinates for the visibility check (0 to width/height).

## Example

```typescript
const isVisible = pointIsInViewPort(
  { x: 550, y: 300 },  // world point
  1920, 1080,
  { x: 500, y: 300 },  // camera position
  1.0,
  0
);
// Returns true if point is within viewport bounds
```
