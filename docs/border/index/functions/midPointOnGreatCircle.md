[@ue-too/border](../../modules.md) / [index](../index.md) / midPointOnGreatCircle

# Function: midPointOnGreatCircle()

> **midPointOnGreatCircle**(`startCoord`, `endCoord`): [`GeoCoord`](../type-aliases/GeoCoord.md)

Defined in: [greateCircle.ts:86](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/border/src/greateCircle.ts#L86)

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
