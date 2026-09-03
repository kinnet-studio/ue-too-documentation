[@ue-too/board](../../modules.md) / [index](../index.md) / RotationBoundary

# 型エイリアス: RotationBoundary

> **RotationBoundary** = `object`

定義: [packages/board/src/camera/utils/rotation.ts:39](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/rotation.ts#L39)

Experimental rotation boundary type with positive/negative direction semantics.

## Remarks

This is an experimental alternative to [RotationLimits](RotationLimits.md) with different direction semantics.

## プロパティ

### end

> **end**: `number`

定義: [packages/board/src/camera/utils/rotation.ts:41](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/rotation.ts#L41)

Ending angle of the boundary in radians

***

### positiveDirection

> **positiveDirection**: `boolean`

定義: [packages/board/src/camera/utils/rotation.ts:42](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/rotation.ts#L42)

If true, range extends in positive angle direction. If false, negative direction

***

### start

> **start**: `number`

定義: [packages/board/src/camera/utils/rotation.ts:40](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/rotation.ts#L40)

Starting angle of the boundary in radians

***

### startAsTieBreaker

> **startAsTieBreaker**: `boolean`

定義: [packages/board/src/camera/utils/rotation.ts:43](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/rotation.ts#L43)

When equidistant from start and end, prefer start if true, end if false
