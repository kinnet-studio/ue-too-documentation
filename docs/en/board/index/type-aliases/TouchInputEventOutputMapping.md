[@ue-too/board](../../modules.md) / [index](../index.md) / TouchInputEventOutputMapping

# Type Alias: TouchInputEventOutputMapping

> **TouchInputEventOutputMapping** = `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:95](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L95)

Mapping of events to their output types.

## Remarks

Only touchmove produces outputs (pan or zoom gestures).
touchstart and touchend only manage state transitions.

## Properties

### touchmove

> **touchmove**: [`TouchOutputEvent`](TouchOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:96](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L96)
