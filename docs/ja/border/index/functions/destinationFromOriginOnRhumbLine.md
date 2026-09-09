[@ue-too/border](../../modules.md) / [index](../index.md) / destinationFromOriginOnRhumbLine

# 関数: destinationFromOriginOnRhumbLine()

> **destinationFromOriginOnRhumbLine**(`startCoord`, `bearing`, `distance`): [`GeoCoord`](../type-aliases/GeoCoord.md)

定義: [rhumbLine.ts:131](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/border/src/rhumbLine.ts#L131)

Calculates the destination point given a start point, constant bearing, and distance on a rhumb line.

## パラメータ

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### bearing

`number`

The constant bearing in degrees (0 = north, 90 = east, etc.)

### distance

`number`

The distance to travel in meters

## 戻り値

[`GeoCoord`](../type-aliases/GeoCoord.md)

The destination coordinate

## Remarks

Starting from a given point and traveling at a constant bearing for a given
distance, this calculates where you'll end up. The bearing remains constant
throughout the journey.

This is the rhumb line equivalent of [destinationFromOriginOnGreatCircle](destinationFromOriginOnGreatCircle.md).

## 例

```typescript
const start = { latitude: 40.0, longitude: -74.0 };

// Travel 500km on constant bearing of 45 degrees (northeast)
const destination = destinationFromOriginOnRhumbLine(start, 45, 500000);
console.log('Destination:', destination);
```
