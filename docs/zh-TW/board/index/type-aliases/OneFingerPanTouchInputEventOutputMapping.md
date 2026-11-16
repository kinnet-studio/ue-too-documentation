[@ue-too/board](../../modules.md) / [index](../index.md) / OneFingerPanTouchInputEventOutputMapping

# 型別別名: OneFingerPanTouchInputEventOutputMapping

> **OneFingerPanTouchInputEventOutputMapping** = `object`

定義於: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:48](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L48)

Outputs of the one-finger-pan touch input state machine.

## 備註

`touchmove` always outputs an array: one `pan` while **PANNING**, and a
`pan` followed by a `zoom` while **PINCHING**.
[InputOrchestrator.processInputEventOutput](../classes/InputOrchestrator.md#processinputeventoutput) applies them in order.

## 屬性

### touchmove

> **touchmove**: [`TouchOutputEvent`](TouchOutputEvent.md)[]

定義於: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:49](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L49)
