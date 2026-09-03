[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultPanToHandler

# 函式: createDefaultPanToHandler()

> **createDefaultPanToHandler**(): [`PanToHandlerFunction`](../type-aliases/PanToHandlerFunction.md)

定義於: [packages/board/src/camera/camera-rig/pan-handler.ts:258](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/pan-handler.ts#L258)

Creates a default "pan to" handler pipeline for absolute camera positioning.

## 回傳

[`PanToHandlerFunction`](../type-aliases/PanToHandlerFunction.md)

Pan-to handler function with restriction and clamping

## 備註

The default handler pipeline applies transformations in this order:
1. **Restriction** ([restrictPanToHandler](restrictPanToHandler.md)): Applies axis restrictions based on config
2. **Clamping** ([clampToHandler](clampToHandler.md)): Clamps position to boundaries

This ensures that:
- Camera respects axis lock settings (e.g., side-scroller constraints)
- Camera position stays within configured boundaries
- Entire viewport can be kept in bounds (if `limitEntireViewPort` is true)

All operations work in world coordinate space.

## Examples

```typescript
const panTo = createDefaultPanToHandler();

// Use in camera rig
const destination = { x: 1000, y: 500 };
const constrainedDest = panTo(destination, camera, {
  restrictYTranslation: true,  // Lock Y axis
  clampTranslation: true,
  limitEntireViewPort: true,
  // ... other config
});
camera.setPosition(constrainedDest);
```

```typescript
// Create custom pipeline using default handlers
const customPanTo = createHandlerChain<Point, [BoardCamera, PanHandlerConfig]>(
  restrictPanToHandler,  // From default
  myCustomHandler,       // Your custom logic
  clampToHandler         // From default
);
```

## 參閱

 - [createHandlerChain](createHandlerChain.md) for creating custom handler pipelines
 - [restrictPanToHandler](restrictPanToHandler.md) for the restriction step
 - [clampToHandler](clampToHandler.md) for the clamping step
