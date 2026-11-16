[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / textLines

# 関数: textLines()

> **textLines**(`shape`, `env`): `string`[]

定義: [packages/board/src/whiteboard/geometry/text.ts:135](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/geometry/text.ts#L135)

The lines a text shape or note is drawn as.

## パラメータ

### shape

[`NoteShape`](../interfaces/NoteShape.md) | [`TextShape`](../interfaces/TextShape.md)

### env

[`TextEnv`](../interfaces/TextEnv.md)

## 戻り値

`string`[]

## Remarks

Text breaks only at newlines. A note also wraps each paragraph to its
width less [NOTE\_PADDING](../variables/NOTE_PADDING.md) on each side: at spaces, between Chinese,
Japanese and Korean characters, and inside a word too long for a line.
