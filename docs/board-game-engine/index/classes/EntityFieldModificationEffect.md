[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / EntityFieldModificationEffect

# Class: EntityFieldModificationEffect

Defined in: [action-system/effect.ts:219](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/effect.ts#L219)

## Implements

- [`Effect`](../interfaces/Effect.md)

## Constructors

### Constructor

> **new EntityFieldModificationEffect**(`coordinator`, `componentName`, `entity`, `valuePath`, `newEntityValue`): `EntityFieldModificationEffect`

Defined in: [action-system/effect.ts:226](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/effect.ts#L226)

#### Parameters

##### coordinator

`Coordinator`

##### componentName

`symbol`

##### entity

`number`

##### valuePath

`string`

##### newEntityValue

`number`

#### Returns

`EntityFieldModificationEffect`

## Methods

### apply()

> **apply**(): `void`

Defined in: [action-system/effect.ts:240](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/effect.ts#L240)

#### Returns

`void`

#### Implementation of

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)
