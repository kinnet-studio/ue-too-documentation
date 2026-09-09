[@ue-too/being](../../modules.md) / [index](../index.md) / EventNotHandled

# 型別別名: EventNotHandled

> **EventNotHandled** = `object`

定義於: [interface.ts:99](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L99)

Result type indicating an event was not handled by the current state.

## 備註

When a state doesn't have a handler defined for a particular event, it returns this type.
The state machine will not transition and the event is effectively ignored.

## 屬性

### handled

> **handled**: `false`

定義於: [interface.ts:100](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L100)
