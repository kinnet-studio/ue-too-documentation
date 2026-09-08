[@ue-too/border](../../modules.md) / [index](../index.md) / midPointOnRhumbLine

# 関数: midPointOnRhumbLine()

> **midPointOnRhumbLine**(`startCoord`, `endCoord`): [`GeoCoord`](../type-aliases/GeoCoord.md)

定義: [rhumbLine.ts:179](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/border/src/rhumbLine.ts#L179)

Calculates the midpoint along a rhumb line.

## パラメータ

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## 戻り値

[`GeoCoord`](../type-aliases/GeoCoord.md)

The midpoint on the rhumb line path

## Remarks

Finds the point exactly halfway along a rhumb line path between two points.

## 例

```typescript
const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };

const mid = midPointOnRhumbLine(start, end);
console.log('Midpoint:', mid);
```
