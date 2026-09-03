[@ue-too/board](../../modules.md) / [index](../index.md) / createTRSMatrix

# 函式: createTRSMatrix()

> **createTRSMatrix**(`translation`, `rotation`, `scale`): [`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

定義於: [packages/board/src/camera/utils/matrix.ts:464](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/matrix.ts#L464)

Creates a transformation matrix from Translation, Rotation, and Scale components.
Inverse of [decomposeTRS](decomposeTRS.md).

## 參數

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

## 回傳

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Transformation matrix combining TRS

## 備註

Transformation order: Scale → Rotate → Translate

The resulting matrix is in standard form compatible with Canvas/CSS/SVG.
Applying this matrix transforms points as:
1. Scale by (sx, sy)
2. Rotate by θ radians
3. Translate by (tx, ty)

## 範例

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

## 參閱

[decomposeTRS](decomposeTRS.md) for extracting TRS from a matrix
