[@ue-too/being](../../modules.md) / [index](../index.md) / StateMachineSchema

# 介面: StateMachineSchema\<Context, EventPayloadMapping, StateNames, EventOutputMapping\>

定義於: [schema-factory.ts:290](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/schema-factory.ts#L290)

Complete schema definition for a state machine.

## 型別參數

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

## 屬性

### events

> **events**: `EventPayloadMapping`

定義於: [schema-factory.ts:301](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/schema-factory.ts#L301)

Mapping of event names to their payload types

***

### initialState

> **initialState**: `StateNames`

定義於: [schema-factory.ts:310](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/schema-factory.ts#L310)

Initial state name

***

### stateDefinitions

> **stateDefinitions**: [`StateDefinition`](StateDefinition.md)\<`Context`, `EventPayloadMapping`, `StateNames`, `EventOutputMapping`\>[]

定義於: [schema-factory.ts:303](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/schema-factory.ts#L303)

Array of state definitions

***

### states

> **states**: readonly `StateNames`[] \| `StateNames`[]

定義於: [schema-factory.ts:299](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/schema-factory.ts#L299)

Array of all possible state names
