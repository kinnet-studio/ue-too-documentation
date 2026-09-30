[@ue-too/border](../../modules.md) / [index](../index.md) / inverseOrthoProjection

# 関数: inverseOrthoProjection()

> **inverseOrthoProjection**(`interestPoint`, `origin`): [`GeoCoord`](../type-aliases/GeoCoord.md)

定義: [projection.ts:176](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/border/src/projection.ts#L176)

Converts an orthographic projection point back to geographic coordinates.

## パラメータ

### interestPoint

`Point`

The point in orthographic projection (in meters)

### origin

[`GeoCoord`](../type-aliases/GeoCoord.md)

The center point of the hemisphere (must match the forward projection)

## 戻り値

[`GeoCoord`](../type-aliases/GeoCoord.md)

The geographic coordinate

## Remarks

This is the inverse of [orthoProjection](orthoProjection.md). Given a point in orthographic
projection space (in meters), it returns the corresponding latitude/longitude.

## 例

```typescript
const origin = { latitude: 45.0, longitude: 0.0 };
const point = { x: 100000, y: 200000 }; // Some point in projection space
const coord = inverseOrthoProjection(point, origin);
console.log(coord); // { latitude: ..., longitude: ... }
```
