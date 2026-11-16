[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / NoteShape

# Interface: NoteShape

Defined in: [packages/board/src/whiteboard/document/types.ts:96](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L96)

A sticky note; `x`, `y` is its top-left corner. Its text wraps to its width.

## Extends

- [`ShapeBase`](ShapeBase.md)\<`"note"`\>

## Properties

### h

> **h**: `number`

Defined in: [packages/board/src/whiteboard/document/types.ts:98](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L98)

***

### id

> **id**: `string`

Defined in: [packages/board/src/whiteboard/document/types.ts:57](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L57)

Random, 16 base-62 characters

#### Inherited from

[`ShapeBase`](ShapeBase.md).[`id`](ShapeBase.md#id)

***

### index

> **index**: `string`

Defined in: [packages/board/src/whiteboard/document/types.ts:65](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L65)

Fractional index: stacking order, sorted as a plain string

#### Inherited from

[`ShapeBase`](ShapeBase.md).[`index`](ShapeBase.md#index)

***

### rotation

> **rotation**: `number`

Defined in: [packages/board/src/whiteboard/document/types.ts:63](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L63)

Radians; always 0 for now

#### Inherited from

[`ShapeBase`](ShapeBase.md).[`rotation`](ShapeBase.md#rotation)

***

### seed

> **seed**: `number`

Defined in: [packages/board/src/whiteboard/document/types.ts:67](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L67)

Fixes the sketchy wobble, so every viewer sees the same shape

#### Inherited from

[`ShapeBase`](ShapeBase.md).[`seed`](ShapeBase.md#seed)

***

### style

> **style**: [`ShapeStyle`](ShapeStyle.md)

Defined in: [packages/board/src/whiteboard/document/types.ts:68](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L68)

#### Inherited from

[`ShapeBase`](ShapeBase.md).[`style`](ShapeBase.md#style)

***

### text

> **text**: `string`

Defined in: [packages/board/src/whiteboard/document/types.ts:99](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L99)

***

### type

> **type**: `"note"`

Defined in: [packages/board/src/whiteboard/document/types.ts:58](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L58)

#### Inherited from

[`ShapeBase`](ShapeBase.md).[`type`](ShapeBase.md#type)

***

### w

> **w**: `number`

Defined in: [packages/board/src/whiteboard/document/types.ts:97](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L97)

***

### x

> **x**: `number`

Defined in: [packages/board/src/whiteboard/document/types.ts:60](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L60)

World position of the shape's origin (see each shape type)

#### Inherited from

[`ShapeBase`](ShapeBase.md).[`x`](ShapeBase.md#x)

***

### y

> **y**: `number`

Defined in: [packages/board/src/whiteboard/document/types.ts:61](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L61)

#### Inherited from

[`ShapeBase`](ShapeBase.md).[`y`](ShapeBase.md#y)
