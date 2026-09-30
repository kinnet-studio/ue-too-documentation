[@ue-too/board](../../modules.md) / [index](../index.md) / translationWidthOf

# 函式: translationWidthOf()

> **translationWidthOf**(`boundaries`): `number` \| `undefined`

定義於: [packages/board/src/camera/utils/position.ts:300](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/utils/position.ts#L300)

Calculates the width (x-axis span) of the boundaries.

## 參數

### boundaries

The boundaries to measure

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## 回傳

`number` \| `undefined`

Width in world units, or undefined if x boundaries are not fully defined

## 備註

Returns undefined if boundaries don't have both min.x and max.x defined.
Result is always non-negative for valid boundaries (max.x - min.x).

## 範例

```typescript
translationWidthOf({
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
}); // 200

translationWidthOf({ min: { x: 0 } }); // undefined (no max.x)
translationWidthOf(undefined);          // undefined
```
