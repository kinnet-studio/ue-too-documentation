[@ue-too/being](../../modules.md) / [index](../index.md) / ChildStateMachineConfig

# Interface: ChildStateMachineConfig\<EventPayloadMapping, Context, ChildStates, EventOutputMapping\>

Defined in: [hierarchical.ts:47](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L47)

Configuration for a composite state's child state machine.

## Type Parameters

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

## Properties

### defaultChildState

> **defaultChildState**: `ChildStates`

Defined in: [hierarchical.ts:63](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L63)

Default child state to enter when parent state is entered

***

### rememberHistory?

> `optional` **rememberHistory**: `boolean`

Defined in: [hierarchical.ts:65](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L65)

Whether to remember the last active child state (history state)

***

### stateMachine

> **stateMachine**: [`StateMachine`](StateMachine.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\>

Defined in: [hierarchical.ts:56](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L56)

The child state machine instance
