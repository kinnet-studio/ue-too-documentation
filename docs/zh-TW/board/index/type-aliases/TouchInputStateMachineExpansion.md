[@ue-too/board](../../modules.md) / [index](../index.md) / TouchInputStateMachineExpansion

# 型別別名: TouchInputStateMachineExpansion()\<E, C, S, O\>

> **TouchInputStateMachineExpansion**\<`E`, `C`, `S`, `O`\> = (`stock`, `extend`) => `Record`\<`S`, `State`\<`E`, `C`, `S`, `O`\>\>

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:466](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L466)

The callback [expandTouchInputStateMachine](../functions/expandTouchInputStateMachine.md) calls with the stock states.

## 型別參數

### E

`E` *extends* [`TouchEventMapping`](TouchEventMapping.md)

### C

`C` *extends* [`TouchContext`](../interfaces/TouchContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* [`TouchInputEventOutputMapping`](TouchInputEventOutputMapping.md) & `Partial`\<`Record`\<keyof `E`, `unknown`\>\>

## 參數

### stock

`Record`\<[`TouchStates`](TouchStates.md), `State`\<`E`, `C`, `S`, `O`\>\>

### extend

`StateExtender`\<`E`, `C`, `S`, `O`\>

## 回傳

`Record`\<`S`, `State`\<`E`, `C`, `S`, `O`\>\>

## 備註

`stock` holds every built-in touch state already typed for the expanded
machine; `extend` is createStateExtender bound to the same generics.
Return the full state map for the expanded machine.
