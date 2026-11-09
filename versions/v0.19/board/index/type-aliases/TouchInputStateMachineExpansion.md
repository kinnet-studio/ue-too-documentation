[@ue-too/board](../../modules.md) / [index](../index.md) / TouchInputStateMachineExpansion

# Type Alias: TouchInputStateMachineExpansion()\<E, C, S, O\>

> **TouchInputStateMachineExpansion**\<`E`, `C`, `S`, `O`\> = (`stock`, `extend`) => `Record`\<`S`, `State`\<`E`, `C`, `S`, `O`\>\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:466](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L466)

The callback [expandTouchInputStateMachine](../functions/expandTouchInputStateMachine.md) calls with the stock states.

## Type Parameters

### E

`E` *extends* [`TouchEventMapping`](TouchEventMapping.md)

### C

`C` *extends* [`TouchContext`](../interfaces/TouchContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* [`TouchInputEventOutputMapping`](TouchInputEventOutputMapping.md) & `Partial`\<`Record`\<keyof `E`, `unknown`\>\>

## Parameters

### stock

`Record`\<[`TouchStates`](TouchStates.md), `State`\<`E`, `C`, `S`, `O`\>\>

### extend

`StateExtender`\<`E`, `C`, `S`, `O`\>

## Returns

`Record`\<`S`, `State`\<`E`, `C`, `S`, `O`\>\>

## Remarks

`stock` holds every built-in touch state already typed for the expanded
machine; `extend` is createStateExtender bound to the same generics.
Return the full state map for the expanded machine.
