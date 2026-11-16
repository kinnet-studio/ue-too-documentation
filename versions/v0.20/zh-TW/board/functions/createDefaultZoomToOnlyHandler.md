[@ue-too/board](../globals.md) / createDefaultZoomToOnlyHandler

# Function: createDefaultZoomToOnlyHandler()

> **createDefaultZoomToOnlyHandler**(): [`ZoomToHandlerFunction`](../type-aliases/ZoomToHandlerFunction.md)

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:422](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/zoom-handler.ts#L422)

Creates a default "zoom to" handler pipeline for absolute zoom operations.

## Returns

[`ZoomToHandlerFunction`](../type-aliases/ZoomToHandlerFunction.md)

Zoom-to handler function with clamping and restriction

## Remarks

The default handler pipeline applies transformations in this order:
1. **Clamping** ([clampZoomToHandler](clampZoomToHandler.md)): Clamps zoom to configured boundaries
2. **Restriction** ([restrictZoomToHandler](restrictZoomToHandler.md)): Prevents zoom if locked

This ensures that:
- Zoom level stays within configured min/max boundaries
- Zoom can be completely disabled via `restrictZoom` flag

The pipeline is specifically for zoom operations without pan compensation.
For zoom-at-point operations, use [DefaultCameraRig.zoomToAt](../classes/DefaultCameraRig.md#zoomtoat) which combines
zoom and pan handlers.

## Examples

```typescript
const zoomTo = createDefaultZoomToOnlyHandler();

camera.zoomBoundaries = { min: 0.5, max: 4.0 };

// Use in camera rig
const target = 5.0;  // Exceeds max
const constrained = zoomTo(target, camera, {
  clampZoom: true,
  restrictZoom: false
});
// constrained = 4.0 (clamped to max boundary)
camera.setZoomLevel(constrained);
```

```typescript
// Create custom pipeline
const customZoomTo = createHandlerChain<number, [BoardCamera, ZoomHandlerConfig]>(
  clampZoomToHandler,       // From default
  myCustomZoomHandler,      // Your custom logic
  restrictZoomToHandler     // From default
);
```

## See

 - [createHandlerChain](createHandlerChain.md) for creating custom handler pipelines
 - [clampZoomToHandler](clampZoomToHandler.md) for the clamping step
 - [restrictZoomToHandler](restrictZoomToHandler.md) for the restriction step
