[@ue-too/board](../../modules.md) / [index](../index.md) / TouchInputEventOutputMapping

# Type Alias: TouchInputEventOutputMapping

> **TouchInputEventOutputMapping** = `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:95](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L95)

Mapping of events to their output types.

## Remarks

Only touchmove produces outputs (pan or zoom gestures).
touchstart and touchend only manage state transitions.

## Properties

### touchmove

> **touchmove**: [`TouchOutputEvent`](TouchOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:96](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L96)
