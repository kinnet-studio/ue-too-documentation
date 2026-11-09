[@ue-too/border](../../modules.md) / [index](../index.md) / midPointOnGreatCircle

# 関数: midPointOnGreatCircle()

> **midPointOnGreatCircle**(`startCoord`, `endCoord`): [`GeoCoord`](../type-aliases/GeoCoord.md)

定義: [greateCircle.ts:86](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/border/src/greateCircle.ts#L86)

Calculates the midpoint along a great circle path.

## パラメータ

### startCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The starting geographic coordinate

### endCoord

[`GeoCoord`](../type-aliases/GeoCoord.md)

The ending geographic coordinate

## 戻り値

[`GeoCoord`](../type-aliases/GeoCoord.md)

The midpoint on the great circle path

## Remarks

This is a specialized, optimized version of [intermediatePointOnGreatCircle](intermediatePointOnGreatCircle.md)
for finding the exact midpoint (fraction = 0.5).

## 例

```typescript
const start = { latitude: 50.0, longitude: -5.0 };
const end = { latitude: 58.0, longitude: 3.0 };
const mid = midPointOnGreatCircle(start, end);
console.log('Midpoint:', mid);
```
