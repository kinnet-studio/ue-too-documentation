[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / GenericAction

# クラス: GenericAction

定義: [action-system/action.ts:11](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L11)

## 実装

- [`Action`](../interfaces/Action.md)

## コンストラクター

### コンストラクター

> **new GenericAction**(`type`, `actor`, `targets`, `parameters`, `preconditions`, `costs`, `effects`): `GenericAction`

定義: [action-system/action.ts:21](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L21)

#### パラメータ

##### type

`string`

##### actor

`number`

##### targets

`number`[]

##### parameters

`Record`\<`string`, `unknown`\>

##### preconditions

[`Precondition`](../interfaces/Precondition.md)[]

##### costs

[`Effect`](../interfaces/Effect.md)[]

##### effects

[`Effect`](../interfaces/Effect.md)[]

#### 戻り値

`GenericAction`

## プロパティ

### actor

> **actor**: `number`

定義: [action-system/action.ts:13](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L13)

***

### costs

> **costs**: [`Effect`](../interfaces/Effect.md)[] = `[]`

定義: [action-system/action.ts:17](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L17)

***

### effects

> **effects**: [`Effect`](../interfaces/Effect.md)[] = `[]`

定義: [action-system/action.ts:18](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L18)

***

### parameters

> **parameters**: `Record`\<`string`, `unknown`\>

定義: [action-system/action.ts:15](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L15)

***

### preconditions

> **preconditions**: [`Precondition`](../interfaces/Precondition.md)[]

定義: [action-system/action.ts:16](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L16)

***

### targets

> **targets**: `number`[]

定義: [action-system/action.ts:14](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L14)

***

### type

> **type**: `string`

定義: [action-system/action.ts:12](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L12)

#### の実装

[`Action`](../interfaces/Action.md).[`type`](../interfaces/Action.md#type)

## メソッド

### canExecute()

> **canExecute**(): `boolean`

定義: [action-system/action.ts:39](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L39)

#### 戻り値

`boolean`

***

### execute()

> **execute**(): [`Event`](../interfaces/Event.md)[]

定義: [action-system/action.ts:43](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L43)

#### 戻り値

[`Event`](../interfaces/Event.md)[]
