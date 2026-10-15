[@ue-too/being](../../modules.md) / [index](../index.md) / EventGuards

# 型エイリアス: EventGuards\<EventPayloadMapping, States, Context, T\>

> **EventGuards**\<`EventPayloadMapping`, `States`, `Context`, `T`\> = `{ [K in keyof EventPayloadMapping]: GuardMapping<Context, T, States>[] }`

定義: [interface.ts:553](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/interface.ts#L553)

## 型パラメーター

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

## 参照

[\['eventGuards'\]](../classes/TemplateState.md)
