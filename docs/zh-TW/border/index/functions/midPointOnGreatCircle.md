[@ue-too/border](../../modules.md) / [index](../index.md) / midPointOnGreatCircle

# 函式: midPointOnGreatCircle()

> **midPointOnGreatCircle**(`startCoord`, `endCoord`): [`GeoCoord`](../type-aliases/GeoCoord.md)

定義於: [greateCircle.ts:86](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/border/src/greateCircle.ts#L86)

Calculates the midpoint along a great circle path.

## 參數

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## 回傳

[`GeoCoord`](../type-aliases/GeoCoord.md)

The midpoint on the great circle path

## 備註

This is a specialized, optimized version of [intermediatePointOnGreatCircle](intermediatePointOnGreatCircle.md)
for finding the exact midpoint (fraction = 0.5).

## 範例

```typescript
const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };
const mid = midPointOnGreatCircle(start, end);
console.log('Midpoint:', mid);
```
