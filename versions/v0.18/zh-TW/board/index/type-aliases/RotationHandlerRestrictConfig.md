[@ue-too/board](../../modules.md) / [index](../index.md) / RotationHandlerRestrictConfig

# 型別別名: RotationHandlerRestrictConfig

> **RotationHandlerRestrictConfig** = `object`

定義於: [packages/board/src/camera/camera-rig/rotation-handler.ts:55](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-rig/rotation-handler.ts#L55)

Configuration for completely disabling rotation operations.

## 備註

Provides a global "rotation lock" to prevent any rotation changes.

When `restrictRotation` is true:
- Rotate-to operations return current rotation (no change)
- Rotate-by operations return zero delta (no change)

This is useful for:
- Locking rotation during specific application states
- Fixed-orientation viewing modes (north-up maps, etc.)
- Preventing user rotation in certain contexts

## 範例

```typescript
const config: RotationHandlerRestrictConfig = {
  restrictRotation: true  // Lock rotation
};

// Any rotation attempt will be ignored
```

## 屬性

### restrictRotation

> **restrictRotation**: `boolean`

定義於: [packages/board/src/camera/camera-rig/rotation-handler.ts:59](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-rig/rotation-handler.ts#L59)

Whether to completely prevent rotation operations.
