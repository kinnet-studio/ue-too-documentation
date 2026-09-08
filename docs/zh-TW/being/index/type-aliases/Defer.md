[@ue-too/being](../../modules.md) / [index](../index.md) / Defer

# 型別別名: Defer\<Context, EventPayloadMapping, States, EventOutputMapping\>

> **Defer**\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> = `object`

定義於: [interface.ts:173](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L173)

## 型別參數

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### EventPayloadMapping

`EventPayloadMapping`

### States

`States` *extends* `string`

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](DefaultOutputMapping.md)\<`EventPayloadMapping`\>

## 屬性

### action()

> **action**: (`context`, `event`, `eventKey`, `stateMachine`) => [`EventResult`](EventResult.md)\<`States`, `any`\>

定義於: [interface.ts:181](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L181)

#### 參數

##### context

`Context`

##### event

`EventPayloadMapping`\[keyof `EventPayloadMapping`\]

##### eventKey

keyof `EventPayloadMapping`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 回傳

[`EventResult`](EventResult.md)\<`States`, `any`\>

***

### defaultTargetState?

> `optional` **defaultTargetState**: `States`

定義於: [interface.ts:192](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L192)
