[@ue-too/board](../../modules.md) / [index](../index.md) / invertFromWorldSpace

# 函式: invertFromWorldSpace()

> **invertFromWorldSpace**(`point`, `viewPortWidth`, `viewPortHeight`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

定義於: [packages/board/src/camera/utils/coordinate-conversion.ts:263](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/utils/coordinate-conversion.ts#L263)

Converts a world point to canvas coordinates (bottom-left origin).

## 參數

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

## 回傳

`Point`

Canvas coordinates (origin at bottom-left, in CSS pixels)

## 備註

"Invert" in the function name refers to inverting the forward transformation
(world → viewport → canvas). The result uses canvas coordinates where:
- (0, 0) is at the bottom-left corner
- x increases to the right
- y increases upward

## 範例

```typescript
const canvasPos = invertFromWorldSpace(
  { x: 500, y: 300 },  // world position
  1920, 1080,
  { x: 500, y: 300 },  // camera at same position
  1.0,
  0
);
// Result: { x: 960, y: 540 } (center of 1920x1080 canvas)
```
