[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / createId

# Function: createId()

> **createId**(`random`): `string`

Defined in: [packages/board/src/whiteboard/document/ids.ts:25](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/ids.ts#L25)

A new random record id: 16 base-62 characters (about 95 bits).

## Parameters

### random

[`RandomBytes`](../type-aliases/RandomBytes.md) = `cryptoBytes`

The random source; `crypto.getRandomValues` by default

## Returns

`string`
