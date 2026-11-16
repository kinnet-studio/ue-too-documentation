[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / LineShape

# 介面: LineShape

定義於: [packages/board/src/whiteboard/document/types.ts:116](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L116)

A straight line from `x`, `y` to `end` (relative to `x`, `y`).

## Extends

- [`ShapeBase`](ShapeBase.md)\<`"line"`\>

## 屬性

### end

> **end**: \[`number`, `number`\]

定義於: [packages/board/src/whiteboard/document/types.ts:117](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L117)

***

### id

> **id**: `string`

定義於: [packages/board/src/whiteboard/document/types.ts:57](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L57)

Random, 16 base-62 characters

#### 繼承自

[`ShapeBase`](ShapeBase.md).[`id`](ShapeBase.md#id)

***

### index

> **index**: `string`

定義於: [packages/board/src/whiteboard/document/types.ts:65](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L65)

Fractional index: stacking order, sorted as a plain string

#### 繼承自

[`ShapeBase`](ShapeBase.md).[`index`](ShapeBase.md#index)

***

### rotation

> **rotation**: `number`

定義於: [packages/board/src/whiteboard/document/types.ts:63](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L63)

Radians; always 0 for now

#### 繼承自

[`ShapeBase`](ShapeBase.md).[`rotation`](ShapeBase.md#rotation)

***

### seed

> **seed**: `number`

定義於: [packages/board/src/whiteboard/document/types.ts:67](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L67)

Fixes the sketchy wobble, so every viewer sees the same shape

#### 繼承自

[`ShapeBase`](ShapeBase.md).[`seed`](ShapeBase.md#seed)

***

### style

> **style**: [`ShapeStyle`](ShapeStyle.md)

定義於: [packages/board/src/whiteboard/document/types.ts:68](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L68)

#### 繼承自

[`ShapeBase`](ShapeBase.md).[`style`](ShapeBase.md#style)

***

### type

> **type**: `"line"`

定義於: [packages/board/src/whiteboard/document/types.ts:58](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L58)

#### 繼承自

[`ShapeBase`](ShapeBase.md).[`type`](ShapeBase.md#type)

***

### x

> **x**: `number`

定義於: [packages/board/src/whiteboard/document/types.ts:60](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L60)

World position of the shape's origin (see each shape type)

#### 繼承自

[`ShapeBase`](ShapeBase.md).[`x`](ShapeBase.md#x)

***

### y

> **y**: `number`

定義於: [packages/board/src/whiteboard/document/types.ts:61](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L61)

#### 繼承自

[`ShapeBase`](ShapeBase.md).[`y`](ShapeBase.md#y)
