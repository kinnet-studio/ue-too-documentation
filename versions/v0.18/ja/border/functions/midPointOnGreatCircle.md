[@ue-too/border](../globals.md) / midPointOnGreatCircle

# Function: midPointOnGreatCircle()

> **midPointOnGreatCircle**(`startCoord`, `endCoord`): [`GeoCoord`](../type-aliases/GeoCoord.md)

Defined in: [greateCircle.ts:86](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/border/src/greateCircle.ts#L86)

Calculates the midpoint along a great circle path.

## Parameters

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## Returns

[`GeoCoord`](../type-aliases/GeoCoord.md)

The midpoint on the great circle path

## Remarks

This is a specialized, optimized version of [intermediatePointOnGreatCircle](intermediatePointOnGreatCircle.md)
for finding the exact midpoint (fraction = 0.5).

## Example

```typescript
const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };
const mid = midPointOnGreatCircle(start, end);
console.log('Midpoint:', mid);
```
