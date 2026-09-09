[@ue-too/being-devtools](../globals.md) / attachBoardDebugger

# 函式: attachBoardDebugger()

> **attachBoardDebugger**(`board`, `options?`): [`AttachHandle`](../type-aliases/AttachHandle.md)

定義於: [attach.ts:112](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/attach.ts#L112)

Attaches every `being` machine a `Board` exposes — keyboard/mouse input,
touch input, pan, zoom, and rotation control — to the shared panel.

## 參數

### board

[`BoardLike`](../type-aliases/BoardLike.md)

### options?

#### namePrefix?

`string`

## 回傳

[`AttachHandle`](../type-aliases/AttachHandle.md)

## 拋出

Error when the board exposes no machines at all.
