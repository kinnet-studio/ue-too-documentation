[@ue-too/board](../../modules.md) / [index](../index.md) / TouchInputEventOutputMapping

# 型別別名: TouchInputEventOutputMapping

> **TouchInputEventOutputMapping** = `object`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:92](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L92)

Mapping of events to their output types.

## 備註

Only touchmove produces outputs (pan or zoom gestures).
touchstart and touchend only manage state transitions.

## 屬性

### touchmove

> **touchmove**: [`TouchOutputEvent`](TouchOutputEvent.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:93](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L93)
