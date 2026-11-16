[@ue-too/being-devtools](../globals.md) / attachBoardDebugger

# Function: attachBoardDebugger()

> **attachBoardDebugger**(`board`, `options?`): [`AttachHandle`](../type-aliases/AttachHandle.md)

Defined in: [attach.ts:112](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/being-devtools/src/attach.ts#L112)

Attaches every `being` machine a `Board` exposes — keyboard/mouse input,
touch input, pan, zoom, and rotation control — to the shared panel.

## Parameters

### board

[`BoardLike`](../type-aliases/BoardLike.md)

### options?

#### namePrefix?

`string`

## Returns

[`AttachHandle`](../type-aliases/AttachHandle.md)

## Throws

Error when the board exposes no machines at all.
