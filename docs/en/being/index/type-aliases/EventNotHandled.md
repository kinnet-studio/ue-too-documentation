[@ue-too/being](../../modules.md) / [index](../index.md) / EventNotHandled

# Type Alias: EventNotHandled

> **EventNotHandled** = `object`

Defined in: [interface.ts:99](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being/src/interface.ts#L99)

Result type indicating an event was not handled by the current state.

## Remarks

When a state doesn't have a handler defined for a particular event, it returns this type.
The state machine will not transition and the event is effectively ignored.

## Properties

### handled

> **handled**: `false`

Defined in: [interface.ts:100](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being/src/interface.ts#L100)
