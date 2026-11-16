[@ue-too/board](../../modules.md) / [index](../index.md) / OneFingerPanTouchInputStateMachineExpansion

# 型別別名: OneFingerPanTouchInputStateMachineExpansion()\<E, C, S, O\>

> **OneFingerPanTouchInputStateMachineExpansion**\<`E`, `C`, `S`, `O`\> = (`stock`, `extend`) => `Record`\<`S`, `State`\<`E`, `C`, `S`, `O`\>\>

定義於: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:378](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L378)

The callback [expandOneFingerPanTouchInputStateMachine](../functions/expandOneFingerPanTouchInputStateMachine.md) calls with the
stock states.

## 型別參數

### E

`E` *extends* [`TouchEventMapping`](TouchEventMapping.md)

### C

`C` *extends* [`TouchContext`](../interfaces/TouchContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* [`OneFingerPanTouchInputEventOutputMapping`](OneFingerPanTouchInputEventOutputMapping.md) & `Partial`\<`Record`\<keyof `E`, `unknown`\>\>

## 參數

### stock

`Record`\<[`OneFingerPanTouchStates`](OneFingerPanTouchStates.md), `State`\<`E`, `C`, `S`, `O`\>\>

### extend

`StateExtender`\<`E`, `C`, `S`, `O`\>

## 回傳

`Record`\<`S`, `State`\<`E`, `C`, `S`, `O`\>\>

## 備註

`stock` holds every built-in one-finger-pan state already typed for the
expanded machine; `extend` is createStateExtender bound to the same
generics. Return the full state map for the expanded machine.
