[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultRotateToHandler

# 函式: createDefaultRotateToHandler()

> **createDefaultRotateToHandler**(): [`RotateToHandlerFunction`](../type-aliases/RotateToHandlerFunction.md)

定義於: [packages/board/src/camera/camera-rig/rotation-handler.ts:486](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/rotation-handler.ts#L486)

Creates a default "rotate to" handler pipeline for absolute rotation operations.

## 回傳

[`RotateToHandlerFunction`](../type-aliases/RotateToHandlerFunction.md)

Rotate-to handler function with restriction and clamping

## 備註

The default handler pipeline applies transformations in this order:
1. **Restriction** ([restrictRotateToHandler](restrictRotateToHandler.md)): Returns current angle if locked
2. **Clamping** ([clampRotateToHandler](clampRotateToHandler.md)): Clamps angle to configured boundaries

This ensures that:
- Rotation can be completely disabled via `restrictRotation` flag
- Rotation angle stays within configured angular boundaries

## Examples

```typescript
const rotateTo = createDefaultRotateToHandler();

camera.rotationBoundaries = { min: 0, max: Math.PI };  // [0°, 180°]

const target = Math.PI * 1.5;  // 270 degrees (exceeds max)
const constrained = rotateTo(target, camera, {
  clampRotation: true,
  restrictRotation: false
});
// constrained = π (clamped to max boundary of 180 degrees)
camera.setRotation(constrained);
```

```typescript
// Create custom pipeline with snapping
const cardinalRotateTo = createHandlerChain<number, [BoardCamera, RotationHandlerConfig]>(
  restrictRotateToHandler,
  (angle) => {
    // Snap to cardinal directions (0°, 90°, 180°, 270°)
    const cardinals = [0, Math.PI/2, Math.PI, 3*Math.PI/2];
    return cardinals.reduce((prev, curr) =>
      Math.abs(curr - angle) < Math.abs(prev - angle) ? curr : prev
    );
  },
  clampRotateToHandler
);
```

## 參閱

 - [createHandlerChain](createHandlerChain.md) for creating custom handler pipelines
 - [restrictRotateToHandler](restrictRotateToHandler.md) for the restriction step
 - [clampRotateToHandler](clampRotateToHandler.md) for the clamping step
