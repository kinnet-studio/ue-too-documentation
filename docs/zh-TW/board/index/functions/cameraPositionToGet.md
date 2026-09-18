[@ue-too/board](../../modules.md) / [index](../index.md) / cameraPositionToGet

# 函式: cameraPositionToGet()

> **cameraPositionToGet**(`pointInWorld`, `toPointInViewPort`, `cameraZoomLevel`, `cameraRotation`): `Point`

定義於: [packages/board/src/camera/utils/coordinate-conversion.ts:468](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/utils/coordinate-conversion.ts#L468)

Calculates the camera position needed to place a world point at a specific viewport location.
Useful for implementing "zoom to point" or "focus on object" features.

## 參數

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

## 回傳

`Point`

Camera position that achieves the desired framing

## 備註

This is particularly useful for:
- Zoom-to-cursor: Make clicked point stay under cursor while zooming
- Pan-and-zoom: Smoothly navigate to show a specific object
- Focus features: Center camera on a world object

The viewport point is in viewport coordinates (center origin).
To center on a world point, use toPointInViewPort = {x: 0, y: 0}.

## 範例

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
