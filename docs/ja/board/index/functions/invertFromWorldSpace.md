[@ue-too/board](../../modules.md) / [index](../index.md) / invertFromWorldSpace

# 関数: invertFromWorldSpace()

> **invertFromWorldSpace**(`point`, `viewPortWidth`, `viewPortHeight`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `Point`

定義: [packages/board/src/camera/utils/coordinate-conversion.ts:263](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/utils/coordinate-conversion.ts#L263)

Converts a world point to canvas coordinates (bottom-left origin).

## パラメータ

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

## 戻り値

`Point`

Canvas coordinates (origin at bottom-left, in CSS pixels)

## Remarks

"Invert" in the function name refers to inverting the forward transformation
(world → viewport → canvas). The result uses canvas coordinates where:
- (0, 0) is at the bottom-left corner
- x increases to the right
- y increases upward

## 例

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
