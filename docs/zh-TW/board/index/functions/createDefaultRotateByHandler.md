[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultRotateByHandler

# 函式: createDefaultRotateByHandler()

> **createDefaultRotateByHandler**(): [`RotateByHandlerFunction`](../type-aliases/RotateByHandlerFunction.md)

定義於: [packages/board/src/camera/camera-rig/rotation-handler.ts:429](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-rig/rotation-handler.ts#L429)

Creates a default "rotate by" handler pipeline for relative rotation operations.

## 回傳

[`RotateByHandlerFunction`](../type-aliases/RotateByHandlerFunction.md)

Rotate-by handler function with restriction and clamping

## 備註

The default handler pipeline applies transformations in this order:
1. **Restriction** ([restrictRotateByHandler](restrictRotateByHandler.md)): Returns zero delta if locked
2. **Clamping** ([clampRotateByHandler](clampRotateByHandler.md)): Adjusts delta to respect boundaries

This ensures that:
- Rotation can be completely disabled via `restrictRotation` flag
- Resulting rotation angle stays within configured angular boundaries
- Delta is adjusted to prevent boundary violations

## 範例

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

## 參閱

 - [createHandlerChain](createHandlerChain.md) for creating custom handler pipelines
 - [restrictRotateByHandler](restrictRotateByHandler.md) for the restriction step
 - [clampRotateByHandler](clampRotateByHandler.md) for the clamping step
