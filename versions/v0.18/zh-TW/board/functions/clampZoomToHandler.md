[@ue-too/board](../globals.md) / clampZoomToHandler

# Function: clampZoomToHandler()

> **clampZoomToHandler**(`destination`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:207](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/zoom-handler.ts#L207)

Handler pipeline step that clamps "zoom to" targets to camera zoom boundaries.

## Parameters

### destination

`number`

Target zoom level

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides zoomBoundaries)

### config

[`ZoomHandlerClampConfig`](../type-aliases/ZoomHandlerClampConfig.md)

Clamping configuration

## Returns

`number`

Clamped zoom level

## Remarks

This handler enforces zoom level limits on absolute zoom requests.

Behavior:
- If `clampZoom` is false: Returns destination unchanged
- If `clampZoom` is true: Clamps destination to [BoardCamera.zoomBoundaries](../interfaces/ObservableBoardCamera.md#zoomboundaries) (min/max)

The clamping is performed by [clampZoomLevel](clampZoomLevel.md), which handles:
- Missing boundaries (undefined min/max)
- One-sided constraints (only min or only max)
- Full range constraints

Can be used standalone, but typically composed into a handler pipeline via
[createDefaultZoomToOnlyHandler](createDefaultZoomToOnlyHandler.md) or [createHandlerChain](createHandlerChain.md).

## Example

```typescript
camera.zoomBoundaries = { min: 0.5, max: 3.0 };

const config: ZoomHandlerClampConfig = {
  clampZoom: true
};

const target = 5.0;  // Exceeds max
const clamped = clampZoomToHandler(target, camera, config);
// clamped = 3.0 (clamped to max boundary)
```

## See

 - [clampZoomLevel](clampZoomLevel.md) for clamping implementation
 - [createDefaultZoomToOnlyHandler](createDefaultZoomToOnlyHandler.md) for default pipeline usage
