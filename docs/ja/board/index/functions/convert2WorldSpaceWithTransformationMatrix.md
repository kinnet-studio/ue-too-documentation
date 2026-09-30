[@ue-too/board](../../modules.md) / [index](../index.md) / convert2WorldSpaceWithTransformationMatrix

# 関数: convert2WorldSpaceWithTransformationMatrix()

> **convert2WorldSpaceWithTransformationMatrix**(`point`, `transformationMatrix`): `Point`

定義: [packages/board/src/camera/utils/coordinate-conversion.ts:567](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/utils/coordinate-conversion.ts#L567)

Transforms a viewport point to world space using a precomputed transformation matrix.
Faster than repeated function calls when transforming many points with the same camera state.

## パラメータ

### point

`Point`

Point in viewport coordinates (origin at center)

### transformationMatrix

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Precomputed transformation matrix from [transformationMatrixFromCamera](transformationMatrixFromCamera.md)

## 戻り値

`Point`

World space coordinates of the point

## Remarks

Use this for batch transformations when the camera state is constant:
1. Create matrix once with [transformationMatrixFromCamera](transformationMatrixFromCamera.md)
2. Transform many points with this function

This avoids recalculating sin/cos and matrix operations for each point.

## 例

```typescript
// Transform many points efficiently
const matrix = transformationMatrixFromCamera(
  { x: 100, y: 200 },
  1.5,
  Math.PI / 4
);

const worldPoints = viewportPoints.map(vp =>
  convert2WorldSpaceWithTransformationMatrix(vp, matrix)
);
```

## 参照

[transformationMatrixFromCamera](transformationMatrixFromCamera.md) to create the matrix
