[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / GenericAction

# 類別: GenericAction

定義於: [action-system/action.ts:11](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L11)

## 實作

- [`Action`](../interfaces/Action.md)

## 建構函式

### 建構函式

> **new GenericAction**(`type`, `actor`, `targets`, `parameters`, `preconditions`, `costs`, `effects`): `GenericAction`

定義於: [action-system/action.ts:21](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L21)

#### 參數

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

#### 回傳

`GenericAction`

## 屬性

### actor

> **actor**: `number`

定義於: [action-system/action.ts:13](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L13)

***

### costs

> **costs**: [`Effect`](../interfaces/Effect.md)[] = `[]`

定義於: [action-system/action.ts:17](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L17)

***

### effects

> **effects**: [`Effect`](../interfaces/Effect.md)[] = `[]`

定義於: [action-system/action.ts:18](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L18)

***

### parameters

> **parameters**: `Record`\<`string`, `unknown`\>

定義於: [action-system/action.ts:15](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L15)

***

### preconditions

> **preconditions**: [`Precondition`](../interfaces/Precondition.md)[]

定義於: [action-system/action.ts:16](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L16)

***

### targets

> **targets**: `number`[]

定義於: [action-system/action.ts:14](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L14)

***

### type

> **type**: `string`

定義於: [action-system/action.ts:12](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L12)

#### 實作了

[`Action`](../interfaces/Action.md).[`type`](../interfaces/Action.md#type)

## 方法

### canExecute()

> **canExecute**(): `boolean`

定義於: [action-system/action.ts:39](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L39)

#### 回傳

`boolean`

***

### execute()

> **execute**(): [`Event`](../interfaces/Event.md)[]

定義於: [action-system/action.ts:43](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/action.ts#L43)

#### 回傳

[`Event`](../interfaces/Event.md)[]
