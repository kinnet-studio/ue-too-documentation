[@ue-too/board](../globals.md) / cameraPositionToGet

# Function: cameraPositionToGet()

> **cameraPositionToGet**(`pointInWorld`, `toPointInViewPort`, `cameraZoomLevel`, `cameraRotation`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:468](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/coordinate-conversion.ts#L468)

Calculates the camera position needed to place a world point at a specific viewport location.
Useful for implementing "zoom to point" or "focus on object" features.

## Parameters

### pointInWorld

`Point`

The world point to focus on

### toPointInViewPort

`Point`

Where in the viewport this point should appear (origin at center)

### cameraZoomLevel

`number`

Target zoom level

### cameraRotation

`number`

Target rotation in radians

## Returns

`Point`

Camera position that achieves the desired framing

## Remarks

This is particularly useful for:
- Zoom-to-cursor: Make clicked point stay under cursor while zooming
- Pan-and-zoom: Smoothly navigate to show a specific object
- Focus features: Center camera on a world object

The viewport point is in viewport coordinates (center origin).
To center on a world point, use toPointInViewPort = {x: 0, y: 0}.

## Example

```typescript
// Center camera on world point (1000, 500)
const newCameraPos = cameraPositionToGet(
  { x: 1000, y: 500 },  // world point to focus on
  { x: 0, y: 0 },        // center of viewport
  2.0,                   // zoom level
  0                      // rotation
);
camera.setPosition(newCameraPos);

// Zoom to cursor position
// Keep world point under cursor at (viewportX, viewportY)
const cursorViewport = {
  x: mouseX - canvas.width/2,
  y: mouseY - canvas.height/2
};
const worldAtCursor = camera.convertFromViewPort2WorldSpace(cursorViewport);
const newPos = cameraPositionToGet(worldAtCursor, cursorViewport, newZoom, rotation);
camera.setPosition(newPos);
camera.setZoomLevel(newZoom);
```
