[@ue-too/border](../../modules.md) / [index](../index.md) / greatCircleDistance

# 函式: greatCircleDistance()

> **greatCircleDistance**(`startCoord`, `endCoord`): `number`

定義於: [greateCircle.ts:155](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/border/src/greateCircle.ts#L155)

Calculates the great circle distance between two points on Earth.

## 參數

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## 回傳

`number`

The distance in meters

## 備註

Uses the haversine formula to calculate the shortest distance over Earth's
surface between two geographic coordinates. This is the "as-the-crow-flies"
distance.

The calculation assumes Earth's mean radius of 6,371,000 meters and treats
Earth as a perfect sphere.

## 範例

```typescript
const nyc = { latitude: 40.7128, longitude: -74.0060 };
const london = { latitude: 51.5074, longitude: -0.1278 };

const distance = greatCircleDistance(nyc, london);
console.log('Distance:', distance / 1000, 'km'); // ~5570 km
```
