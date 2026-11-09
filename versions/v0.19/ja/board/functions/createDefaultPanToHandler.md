[@ue-too/board](../globals.md) / createDefaultPanToHandler

# Function: createDefaultPanToHandler()

> **createDefaultPanToHandler**(): [`PanToHandlerFunction`](../type-aliases/PanToHandlerFunction.md)

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:258](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/pan-handler.ts#L258)

Creates a default "pan to" handler pipeline for absolute camera positioning.

## Returns

[`PanToHandlerFunction`](../type-aliases/PanToHandlerFunction.md)

Pan-to handler function with restriction and clamping

## Remarks

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

## See

 - [createHandlerChain](createHandlerChain.md) for creating custom handler pipelines
 - [restrictPanToHandler](restrictPanToHandler.md) for the restriction step
 - [clampToHandler](clampToHandler.md) for the clamping step
