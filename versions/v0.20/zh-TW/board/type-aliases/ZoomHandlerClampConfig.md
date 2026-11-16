[@ue-too/board](../globals.md) / ZoomHandlerClampConfig

# Type Alias: ZoomHandlerClampConfig

> **ZoomHandlerClampConfig** = `object`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:44](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/zoom-handler.ts#L44)

Configuration for zoom level boundary clamping.

## Remarks

Controls whether zoom operations should be constrained to camera's zoom boundaries.

When `clampZoom` is true, zoom handlers enforce [BoardCamera.zoomBoundaries](../interfaces/ObservableBoardCamera.md#zoomboundaries)
limits (min/max zoom levels). When false, zoom can exceed configured boundaries.

## Example

```typescript
const config: ZoomHandlerClampConfig = {
  clampZoom: true  // Enforce zoom boundaries
};

camera.zoomBoundaries = { min: 0.5, max: 4.0 };
// Zoom will be clamped to [0.5, 4.0] range
```

## Properties

### clampZoom

> **clampZoom**: `boolean`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:48](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/zoom-handler.ts#L48)

Whether to enforce zoom level boundaries.
