[@ue-too/board](../../modules.md) / [index](../index.md) / clampPoint

# 関数: clampPoint()

> **clampPoint**(`point`, `boundaries`): `Point`

定義: [packages/board/src/camera/utils/position.ts:248](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/utils/position.ts#L248)

Clamps a point to stay within specified boundaries.

## パラメータ

### point

`Point`

Point to clamp in world coordinates

### boundaries

Optional boundary constraints

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## 戻り値

`Point`

Clamped point, or original if already within bounds or no boundaries

## Remarks

Each axis is clamped independently:
- If a min constraint exists on an axis, ensures point >= min
- If a max constraint exists on an axis, ensures point <= max
- If no constraint exists on an axis, that axis is unchanged

## 例

```typescript
const bounds: Boundaries = {
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
};

clampPoint({ x: 0, y: 0 }, bounds);       // { x: 0, y: 0 } (inside)
clampPoint({ x: 150, y: 0 }, bounds);     // { x: 100, y: 0 } (clamped x)
clampPoint({ x: 0, y: -100 }, bounds);    // { x: 0, y: -50 } (clamped y)
clampPoint({ x: 200, y: -200 }, bounds);  // { x: 100, y: -50 } (both clamped)
clampPoint({ x: 0, y: 0 }, undefined);    // { x: 0, y: 0 } (no bounds)
```
