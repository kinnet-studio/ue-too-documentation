[@ue-too/board](../../modules.md) / [index](../index.md) / halfTranslationWidthOf

# Function: halfTranslationWidthOf()

> **halfTranslationWidthOf**(`boundaries`): `number` \| `undefined`

Defined in: [packages/board/src/camera/utils/position.ts:335](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/position.ts#L335)

Calculates half the width (x-axis half-span) of the boundaries.

## Parameters

### boundaries

The boundaries to measure

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## Returns

`number` \| `undefined`

Half-width in world units, or undefined if x boundaries are not fully defined

## Remarks

Useful for calculating radius or offset from center for x-axis.
Equivalent to `translationWidthOf(boundaries) / 2`.

## Example

```typescript
halfTranslationWidthOf({
  min: { x: -100, y: -50 },
  max: { x: 100, y: 50 }
}); // 100
```
