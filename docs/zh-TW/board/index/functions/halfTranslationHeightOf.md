[@ue-too/board](../../modules.md) / [index](../index.md) / halfTranslationHeightOf

# 函式: halfTranslationHeightOf()

> **halfTranslationHeightOf**(`boundaries`): `number` \| `undefined`

定義於: [packages/board/src/camera/utils/position.ts:400](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/board/src/camera/utils/position.ts#L400)

Calculates half the height (y-axis half-span) of the boundaries.

## 參數

### boundaries

The boundaries to measure

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## 回傳

`number` \| `undefined`

Half-height in world units, or undefined if y boundaries are not fully defined

## 備註

Useful for calculating radius or offset from center for y-axis.
Equivalent to `translationHeightOf(boundaries) / 2`.

## 範例

```typescript
halfTranslationHeightOf({
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
}); // 50
```
