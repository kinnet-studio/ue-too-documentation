[@ue-too/border](../../modules.md) / [index](../index.md) / mercatorProjection

# 関数: mercatorProjection()

> **mercatorProjection**(`interestPoint`, `centerLongitude`): `Point`

定義: [projection.ts:49](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/border/src/projection.ts#L49)

Projects a geographic coordinate to Mercator projection.

## パラメータ

### interestPoint

[`GeoCoord`](../type-aliases/GeoCoord.md)

The geographic coordinate to project

### centerLongitude

`number` = `0`

The central meridian in degrees (default: 0)

## 戻り値

`Point`

The projected point in meters from the central meridian

## Remarks

The Mercator projection is a cylindrical map projection that preserves angles
and shapes locally. It's widely used for navigation because straight lines on
the map represent constant bearings (rhumb lines).

The projection uses Earth's mean radius of 6,371,000 meters.

Note: The Mercator projection becomes increasingly distorted near the poles.

## 例

```typescript
const coord = { latitude: 51.5074, longitude: -0.1278 }; // London
const point = mercatorProjection(coord);
console.log(point); // { x: -14232.4, y: 6711665.7 }

// With custom center longitude
const pointCentered = mercatorProjection(coord, -0.1278);
console.log(pointCentered.x); // Close to 0
```
