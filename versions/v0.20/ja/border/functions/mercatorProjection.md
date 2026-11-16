[@ue-too/border](../globals.md) / mercatorProjection

# Function: mercatorProjection()

> **mercatorProjection**(`interestPoint`, `centerLongitude`): `Point`

Defined in: [projection.ts:49](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/border/src/projection.ts#L49)

Projects a geographic coordinate to Mercator projection.

## Parameters

### interestPoint

[`GeoCoord`](../type-aliases/GeoCoord.md)

The geographic coordinate to project

### centerLongitude

`number` = `0`

The central meridian in degrees (default: 0)

## Returns

`Point`

The projected point in meters from the central meridian

## Remarks

The Mercator projection is a cylindrical map projection that preserves angles
and shapes locally. It's widely used for navigation because straight lines on
the map represent constant bearings (rhumb lines).

The projection uses Earth's mean radius of 6,371,000 meters.

Note: The Mercator projection becomes increasingly distorted near the poles.

## Example

```typescript
const coord = { latitude: 51.5074, longitude: -0.1278 }; // London
const point = mercatorProjection(coord);
console.log(point); // { x: -14232.4, y: 6711665.7 }

// With custom center longitude
const pointCentered = mercatorProjection(coord, -0.1278);
console.log(pointCentered.x); // Close to 0
```
