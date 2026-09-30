[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomHandlerRestrictConfig

# 型エイリアス: ZoomHandlerRestrictConfig

> **ZoomHandlerRestrictConfig** = `object`

定義: [packages/board/src/camera/camera-rig/zoom-handler.ts:77](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/zoom-handler.ts#L77)

Configuration for completely disabling zoom operations.

## Remarks

Provides a global "zoom lock" to prevent any zoom changes.

When `restrictZoom` is true:
- Zoom-to operations return current zoom level (no change)
- Zoom-by operations return zero delta (no change)

This is useful for:
- Locking zoom during specific application states
- Fixed-zoom viewing modes
- Preventing user zoom in certain contexts

## 例

```typescript
const config: ZoomHandlerRestrictConfig = {
  restrictZoom: true  // Disable all zoom operations
};

// Any zoom attempt will be ignored
```

## プロパティ

### restrictZoom

> **restrictZoom**: `boolean`

定義: [packages/board/src/camera/camera-rig/zoom-handler.ts:81](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/zoom-handler.ts#L81)

Whether to completely prevent zoom operations.
