[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / LocationSystem

# クラス: LocationSystem

定義: [zone-system/zone-component.ts:61](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/zone-system/zone-component.ts#L61)

## 実装

- `System`

## コンストラクター

### コンストラクター

> **new LocationSystem**(`coordinator`): `LocationSystem`

定義: [zone-system/zone-component.ts:65](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/zone-system/zone-component.ts#L65)

#### パラメータ

##### coordinator

`Coordinator`

#### 戻り値

`LocationSystem`

## プロパティ

### entities

> **entities**: `Set`\<`number`\>

定義: [zone-system/zone-component.ts:62](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/zone-system/zone-component.ts#L62)

#### の実装

`System.entities`

## メソッド

### addEntityToZone()

> **addEntityToZone**(`zoneEntity`, `entity`, `direction`): `void`

定義: [zone-system/zone-component.ts:178](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/zone-system/zone-component.ts#L178)

#### パラメータ

##### zoneEntity

`number`

##### entity

`number`

##### direction

`"top"` | `"bottom"`

#### 戻り値

`void`

***

### getEntitiesInZone()

> **getEntitiesInZone**(`zoneEntity`): `number`[]

定義: [zone-system/zone-component.ts:86](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/zone-system/zone-component.ts#L86)

#### パラメータ

##### zoneEntity

`number`

#### 戻り値

`number`[]

***

### isZoneEmpty()

> **isZoneEmpty**(`zoneEntity`): `boolean`

定義: [zone-system/zone-component.ts:217](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/zone-system/zone-component.ts#L217)

#### パラメータ

##### zoneEntity

`number`

#### 戻り値

`boolean`

***

### offsetZoneSortIndex()

> **offsetZoneSortIndex**(`zoneEntity`, `offset`): `void`

定義: [zone-system/zone-component.ts:120](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/zone-system/zone-component.ts#L120)

#### パラメータ

##### zoneEntity

`number`

##### offset

`number`

#### 戻り値

`void`

***

### organizeZoneSortIndex()

> **organizeZoneSortIndex**(`zoneEntity`): `number`

定義: [zone-system/zone-component.ts:136](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/zone-system/zone-component.ts#L136)

#### パラメータ

##### zoneEntity

`number`

#### 戻り値

`number`

***

### shuffleZone()

> **shuffleZone**(`zoneEntity`): `void`

定義: [zone-system/zone-component.ts:154](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/zone-system/zone-component.ts#L154)

#### パラメータ

##### zoneEntity

`number`

#### 戻り値

`void`
