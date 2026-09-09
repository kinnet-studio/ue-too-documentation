[@ue-too/being](../../modules.md) / [index](../index.md) / EventNotHandled

# 型エイリアス: EventNotHandled

> **EventNotHandled** = `object`

定義: [interface.ts:99](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L99)

Result type indicating an event was not handled by the current state.

## Remarks

When a state doesn't have a handler defined for a particular event, it returns this type.
The state machine will not transition and the event is effectively ignored.

## プロパティ

### handled

> **handled**: `false`

定義: [interface.ts:100](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L100)
