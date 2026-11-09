[@ue-too/being](../../modules.md) / [index](../index.md) / StateExtender

# Type Alias: StateExtender()\<E, C, S, O\>

> **StateExtender**\<`E`, `C`, `S`, `O`\> = (`original`, `extension`) => [`State`](../interfaces/State.md)\<`E`, `C`, `S`, `O`\>

Defined in: [expansion.ts:249](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being/src/expansion.ts#L249)

The function [createStateExtender](../functions/createStateExtender.md) returns: [extendState](../functions/extendState.md) with the
target generics already bound.

## Type Parameters

### E

`E`

### C

`C` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* `Partial`\<`Record`\<keyof `E`, `unknown`\>\>

## Parameters

### original

[`ExtendableState`](ExtendableState.md)

### extension

[`StateExtension`](StateExtension.md)\<`E`, `C`, `S`, `O`\>

## Returns

[`State`](../interfaces/State.md)\<`E`, `C`, `S`, `O`\>
