[@ue-too/board](../../modules.md) / [index](../index.md) / PanHandlerClampConfig

# 型エイリアス: PanHandlerClampConfig

> **PanHandlerClampConfig** = `object`

定義: [packages/board/src/camera/camera-rig/pan-handler.ts:49](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-rig/pan-handler.ts#L49)

Configuration for boundary clamping behavior during camera panning.

## Remarks

Controls how camera position is constrained to stay within defined boundaries.

## 例

```typescript
const config: PanHandlerClampConfig = {
  limitEntireViewPort: true,  // Entire view must stay in bounds
  clampTranslation: true       // Enforce boundaries
};
```

## プロパティ

### clampTranslation

> **clampTranslation**: `boolean`

定義: [packages/board/src/camera/camera-rig/pan-handler.ts:57](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-rig/pan-handler.ts#L57)

When true, enforces boundary constraints on pan operations.
                             When false, camera can pan freely outside boundaries.

***

### limitEntireViewPort

> **limitEntireViewPort**: `boolean`

定義: [packages/board/src/camera/camera-rig/pan-handler.ts:53](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-rig/pan-handler.ts#L53)

When true, ensures the entire viewport rectangle stays within boundaries.
                                When false, only the camera center point (position) is constrained.
                                This affects how [BoardCamera.boundaries](../interfaces/ObservableBoardCamera.md#boundaries) are interpreted.
