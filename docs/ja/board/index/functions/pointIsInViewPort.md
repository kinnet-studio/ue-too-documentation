[@ue-too/board](../../modules.md) / [index](../index.md) / pointIsInViewPort

# 関数: pointIsInViewPort()

> **pointIsInViewPort**(`point`, `viewPortWidth`, `viewPortHeight`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `boolean`

定義: [packages/board/src/camera/utils/coordinate-conversion.ts:314](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/coordinate-conversion.ts#L314)

Checks if a world point is currently visible in the viewport.

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

`boolean`

True if point is visible in viewport, false otherwise

## Remarks

A point is visible if it falls within the rectangular viewport bounds.
This uses canvas coordinates for the visibility check (0 to width/height).

## 例

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
