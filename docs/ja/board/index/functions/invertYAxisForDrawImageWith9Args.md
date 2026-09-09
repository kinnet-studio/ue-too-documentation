[@ue-too/board](../../modules.md) / [index](../index.md) / invertYAxisForDrawImageWith9Args

# 関数: invertYAxisForDrawImageWith9Args()

> **invertYAxisForDrawImageWith9Args**(`args`): `any`[]

定義: [packages/board/src/utils/canvas-position-dimension.ts:799](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/utils/canvas-position-dimension.ts#L799)

Inverts y-coordinates for the 9-argument variant of drawImage.

## パラメータ

### args

`any`[]

The arguments array for drawImage

## 戻り値

`any`[]

Modified arguments with inverted y-coordinates

## Remarks

The 9-argument drawImage signature is:
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

When inverting y-axis, we need to adjust:
- sy (source y): Flip relative to image height
- sHeight: Negate (height becomes negative in flipped space)
- dy (destination y): Negate
- dy offset: Subtract destination height

This ensures images render correctly when the canvas y-axis is flipped.

## 例

```typescript
// Original call (top-left origin):
ctx.drawImage(img, 0, 0, 100, 100, 50, 50, 200, 200);

// With flipped y-axis, this becomes:
// sy = imageHeight - 0, sHeight = -100, dy = -50 - 200, dHeight = -200
```

## 参照

[reverseYAxis](reverseYAxis.md) for the main y-axis flipping proxy
