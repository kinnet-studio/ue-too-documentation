[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultPanByHandler

# 函式: createDefaultPanByHandler()

> **createDefaultPanByHandler**(): [`PanByHandlerFunction`](../type-aliases/PanByHandlerFunction.md)

定義於: [packages/board/src/camera/camera-rig/pan-handler.ts:312](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/pan-handler.ts#L312)

Creates a default "pan by" handler pipeline for relative camera movement.

## 回傳

[`PanByHandlerFunction`](../type-aliases/PanByHandlerFunction.md)

Pan-by handler function with restriction and clamping

## 備註

The default handler pipeline applies transformations in this order:
1. **Restriction** ([restrictPanByHandler](restrictPanByHandler.md)): Applies axis restrictions based on config
2. **Clamping** ([clampByHandler](clampByHandler.md)): Clamps resulting position to boundaries

This ensures that:
- Camera movement respects axis lock settings
- Camera stays within configured boundaries after applying delta
- Delta is adjusted to prevent boundary violations

The input delta is in world space. All operations work in world coordinates.

## Examples

```typescript
const panBy = createDefaultPanByHandler();

// Use in camera rig
const delta = { x: 50, y: -30 };
const constrainedDelta = panBy(delta, camera, {
  restrictRelativeYTranslation: true,  // Lock screen-vertical movement
  clampTranslation: true,
  limitEntireViewPort: false,
  // ... other config
});
camera.setPosition(PointCal.addVector(camera.position, constrainedDelta));
```

```typescript
// Create custom pipeline with dampening
const dampenedPanBy = createHandlerChain<Point, [BoardCamera, PanHandlerConfig]>(
  restrictPanByHandler,
  (delta) => ({ x: delta.x * 0.8, y: delta.y * 0.8 }),  // 20% dampening
  clampByHandler
);
```

## 參閱

 - [createHandlerChain](createHandlerChain.md) for creating custom handler pipelines
 - [restrictPanByHandler](restrictPanByHandler.md) for the restriction step
 - [clampByHandler](clampByHandler.md) for the clamping step
