[@ue-too/board](../../modules.md) / [index](../index.md) / RotationHandlerRestrictConfig

# Type Alias: RotationHandlerRestrictConfig

> **RotationHandlerRestrictConfig** = `object`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:55](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/rotation-handler.ts#L55)

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

## Example

```typescript
const config: RotationHandlerRestrictConfig = {
  restrictRotation: true  // Lock rotation
};

// Any rotation attempt will be ignored
```

## Properties

### restrictRotation

> **restrictRotation**: `boolean`

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:59](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/rotation-handler.ts#L59)

Whether to completely prevent rotation operations.
