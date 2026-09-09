[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / GenericAction

# Class: GenericAction

Defined in: [action-system/action.ts:11](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/action.ts#L11)

## Implements

- [`Action`](../interfaces/Action.md)

## Constructors

### Constructor

> **new GenericAction**(`type`, `actor`, `targets`, `parameters`, `preconditions`, `costs`, `effects`): `GenericAction`

Defined in: [action-system/action.ts:21](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/action.ts#L21)

#### Parameters

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

#### Returns

`GenericAction`

## Properties

### actor

> **actor**: `number`

Defined in: [action-system/action.ts:13](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/action.ts#L13)

***

### costs

> **costs**: [`Effect`](../interfaces/Effect.md)[] = `[]`

Defined in: [action-system/action.ts:17](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/action.ts#L17)

***

### effects

> **effects**: [`Effect`](../interfaces/Effect.md)[] = `[]`

Defined in: [action-system/action.ts:18](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/action.ts#L18)

***

### parameters

> **parameters**: `Record`\<`string`, `unknown`\>

Defined in: [action-system/action.ts:15](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/action.ts#L15)

***

### preconditions

> **preconditions**: [`Precondition`](../interfaces/Precondition.md)[]

Defined in: [action-system/action.ts:16](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/action.ts#L16)

***

### targets

> **targets**: `number`[]

Defined in: [action-system/action.ts:14](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/action.ts#L14)

***

### type

> **type**: `string`

Defined in: [action-system/action.ts:12](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/action.ts#L12)

#### Implementation of

[`Action`](../interfaces/Action.md).[`type`](../interfaces/Action.md#type)

## Methods

### canExecute()

> **canExecute**(): `boolean`

Defined in: [action-system/action.ts:39](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/action.ts#L39)

#### Returns

`boolean`

***

### execute()

> **execute**(): [`Event`](../interfaces/Event.md)[]

Defined in: [action-system/action.ts:43](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/action.ts#L43)

#### Returns

[`Event`](../interfaces/Event.md)[]
