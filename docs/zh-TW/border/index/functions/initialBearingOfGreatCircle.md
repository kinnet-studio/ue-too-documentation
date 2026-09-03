[@ue-too/border](../../modules.md) / [index](../index.md) / initialBearingOfGreatCircle

# 函式: initialBearingOfGreatCircle()

> **initialBearingOfGreatCircle**(`startCoord`, `endCoord`): `number`

定義於: [greateCircle.ts:112](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/border/src/greateCircle.ts#L112)

Calculate the initial bearing between two points on the Earth's surface.
(traveling along the great circle would result in different bearing from the start point to the end point)

## 參數

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting point in GeoCoord format.

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending point in GeoCoord format.

## 回傳

`number`

The bearing in degrees.
