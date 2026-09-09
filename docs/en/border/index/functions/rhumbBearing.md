[@ue-too/border](../../modules.md) / [index](../index.md) / rhumbBearing

# Function: rhumbBearing()

> **rhumbBearing**(`startCoord`, `endCoord`): `number`

Defined in: [rhumbLine.ts:89](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/border/src/rhumbLine.ts#L89)

Calculates the constant bearing along a rhumb line.

## Parameters

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## Returns

`number`

The constant bearing in degrees (0-360)

## Remarks

Unlike great circles where the bearing changes along the path, rhumb lines
maintain a constant bearing. This makes them simpler for navigation - you can
follow a single compass direction.

## Example

```typescript
const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };

const bearing = rhumbBearing(start, end);
console.log('Constant bearing:', bearing, 'degrees');

// This bearing stays constant along the entire path
```
