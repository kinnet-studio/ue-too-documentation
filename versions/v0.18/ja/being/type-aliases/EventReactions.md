[@ue-too/being](../globals.md) / EventReactions

# Type Alias: EventReactions\<EventPayloadMapping, Context, States, EventOutputMapping\>

> **EventReactions**\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\> = \{ \[K in keyof Partial\<EventPayloadMapping\>\]: \{ action: (context: Context, event: EventPayloadMapping\[K\], stateMachine: StateMachine\<EventPayloadMapping, Context, States, EventOutputMapping\>) =\> K extends keyof EventOutputMapping ? EventOutputMapping\[K\] \| void : void; defaultTargetState?: States \} \}

Defined in: [interface.ts:355](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L355)

## Type Parameters

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
