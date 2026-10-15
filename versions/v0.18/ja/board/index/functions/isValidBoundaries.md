[@ue-too/board](../../modules.md) / [index](../index.md) / isValidBoundaries

# 関数: isValidBoundaries()

> **isValidBoundaries**(`boundaries`): `boolean`

定義: [packages/board/src/camera/utils/position.ts:151](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/utils/position.ts#L151)

Validates that boundaries are logically consistent.

## パラメータ

### boundaries

The boundaries to validate

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## 戻り値

`boolean`

True if boundaries are valid or undefined, false if min >= max on any axis

## Remarks

Returns false if:
- On any axis, both min and max are defined AND min >= max

Returns true if:
- Boundaries are undefined
- Only min or max is defined on an axis
- Both are defined and min < max on all axes

## 例

```typescript
isValidBoundaries({ min: { x: 0, y: 0 }, max: { x: 100, y: 100 } }); // true
isValidBoundaries({ min: { x: 100 }, max: { x: 0 } });               // false (min > max)
isValidBoundaries({ min: { x: 50, y: 50 }, max: { x: 50, y: 60 } }); // false (x min == max)
isValidBoundaries({ min: { x: 0 } });                                // true (partial)
isValidBoundaries(undefined);                                         // true
```
