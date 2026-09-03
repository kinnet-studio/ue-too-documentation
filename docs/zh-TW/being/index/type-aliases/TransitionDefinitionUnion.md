[@ue-too/being](../../modules.md) / [index](../index.md) / TransitionDefinitionUnion

# 型別別名: TransitionDefinitionUnion\<Context, EventPayloadMapping, StateNames, EventOutputMapping\>

> **TransitionDefinitionUnion**\<`Context`, `EventPayloadMapping`, `StateNames`, `EventOutputMapping`\> = `{ [K in keyof EventPayloadMapping]: TransitionDefinition<Context, EventPayloadMapping, K, StateNames, EventOutputMapping> }`\[keyof `EventPayloadMapping`\]

定義於: [schema-factory.ts:117](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/being/src/schema-factory.ts#L117)

Union type of all possible transition definitions for a given event payload mapping.
This ensures each transition's action payload is typed based on its specific event.

## 型別參數

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
