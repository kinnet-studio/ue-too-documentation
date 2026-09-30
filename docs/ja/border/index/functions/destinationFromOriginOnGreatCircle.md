[@ue-too/border](../../modules.md) / [index](../index.md) / destinationFromOriginOnGreatCircle

# 関数: destinationFromOriginOnGreatCircle()

> **destinationFromOriginOnGreatCircle**(`startCoord`, `bearing`, `distance`): [`GeoCoord`](../type-aliases/GeoCoord.md)

定義: [greateCircle.ts:200](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/border/src/greateCircle.ts#L200)

Calculates the destination point given a start point, bearing, and distance on a great circle.

## パラメータ

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### bearing

`number`

The initial bearing in degrees (0 = north, 90 = east, etc.)

### distance

`number`

The distance to travel in meters

## 戻り値

[`GeoCoord`](../type-aliases/GeoCoord.md)

The destination coordinate

## Remarks

Starting from a given point and traveling along a great circle at a specific
initial bearing for a given distance, this calculates where you'll end up.

Note: The bearing will change along the path (except when traveling due north/south
or along the equator) because great circles are not straight lines on most map projections.

## 例

```typescript
const start = { latitude: 40.7128, longitude: -74.0060 }; // NYC

// Travel 1000km northeast from NYC
const destination = destinationFromOriginOnGreatCircle(start, 45, 1000000);
console.log('Destination:', destination);
```
