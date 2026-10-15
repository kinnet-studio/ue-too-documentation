[@ue-too/math](../../modules.md) / [index](../index.md) / Point

# 型エイリアス: Point

> **Point** = `object`

定義: [2dVector.ts:17](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/2dVector.ts#L17)

Represents a 2D or 3D point with optional z-coordinate.

## Remarks

When z is undefined, operations treat the point as 2D (z = 0).
This type is used throughout the library for all point and vector operations.

## 例

```typescript
// 2D point
const p2d: Point = { x: 10, y: 20 };

// 3D point
const p3d: Point = { x: 10, y: 20, z: 30 };
```

## プロパティ

### x

> **x**: `number`

定義: [2dVector.ts:19](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/2dVector.ts#L19)

X-coordinate

***

### y

> **y**: `number`

定義: [2dVector.ts:21](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/2dVector.ts#L21)

Y-coordinate

***

### z?

> `optional` **z**: `number`

定義: [2dVector.ts:23](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/2dVector.ts#L23)

Optional Z-coordinate for 3D operations
