[@ue-too/border](../../modules.md) / [index](../index.md) / destinationFromOriginOnRhumbLine

# 函式: destinationFromOriginOnRhumbLine()

> **destinationFromOriginOnRhumbLine**(`startCoord`, `bearing`, `distance`): [`GeoCoord`](../type-aliases/GeoCoord.md)

定義於: [rhumbLine.ts:131](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/border/src/rhumbLine.ts#L131)

Calculates the destination point given a start point, constant bearing, and distance on a rhumb line.

## 參數

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### bearing

`number`

The constant bearing in degrees (0 = north, 90 = east, etc.)

### distance

`number`

The distance to travel in meters

## 回傳

[`GeoCoord`](../type-aliases/GeoCoord.md)

The destination coordinate

## 備註

Starting from a given point and traveling at a constant bearing for a given
distance, this calculates where you'll end up. The bearing remains constant
throughout the journey.

This is the rhumb line equivalent of [destinationFromOriginOnGreatCircle](destinationFromOriginOnGreatCircle.md).

## 範例

```typescript
const start = { latitude: 40.0, longitude: -74.0 };

// Travel 500km on constant bearing of 45 degrees (northeast)
const destination = destinationFromOriginOnRhumbLine(start, 45, 500000);
console.log('Destination:', destination);
```
