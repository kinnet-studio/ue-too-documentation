[@ue-too/board](../../modules.md) / [index](../index.md) / clampPointEntireViewPort

# 関数: clampPointEntireViewPort()

> **clampPointEntireViewPort**(`point`, `viewPortWidth`, `viewPortHeight`, `boundaries`, `cameraZoomLevel`, `cameraRotation`): `Point`

定義: [packages/board/src/camera/utils/position.ts:456](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/position.ts#L456)

Clamps camera position to ensure the entire viewport stays within boundaries.
More restrictive than [clampPoint](clampPoint.md) as it considers viewport size and rotation.

## パラメータ

### point

`Point`

Proposed camera position in world coordinates

### viewPortWidth

`number`

Width of the viewport in CSS pixels

### viewPortHeight

`number`

Height of the viewport in CSS pixels

### boundaries

Optional boundary constraints in world space

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

### cameraZoomLevel

`number`

Current camera zoom level

### cameraRotation

`number`

Current camera rotation in radians

## 戻り値

`Point`

Adjusted camera position that keeps entire viewport within boundaries

## Remarks

This function ensures no part of the viewport extends outside the boundaries.
It accounts for:
- Viewport dimensions (width/height)
- Camera rotation (viewport corners rotate around camera center)
- Zoom level (affects world-space size of viewport)

The algorithm:
1. Calculates all four viewport corners in world space
2. Clamps each corner to boundaries
3. Finds the maximum displacement needed across all corners
4. Adjusts camera position by that displacement

Use this for "edge-stop" behavior where viewport cannot scroll past boundaries.
For "center-stop" behavior, use [clampPoint](clampPoint.md) instead.

## 例

```typescript
const bounds: Boundaries = {
  min: { x: 0, y: 0 },
  max: { x: 1000, y: 1000 }
};

// Camera at center of bounds, viewport extends outside
const adjusted = clampPointEntireViewPort(
  { x: 100, y: 100 },  // camera position
  800, 600,             // viewport size
  bounds,
  1.0,                  // zoom
  0                     // rotation
);
// Returns position that prevents viewport from exceeding bounds
```

## 参照

[clampPoint](clampPoint.md) for clamping camera center only
