[@ue-too/board](../globals.md) / clampZoomByHandler

# Function: clampZoomByHandler()

> **clampZoomByHandler**(`delta`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:261](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/zoom-handler.ts#L261)

Handler pipeline step that clamps "zoom by" deltas to prevent boundary violations.

## Parameters

### delta

`number`

Zoom level change

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides current zoom and boundaries)

### config

[`ZoomHandlerClampConfig`](../type-aliases/ZoomHandlerClampConfig.md)

Clamping configuration

## Returns

`number`

Adjusted delta that respects zoom boundaries

## Remarks

This handler ensures that applying the delta won't exceed zoom boundaries.

Algorithm:
1. Calculate potential new zoom level (current + delta)
2. Clamp that level to boundaries
3. Return the difference (clamped - current) as the new delta

Behavior:
- If `clampZoom` is false: Returns delta unchanged
- If `clampZoom` is true: Adjusts delta to stay within boundaries

The resulting delta may be zero if already at a boundary and trying to zoom further.

Can be used standalone, but typically composed into a handler pipeline via
[createDefaultZoomByOnlyHandler](createDefaultZoomByOnlyHandler.md) or [createHandlerChain](createHandlerChain.md).

## Example

```typescript
camera.zoomLevel = 2.8;
camera.zoomBoundaries = { max: 3.0 };

const config: ZoomHandlerClampConfig = {
  clampZoom: true
};

const delta = 0.5;  // Would exceed max
const clamped = clampZoomByHandler(delta, camera, config);
// clamped = 0.2 (only zoom to boundary, not beyond)
```

## See

 - [clampZoomLevel](clampZoomLevel.md) for clamping implementation
 - [createDefaultZoomByOnlyHandler](createDefaultZoomByOnlyHandler.md) for default pipeline usage
