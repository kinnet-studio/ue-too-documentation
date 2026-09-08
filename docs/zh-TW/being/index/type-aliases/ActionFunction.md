[@ue-too/being](../../modules.md) / [index](../index.md) / ActionFunction

# 型別別名: ActionFunction()\<Context, EventPayloadMapping, EventName, EventOutputMapping\>

> **ActionFunction**\<`Context`, `EventPayloadMapping`, `EventName`, `EventOutputMapping`\> = (`context`, `payload`, `stateMachine`) => `EventName` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`EventName`\] \| `void` : `void` \| `unknown`

定義於: [schema-factory.ts:37](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/schema-factory.ts#L37)

Action function that can be executed when an event is handled.
Receives context, event payload, and the state machine instance.
Can return a value that will be included in the event result.

## 型別參數

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md) = [`BaseContext`](../interfaces/BaseContext.md)

The context type

### EventPayloadMapping

`EventPayloadMapping` = `any`

Mapping of event names to their payload types

### EventName

`EventName` *extends* keyof `EventPayloadMapping` = keyof `EventPayloadMapping`

The specific event name this action handles

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Optional mapping of events to their output types

## 參數

### context

`Context`

### payload

`EventPayloadMapping`\[`EventName`\]

### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `any`, `EventOutputMapping`\>

## 回傳

`EventName` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`EventName`\] \| `void` : `void` \| `unknown`
