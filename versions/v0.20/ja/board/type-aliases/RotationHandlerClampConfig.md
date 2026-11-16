[@ue-too/board](../globals.md) / RotationHandlerClampConfig

# Type Alias: RotationHandlerClampConfig

> **RotationHandlerClampConfig** = `object`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:89](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/rotation-handler.ts#L89)

Configuration for rotation angle boundary clamping.

## Remarks

Controls whether rotation operations should be constrained to camera's rotation boundaries.

When `clampRotation` is true, rotation handlers enforce [BoardCamera.rotationBoundaries](../interfaces/ObservableBoardCamera.md#rotationboundaries)
limits (min/max angles in radians). When false, rotation can exceed configured boundaries.

Rotation boundaries allow limiting camera rotation to a specific angular range,
useful for scenarios like:
- Restricting rotation to ±45 degrees from north
- Allowing only certain cardinal directions
- Preventing full 360-degree rotation

## Example

```typescript
const config: RotationHandlerClampConfig = {
  clampRotation: true  // Enforce rotation boundaries
};

camera.rotationBoundaries = { min: 0, max: Math.PI / 2 };
// Rotation clamped to [0, 90 degrees] range
```

## Properties

### clampRotation

> **clampRotation**: `boolean`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:93](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/rotation-handler.ts#L93)

Whether to enforce rotation angle boundaries.
