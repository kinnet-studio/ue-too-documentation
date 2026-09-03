[@ue-too/board](../../modules.md) / [index](../index.md) / rotationWithinBoundary

# 函式: rotationWithinBoundary()

> **rotationWithinBoundary**(`rotation`, `rotationBoundary`): `boolean`

定義於: [packages/board/src/camera/utils/rotation.ts:179](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/rotation.ts#L179)

Checks if a rotation angle is within an experimental rotation boundary.

## 參數

### rotation

`number`

The rotation angle to check in radians

### rotationBoundary

[`RotationBoundary`](../type-aliases/RotationBoundary.md)

Rotation boundary with positive/negative direction

## 回傳

`boolean`

True if rotation is within the boundary range, false otherwise

## 備註

This is an experimental alternative to [rotationWithinLimits](rotationWithinLimits.md) using
positive/negative direction semantics instead of ccw/cw.
