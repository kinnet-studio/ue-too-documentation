[@ue-too/border](../globals.md) / intermediatePointOnGreatCircle

# Function: intermediatePointOnGreatCircle()

> **intermediatePointOnGreatCircle**(`startCoord`, `endCoord`, `fraction`): [`GeoCoord`](../type-aliases/GeoCoord.md)

Defined in: [greateCircle.ts:38](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/border/src/greateCircle.ts#L38)

Calculates an intermediate point along a great circle path.

## Parameters

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

### fraction

`number`

The fraction along the path (0 = start, 1 = end, 0.5 = midpoint)

## Returns

[`GeoCoord`](../type-aliases/GeoCoord.md)

The intermediate point at the specified fraction

## Remarks

Given two points on Earth's surface, this finds a point at a specified
fraction along the great circle (shortest) path between them.

Uses the spherical interpolation formula for accurate results on a sphere.

## Example

```typescript
const nyc = { latitude: 40.7128, longitude: -74.0060 };
const london = { latitude: 51.5074, longitude: -0.1278 };

// Find point 25% of the way from NYC to London
const quarter = intermediatePointOnGreatCircle(nyc, london, 0.25);

// Find point 75% of the way
const threeQuarters = intermediatePointOnGreatCircle(nyc, london, 0.75);
```
