[@ue-too/board](../globals.md) / convert2WorldSpaceWithTransformationMatrix

# Function: convert2WorldSpaceWithTransformationMatrix()

> **convert2WorldSpaceWithTransformationMatrix**(`point`, `transformationMatrix`): `Point`

Defined in: [packages/board/src/camera/utils/coordinate-conversion.ts:567](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/coordinate-conversion.ts#L567)

Transforms a viewport point to world space using a precomputed transformation matrix.
Faster than repeated function calls when transforming many points with the same camera state.

## Parameters

### point

`Point`

Point in viewport coordinates (origin at center)

### transformationMatrix

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Precomputed transformation matrix from [transformationMatrixFromCamera](transformationMatrixFromCamera.md)

## Returns

`Point`

World space coordinates of the point

## Remarks

Use this for batch transformations when the camera state is constant:
1. Create matrix once with [transformationMatrixFromCamera](transformationMatrixFromCamera.md)
2. Transform many points with this function

This avoids recalculating sin/cos and matrix operations for each point.

## Example

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

## See

[transformationMatrixFromCamera](transformationMatrixFromCamera.md) to create the matrix
