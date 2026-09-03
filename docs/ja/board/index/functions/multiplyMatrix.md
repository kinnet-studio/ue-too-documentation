[@ue-too/board](../../modules.md) / [index](../index.md) / multiplyMatrix

# 関数: multiplyMatrix()

> **multiplyMatrix**(`m1`, `m2`): `object`

定義: [packages/board/src/camera/utils/matrix.ts:332](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/matrix.ts#L332)

Multiplies two 2D transformation matrices.
Order matters: M = m1 × m2 applies m2 first, then m1.

## パラメータ

### m1

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

First transformation matrix (applied second)

### m2

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Second transformation matrix (applied first)

## 戻り値

`object`

Combined transformation matrix

### a

> **a**: `number`

### b

> **b**: `number`

### c

> **c**: `number`

### d

> **d**: `number`

### e

> **e**: `number`

### f

> **f**: `number`

## Remarks

Matrix multiplication is not commutative: m1 × m2 ≠ m2 × m1

The result applies transformations in right-to-left order:
- Result = m1 × m2
- Applying result to point P: (m1 × m2) × P = m1 × (m2 × P)
- m2 is applied first, then m1

Common use: Building composite transformations
```typescript
// Translate then rotate (rotate happens first!)
const translate = { a: 1, b: 0, c: 0, d: 1, e: 100, f: 0 };
const rotate = { a: 0, b: 1, c: -1, d: 0, e: 0, f: 0 }; // 90° ccw
const combined = multiplyMatrix(translate, rotate);
// Points are rotated, then translated
```

## 例

```typescript
// Combine scale and translation
const scale2x: TransformationMatrix = {
  a: 2, b: 0, c: 0, d: 2, e: 0, f: 0
};
const translate: TransformationMatrix = {
  a: 1, b: 0, c: 0, d: 1, e: 100, f: 50
};

// Scale then translate
const combined = multiplyMatrix(translate, scale2x);
// Points are scaled by 2, then translated by (100, 50)

// Chain multiple transformations
const m = multiplyMatrix(
  multiplyMatrix(translate, rotate),
  scale
);
// Equivalent to: scale → rotate → translate
```
