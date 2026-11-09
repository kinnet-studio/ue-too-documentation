[@ue-too/board](../globals.md) / restrictRotateByHandler

# Function: restrictRotateByHandler()

> **restrictRotateByHandler**(`delta`, `camera`, `config`): `number`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:288](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/rotation-handler.ts#L288)

Handler pipeline step that prevents "rotate by" operations when rotation is locked.

## Parameters

### delta

`number`

Rotation angle change in radians

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`RotationHandlerRestrictConfig`](../type-aliases/RotationHandlerRestrictConfig.md)

Restriction configuration

## Returns

`number`

Zero (if locked) or delta (if unlocked)

## Remarks

This handler implements a global rotation lock for relative rotation operations.

Behavior:
- If `restrictRotation` is true: Returns 0 (prevents any change)
- If `restrictRotation` is false: Returns delta unchanged

## Example

```typescript
const config: RotationHandlerRestrictConfig = {
  restrictRotation: true  // Lock rotation
};

const delta = Math.PI / 4;  // Try to rotate 45 degrees
const result = restrictRotateByHandler(delta, camera, config);
// result = 0 (rotation locked, no change allowed)
```

## See

[createDefaultRotateByHandler](createDefaultRotateByHandler.md) for default pipeline usage
