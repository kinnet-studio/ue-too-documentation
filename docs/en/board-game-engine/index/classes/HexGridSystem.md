[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / HexGridSystem

# Class: HexGridSystem

Defined in: [grid-system/hex-grid.ts:100](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L100)

## Implements

- `System`

## Constructors

### Constructor

> **new HexGridSystem**(`coordinator`): `HexGridSystem`

Defined in: [grid-system/hex-grid.ts:104](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L104)

#### Parameters

##### coordinator

`Coordinator`

#### Returns

`HexGridSystem`

## Properties

### entities

> **entities**: `Set`\<`number`\>

Defined in: [grid-system/hex-grid.ts:101](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L101)

#### Implementation of

`System.entities`

## Methods

### addEntityToGridCell()

> **addEntityToGridCell**(`grid`, `q`, `r`, `entity`, `direction`, `displace`): `void`

Defined in: [grid-system/hex-grid.ts:138](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L138)

#### Parameters

##### grid

`number`

##### q

`number`

##### r

`number`

##### entity

`number`

##### direction

`"top"` | `"bottom"`

##### displace

`boolean` = `false`

#### Returns

`void`

***

### getCellEntityAt()

> **getCellEntityAt**(`grid`, `q`, `r`): `number` \| `null`

Defined in: [grid-system/hex-grid.ts:240](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L240)

#### Parameters

##### grid

`number`

##### q

`number`

##### r

`number`

#### Returns

`number` \| `null`

***

### getEntireGridEntities()

> **getEntireGridEntities**(`grid`): \{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`

Defined in: [grid-system/hex-grid.ts:192](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L192)

#### Parameters

##### grid

`number`

#### Returns

\{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`
