[@ue-too/math](../globals.md) / Point

# Type Alias: Point

> **Point** = `object`

Defined in: [2dVector.ts:17](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/2dVector.ts#L17)

Represents a 2D or 3D point with optional z-coordinate.

## Remarks

When z is undefined, operations treat the point as 2D (z = 0).
This type is used throughout the library for all point and vector operations.

## Example

```typescript
// 2D point
const p2d: Point = { x: 10, y: 20 };

// 3D point
const p3d: Point = { x: 10, y: 20, z: 30 };
```

## Properties

### x

> **x**: `number`

Defined in: [2dVector.ts:19](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/2dVector.ts#L19)

X-coordinate

***

### y

> **y**: `number`

Defined in: [2dVector.ts:21](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/2dVector.ts#L21)

Y-coordinate

***

### z?

> `optional` **z**: `number`

Defined in: [2dVector.ts:23](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/2dVector.ts#L23)

Optional Z-coordinate for 3D operations
