[@ue-too/board](../globals.md) / PanHandlerClampConfig

# Type Alias: PanHandlerClampConfig

> **PanHandlerClampConfig** = `object`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:49](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/pan-handler.ts#L49)

Configuration for boundary clamping behavior during camera panning.

## Remarks

Controls how camera position is constrained to stay within defined boundaries.

## Example

```typescript
const config: PanHandlerClampConfig = {
  limitEntireViewPort: true,  // Entire view must stay in bounds
  clampTranslation: true       // Enforce boundaries
};
```

## Properties

### clampTranslation

> **clampTranslation**: `boolean`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:57](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/pan-handler.ts#L57)

When true, enforces boundary constraints on pan operations.
                             When false, camera can pan freely outside boundaries.

***

### limitEntireViewPort

> **limitEntireViewPort**: `boolean`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:53](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/pan-handler.ts#L53)

When true, ensures the entire viewport rectangle stays within boundaries.
                                When false, only the camera center point (position) is constrained.
                                This affects how [BoardCamera.boundaries](../interfaces/ObservableBoardCamera.md#boundaries) are interpreted.
