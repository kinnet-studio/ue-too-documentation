[@ue-too/border](../../modules.md) / [index](../index.md) / inverseOrthoProjection

# Function: inverseOrthoProjection()

> **inverseOrthoProjection**(`interestPoint`, `origin`): [`GeoCoord`](../type-aliases/GeoCoord.md)

Defined in: [projection.ts:176](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/border/src/projection.ts#L176)

Converts an orthographic projection point back to geographic coordinates.

## Parameters

### interestPoint

`Point`

The point in orthographic projection (in meters)

### origin

[`GeoCoord`](../type-aliases/GeoCoord.md)

The center point of the hemisphere (must match the forward projection)

## Returns

[`GeoCoord`](../type-aliases/GeoCoord.md)

The geographic coordinate

## Remarks

This is the inverse of [orthoProjection](orthoProjection.md). Given a point in orthographic
projection space (in meters), it returns the corresponding latitude/longitude.

## Example

```typescript
const origin = { latitude: 45.0, longitude: 0.0 };
const point = { x: 100000, y: 200000 }; // Some point in projection space
const coord = inverseOrthoProjection(point, origin);
console.log(coord); // { latitude: ..., longitude: ... }
```
