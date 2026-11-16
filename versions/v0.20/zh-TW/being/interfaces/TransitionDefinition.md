[@ue-too/being](../globals.md) / TransitionDefinition

# Interface: TransitionDefinition\<Context, EventPayloadMapping, EventName, StateNames, EventOutputMapping\>

Defined in: [schema-factory.ts:74](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/schema-factory.ts#L74)

Definition of a single state transition.

## Type Parameters

### Context

`Context` *extends* [`BaseContext`](BaseContext.md) = [`BaseContext`](BaseContext.md)

The context type

### EventPayloadMapping

`EventPayloadMapping` = `any`

Mapping of event names to their payload types

### EventName

`EventName` *extends* keyof `EventPayloadMapping` = keyof `EventPayloadMapping`

The specific event name for this transition

### StateNames

`StateNames` *extends* `string` = `string`

Union type of all valid state names

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Optional mapping of events to their output types

## Properties

### action?

> `optional` **action**: [`ActionFunction`](../type-aliases/ActionFunction.md)\<`Context`, `EventPayloadMapping`, `EventName`, `EventOutputMapping`\>

Defined in: [schema-factory.ts:88](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/schema-factory.ts#L88)

Optional action to execute when this transition occurs. Can return a value that will be included in the event result.

***

### event

> **event**: `EventName`

Defined in: [schema-factory.ts:84](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/schema-factory.ts#L84)

The event that triggers this transition

***

### guards?

> `optional` **guards**: `object`[]

Defined in: [schema-factory.ts:100](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/schema-factory.ts#L100)

Optional guard conditions (evaluated in order, first true guard wins).
Guards can be either:
- A guard function defined inline
- A string reference to a guard defined in the state's `guards` section

#### guard

> **guard**: `string` \| [`GuardFunction`](../type-aliases/GuardFunction.md)\<`Context`\>

Guard function to evaluate, or name of a guard defined in the state's guards section

#### targetState

> **targetState**: `StateNames`

Target state if this guard evaluates to true

***

### targetState

> **targetState**: `StateNames`

Defined in: [schema-factory.ts:86](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/schema-factory.ts#L86)

The target state after this transition
