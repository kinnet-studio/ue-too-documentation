[@ue-too/board](../../modules.md) / [index](../index.md) / RotationLimits

# 型別別名: RotationLimits

> **RotationLimits** = `object`

定義於: [packages/board/src/camera/utils/rotation.ts:19](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/rotation.ts#L19)

Constraints for camera rotation defining an angular range with direction.

## 備註

Rotation limits define an angular arc. The direction (ccw) determines which
way around the circle the range extends from start to end.

For example:
- start=0, end=π/2, ccw=true: allows 0 to π/2 (0° to 90°)
- start=0, end=π/2, ccw=false: allows 0 to -3π/2 going clockwise (0° to 270° the other way)

## 屬性

### ccw

> **ccw**: `boolean`

定義於: [packages/board/src/camera/utils/rotation.ts:22](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/rotation.ts#L22)

If true, the range is measured counter-clockwise from start to end. If false, clockwise

***

### end

> **end**: `number`

定義於: [packages/board/src/camera/utils/rotation.ts:21](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/rotation.ts#L21)

Ending angle of the allowed range in radians

***

### start

> **start**: `number`

定義於: [packages/board/src/camera/utils/rotation.ts:20](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/rotation.ts#L20)

Starting angle of the allowed range in radians

***

### startAsTieBreaker

> **startAsTieBreaker**: `boolean`

定義於: [packages/board/src/camera/utils/rotation.ts:23](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/rotation.ts#L23)

When clamping and distance to start equals distance to end, clamp to start if true, end if false
