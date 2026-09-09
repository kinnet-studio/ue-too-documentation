[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomHandlerRestrictConfig

# 型別別名: ZoomHandlerRestrictConfig

> **ZoomHandlerRestrictConfig** = `object`

定義於: [packages/board/src/camera/camera-rig/zoom-handler.ts:77](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-rig/zoom-handler.ts#L77)

Configuration for completely disabling zoom operations.

## 備註

Provides a global "zoom lock" to prevent any zoom changes.

When `restrictZoom` is true:
- Zoom-to operations return current zoom level (no change)
- Zoom-by operations return zero delta (no change)

This is useful for:
- Locking zoom during specific application states
- Fixed-zoom viewing modes
- Preventing user zoom in certain contexts

## 範例

```typescript
const config: ZoomHandlerRestrictConfig = {
  restrictZoom: true  // Disable all zoom operations
};

// Any zoom attempt will be ignored
```

## 屬性

### restrictZoom

> **restrictZoom**: `boolean`

定義於: [packages/board/src/camera/camera-rig/zoom-handler.ts:81](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-rig/zoom-handler.ts#L81)

Whether to completely prevent zoom operations.
