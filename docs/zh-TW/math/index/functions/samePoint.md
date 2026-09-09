[@ue-too/math](../../modules.md) / [index](../index.md) / samePoint

# 函式: samePoint()

> **samePoint**(`a`, `b`, `precision?`): `boolean`

定義於: [index.ts:864](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/math/src/index.ts#L864)

Checks if two points are approximately at the same location.

## 參數

### a

[`Point`](../type-aliases/Point-1.md)

First point

### b

[`Point`](../type-aliases/Point-1.md)

Second point

### precision?

`number`

Optional tolerance for coordinate comparison

## 回傳

`boolean`

True if both x and y coordinates are within precision

## 備註

Uses [approximatelyTheSame](approximatelyTheSame.md) for coordinate comparison.
For exact equality, use [PointCal.isEqual](../classes/PointCal.md#isequal) instead.

## 範例

```typescript
const a = { x: 1.0, y: 2.0 };
const b = { x: 1.0000001, y: 2.0000001 };
samePoint(a, b); // true (within default precision)

const c = { x: 1.1, y: 2.0 };
samePoint(a, c); // false
```
