[@ue-too/curve](../../modules.md) / [index](../index.md) / offset2

# Function: offset2()

> **offset2**(`curve`, `d`): `object`

Defined in: [packages/curve/src/b-curve.ts:1630](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/curve/src/b-curve.ts#L1630)

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
