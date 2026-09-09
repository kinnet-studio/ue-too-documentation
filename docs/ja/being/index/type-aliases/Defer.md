[@ue-too/being](../../modules.md) / [index](../index.md) / Defer

# 型エイリアス: Defer\<Context, EventPayloadMapping, States, EventOutputMapping\>

> **Defer**\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> = `object`

定義: [interface.ts:173](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L173)

## 型パラメーター

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### EventPayloadMapping

`EventPayloadMapping`

### States

`States` *extends* `string`

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](DefaultOutputMapping.md)\<`EventPayloadMapping`\>

## プロパティ

### action()

> **action**: (`context`, `event`, `eventKey`, `stateMachine`) => [`EventResult`](EventResult.md)\<`States`, `any`\>

定義: [interface.ts:181](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L181)

#### パラメータ

##### context

`Context`

##### event

`EventPayloadMapping`\[keyof `EventPayloadMapping`\]

##### eventKey

keyof `EventPayloadMapping`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 戻り値

[`EventResult`](EventResult.md)\<`States`, `any`\>

***

### defaultTargetState?

> `optional` **defaultTargetState**: `States`

定義: [interface.ts:192](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L192)
