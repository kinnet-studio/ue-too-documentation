[@ue-too/board](../globals.md) / RotationLimits

# Type Alias: RotationLimits

> **RotationLimits** = `object`

Defined in: [packages/board/src/camera/utils/rotation.ts:19](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L19)

Constraints for camera rotation defining an angular range with direction.

## Remarks

Rotation limits define an angular arc. The direction (ccw) determines which
way around the circle the range extends from start to end.

For example:
- start=0, end=π/2, ccw=true: allows 0 to π/2 (0° to 90°)
- start=0, end=π/2, ccw=false: allows 0 to -3π/2 going clockwise (0° to 270° the other way)

## Properties

### ccw

> **ccw**: `boolean`

Defined in: [packages/board/src/camera/utils/rotation.ts:22](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L22)

If true, the range is measured counter-clockwise from start to end. If false, clockwise

***

### end

> **end**: `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:21](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L21)

Ending angle of the allowed range in radians

***

### start

> **start**: `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:20](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L20)

Starting angle of the allowed range in radians

***

### startAsTieBreaker

> **startAsTieBreaker**: `boolean`

Defined in: [packages/board/src/camera/utils/rotation.ts:23](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L23)

When clamping and distance to start equals distance to end, clamp to start if true, end if false
