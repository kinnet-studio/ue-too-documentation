[@ue-too/board](../globals.md) / createDefaultRotateByHandler

# Function: createDefaultRotateByHandler()

> **createDefaultRotateByHandler**(): [`RotateByHandlerFunction`](../type-aliases/RotateByHandlerFunction.md)

Defined in: [packages/board/src/camera/camera-rig/rotation-handler.ts:429](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/rotation-handler.ts#L429)

Creates a default "rotate by" handler pipeline for relative rotation operations.

## Returns

[`RotateByHandlerFunction`](../type-aliases/RotateByHandlerFunction.md)

Rotate-by handler function with restriction and clamping

## Remarks

The default handler pipeline applies transformations in this order:
1. **Restriction** ([restrictRotateByHandler](restrictRotateByHandler.md)): Returns zero delta if locked
2. **Clamping** ([clampRotateByHandler](clampRotateByHandler.md)): Adjusts delta to respect boundaries

This ensures that:
- Rotation can be completely disabled via `restrictRotation` flag
- Resulting rotation angle stays within configured angular boundaries
- Delta is adjusted to prevent boundary violations

## Example

```typescript
const rotateBy = createDefaultRotateByHandler();

camera.rotation = Math.PI * 0.4;  // 72 degrees
camera.rotationBoundaries = { max: Math.PI / 2 };  // Max 90 degrees

const delta = Math.PI * 0.3;  // Try to rotate 54 degrees (would exceed max)
const constrained = rotateBy(delta, camera, {
  clampRotation: true,
  restrictRotation: false
});
// constrained adjusted to only rotate to boundary
camera.setRotation(camera.rotation + constrained);
```

## See

 - [createHandlerChain](createHandlerChain.md) for creating custom handler pipelines
 - [restrictRotateByHandler](restrictRotateByHandler.md) for the restriction step
 - [clampRotateByHandler](clampRotateByHandler.md) for the clamping step
