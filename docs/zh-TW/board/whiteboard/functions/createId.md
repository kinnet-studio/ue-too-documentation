[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / createId

# 函式: createId()

> **createId**(`random`): `string`

定義於: [packages/board/src/whiteboard/document/ids.ts:25](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/ids.ts#L25)

A new random record id: 16 base-62 characters (about 95 bits).

## 參數

### random

[`RandomBytes`](../type-aliases/RandomBytes.md) = `cryptoBytes`

The random source; `crypto.getRandomValues` by default

## 回傳

`string`
