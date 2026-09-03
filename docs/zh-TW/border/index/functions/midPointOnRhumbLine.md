[@ue-too/border](../../modules.md) / [index](../index.md) / midPointOnRhumbLine

# 函式: midPointOnRhumbLine()

> **midPointOnRhumbLine**(`startCoord`, `endCoord`): [`GeoCoord`](../type-aliases/GeoCoord.md)

定義於: [rhumbLine.ts:179](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/border/src/rhumbLine.ts#L179)

Calculates the midpoint along a rhumb line.

## 參數

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## 回傳

[`GeoCoord`](../type-aliases/GeoCoord.md)

The midpoint on the rhumb line path

## 備註

Finds the point exactly halfway along a rhumb line path between two points.

## 範例

```typescript
const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };

const mid = midPointOnRhumbLine(start, end);
console.log('Midpoint:', mid);
```
