[@ue-too/board](../globals.md) / convert2WorldSpaceAnchorAtCenter

# Function: convert2WorldSpaceAnchorAtCenter()

> **convert2WorldSpaceAnchorAtCenter**(`point`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:166](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/coordinate-conversion.ts#L166)

Converts a viewport point (center-anchored) to world space.
This is the most commonly used viewport-to-world conversion function.

## Parameters

### point

`Point`

Point in viewport coordinates (origin at viewport center)

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

`Point`

World space coordinates of the point

## Remarks

Viewport coordinates have the origin at the center of the viewport, with:
- Positive x to the right
- Positive y upward
- Point (0, 0) is the center of the viewport

This is the standard coordinate system for camera operations.

## Example

```typescript
// Convert viewport center (0,0) to world space
const worldCenter = convert2WorldSpaceAnchorAtCenter(
  { x: 0, y: 0 },
  { x: 500, y: 300 },  // camera at world (500, 300)
  1.0,
  0
);
// worldCenter will be { x: 500, y: 300 }

// Convert point 100 pixels right of center
const rightPoint = convert2WorldSpaceAnchorAtCenter(
  { x: 100, y: 0 },
  { x: 500, y: 300 },
  2.0,  // 2x zoom
  0
);
// At 2x zoom, 100 viewport pixels = 50 world units
// Result: { x: 550, y: 300 }
```
