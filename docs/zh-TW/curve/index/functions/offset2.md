[@ue-too/curve](../../modules.md) / [index](../index.md) / offset2

# 函式: offset2()

> **offset2**(`curve`, `d`): `object`

定義於: [packages/curve/src/b-curve.ts:1630](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/curve/src/b-curve.ts#L1630)

Alternative offset implementation using LUT-based approach.

## 參數

### curve

[`BCurve`](../classes/BCurve.md)

### d

`number`

## 回傳

`object`

### aabb

> **aabb**: `object`

#### aabb.max

> **max**: [`Point`](../type-aliases/Point.md)

#### aabb.min

> **min**: [`Point`](../type-aliases/Point.md)

### points

> **points**: [`Point`](../type-aliases/Point.md)[]
