[@ue-too/board](../../modules.md) / [index](../index.md) / restrictRotateByHandler

# 函式: restrictRotateByHandler()

> **restrictRotateByHandler**(`delta`, `camera`, `config`): `number`

定義於: [packages/board/src/camera/camera-rig/rotation-handler.ts:288](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-rig/rotation-handler.ts#L288)

Handler pipeline step that prevents "rotate by" operations when rotation is locked.

## 參數

### delta

`number`

Rotation angle change in radians

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`RotationHandlerRestrictConfig`](../type-aliases/RotationHandlerRestrictConfig.md)

Restriction configuration

## 回傳

`number`

Zero (if locked) or delta (if unlocked)

## 備註

This handler implements a global rotation lock for relative rotation operations.

Behavior:
- If `restrictRotation` is true: Returns 0 (prevents any change)
- If `restrictRotation` is false: Returns delta unchanged

## 範例

```typescript
const config: RotationHandlerRestrictConfig = {
  restrictRotation: true  // Lock rotation
};

const delta = Math.PI / 4;  // Try to rotate 45 degrees
const result = restrictRotateByHandler(delta, camera, config);
// result = 0 (rotation locked, no change allowed)
```

## 參閱

[createDefaultRotateByHandler](createDefaultRotateByHandler.md) for default pipeline usage
