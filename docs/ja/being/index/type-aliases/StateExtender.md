[@ue-too/being](../../modules.md) / [index](../index.md) / StateExtender

# 型エイリアス: StateExtender()\<E, C, S, O\>

> **StateExtender**\<`E`, `C`, `S`, `O`\> = (`original`, `extension`) => [`State`](../interfaces/State.md)\<`E`, `C`, `S`, `O`\>

定義: [expansion.ts:249](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L249)

The function [createStateExtender](../functions/createStateExtender.md) returns: [extendState](../functions/extendState.md) with the
target generics already bound.

## 型パラメーター

### E

`E`

### C

`C` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* `Partial`\<`Record`\<keyof `E`, `unknown`\>\>

## パラメータ

### original

[`ExtendableState`](ExtendableState.md)

### extension

[`StateExtension`](StateExtension.md)\<`E`, `C`, `S`, `O`\>

## 戻り値

[`State`](../interfaces/State.md)\<`E`, `C`, `S`, `O`\>
