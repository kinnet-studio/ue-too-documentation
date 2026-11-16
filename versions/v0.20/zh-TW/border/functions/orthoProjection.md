[@ue-too/border](../globals.md) / orthoProjection

# Function: orthoProjection()

> **orthoProjection**(`interestPoint`, `origin`): `object`

Defined in: [projection.ts:129](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/border/src/projection.ts#L129)

Projects a geographic coordinate to orthographic projection.

## Parameters

### interestPoint

[`GeoCoord`](../type-aliases/GeoCoord.md)

The geographic coordinate to project

### origin

[`GeoCoord`](../type-aliases/GeoCoord.md)

The center point of the hemisphere to view

## Returns

`object`

Object with clipped flag and projected coordinate

### clipped

> **clipped**: `boolean`

### coord

> **coord**: `Point`

## Remarks

The orthographic projection shows Earth as it would appear from space,
displaying one hemisphere at a time. It's useful for globe-like visualizations.

Points on the back hemisphere (not visible from the origin viewpoint) are
marked as clipped.

The projection uses Earth's mean radius of 6,371,000 meters.

## Example

```typescript
const origin = { latitude: 45.0, longitude: 0.0 }; // View centered on France
const coord = { latitude: 51.5, longitude: -0.1 }; // London

const result = orthoProjection(coord, origin);
if (!result.clipped) {
  console.log('London is visible at:', result.coord);
} else {
  console.log('London is on the back of the globe');
}
```
