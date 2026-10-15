[@ue-too/board](../globals.md) / createDefaultPanByHandler

# Function: createDefaultPanByHandler()

> **createDefaultPanByHandler**(): [`PanByHandlerFunction`](../type-aliases/PanByHandlerFunction.md)

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:312](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/pan-handler.ts#L312)

Creates a default "pan by" handler pipeline for relative camera movement.

## Returns

[`PanByHandlerFunction`](../type-aliases/PanByHandlerFunction.md)

Pan-by handler function with restriction and clamping

## Remarks

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

## See

 - [createHandlerChain](createHandlerChain.md) for creating custom handler pipelines
 - [restrictPanByHandler](restrictPanByHandler.md) for the restriction step
 - [clampByHandler](clampByHandler.md) for the clamping step
