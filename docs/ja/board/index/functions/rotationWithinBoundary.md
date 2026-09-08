[@ue-too/board](../../modules.md) / [index](../index.md) / rotationWithinBoundary

# 関数: rotationWithinBoundary()

> **rotationWithinBoundary**(`rotation`, `rotationBoundary`): `boolean`

定義: [packages/board/src/camera/utils/rotation.ts:179](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/rotation.ts#L179)

Checks if a rotation angle is within an experimental rotation boundary.

## パラメータ

### rotation

`number`

The rotation angle to check in radians

### rotationBoundary

[`RotationBoundary`](../type-aliases/RotationBoundary.md)

Rotation boundary with positive/negative direction

## 戻り値

`boolean`

True if rotation is within the boundary range, false otherwise

## Remarks

This is an experimental alternative to [rotationWithinLimits](rotationWithinLimits.md) using
positive/negative direction semantics instead of ccw/cw.
