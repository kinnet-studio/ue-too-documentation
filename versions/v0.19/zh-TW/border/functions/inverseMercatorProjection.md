[@ue-too/border](../globals.md) / inverseMercatorProjection

# Function: inverseMercatorProjection()

> **inverseMercatorProjection**(`point`, `centerLongitude`): [`GeoCoord`](../type-aliases/GeoCoord.md)

Defined in: [projection.ts:85](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/border/src/projection.ts#L85)

Converts a Mercator projection point back to geographic coordinates.

## Parameters

### point

`Point`

The point in Mercator projection (in meters)

### centerLongitude

`number` = `0`

The central meridian in degrees (must match the forward projection)

## Returns

[`GeoCoord`](../type-aliases/GeoCoord.md)

The geographic coordinate

## Remarks

This is the inverse of [mercatorProjection](mercatorProjection.md). Given a point in Mercator
projection space (in meters), it returns the corresponding latitude/longitude.

## Example

```typescript
const point = { x: -14232.4, y: 6711665.7 };
const coord = inverseMercatorProjection(point);
console.log(coord); // { latitude: ~51.5, longitude: ~-0.13 }
```
