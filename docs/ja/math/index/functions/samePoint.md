[@ue-too/math](../../modules.md) / [index](../index.md) / samePoint

# 関数: samePoint()

> **samePoint**(`a`, `b`, `precision?`): `boolean`

定義: [index.ts:864](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/math/src/index.ts#L864)

Checks if two points are approximately at the same location.

## パラメータ

### a

[`Point`](../type-aliases/Point-1.md)

First point

### b

[`Point`](../type-aliases/Point-1.md)

Second point

### precision?

`number`

Optional tolerance for coordinate comparison

## 戻り値

`boolean`

True if both x and y coordinates are within precision

## Remarks

Uses [approximatelyTheSame](approximatelyTheSame.md) for coordinate comparison.
For exact equality, use [PointCal.isEqual](../classes/PointCal.md#isequal) instead.

## 例

```typescript
const a = { x: 1.0, y: 2.0 };
const b = { x: 1.0000001, y: 2.0000001 };
samePoint(a, b); // true (within default precision)

const c = { x: 1.1, y: 2.0 };
samePoint(a, c); // false
```
