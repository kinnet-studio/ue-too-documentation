[@ue-too/board](../globals.md) / clampRotateToHandler

# Function: clampRotateToHandler()

> **clampRotateToHandler**(`targetRotation`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:336](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/rotation-handler.ts#L336)

Handler pipeline step that clamps "rotate to" targets to camera rotation boundaries.

## Parameters

### targetRotation

`number`

Target rotation angle in radians

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides rotationBoundaries)

### config

[`RotationHandlerClampConfig`](../type-aliases/RotationHandlerClampConfig.md)

Clamping configuration

## Returns

`number`

Clamped rotation angle

## Remarks

This handler enforces angular limits on absolute rotation requests.

Behavior:
- If `clampRotation` is false: Returns target unchanged
- If `clampRotation` is true: Clamps target to [BoardCamera.rotationBoundaries](../interfaces/ObservableBoardCamera.md#rotationboundaries)

The clamping handles:
- Missing boundaries (undefined min/max)
- One-sided constraints (only min or only max)
- Full range constraints

## Example

```typescript
camera.rotationBoundaries = { min: 0, max: Math.PI };  // [0°, 180°]

const config: RotationHandlerClampConfig = {
  clampRotation: true
};

const target = Math.PI * 1.5;  // 270 degrees (exceeds max)
const clamped = clampRotateToHandler(target, camera, config);
// clamped = π (180 degrees - clamped to max boundary)
```

## See

 - [clampRotation](clampRotation.md) for clamping implementation
 - [createDefaultRotateToHandler](createDefaultRotateToHandler.md) for default pipeline usage
