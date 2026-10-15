[@ue-too/board](../globals.md) / convert2WorldSpace

# Function: convert2WorldSpace()

> **convert2WorldSpace**(`point`, `viewPortWidth`, `viewPortHeight`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:102](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/coordinate-conversion.ts#L102)

Converts a canvas point to world space using current camera state.

## Parameters

### point

`Point`

Point in canvas coordinates (origin at bottom-left)

### viewPortWidth

`number`

Viewport width in CSS pixels

### viewPortHeight

`number`

Viewport height in CSS pixels

### cameraPosition

`Point`

Current camera position in world coordinates

### cameraZoomLevel

`number`

Current camera zoom level

### cameraRotation

`number`

Current camera rotation in radians

## Returns

`Point`

World space coordinates of the point

## Remarks

Input coordinates use canvas space with origin at bottom-left.
This is useful when working with canvas element coordinates directly.

For points already in viewport space (origin at center), use
[convert2WorldSpaceAnchorAtCenter](convert2WorldSpaceAnchorAtCenter.md) instead.

## Example

```typescript
// Convert bottom-left corner of canvas to world coords
const worldPos = convert2WorldSpace(
  { x: 0, y: 0 },
  1920, 1080,
  { x: 100, y: 200 },  // camera position
  1.5,                  // zoom
  0                     // rotation
);
```
