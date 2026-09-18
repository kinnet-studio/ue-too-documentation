[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultZoomByOnlyHandler

# 関数: createDefaultZoomByOnlyHandler()

> **createDefaultZoomByOnlyHandler**(): [`ZoomByHandlerFunction`](../type-aliases/ZoomByHandlerFunction.md)

定義: [packages/board/src/camera/camera-rig/zoom-handler.ts:480](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-rig/zoom-handler.ts#L480)

Creates a default "zoom by" handler pipeline for relative zoom operations.

## 戻り値

[`ZoomByHandlerFunction`](../type-aliases/ZoomByHandlerFunction.md)

Zoom-by handler function with clamping and restriction

## Remarks

The default handler pipeline applies transformations in this order:
1. **Clamping** ([clampZoomByHandler](clampZoomByHandler.md)): Adjusts delta to respect boundaries
2. **Restriction** ([restrictZoomByHandler](restrictZoomByHandler.md)): Returns zero delta if locked

This ensures that:
- Resulting zoom level stays within configured min/max boundaries
- Zoom can be completely disabled via `restrictZoom` flag
- Delta is adjusted to prevent boundary violations

The pipeline is specifically for zoom operations without pan compensation.
For zoom-at-point operations, use [DefaultCameraRig.zoomByAt](../classes/DefaultCameraRig.md#zoombyat) which combines
zoom and pan handlers.

## Examples

```typescript
const zoomBy = createDefaultZoomByOnlyHandler();

camera.zoomLevel = 3.5;
camera.zoomBoundaries = { max: 4.0 };

// Use in camera rig
const delta = 1.0;  // Would exceed max
const constrained = zoomBy(delta, camera, {
  clampZoom: true,
  restrictZoom: false
});
// constrained = 0.5 (adjusted to reach boundary exactly)
camera.setZoomLevel(camera.zoomLevel + constrained);
```

```typescript
// Create custom pipeline with dampening
const dampenedZoomBy = createHandlerChain<number, [BoardCamera, ZoomHandlerConfig]>(
  (delta) => delta * 0.7,   // 30% dampening
  clampZoomByHandler,       // From default
  restrictZoomByHandler     // From default
);
```

## 参照

 - [createHandlerChain](createHandlerChain.md) for creating custom handler pipelines
 - [clampZoomByHandler](clampZoomByHandler.md) for the clamping step
 - [restrictZoomByHandler](restrictZoomByHandler.md) for the restriction step
