[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / PlayerSystem

# Class: PlayerSystem

Defined in: [player-system/player-component.ts:20](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/player-system/player-component.ts#L20)

## Implements

- `System`

## Constructors

### Constructor

> **new PlayerSystem**(`_coordinator`, `_playerCount`): `PlayerSystem`

Defined in: [player-system/player-component.ts:23](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/player-system/player-component.ts#L23)

#### Parameters

##### \_coordinator

`Coordinator`

##### \_playerCount

`number` = `2`

#### Returns

`PlayerSystem`

## Properties

### entities

> **entities**: `Set`\<`number`\>

Defined in: [player-system/player-component.ts:21](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/player-system/player-component.ts#L21)

#### Implementation of

`System.entities`

## Methods

### addPlayer()

> **addPlayer**(`name`): `number` \| `null`

Defined in: [player-system/player-component.ts:41](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/player-system/player-component.ts#L41)

#### Parameters

##### name

`string`

#### Returns

`number` \| `null`

***

### getPlayerOrder()

> **getPlayerOrder**(): `number`[]

Defined in: [player-system/player-component.ts:155](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/player-system/player-component.ts#L155)

#### Returns

`number`[]

***

### getPlayers()

> **getPlayers**(): `number`[]

Defined in: [player-system/player-component.ts:70](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/player-system/player-component.ts#L70)

#### Returns

`number`[]

***

### organizePlayerOrder()

> **organizePlayerOrder**(): `void`

Defined in: [player-system/player-component.ts:123](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/player-system/player-component.ts#L123)

#### Returns

`void`

***

### playerCount()

> **playerCount**(): `number`

Defined in: [player-system/player-component.ts:66](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/player-system/player-component.ts#L66)

#### Returns

`number`

***

### removePlayer()

> **removePlayer**(`player`): `void`

Defined in: [player-system/player-component.ts:54](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/player-system/player-component.ts#L54)

#### Parameters

##### player

`number`

#### Returns

`void`

***

### setPlayerOrder()

> **setPlayerOrder**(`players`): `void`

Defined in: [player-system/player-component.ts:103](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/player-system/player-component.ts#L103)

#### Parameters

##### players

`number`[]

#### Returns

`void`

***

### shufflePlayerOrder()

> **shufflePlayerOrder**(): `void`

Defined in: [player-system/player-component.ts:86](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/player-system/player-component.ts#L86)

#### Returns

`void`
