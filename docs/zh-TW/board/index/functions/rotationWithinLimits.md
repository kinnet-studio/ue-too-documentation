[@ue-too/board](../../modules.md) / [index](../index.md) / rotationWithinLimits

# 函式: rotationWithinLimits()

> **rotationWithinLimits**(`rotation`, `rotationLimits?`): `boolean`

定義於: [packages/board/src/camera/utils/rotation.ts:130](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/utils/rotation.ts#L130)

Checks if a rotation angle is within specified angular limits.

## 參數

### rotation

`number`

The rotation angle to check in radians

### rotationLimits?

[`RotationLimits`](../type-aliases/RotationLimits.md)

Optional rotation constraints with direction

## 回傳

`boolean`

True if rotation is within the allowed arc or no limits specified, false otherwise

## 備註

Returns true if:
- No limits are specified (undefined)
- Start and end angles are effectively equal (full circle allowed)
- Rotation falls within the arc from start to end in the specified direction

The rotation is normalized to [0, 2π] before checking.

## 範例

```typescript
const limits = { start: 0, end: Math.PI/2, ccw: true, startAsTieBreaker: true };

rotationWithinLimits(Math.PI/4, limits);   // true (within range)
rotationWithinLimits(Math.PI, limits);     // false (outside range)
rotationWithinLimits(0, limits);           // true (at start)
rotationWithinLimits(Math.PI/2, limits);   // true (at end)
```
