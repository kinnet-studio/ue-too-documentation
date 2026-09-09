[@ue-too/math](../../modules.md) / [index](../index.md) / directionAlignedToTangent

# 関数: directionAlignedToTangent()

> **directionAlignedToTangent**(`direction`, `tangent`): `boolean`

定義: [index.ts:824](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/math/src/index.ts#L824)

Checks if a direction vector is aligned with a tangent vector.

## パラメータ

### direction

[`Point`](../type-aliases/Point-1.md)

Direction vector to check

### tangent

[`Point`](../type-aliases/Point-1.md)

Tangent vector reference

## 戻り値

`boolean`

True if direction aligns with tangent (within 90 degrees)

## Remarks

Returns true if the direction is within 90 degrees of either the tangent
or its reverse. Useful for determining if movement is along a path.

## 例

```typescript
const direction = { x: 1, y: 0 };
const tangent = { x: 1, y: 0.1 }; // Slightly rotated
directionAlignedToTangent(direction, tangent); // true

const perpendicular = { x: 0, y: 1 };
directionAlignedToTangent(perpendicular, tangent); // false
```
