[@ue-too/board](../globals.md) / clampToHandler

# Function: clampToHandler()

> **clampToHandler**(`destination`, `camera`, `config`): `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:467](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/pan-handler.ts#L467)

Handler pipeline step that clamps "pan to" destinations to camera boundaries.

## Parameters

### destination

`Point`

Target camera position in world space

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides boundaries and viewport dimensions)

### config

[`PanHandlerClampConfig`](../type-aliases/PanHandlerClampConfig.md)

Clamping configuration

## Returns

`Point`

Clamped destination position

## Remarks

This handler enforces boundary constraints on absolute camera positioning.
Behavior depends on configuration:

- If `clampTranslation` is false: Returns destination unchanged (no clamping)
- If `limitEntireViewPort` is false: Clamps camera center to boundaries
- If `limitEntireViewPort` is true: Ensures entire viewport rectangle stays in bounds

The entire-viewport mode accounts for:
- Viewport dimensions (width/height)
- Current zoom level (affects viewport size in world space)
- Camera rotation (affects viewport orientation)

Can be used standalone, but typically composed into a handler pipeline via
[createDefaultPanToHandler](createDefaultPanToHandler.md) or [createHandlerChain](createHandlerChain.md).

## Example

```typescript
// Standalone usage - ensure entire viewport stays in bounds
camera.boundaries = {
  min: { x: 0, y: 0 },
  max: { x: 2000, y: 1000 }
};

const config: PanHandlerClampConfig = {
  clampTranslation: true,
  limitEntireViewPort: true
};

const destination = { x: 2500, y: 500 };  // Outside bounds
const clamped = clampToHandler(destination, camera, config);
// Result keeps entire viewport within [0,0] to [2000,1000]
```

## See

 - [clampPoint](clampPoint.md) for center-point clamping
 - [clampPointEntireViewPort](clampPointEntireViewPort.md) for full-viewport clamping
 - [createDefaultPanToHandler](createDefaultPanToHandler.md) for default pipeline usage
