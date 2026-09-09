[@ue-too/board](../../modules.md) / [index](../index.md) / clampByHandler

# 函式: clampByHandler()

> **clampByHandler**(`delta`, `camera`, `config`): `Point`

定義於: [packages/board/src/camera/camera-rig/pan-handler.ts:536](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-rig/pan-handler.ts#L536)

Handler pipeline step that clamps "pan by" deltas to prevent boundary violations.

## 參數

### delta

`Point`

Movement delta in world space

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides boundaries and viewport dimensions)

### config

[`PanHandlerClampConfig`](../type-aliases/PanHandlerClampConfig.md)

Clamping configuration

## 回傳

`Point`

Adjusted delta that respects boundaries

## 備註

This handler ensures that applying the delta won't move the camera outside boundaries.
It works by:
1. Calculating the potential new position (current + delta)
2. Clamping that position to boundaries
3. Returning the difference (clamped - current) as the new delta

Behavior depends on configuration:
- If `clampTranslation` is false: Returns delta unchanged
- If `limitEntireViewPort` is false: Clamps based on camera center
- If `limitEntireViewPort` is true: Ensures entire viewport stays in bounds

The resulting delta may be zero if the camera is already at a boundary
and trying to move further outside.

Can be used standalone, but typically composed into a handler pipeline via
[createDefaultPanByHandler](createDefaultPanByHandler.md) or [createHandlerChain](createHandlerChain.md).

## 範例

```typescript
// Standalone usage
camera.position = { x: 1950, y: 500 };
camera.boundaries = { max: { x: 2000 } };

const config: PanHandlerClampConfig = {
  clampTranslation: true,
  limitEntireViewPort: false
};

const delta = { x: 100, y: 0 };  // Try to move right
const clamped = clampByHandler(delta, camera, config);
// Result: { x: 50, y: 0 } - only move to boundary, not beyond
```

## 參閱

 - [clampPoint](clampPoint.md) for center-point clamping
 - [clampPointEntireViewPort](clampPointEntireViewPort.md) for full-viewport clamping
 - [createDefaultPanByHandler](createDefaultPanByHandler.md) for default pipeline usage
