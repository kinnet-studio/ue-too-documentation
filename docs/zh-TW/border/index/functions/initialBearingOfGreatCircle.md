[@ue-too/border](../../modules.md) / [index](../index.md) / initialBearingOfGreatCircle

# 函式: initialBearingOfGreatCircle()

> **initialBearingOfGreatCircle**(`startCoord`, `endCoord`): `number`

定義於: [greateCircle.ts:112](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/border/src/greateCircle.ts#L112)

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
