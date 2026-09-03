[@ue-too/being](../../modules.md) / [index](../index.md) / EventPreconditions

# 型別別名: EventPreconditions\<EventPayloadMapping, Context, T\>

> **EventPreconditions**\<`EventPayloadMapping`, `Context`, `T`\> = `{ [K in keyof EventPayloadMapping]: (T extends Guard<Context, infer G> ? G : never)[] }`

定義於: [interface.ts:585](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/interface.ts#L585)

## 型別參數

### EventPayloadMapping

`EventPayloadMapping`

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### T

`T` *extends* [`Guard`](Guard.md)\<`Context`\>

## Description

Per-event preconditions: named guards that must ALL pass
before a state handles an event.

## 備註

Preconditions are evaluated at the very start of [TemplateState.handles](../classes/TemplateState.md#handles),
before the defer hook and before the event's reaction runs. If any listed
guard evaluates to false — or names a guard missing from the state's
[State.guards](../interfaces/State.md#guards) registry (fail closed) — the event is vetoed: the state
returns `{ handled: false }`, no action runs, and no transition occurs.
An unhandled result lets hierarchical machines bubble the event to a parent.

This differs from [EventGuards](EventGuards.md), which run AFTER the action to pick a
target state. The same named guards from the state's guard registry can be
referenced by both.

Generic parameters:
- EventPayloadMapping: A mapping of events to their payloads.
- Context: The context of the state machine.
- T: The guard type (its keys become the valid precondition names).
