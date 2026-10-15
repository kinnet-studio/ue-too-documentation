[@ue-too/board](../globals.md) / isValidBoundaries

# Function: isValidBoundaries()

> **isValidBoundaries**(`boundaries`): `boolean`

Defined in: [packages/board/src/camera/utils/position.ts:151](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/position.ts#L151)

Validates that boundaries are logically consistent.

## Parameters

### boundaries

The boundaries to validate

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## Returns

`boolean`

True if boundaries are valid or undefined, false if min >= max on any axis

## Remarks

Returns false if:
- On any axis, both min and max are defined AND min >= max

Returns true if:
- Boundaries are undefined
- Only min or max is defined on an axis
- Both are defined and min < max on all axes

## Example

```typescript
isValidBoundaries({ min: { x: 0, y: 0 }, max: { x: 100, y: 100 } }); // true
isValidBoundaries({ min: { x: 100 }, max: { x: 0 } });               // false (min > max)
isValidBoundaries({ min: { x: 50, y: 50 }, max: { x: 50, y: 60 } }); // false (x min == max)
isValidBoundaries({ min: { x: 0 } });                                // true (partial)
isValidBoundaries(undefined);                                         // true
```
