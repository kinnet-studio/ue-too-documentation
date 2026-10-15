[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / LocationSystem

# 類別: LocationSystem

定義於: [zone-system/zone-component.ts:61](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/zone-system/zone-component.ts#L61)

## 實作

- `System`

## 建構函式

### 建構函式

> **new LocationSystem**(`coordinator`): `LocationSystem`

定義於: [zone-system/zone-component.ts:65](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/zone-system/zone-component.ts#L65)

#### 參數

##### coordinator

`Coordinator`

#### 回傳

`LocationSystem`

## 屬性

### entities

> **entities**: `Set`\<`number`\>

定義於: [zone-system/zone-component.ts:62](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/zone-system/zone-component.ts#L62)

#### 實作了

`System.entities`

## 方法

### addEntityToZone()

> **addEntityToZone**(`zoneEntity`, `entity`, `direction`): `void`

定義於: [zone-system/zone-component.ts:178](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/zone-system/zone-component.ts#L178)

#### 參數

##### zoneEntity

`number`

##### entity

`number`

##### direction

`"top"` | `"bottom"`

#### 回傳

`void`

***

### getEntitiesInZone()

> **getEntitiesInZone**(`zoneEntity`): `number`[]

定義於: [zone-system/zone-component.ts:86](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/zone-system/zone-component.ts#L86)

#### 參數

##### zoneEntity

`number`

#### 回傳

`number`[]

***

### isZoneEmpty()

> **isZoneEmpty**(`zoneEntity`): `boolean`

定義於: [zone-system/zone-component.ts:217](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/zone-system/zone-component.ts#L217)

#### 參數

##### zoneEntity

`number`

#### 回傳

`boolean`

***

### offsetZoneSortIndex()

> **offsetZoneSortIndex**(`zoneEntity`, `offset`): `void`

定義於: [zone-system/zone-component.ts:120](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/zone-system/zone-component.ts#L120)

#### 參數

##### zoneEntity

`number`

##### offset

`number`

#### 回傳

`void`

***

### organizeZoneSortIndex()

> **organizeZoneSortIndex**(`zoneEntity`): `number`

定義於: [zone-system/zone-component.ts:136](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/zone-system/zone-component.ts#L136)

#### 參數

##### zoneEntity

`number`

#### 回傳

`number`

***

### shuffleZone()

> **shuffleZone**(`zoneEntity`): `void`

定義於: [zone-system/zone-component.ts:154](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/zone-system/zone-component.ts#L154)

#### 參數

##### zoneEntity

`number`

#### 回傳

`void`
