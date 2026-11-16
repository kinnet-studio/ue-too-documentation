[@ue-too/board](../../modules.md) / [index](../index.md) / OneFingerPanTouchInputEventOutputMapping

# Type Alias: OneFingerPanTouchInputEventOutputMapping

> **OneFingerPanTouchInputEventOutputMapping** = `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:48](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L48)

Outputs of the one-finger-pan touch input state machine.

## Remarks

`touchmove` always outputs an array: one `pan` while **PANNING**, and a
`pan` followed by a `zoom` while **PINCHING**.
[InputOrchestrator.processInputEventOutput](../classes/InputOrchestrator.md#processinputeventoutput) applies them in order.

## Properties

### touchmove

> **touchmove**: [`TouchOutputEvent`](TouchOutputEvent.md)[]

Defined in: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:49](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L49)
