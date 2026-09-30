[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / PlayerSystem

# クラス: PlayerSystem

定義: [player-system/player-component.ts:20](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L20)

## 実装

- `System`

## コンストラクター

### コンストラクター

> **new PlayerSystem**(`_coordinator`, `_playerCount`): `PlayerSystem`

定義: [player-system/player-component.ts:23](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L23)

#### パラメータ

##### \_coordinator

`Coordinator`

##### \_playerCount

`number` = `2`

#### 戻り値

`PlayerSystem`

## プロパティ

### entities

> **entities**: `Set`\<`number`\>

定義: [player-system/player-component.ts:21](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L21)

#### の実装

`System.entities`

## メソッド

### addPlayer()

> **addPlayer**(`name`): `number` \| `null`

定義: [player-system/player-component.ts:41](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L41)

#### パラメータ

##### name

`string`

#### 戻り値

`number` \| `null`

***

### getPlayerOrder()

> **getPlayerOrder**(): `number`[]

定義: [player-system/player-component.ts:155](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L155)

#### 戻り値

`number`[]

***

### getPlayers()

> **getPlayers**(): `number`[]

定義: [player-system/player-component.ts:70](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L70)

#### 戻り値

`number`[]

***

### organizePlayerOrder()

> **organizePlayerOrder**(): `void`

定義: [player-system/player-component.ts:123](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L123)

#### 戻り値

`void`

***

### playerCount()

> **playerCount**(): `number`

定義: [player-system/player-component.ts:66](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L66)

#### 戻り値

`number`

***

### removePlayer()

> **removePlayer**(`player`): `void`

定義: [player-system/player-component.ts:54](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L54)

#### パラメータ

##### player

`number`

#### 戻り値

`void`

***

### setPlayerOrder()

> **setPlayerOrder**(`players`): `void`

定義: [player-system/player-component.ts:103](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L103)

#### パラメータ

##### players

`number`[]

#### 戻り値

`void`

***

### shufflePlayerOrder()

> **shufflePlayerOrder**(): `void`

定義: [player-system/player-component.ts:86](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L86)

#### 戻り値

`void`
