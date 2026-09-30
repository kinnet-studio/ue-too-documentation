[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputStateMachineExpansion

# Type Alias: KmtInputStateMachineExpansion()\<E, C, S, O\>

> **KmtInputStateMachineExpansion**\<`E`, `C`, `S`, `O`\> = (`stock`, `extend`) => `Record`\<`S`, `State`\<`E`, `C`, `S`, `O`\>\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:814](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L814)

The callback [expandKmtInputStateMachine](../functions/expandKmtInputStateMachine.md) calls with the stock states.

## Type Parameters

### E

`E` *extends* [`KmtInputEventMapping`](KmtInputEventMapping.md)

### C

`C` *extends* [`KmtInputContext`](../interfaces/KmtInputContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* [`KmtInputEventOutputMapping`](KmtInputEventOutputMapping.md) & `Partial`\<`Record`\<keyof `E`, `unknown`\>\>

## Parameters

### stock

`Record`\<[`KmtInputStates`](KmtInputStates.md), `State`\<`E`, `C`, `S`, `O`\>\>

### extend

`StateExtender`\<`E`, `C`, `S`, `O`\>

## Returns

`Record`\<`S`, `State`\<`E`, `C`, `S`, `O`\>\>

## Remarks

`stock` holds every built-in KMT state already typed for the expanded machine;
`extend` is createStateExtender bound to the same generics. Return the
full state map for the expanded machine, typically `{ ...stock, ...changes }`.
