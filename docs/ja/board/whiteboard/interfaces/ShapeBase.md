[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / ShapeBase

# インターフェイス: ShapeBase\<T\>

定義: [packages/board/src/whiteboard/document/types.ts:55](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L55)

Fields every shape record has. Records are plain JSON and immutable: an
update replaces the whole record.

## によって拡張された

- [`RectShape`](RectShape.md)
- [`EllipseShape`](EllipseShape.md)
- [`NoteShape`](NoteShape.md)
- [`ArrowShape`](ArrowShape.md)
- [`LineShape`](LineShape.md)
- [`PenShape`](PenShape.md)
- [`TextShape`](TextShape.md)

## 型パラメーター

### T

`T` *extends* [`ShapeType`](../type-aliases/ShapeType.md)

## プロパティ

### id

> **id**: `string`

定義: [packages/board/src/whiteboard/document/types.ts:57](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L57)

Random, 16 base-62 characters

***

### index

> **index**: `string`

定義: [packages/board/src/whiteboard/document/types.ts:65](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L65)

Fractional index: stacking order, sorted as a plain string

***

### rotation

> **rotation**: `number`

定義: [packages/board/src/whiteboard/document/types.ts:63](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L63)

Radians; always 0 for now

***

### seed

> **seed**: `number`

定義: [packages/board/src/whiteboard/document/types.ts:67](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L67)

Fixes the sketchy wobble, so every viewer sees the same shape

***

### style

> **style**: [`ShapeStyle`](ShapeStyle.md)

定義: [packages/board/src/whiteboard/document/types.ts:68](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L68)

***

### type

> **type**: `T`

定義: [packages/board/src/whiteboard/document/types.ts:58](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L58)

***

### x

> **x**: `number`

定義: [packages/board/src/whiteboard/document/types.ts:60](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L60)

World position of the shape's origin (see each shape type)

***

### y

> **y**: `number`

定義: [packages/board/src/whiteboard/document/types.ts:61](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L61)
