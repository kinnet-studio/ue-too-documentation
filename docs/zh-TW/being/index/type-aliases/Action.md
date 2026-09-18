[@ue-too/being](../../modules.md) / [index](../index.md) / Action

# 型別別名: Action\<Context, EventPayloadMapping, States, EventOutputMapping, Output\>

> **Action**\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`, `Output`\> = `object`

定義於: [interface.ts:480](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/interface.ts#L480)

## 型別參數

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### EventPayloadMapping

`EventPayloadMapping`

### States

`States` *extends* `string`

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](DefaultOutputMapping.md)\<`EventPayloadMapping`\>

### Output

`Output` = `void`

## 屬性

### action()

> **action**: (`context`, `event`, `stateMachine`) => `Output` \| `void`

定義於: [interface.ts:489](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/interface.ts#L489)

#### 參數

##### context

`Context`

##### event

`EventPayloadMapping`\[keyof `EventPayloadMapping`\]

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 回傳

`Output` \| `void`

***

### defaultTargetState?

> `optional` **defaultTargetState**: `States`

定義於: [interface.ts:499](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/interface.ts#L499)
