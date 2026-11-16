[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / textLines

# Function: textLines()

> **textLines**(`shape`, `env`): `string`[]

Defined in: [packages/board/src/whiteboard/geometry/text.ts:135](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/geometry/text.ts#L135)

The lines a text shape or note is drawn as.

## Parameters

### shape

[`NoteShape`](../interfaces/NoteShape.md) | [`TextShape`](../interfaces/TextShape.md)

### env

[`TextEnv`](../interfaces/TextEnv.md)

## Returns

`string`[]

## Remarks

Text breaks only at newlines. A note also wraps each paragraph to its
width less [NOTE\_PADDING](../variables/NOTE_PADDING.md) on each side: at spaces, between Chinese,
Japanese and Korean characters, and inside a word too long for a line.
