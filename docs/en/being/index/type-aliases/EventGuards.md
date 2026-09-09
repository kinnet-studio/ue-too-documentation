[@ue-too/being](../../modules.md) / [index](../index.md) / EventGuards

# Type Alias: EventGuards\<EventPayloadMapping, States, Context, T\>

> **EventGuards**\<`EventPayloadMapping`, `States`, `Context`, `T`\> = `{ [K in keyof EventPayloadMapping]: GuardMapping<Context, T, States>[] }`

Defined in: [interface.ts:553](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L553)

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

### States

`States` *extends* `string`

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### T

`T` *extends* [`Guard`](Guard.md)\<`Context`\>

## Description

This is a mapping of an event to a guard evaluation.

Generic parameters:
- EventPayloadMapping: A mapping of events to their payloads.
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- T: The guard type.

You probably don't need to use this type directly.
This is a mapping of an event to a guard evaluation.

## See

[\['eventGuards'\]](../classes/TemplateState.md)
