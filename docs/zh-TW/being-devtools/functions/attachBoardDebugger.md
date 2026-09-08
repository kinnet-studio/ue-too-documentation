[@ue-too/being-devtools](../globals.md) / attachBoardDebugger

# 函式: attachBoardDebugger()

> **attachBoardDebugger**(`board`, `options?`): [`AttachHandle`](../type-aliases/AttachHandle.md)

定義於: [attach.ts:112](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/attach.ts#L112)

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
