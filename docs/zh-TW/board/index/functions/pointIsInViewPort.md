[@ue-too/board](../../modules.md) / [index](../index.md) / pointIsInViewPort

# 函式: pointIsInViewPort()

> **pointIsInViewPort**(`point`, `viewPortWidth`, `viewPortHeight`, `cameraPosition`, `cameraZoomLevel`, `cameraRotation`): `boolean`

定義於: [packages/board/src/camera/utils/coordinate-conversion.ts:314](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/utils/coordinate-conversion.ts#L314)

Checks if a world point is currently visible in the viewport.

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

`boolean`

True if point is visible in viewport, false otherwise

## 備註

A point is visible if it falls within the rectangular viewport bounds.
This uses canvas coordinates for the visibility check (0 to width/height).

## 範例

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
