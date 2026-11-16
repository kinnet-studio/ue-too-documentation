[@ue-too/board](../globals.md) / multiplyMatrix

# Function: multiplyMatrix()

> **multiplyMatrix**(`m1`, `m2`): `object`

Defined in: [packages/board/src/camera/utils/matrix.ts:403](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/matrix.ts#L403)

Multiplies two 2D transformation matrices.
Order matters: M = m1 × m2 applies m2 first, then m1.

## Parameters

### m1

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

First transformation matrix (applied second)

### m2

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

Second transformation matrix (applied first)

## Returns

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

## Example

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
