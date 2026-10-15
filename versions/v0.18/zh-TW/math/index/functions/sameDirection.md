[@ue-too/math](../../modules.md) / [index](../index.md) / sameDirection

# 函式: sameDirection()

> **sameDirection**(`a`, `b`, `precision`): `boolean`

定義於: [index.ts:791](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/index.ts#L791)

Checks if two vectors point in the same direction.

## 參數

### a

[`Point`](../type-aliases/Point-1.md)

First vector

### b

[`Point`](../type-aliases/Point-1.md)

Second vector

### precision

`number` = `0.001`

Tolerance for comparison (defaults to 0.001)

## 回傳

`boolean`

True if vectors have the same direction (after normalization)

## 備註

Normalizes both vectors to unit vectors and compares them.
Magnitude does not matter, only direction.

## 範例

```typescript
const a = { x: 1, y: 0 };
const b = { x: 10, y: 0 }; // Same direction, different magnitude
sameDirection(a, b); // true

const c = { x: 1, y: 1 };
sameDirection(a, c); // false (different direction)
```
