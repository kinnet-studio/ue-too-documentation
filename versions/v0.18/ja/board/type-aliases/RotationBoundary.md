[@ue-too/board](../globals.md) / RotationBoundary

# Type Alias: RotationBoundary

> **RotationBoundary** = `object`

Defined in: [packages/board/src/camera/utils/rotation.ts:39](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L39)

Experimental rotation boundary type with positive/negative direction semantics.

## Remarks

This is an experimental alternative to [RotationLimits](RotationLimits.md) with different direction semantics.

## Properties

### end

> **end**: `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:41](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L41)

Ending angle of the boundary in radians

***

### positiveDirection

> **positiveDirection**: `boolean`

Defined in: [packages/board/src/camera/utils/rotation.ts:42](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L42)

If true, range extends in positive angle direction. If false, negative direction

***

### start

> **start**: `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:40](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L40)

Starting angle of the boundary in radians

***

### startAsTieBreaker

> **startAsTieBreaker**: `boolean`

Defined in: [packages/board/src/camera/utils/rotation.ts:43](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/rotation.ts#L43)

When equidistant from start and end, prefer start if true, end if false
