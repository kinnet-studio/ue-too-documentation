[@ue-too/curve](../../modules.md) / [index](../index.md) / offset2

# 関数: offset2()

> **offset2**(`curve`, `d`): `object`

定義: [packages/curve/src/b-curve.ts:1630](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/curve/src/b-curve.ts#L1630)

Alternative offset implementation using LUT-based approach.

## パラメータ

### curve

[`BCurve`](../classes/BCurve.md)

### d

`number`

## 戻り値

`object`

### aabb

> **aabb**: `object`

#### aabb.max

> **max**: [`Point`](../type-aliases/Point.md)

#### aabb.min

> **min**: [`Point`](../type-aliases/Point.md)

### points

> **points**: [`Point`](../type-aliases/Point.md)[]
