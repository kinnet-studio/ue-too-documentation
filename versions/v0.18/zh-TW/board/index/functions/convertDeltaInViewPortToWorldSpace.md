[@ue-too/board](../../modules.md) / [index](../index.md) / convertDeltaInViewPortToWorldSpace

# 函式: convertDeltaInViewPortToWorldSpace()

> **convertDeltaInViewPortToWorldSpace**(`delta`, `cameraZoomLevel`, `cameraRotation`): `Point`

定義於: [packages/board/src/camera/utils/coordinate-conversion.ts:372](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/utils/coordinate-conversion.ts#L372)

Converts a displacement vector from viewport space to world space.
Use this for converting movement deltas, not absolute positions.

## 參數

### delta

`Point`

Displacement vector in viewport space (CSS pixels)

### cameraZoomLevel

`number`

Camera zoom level

### cameraRotation

`number`

Camera rotation in radians

## 回傳

`Point`

Displacement vector in world coordinates

## 備註

This transforms a *relative* displacement, not an absolute point.
The conversion accounts for:
- Rotation: Delta is rotated by camera rotation
- Zoom: Delta is scaled by 1/zoom (viewport pixels → world units)

Note: Camera position is NOT needed for delta transformations.

## 範例

```typescript
// User dragged 100 pixels to the right in viewport
const viewportDelta = { x: 100, y: 0 };
const worldDelta = convertDeltaInViewPortToWorldSpace(
  viewportDelta,
  2.0,  // 2x zoom
  0     // no rotation
);
// Result: { x: 50, y: 0 } (100 viewport pixels = 50 world units at 2x zoom)
```
