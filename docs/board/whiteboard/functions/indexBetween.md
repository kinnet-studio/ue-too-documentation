[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / indexBetween

# Function: indexBetween()

> **indexBetween**(`before`, `after`): `string`

Defined in: [packages/board/src/whiteboard/document/fractional-index.ts:47](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/fractional-index.ts#L47)

A key that sorts after `before` and before `after`.

## Parameters

### before

`string` | `null`

### after

`string` | `null`

## Returns

`string`

## Remarks

`null` means "no neighbour on that side". Appending (`after` null) takes
the shortest key above `before`, so a long run of appends grows by one
character about every 60 keys.
