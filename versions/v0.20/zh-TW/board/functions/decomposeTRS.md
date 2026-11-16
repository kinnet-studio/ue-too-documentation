[@ue-too/board](../globals.md) / decomposeTRS

# Function: decomposeTRS()

> **decomposeTRS**(`matrix`): `object`

Defined in: [packages/board/src/camera/utils/matrix.ts:439](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/utils/matrix.ts#L439)

Decomposes a 2D transformation matrix into Translation, Rotation, and Scale (TRS)

## Parameters

### matrix

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

The transformation matrix to decompose

## Returns

`object`

Object containing translation, rotation (in radians), and scale components

### rotation

> **rotation**: `number`

### scale

> **scale**: `object`

#### scale.x

> **x**: `number`

#### scale.y

> **y**: `number`

### translation

> **translation**: `object`

#### translation.x

> **x**: `number`

#### translation.y

> **y**: `number`
