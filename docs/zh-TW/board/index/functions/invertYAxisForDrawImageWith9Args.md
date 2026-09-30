[@ue-too/board](../../modules.md) / [index](../index.md) / invertYAxisForDrawImageWith9Args

# 函式: invertYAxisForDrawImageWith9Args()

> **invertYAxisForDrawImageWith9Args**(`args`): `any`[]

定義於: [packages/board/src/utils/canvas-position-dimension.ts:799](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/utils/canvas-position-dimension.ts#L799)

Inverts y-coordinates for the 9-argument variant of drawImage.

## 參數

### args

`any`[]

The arguments array for drawImage

## 回傳

`any`[]

Modified arguments with inverted y-coordinates

## 備註

The 9-argument drawImage signature is:
drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)

When inverting y-axis, we need to adjust:
- sy (source y): Flip relative to image height
- sHeight: Negate (height becomes negative in flipped space)
- dy (destination y): Negate
- dy offset: Subtract destination height

This ensures images render correctly when the canvas y-axis is flipped.

## 範例

```typescript
// Original call (top-left origin):
ctx.drawImage(img, 0, 0, 100, 100, 50, 50, 200, 200);

// With flipped y-axis, this becomes:
// sy = imageHeight - 0, sHeight = -100, dy = -50 - 200, dHeight = -200
```

## 參閱

[reverseYAxis](reverseYAxis.md) for the main y-axis flipping proxy
