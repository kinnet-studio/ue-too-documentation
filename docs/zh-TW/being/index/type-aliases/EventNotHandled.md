[@ue-too/being](../../modules.md) / [index](../index.md) / EventNotHandled

# 型別別名: EventNotHandled

> **EventNotHandled** = `object`

定義於: [interface.ts:99](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L99)

Result type indicating an event was not handled by the current state.

## 備註

When a state doesn't have a handler defined for a particular event, it returns this type.
The state machine will not transition and the event is effectively ignored.

## 屬性

### handled

> **handled**: `false`

定義於: [interface.ts:100](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L100)
