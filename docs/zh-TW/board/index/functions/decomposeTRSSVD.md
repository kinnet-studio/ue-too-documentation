[@ue-too/board](../../modules.md) / [index](../index.md) / decomposeTRSSVD

# 函式: decomposeTRSSVD()

> **decomposeTRSSVD**(`matrix`): `object`

定義於: [packages/board/src/camera/utils/matrix.ts:491](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/utils/matrix.ts#L491)

Decomposes a matrix using SVD (Singular Value Decomposition) approach
This is an alternative method that can handle more complex transformations

## 參數

### matrix

[`TransformationMatrix`](../type-aliases/TransformationMatrix.md)

The transformation matrix to decompose

## 回傳

`object`

Object containing translation, rotation, and scale components

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
