[@ue-too/being](../../modules.md) / [index](../index.md) / StateExtender

# 型別別名: StateExtender()\<E, C, S, O\>

> **StateExtender**\<`E`, `C`, `S`, `O`\> = (`original`, `extension`) => [`State`](../interfaces/State.md)\<`E`, `C`, `S`, `O`\>

定義於: [expansion.ts:249](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/being/src/expansion.ts#L249)

The function [createStateExtender](../functions/createStateExtender.md) returns: [extendState](../functions/extendState.md) with the
target generics already bound.

## 型別參數

### E

`E`

### C

`C` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* `Partial`\<`Record`\<keyof `E`, `unknown`\>\>

## 參數

### original

[`ExtendableState`](ExtendableState.md)

### extension

[`StateExtension`](StateExtension.md)\<`E`, `C`, `S`, `O`\>

## 回傳

[`State`](../interfaces/State.md)\<`E`, `C`, `S`, `O`\>
