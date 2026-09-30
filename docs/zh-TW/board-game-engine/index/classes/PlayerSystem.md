[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / PlayerSystem

# 類別: PlayerSystem

定義於: [player-system/player-component.ts:20](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L20)

## 實作

- `System`

## 建構函式

### 建構函式

> **new PlayerSystem**(`_coordinator`, `_playerCount`): `PlayerSystem`

定義於: [player-system/player-component.ts:23](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L23)

#### 參數

##### \_coordinator

`Coordinator`

##### \_playerCount

`number` = `2`

#### 回傳

`PlayerSystem`

## 屬性

### entities

> **entities**: `Set`\<`number`\>

定義於: [player-system/player-component.ts:21](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L21)

#### 實作了

`System.entities`

## 方法

### addPlayer()

> **addPlayer**(`name`): `number` \| `null`

定義於: [player-system/player-component.ts:41](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L41)

#### 參數

##### name

`string`

#### 回傳

`number` \| `null`

***

### getPlayerOrder()

> **getPlayerOrder**(): `number`[]

定義於: [player-system/player-component.ts:155](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L155)

#### 回傳

`number`[]

***

### getPlayers()

> **getPlayers**(): `number`[]

定義於: [player-system/player-component.ts:70](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L70)

#### 回傳

`number`[]

***

### organizePlayerOrder()

> **organizePlayerOrder**(): `void`

定義於: [player-system/player-component.ts:123](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L123)

#### 回傳

`void`

***

### playerCount()

> **playerCount**(): `number`

定義於: [player-system/player-component.ts:66](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L66)

#### 回傳

`number`

***

### removePlayer()

> **removePlayer**(`player`): `void`

定義於: [player-system/player-component.ts:54](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L54)

#### 參數

##### player

`number`

#### 回傳

`void`

***

### setPlayerOrder()

> **setPlayerOrder**(`players`): `void`

定義於: [player-system/player-component.ts:103](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L103)

#### 參數

##### players

`number`[]

#### 回傳

`void`

***

### shufflePlayerOrder()

> **shufflePlayerOrder**(): `void`

定義於: [player-system/player-component.ts:86](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-game-engine/src/player-system/player-component.ts#L86)

#### 回傳

`void`
