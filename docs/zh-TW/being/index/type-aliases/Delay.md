[@ue-too/being](../../modules.md) / [index](../index.md) / Delay

# 型別別名: Delay\<Context, EventPayloadMapping, States, EventOutputMapping\>

> **Delay**\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> = `object`

定義於: [interface.ts:502](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L502)

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

### action

> **action**: [`Action`](Action.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\>

定義於: [interface.ts:511](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L511)

***

### time

> **time**: `number`

定義於: [interface.ts:510](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L510)
