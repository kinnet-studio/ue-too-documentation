[@ue-too/being](../../modules.md) / [index](../index.md) / ChildStateMachineConfig

# インターフェイス: ChildStateMachineConfig\<EventPayloadMapping, Context, ChildStates, EventOutputMapping\>

定義: [hierarchical.ts:47](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/hierarchical.ts#L47)

Configuration for a composite state's child state machine.

## 型パラメーター

### EventPayloadMapping

`EventPayloadMapping` = `any`

Event payload mapping

### Context

`Context` *extends* [`BaseContext`](BaseContext.md) = [`BaseContext`](BaseContext.md)

Context type

### ChildStates

`ChildStates` *extends* `string` = `string`

Child state names

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Event output mapping

## プロパティ

### defaultChildState

> **defaultChildState**: `ChildStates`

定義: [hierarchical.ts:63](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/hierarchical.ts#L63)

Default child state to enter when parent state is entered

***

### rememberHistory?

> `optional` **rememberHistory**: `boolean`

定義: [hierarchical.ts:65](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/hierarchical.ts#L65)

Whether to remember the last active child state (history state)

***

### stateMachine

> **stateMachine**: [`StateMachine`](StateMachine.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\>

定義: [hierarchical.ts:56](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/hierarchical.ts#L56)

The child state machine instance
