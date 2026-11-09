[@ue-too/board](../../modules.md) / [index](../index.md) / decomposeTRS

# Function: decomposeTRS()

> **decomposeTRS**(`matrix`): `object`

Defined in: [packages/board/src/camera/utils/matrix.ts:368](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/board/src/camera/utils/matrix.ts#L368)

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
