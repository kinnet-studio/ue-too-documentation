[@ue-too/being](../../modules.md) / [index](../index.md) / Action

# Type Alias: Action\<Context, EventPayloadMapping, States, EventOutputMapping, Output\>

> **Action**\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`, `Output`\> = `object`

Defined in: [interface.ts:480](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L480)

## Type Parameters

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

## Properties

### action()

> **action**: (`context`, `event`, `stateMachine`) => `Output` \| `void`

Defined in: [interface.ts:489](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L489)

#### Parameters

##### context

`Context`

##### event

`EventPayloadMapping`\[keyof `EventPayloadMapping`\]

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Returns

`Output` \| `void`

***

### defaultTargetState?

> `optional` **defaultTargetState**: `States`

Defined in: [interface.ts:499](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L499)
