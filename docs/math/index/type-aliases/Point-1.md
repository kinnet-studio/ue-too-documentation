[@ue-too/math](../../modules.md) / [index](../index.md) / Point

# Type Alias: Point

> **Point** = `object`

Defined in: [2dVector.ts:17](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/math/src/2dVector.ts#L17)

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

Defined in: [2dVector.ts:19](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/math/src/2dVector.ts#L19)

X-coordinate

***

### y

> **y**: `number`

Defined in: [2dVector.ts:21](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/math/src/2dVector.ts#L21)

Y-coordinate

***

### z?

> `optional` **z**: `number`

Defined in: [2dVector.ts:23](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/math/src/2dVector.ts#L23)

Optional Z-coordinate for 3D operations
