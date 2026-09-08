[@ue-too/being](../../modules.md) / [index](../index.md) / Action

# 型エイリアス: Action\<Context, EventPayloadMapping, States, EventOutputMapping, Output\>

> **Action**\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`, `Output`\> = `object`

定義: [interface.ts:480](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L480)

## 型パラメーター

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

## プロパティ

### action()

> **action**: (`context`, `event`, `stateMachine`) => `Output` \| `void`

定義: [interface.ts:489](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L489)

#### パラメータ

##### context

`Context`

##### event

`EventPayloadMapping`\[keyof `EventPayloadMapping`\]

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 戻り値

`Output` \| `void`

***

### defaultTargetState?

> `optional` **defaultTargetState**: `States`

定義: [interface.ts:499](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L499)
