[@ue-too/board](../../modules.md) / [index](../index.md) / TouchInputEventOutputMapping

# 型別別名: TouchInputEventOutputMapping

> **TouchInputEventOutputMapping** = `object`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:95](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L95)

Mapping of events to their output types.

## 備註

Only touchmove produces outputs (pan or zoom gestures).
touchstart and touchend only manage state transitions.

## 屬性

### touchmove

> **touchmove**: [`TouchOutputEvent`](TouchOutputEvent.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:96](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L96)
