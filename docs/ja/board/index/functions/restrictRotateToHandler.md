[@ue-too/board](../../modules.md) / [index](../index.md) / restrictRotateToHandler

# 関数: restrictRotateToHandler()

> **restrictRotateToHandler**(`targetRotation`, `camera`, `config`): `number`

定義: [packages/board/src/camera/camera-rig/rotation-handler.ts:382](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-rig/rotation-handler.ts#L382)

Handler pipeline step that prevents "rotate to" operations when rotation is locked.

## パラメータ

### targetRotation

`number`

Target rotation angle in radians

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`RotationHandlerRestrictConfig`](../type-aliases/RotationHandlerRestrictConfig.md)

Restriction configuration

## 戻り値

`number`

Current rotation (if locked) or target (if unlocked)

## Remarks

This handler implements a global rotation lock for absolute rotation operations.

Behavior:
- If `restrictRotation` is true: Returns current rotation (prevents any change)
- If `restrictRotation` is false: Returns target unchanged

## 例

```typescript
camera.rotation = Math.PI / 2;  // Currently at 90 degrees

const config: RotationHandlerRestrictConfig = {
  restrictRotation: true  // Lock rotation
};

const target = Math.PI;  // Try to rotate to 180 degrees
const result = restrictRotateToHandler(target, camera, config);
// result = π/2 (rotation locked, returns current angle)
```

## 参照

[createDefaultRotateToHandler](createDefaultRotateToHandler.md) for default pipeline usage
