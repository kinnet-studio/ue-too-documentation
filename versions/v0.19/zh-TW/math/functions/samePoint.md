[@ue-too/math](../globals.md) / samePoint

# Function: samePoint()

> **samePoint**(`a`, `b`, `precision?`): `boolean`

Defined in: [index.ts:864](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L864)

Checks if two points are approximately at the same location.

## Parameters

### a

[`Point`](../type-aliases/Point-1.md)

First point

### b

[`Point`](../type-aliases/Point-1.md)

Second point

### precision?

`number`

Optional tolerance for coordinate comparison

## Returns

`boolean`

True if both x and y coordinates are within precision

## Remarks

Uses [approximatelyTheSame](approximatelyTheSame.md) for coordinate comparison.
For exact equality, use [PointCal.isEqual](../classes/PointCal.md#isequal) instead.

## Example

```typescript
const a = { x: 1.0, y: 2.0 };
const b = { x: 1.0000001, y: 2.0000001 };
samePoint(a, b); // true (within default precision)

const c = { x: 1.1, y: 2.0 };
samePoint(a, c); // false
```
