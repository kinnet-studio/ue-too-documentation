[@ue-too/being](../../modules.md) / [index](../index.md) / EventReactions

# 型別別名: EventReactions\<EventPayloadMapping, Context, States, EventOutputMapping\>

> **EventReactions**\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\> = \{ \[K in keyof Partial\<EventPayloadMapping\>\]: \{ action: (context: Context, event: EventPayloadMapping\[K\], stateMachine: StateMachine\<EventPayloadMapping, Context, States, EventOutputMapping\>) =\> K extends keyof EventOutputMapping ? EventOutputMapping\[K\] \| void : void; defaultTargetState?: States \} \}

定義於: [interface.ts:427](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/interface.ts#L427)

## 型別參數

### EventPayloadMapping

`EventPayloadMapping`

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### States

`States` *extends* `string`

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](DefaultOutputMapping.md)\<`EventPayloadMapping`\>

## Description

This is the type for the event reactions of a state.

Generic parameters:
- EventPayloadMapping: A mapping of events to their payloads.
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"
- EventOutputMapping: A mapping of events to their output types. Defaults to void for all events.

The action function can now return an output value that will be included in the EventHandledResult.
