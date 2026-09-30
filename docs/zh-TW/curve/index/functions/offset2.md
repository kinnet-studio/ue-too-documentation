[@ue-too/curve](../../modules.md) / [index](../index.md) / offset2

# 函式: offset2()

> **offset2**(`curve`, `d`): `object`

定義於: [packages/curve/src/b-curve.ts:1630](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/curve/src/b-curve.ts#L1630)

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
