[@ue-too/board](../globals.md) / createTRSMatrix

# Function: createTRSMatrix()

> **createTRSMatrix**(`translation`, `rotation`, `scale`): [`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Defined in: [packages/board/src/camera/utils/matrix.ts:535](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/matrix.ts#L535)

Creates a transformation matrix from Translation, Rotation, and Scale components.
Inverse of [decomposeTRS](decomposeTRS.md).

## Parameters

### translation

Translation vector (tx, ty)

#### x

`number`

#### y

`number`

### rotation

`number`

Rotation angle in radians (counter-clockwise)

### scale

Scale vector (sx, sy)

#### x

`number`

#### y

`number`

## Returns

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Transformation matrix combining TRS

## Remarks

Transformation order: Scale → Rotate → Translate

The resulting matrix is in standard form compatible with Canvas/CSS/SVG.
Applying this matrix transforms points as:
1. Scale by (sx, sy)
2. Rotate by θ radians
3. Translate by (tx, ty)

## Example

```typescript
// Create a transform that scales 2x, rotates 45°, then moves to (100, 50)
const matrix = createTRSMatrix(
  { x: 100, y: 50 },            // translation
  Math.PI / 4,                   // 45° rotation
  { x: 2, y: 2 }                 // 2x scale
);

ctx.setTransform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f);
// Now drawing happens with scale→rotate→translate applied

// Round-trip test
const decomposed = decomposeTRS(matrix);
// decomposed ≈ { translation: {x:100, y:50}, rotation: π/4, scale: {x:2, y:2} }
```

## See

[decomposeTRS](decomposeTRS.md) for extracting TRS from a matrix
