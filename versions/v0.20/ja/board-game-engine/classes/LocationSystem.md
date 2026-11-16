[@ue-too/board-game-engine](../globals.md) / LocationSystem

# Class: LocationSystem

Defined in: [zone-system/zone-component.ts:61](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/zone-system/zone-component.ts#L61)

## Implements

- `System`

## Constructors

### Constructor

> **new LocationSystem**(`coordinator`): `LocationSystem`

Defined in: [zone-system/zone-component.ts:65](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/zone-system/zone-component.ts#L65)

#### Parameters

##### coordinator

`Coordinator`

#### Returns

`LocationSystem`

## Properties

### entities

> **entities**: `Set`\<`number`\>

Defined in: [zone-system/zone-component.ts:62](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/zone-system/zone-component.ts#L62)

#### Implementation of

`System.entities`

## Methods

### addEntityToZone()

> **addEntityToZone**(`zoneEntity`, `entity`, `direction`): `void`

Defined in: [zone-system/zone-component.ts:178](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/zone-system/zone-component.ts#L178)

#### Parameters

##### zoneEntity

`number`

##### entity

`number`

##### direction

`"top"` | `"bottom"`

#### Returns

`void`

***

### getEntitiesInZone()

> **getEntitiesInZone**(`zoneEntity`): `number`[]

Defined in: [zone-system/zone-component.ts:86](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/zone-system/zone-component.ts#L86)

#### Parameters

##### zoneEntity

`number`

#### Returns

`number`[]

***

### isZoneEmpty()

> **isZoneEmpty**(`zoneEntity`): `boolean`

Defined in: [zone-system/zone-component.ts:217](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/zone-system/zone-component.ts#L217)

#### Parameters

##### zoneEntity

`number`

#### Returns

`boolean`

***

### offsetZoneSortIndex()

> **offsetZoneSortIndex**(`zoneEntity`, `offset`): `void`

Defined in: [zone-system/zone-component.ts:120](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/zone-system/zone-component.ts#L120)

#### Parameters

##### zoneEntity

`number`

##### offset

`number`

#### Returns

`void`

***

### organizeZoneSortIndex()

> **organizeZoneSortIndex**(`zoneEntity`): `number`

Defined in: [zone-system/zone-component.ts:136](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/zone-system/zone-component.ts#L136)

#### Parameters

##### zoneEntity

`number`

#### Returns

`number`

***

### shuffleZone()

> **shuffleZone**(`zoneEntity`): `void`

Defined in: [zone-system/zone-component.ts:154](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/zone-system/zone-component.ts#L154)

#### Parameters

##### zoneEntity

`number`

#### Returns

`void`
