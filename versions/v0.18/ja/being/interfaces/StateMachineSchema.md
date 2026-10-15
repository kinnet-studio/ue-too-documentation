[@ue-too/being](../globals.md) / StateMachineSchema

# Interface: StateMachineSchema\<Context, EventPayloadMapping, StateNames, EventOutputMapping\>

Defined in: [schema-factory.ts:290](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/schema-factory.ts#L290)

Complete schema definition for a state machine.

## Type Parameters

### Context

`Context` *extends* [`BaseContext`](BaseContext.md) = [`BaseContext`](BaseContext.md)

The context type

### EventPayloadMapping

`EventPayloadMapping` = `any`

Mapping of event names to their payload types

### StateNames

`StateNames` *extends* `string` = `string`

Union type of all valid state names (inferred from states array)

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Optional mapping of events to their output types

## Properties

### events

> **events**: `EventPayloadMapping`

Defined in: [schema-factory.ts:301](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/schema-factory.ts#L301)

Mapping of event names to their payload types

***

### initialState

> **initialState**: `StateNames`

Defined in: [schema-factory.ts:310](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/schema-factory.ts#L310)

Initial state name

***

### stateDefinitions

> **stateDefinitions**: [`StateDefinition`](StateDefinition.md)\<`Context`, `EventPayloadMapping`, `StateNames`, `EventOutputMapping`\>[]

Defined in: [schema-factory.ts:303](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/schema-factory.ts#L303)

Array of state definitions

***

### states

> **states**: readonly `StateNames`[] \| `StateNames`[]

Defined in: [schema-factory.ts:299](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/schema-factory.ts#L299)

Array of all possible state names
