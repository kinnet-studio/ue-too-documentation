[@ue-too/math](../globals.md) / sameDirection

# Function: sameDirection()

> **sameDirection**(`a`, `b`, `precision`): `boolean`

Defined in: [index.ts:791](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/math/src/index.ts#L791)

Checks if two vectors point in the same direction.

## Parameters

### a

[`Point`](../type-aliases/Point-1.md)

First vector

### b

[`Point`](../type-aliases/Point-1.md)

Second vector

### precision

`number` = `0.001`

Tolerance for comparison (defaults to 0.001)

## Returns

`boolean`

True if vectors have the same direction (after normalization)

## Remarks

Normalizes both vectors to unit vectors and compares them.
Magnitude does not matter, only direction.

## Example

```typescript
const a = { x: 1, y: 0 };
const b = { x: 10, y: 0 }; // Same direction, different magnitude
sameDirection(a, b); // true

const c = { x: 1, y: 1 };
sameDirection(a, c); // false (different direction)
```
