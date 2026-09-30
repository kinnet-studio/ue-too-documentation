[@ue-too/board](../../modules.md) / [index](../index.md) / translationHeightOf

# 函式: translationHeightOf()

> **translationHeightOf**(`boundaries`): `number` \| `undefined`

定義於: [packages/board/src/camera/utils/position.ts:365](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/utils/position.ts#L365)

Calculates the height (y-axis span) of the boundaries.

## 參數

### boundaries

The boundaries to measure

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## 回傳

`number` \| `undefined`

Height in world units, or undefined if y boundaries are not fully defined

## 備註

Returns undefined if boundaries don't have both min.y and max.y defined.
Result is always non-negative for valid boundaries (max.y - min.y).

## 範例

```typescript
translationHeightOf({
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
}); // 100

translationHeightOf({ min: { y: 0 } }); // undefined (no max.y)
translationHeightOf(undefined);          // undefined
```
