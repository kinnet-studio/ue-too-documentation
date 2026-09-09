[@ue-too/border](../../modules.md) / [index](../index.md) / rhumbDistance

# 函式: rhumbDistance()

> **rhumbDistance**(`startCoord`, `endCoord`): `number`

定義於: [rhumbLine.ts:42](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/border/src/rhumbLine.ts#L42)

Calculates the distance along a rhumb line between two points.

## 參數

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## 回傳

`number`

The distance in meters along the rhumb line

## 備註

A rhumb line (also called loxodrome) is a path of constant bearing. Unlike great
circles, rhumb lines appear as straight lines on Mercator projections, making them
easier for navigation.

Rhumb lines are generally slightly longer than great circle routes, except when
traveling due east/west along the equator or due north/south.

Uses Earth's mean radius of 6,371,000 meters.

## 範例

```typescript
const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };

const distance = rhumbDistance(start, end);
console.log('Rhumb distance:', distance / 1000, 'km');

// Compare with great circle distance
const gcDistance = greatCircleDistance(start, end);
console.log('Great circle is', (distance - gcDistance) / 1000, 'km shorter');
```
