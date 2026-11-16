[@ue-too/board](../globals.md) / ZoomHandlerRestrictConfig

# Type Alias: ZoomHandlerRestrictConfig

> **ZoomHandlerRestrictConfig** = `object`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:77](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/zoom-handler.ts#L77)

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

## Example

```typescript
const config: ZoomHandlerRestrictConfig = {
  restrictZoom: true  // Disable all zoom operations
};

// Any zoom attempt will be ignored
```

## Properties

### restrictZoom

> **restrictZoom**: `boolean`

Defined in: [packages/board/src/camera/camera-rig/zoom-handler.ts:81](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/zoom-handler.ts#L81)

Whether to completely prevent zoom operations.
