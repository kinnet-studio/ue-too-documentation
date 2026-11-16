[@ue-too/board](../globals.md) / invertYAxisForDrawImageWith9Args

# Function: invertYAxisForDrawImageWith9Args()

> **invertYAxisForDrawImageWith9Args**(`args`): `any`[]

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:799](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L799)

Inverts y-coordinates for the 9-argument variant of drawImage.

## Parameters

### args

`any`[]

The arguments array for drawImage

## Returns

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

## Example

```typescript
// Original call (top-left origin):
ctx.drawImage(img, 0, 0, 100, 100, 50, 50, 200, 200);

// With flipped y-axis, this becomes:
// sy = imageHeight - 0, sHeight = -100, dy = -50 - 200, dHeight = -200
```

## See

[reverseYAxis](reverseYAxis.md) for the main y-axis flipping proxy
