[@ue-too/board](../../modules.md) / [index](../index.md) / PanHandlerRestrictionConfig

# 型エイリアス: PanHandlerRestrictionConfig

> **PanHandlerRestrictionConfig** = `object`

定義: [packages/board/src/camera/camera-rig/pan-handler.ts:102](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-rig/pan-handler.ts#L102)

Configuration for restricting camera movement along specific axes.

## Remarks

Provides fine-grained control over which directions the camera can move.
Supports both world-space restrictions (absolute X/Y) and viewport-relative
restrictions (screen-space horizontal/vertical, accounting for rotation).

**World-space restrictions:**
- `restrictXTranslation`: Prevents movement along world X axis
- `restrictYTranslation`: Prevents movement along world Y axis

**Viewport-relative restrictions (rotation-aware):**
- `restrictRelativeXTranslation`: Prevents horizontal movement (screen-space)
- `restrictRelativeYTranslation`: Prevents vertical movement (screen-space)

Use cases:
- Side-scrolling games: `restrictYTranslation = true`
- Locked vertical scrolling: `restrictRelativeYTranslation = true`
- Fixed-axis pan tools in editors

## 例

```typescript
// Side-scroller: only allow horizontal movement in world space
const config: PanHandlerRestrictionConfig = {
  restrictXTranslation: false,
  restrictYTranslation: true,
  restrictRelativeXTranslation: false,
  restrictRelativeYTranslation: false
};

// Lock to vertical screen movement only (with camera rotation)
const screenConfig: PanHandlerRestrictionConfig = {
  restrictXTranslation: false,
  restrictYTranslation: false,
  restrictRelativeXTranslation: true,
  restrictRelativeYTranslation: false
};
```

## プロパティ

### restrictRelativeXTranslation

> **restrictRelativeXTranslation**: `boolean`

定義: [packages/board/src/camera/camera-rig/pan-handler.ts:115](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-rig/pan-handler.ts#L115)

Whether to prevent horizontal movement in viewport/screen space.
Accounts for camera rotation - locks movement perpendicular to screen's vertical direction.

***

### restrictRelativeYTranslation

> **restrictRelativeYTranslation**: `boolean`

定義: [packages/board/src/camera/camera-rig/pan-handler.ts:120](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-rig/pan-handler.ts#L120)

Whether to prevent vertical movement in viewport/screen space.
Accounts for camera rotation - locks movement perpendicular to screen's horizontal direction.

***

### restrictXTranslation

> **restrictXTranslation**: `boolean`

定義: [packages/board/src/camera/camera-rig/pan-handler.ts:106](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-rig/pan-handler.ts#L106)

Whether to prevent movement along the world X axis.

***

### restrictYTranslation

> **restrictYTranslation**: `boolean`

定義: [packages/board/src/camera/camera-rig/pan-handler.ts:110](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-rig/pan-handler.ts#L110)

Whether to prevent movement along the world Y axis.
