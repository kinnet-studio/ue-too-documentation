[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / createId

# 函式: createId()

> **createId**(`random`): `string`

定義於: [packages/board/src/whiteboard/document/ids.ts:25](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/ids.ts#L25)

A new random record id: 16 base-62 characters (about 95 bits).

## 參數

### random

[`RandomBytes`](../type-aliases/RandomBytes.md) = `cryptoBytes`

The random source; `crypto.getRandomValues` by default

## 回傳

`string`
