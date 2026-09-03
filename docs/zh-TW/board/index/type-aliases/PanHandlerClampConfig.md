[@ue-too/board](../../modules.md) / [index](../index.md) / PanHandlerClampConfig

# 型別別名: PanHandlerClampConfig

> **PanHandlerClampConfig** = `object`

定義於: [packages/board/src/camera/camera-rig/pan-handler.ts:49](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/pan-handler.ts#L49)

Configuration for boundary clamping behavior during camera panning.

## 備註

Controls how camera position is constrained to stay within defined boundaries.

## 範例

```typescript
const config: PanHandlerClampConfig = {
  limitEntireViewPort: true,  // Entire view must stay in bounds
  clampTranslation: true       // Enforce boundaries
};
```

## 屬性

### clampTranslation

> **clampTranslation**: `boolean`

定義於: [packages/board/src/camera/camera-rig/pan-handler.ts:57](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/pan-handler.ts#L57)

When true, enforces boundary constraints on pan operations.
                             When false, camera can pan freely outside boundaries.

***

### limitEntireViewPort

> **limitEntireViewPort**: `boolean`

定義於: [packages/board/src/camera/camera-rig/pan-handler.ts:53](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/pan-handler.ts#L53)

When true, ensures the entire viewport rectangle stays within boundaries.
                                When false, only the camera center point (position) is constrained.
                                This affects how [BoardCamera.boundaries](../interfaces/ObservableBoardCamera.md#boundaries) are interpreted.
