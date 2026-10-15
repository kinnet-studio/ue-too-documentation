[@ue-too/curve](../globals.md) / offset2

# Function: offset2()

> **offset2**(`curve`, `d`): `object`

Defined in: [packages/curve/src/b-curve.ts:1615](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/curve/src/b-curve.ts#L1615)

Alternative offset implementation using LUT-based approach.

## Parameters

### curve

[`BCurve`](../classes/BCurve.md)

### d

`number`

## Returns

`object`

### aabb

> **aabb**: `object`

#### aabb.max

> **max**: [`Point`](../type-aliases/Point.md)

#### aabb.min

> **min**: [`Point`](../type-aliases/Point.md)

### points

> **points**: [`Point`](../type-aliases/Point.md)[]
