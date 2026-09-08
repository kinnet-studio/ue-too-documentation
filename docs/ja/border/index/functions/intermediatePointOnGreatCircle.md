[@ue-too/border](../../modules.md) / [index](../index.md) / intermediatePointOnGreatCircle

# 関数: intermediatePointOnGreatCircle()

> **intermediatePointOnGreatCircle**(`startCoord`, `endCoord`, `fraction`): [`GeoCoord`](../type-aliases/GeoCoord.md)

定義: [greateCircle.ts:38](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/border/src/greateCircle.ts#L38)

Calculates an intermediate point along a great circle path.

## パラメータ

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

### fraction

`number`

The fraction along the path (0 = start, 1 = end, 0.5 = midpoint)

## 戻り値

[`GeoCoord`](../type-aliases/GeoCoord.md)

The intermediate point at the specified fraction

## Remarks

Given two points on Earth's surface, this finds a point at a specified
fraction along the great circle (shortest) path between them.

Uses the spherical interpolation formula for accurate results on a sphere.

## 例

```typescript
const nyc = { latitude: 40.7128, longitude: -74.0060 };
const london = { latitude: 51.5074, longitude: -0.1278 };

// Find point 25% of the way from NYC to London
const quarter = intermediatePointOnGreatCircle(nyc, london, 0.25);

// Find point 75% of the way
const threeQuarters = intermediatePointOnGreatCircle(nyc, london, 0.75);
```
