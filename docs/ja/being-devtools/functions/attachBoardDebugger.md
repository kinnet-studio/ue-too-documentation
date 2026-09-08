[@ue-too/being-devtools](../globals.md) / attachBoardDebugger

# 関数: attachBoardDebugger()

> **attachBoardDebugger**(`board`, `options?`): [`AttachHandle`](../type-aliases/AttachHandle.md)

定義: [attach.ts:112](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/attach.ts#L112)

Attaches every `being` machine a `Board` exposes — keyboard/mouse input,
touch input, pan, zoom, and rotation control — to the shared panel.

## パラメータ

### board

[`BoardLike`](../type-aliases/BoardLike.md)

### options?

#### namePrefix?

`string`

## 戻り値

[`AttachHandle`](../type-aliases/AttachHandle.md)

## Throws

Error when the board exposes no machines at all.
