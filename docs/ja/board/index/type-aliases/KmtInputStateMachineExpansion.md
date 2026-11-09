[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputStateMachineExpansion

# 型エイリアス: KmtInputStateMachineExpansion()\<E, C, S, O\>

> **KmtInputStateMachineExpansion**\<`E`, `C`, `S`, `O`\> = (`stock`, `extend`) => `Record`\<`S`, `State`\<`E`, `C`, `S`, `O`\>\>

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:836](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L836)

The callback [expandKmtInputStateMachine](../functions/expandKmtInputStateMachine.md) calls with the stock states.

## 型パラメーター

### E

`E` *extends* [`KmtInputEventMapping`](KmtInputEventMapping.md)

### C

`C` *extends* [`KmtInputContext`](../interfaces/KmtInputContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* [`KmtInputEventOutputMapping`](KmtInputEventOutputMapping.md) & `Partial`\<`Record`\<keyof `E`, `unknown`\>\>

## パラメータ

### stock

`Record`\<[`KmtInputStates`](KmtInputStates.md), `State`\<`E`, `C`, `S`, `O`\>\>

### extend

`StateExtender`\<`E`, `C`, `S`, `O`\>

## 戻り値

`Record`\<`S`, `State`\<`E`, `C`, `S`, `O`\>\>

## Remarks

`stock` holds every built-in KMT state already typed for the expanded machine;
`extend` is createStateExtender bound to the same generics. Return the
full state map for the expanded machine, typically `{ ...stock, ...changes }`.
