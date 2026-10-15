[@ue-too/board](../globals.md) / TransformationMatrix

# Type Alias: TransformationMatrix

> **TransformationMatrix** = `object`

Defined in: [packages/board/src/camera/utils/matrix.ts:54](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/matrix.ts#L54)

2D affine transformation matrix in standard CSS/Canvas format.

Represents a 3x3 matrix in homogeneous coordinates, stored in the compact 6-parameter form:
```
| a  c  e |
| b  d  f |
| 0  0  1 |
```

## Remarks

This format is compatible with:
- Canvas 2D context: `ctx.setTransform(a, b, c, d, e, f)`
- CSS transforms: `matrix(a, b, c, d, e, f)`
- SVG transforms: `matrix(a b c d e f)`

Common transformation types:
- **Translation**: `{a: 1, b: 0, c: 0, d: 1, e: tx, f: ty}`
- **Scaling**: `{a: sx, b: 0, c: 0, d: sy, e: 0, f: 0}`
- **Rotation**: `{a: cos(θ), b: sin(θ), c: -sin(θ), d: cos(θ), e: 0, f: 0}`

## Example

```typescript
// Identity matrix (no transformation)
const identity: TransformationMatrix = {
  a: 1, b: 0, c: 0, d: 1, e: 0, f: 0
};

// Translation by (100, 50)
const translate: TransformationMatrix = {
  a: 1, b: 0, c: 0, d: 1, e: 100, f: 50
};

// 2x scale
const scale: TransformationMatrix = {
  a: 2, b: 0, c: 0, d: 2, e: 0, f: 0
};

// 45° rotation
const rotate: TransformationMatrix = {
  a: 0.707, b: 0.707, c: -0.707, d: 0.707, e: 0, f: 0
};
```

## Properties

### a

> **a**: `number`

Defined in: [packages/board/src/camera/utils/matrix.ts:55](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/matrix.ts#L55)

Horizontal scaling / rotation component (m11)

***

### b

> **b**: `number`

Defined in: [packages/board/src/camera/utils/matrix.ts:56](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/matrix.ts#L56)

Vertical skewing / rotation component (m12)

***

### c

> **c**: `number`

Defined in: [packages/board/src/camera/utils/matrix.ts:57](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/matrix.ts#L57)

Horizontal skewing / rotation component (m21)

***

### d

> **d**: `number`

Defined in: [packages/board/src/camera/utils/matrix.ts:58](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/matrix.ts#L58)

Vertical scaling / rotation component (m22)

***

### e

> **e**: `number`

Defined in: [packages/board/src/camera/utils/matrix.ts:59](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/matrix.ts#L59)

Horizontal translation (tx)

***

### f

> **f**: `number`

Defined in: [packages/board/src/camera/utils/matrix.ts:60](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/matrix.ts#L60)

Vertical translation (ty)
