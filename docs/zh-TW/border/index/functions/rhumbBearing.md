[@ue-too/border](../../modules.md) / [index](../index.md) / rhumbBearing

# 函式: rhumbBearing()

> **rhumbBearing**(`startCoord`, `endCoord`): `number`

定義於: [rhumbLine.ts:89](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/border/src/rhumbLine.ts#L89)

Calculates the constant bearing along a rhumb line.

## 參數

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## 回傳

`number`

The constant bearing in degrees (0-360)

## 備註

Unlike great circles where the bearing changes along the path, rhumb lines
maintain a constant bearing. This makes them simpler for navigation - you can
follow a single compass direction.

## 範例

```typescript
const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };

const bearing = rhumbBearing(start, end);
console.log('Constant bearing:', bearing, 'degrees');

// This bearing stays constant along the entire path
```
