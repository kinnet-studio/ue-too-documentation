[@ue-too/board](../../modules.md) / [index](../index.md) / RotationHandlerRestrictConfig

# 型エイリアス: RotationHandlerRestrictConfig

> **RotationHandlerRestrictConfig** = `object`

定義: [packages/board/src/camera/camera-rig/rotation-handler.ts:55](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/rotation-handler.ts#L55)

Configuration for completely disabling rotation operations.

## Remarks

Provides a global "rotation lock" to prevent any rotation changes.

When `restrictRotation` is true:
- Rotate-to operations return current rotation (no change)
- Rotate-by operations return zero delta (no change)

This is useful for:
- Locking rotation during specific application states
- Fixed-orientation viewing modes (north-up maps, etc.)
- Preventing user rotation in certain contexts

## 例

```typescript
const config: RotationHandlerRestrictConfig = {
  restrictRotation: true  // Lock rotation
};

// Any rotation attempt will be ignored
```

## プロパティ

### restrictRotation

> **restrictRotation**: `boolean`

定義: [packages/board/src/camera/camera-rig/rotation-handler.ts:59](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/rotation-handler.ts#L59)

Whether to completely prevent rotation operations.
