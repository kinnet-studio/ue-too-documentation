[@ue-too/board](../../modules.md) / [index](../index.md) / restrictRotateByHandler

# 関数: restrictRotateByHandler()

> **restrictRotateByHandler**(`delta`, `camera`, `config`): `number`

定義: [packages/board/src/camera/camera-rig/rotation-handler.ts:288](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/rotation-handler.ts#L288)

Handler pipeline step that prevents "rotate by" operations when rotation is locked.

## パラメータ

### delta

`number`

Rotation angle change in radians

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`RotationHandlerRestrictConfig`](../type-aliases/RotationHandlerRestrictConfig.md)

Restriction configuration

## 戻り値

`number`

Zero (if locked) or delta (if unlocked)

## Remarks

This handler implements a global rotation lock for relative rotation operations.

Behavior:
- If `restrictRotation` is true: Returns 0 (prevents any change)
- If `restrictRotation` is false: Returns delta unchanged

## 例

```typescript
const config: RotationHandlerRestrictConfig = {
  restrictRotation: true  // Lock rotation
};

const delta = Math.PI / 4;  // Try to rotate 45 degrees
const result = restrictRotateByHandler(delta, camera, config);
// result = 0 (rotation locked, no change allowed)
```

## 参照

[createDefaultRotateByHandler](createDefaultRotateByHandler.md) for default pipeline usage
