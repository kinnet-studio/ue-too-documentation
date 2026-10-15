[@ue-too/border](../globals.md) / greatCircleDistance

# Function: greatCircleDistance()

> **greatCircleDistance**(`startCoord`, `endCoord`): `number`

Defined in: [greateCircle.ts:155](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/border/src/greateCircle.ts#L155)

Calculates the great circle distance between two points on Earth.

## Parameters

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## Returns

`number`

The distance in meters

## Remarks

Uses the haversine formula to calculate the shortest distance over Earth's
surface between two geographic coordinates. This is the "as-the-crow-flies"
distance.

The calculation assumes Earth's mean radius of 6,371,000 meters and treats
Earth as a perfect sphere.

## Example

```typescript
const nyc = { latitude: 40.7128, longitude: -74.0060 };
const london = { latitude: 51.5074, longitude: -0.1278 };

const distance = greatCircleDistance(nyc, london);
console.log('Distance:', distance / 1000, 'km'); // ~5570 km
```
