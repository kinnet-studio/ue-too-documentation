[@ue-too/border](../../modules.md) / [index](../index.md) / orthoProjection

# 関数: orthoProjection()

> **orthoProjection**(`interestPoint`, `origin`): `object`

定義: [projection.ts:129](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/border/src/projection.ts#L129)

Projects a geographic coordinate to orthographic projection.

## パラメータ

### interestPoint

[`GeoCoord`](../type-aliases/GeoCoord.md)

The geographic coordinate to project

### origin

[`GeoCoord`](../type-aliases/GeoCoord.md)

The center point of the hemisphere to view

## 戻り値

`object`

Object with clipped flag and projected coordinate

### clipped

> **clipped**: `boolean`

### coord

> **coord**: `Point`

## Remarks

The orthographic projection shows Earth as it would appear from space,
displaying one hemisphere at a time. It's useful for globe-like visualizations.

Points on the back hemisphere (not visible from the origin viewpoint) are
marked as clipped.

The projection uses Earth's mean radius of 6,371,000 meters.

## 例

```typescript
const origin = { latitude: 45.0, longitude: 0.0 }; // View centered on France
const coord = { latitude: 51.5, longitude: -0.1 }; // London

const result = orthoProjection(coord, origin);
if (!result.clipped) {
  console.log('London is visible at:', result.coord);
} else {
  console.log('London is on the back of the globe');
}
```
