[@ue-too/being](../globals.md) / TransitionDefinitionUnion

# Type Alias: TransitionDefinitionUnion\<Context, EventPayloadMapping, StateNames, EventOutputMapping\>

> **TransitionDefinitionUnion**\<`Context`, `EventPayloadMapping`, `StateNames`, `EventOutputMapping`\> = `{ [K in keyof EventPayloadMapping]: TransitionDefinition<Context, EventPayloadMapping, K, StateNames, EventOutputMapping> }`\[keyof `EventPayloadMapping`\]

Defined in: [schema-factory.ts:117](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/schema-factory.ts#L117)

Union type of all possible transition definitions for a given event payload mapping.
This ensures each transition's action payload is typed based on its specific event.

## Type Parameters

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md) = [`BaseContext`](../interfaces/BaseContext.md)

The context type

### EventPayloadMapping

`EventPayloadMapping` = `any`

Mapping of event names to their payload types

### StateNames

`StateNames` *extends* `string` = `string`

Union type of all valid state names

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Optional mapping of events to their output types
