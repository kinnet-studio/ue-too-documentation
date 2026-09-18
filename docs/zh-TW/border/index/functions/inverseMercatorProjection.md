[@ue-too/border](../../modules.md) / [index](../index.md) / inverseMercatorProjection

# 函式: inverseMercatorProjection()

> **inverseMercatorProjection**(`point`, `centerLongitude`): [`GeoCoord`](../type-aliases/GeoCoord.md)

定義於: [projection.ts:85](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/border/src/projection.ts#L85)

Converts a Mercator projection point back to geographic coordinates.

## 參數

### point

`Point`

The point in Mercator projection (in meters)

### centerLongitude

`number` = `0`

The central meridian in degrees (must match the forward projection)

## 回傳

[`GeoCoord`](../type-aliases/GeoCoord.md)

The geographic coordinate

## 備註

This is the inverse of [mercatorProjection](mercatorProjection.md). Given a point in Mercator
projection space (in meters), it returns the corresponding latitude/longitude.

## 範例

```typescript
const point = { x: -14232.4, y: 6711665.7 };
const coord = inverseMercatorProjection(point);
console.log(coord); // { latitude: ~51.5, longitude: ~-0.13 }
```
