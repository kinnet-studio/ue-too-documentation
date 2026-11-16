[@ue-too/border](../globals.md) / rhumbDistance

# Function: rhumbDistance()

> **rhumbDistance**(`startCoord`, `endCoord`): `number`

Defined in: [rhumbLine.ts:42](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/border/src/rhumbLine.ts#L42)

Calculates the distance along a rhumb line between two points.

## Parameters

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## Returns

`number`

The distance in meters along the rhumb line

## Remarks

A rhumb line (also called loxodrome) is a path of constant bearing. Unlike great
circles, rhumb lines appear as straight lines on Mercator projections, making them
easier for navigation.

Rhumb lines are generally slightly longer than great circle routes, except when
traveling due east/west along the equator or due north/south.

Uses Earth's mean radius of 6,371,000 meters.

## Example

```typescript
const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };

const distance = rhumbDistance(start, end);
console.log('Rhumb distance:', distance / 1000, 'km');

// Compare with great circle distance
const gcDistance = greatCircleDistance(start, end);
console.log('Great circle is', (distance - gcDistance) / 1000, 'km shorter');
```
