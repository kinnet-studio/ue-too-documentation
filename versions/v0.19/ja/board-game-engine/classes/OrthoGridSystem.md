[@ue-too/board-game-engine](../globals.md) / OrthoGridSystem

# Class: OrthoGridSystem

Defined in: [grid-system/ortho-grid.ts:86](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/grid-system/ortho-grid.ts#L86)

## Implements

- `System`

## Constructors

### Constructor

> **new OrthoGridSystem**(`coordinator`): `OrthoGridSystem`

Defined in: [grid-system/ortho-grid.ts:90](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/grid-system/ortho-grid.ts#L90)

#### Parameters

##### coordinator

`Coordinator`

#### Returns

`OrthoGridSystem`

## Properties

### entities

> **entities**: `Set`\<`number`\>

Defined in: [grid-system/ortho-grid.ts:87](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/grid-system/ortho-grid.ts#L87)

#### Implementation of

`System.entities`

## Methods

### addEntityToGridCell()

> **addEntityToGridCell**(`grid`, `row`, `column`, `entity`, `direction`, `displace`): `void`

Defined in: [grid-system/ortho-grid.ts:124](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/grid-system/ortho-grid.ts#L124)

#### Parameters

##### grid

`number`

##### row

`number`

##### column

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

> **getCellEntityAt**(`grid`, `row`, `column`): `number` \| `null`

Defined in: [grid-system/ortho-grid.ts:218](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/grid-system/ortho-grid.ts#L218)

#### Parameters

##### grid

`number`

##### row

`number`

##### column

`number`

#### Returns

`number` \| `null`

***

### getEntireGridEntities()

> **getEntireGridEntities**(`grid`): \{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`

Defined in: [grid-system/ortho-grid.ts:178](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/grid-system/ortho-grid.ts#L178)

#### Parameters

##### grid

`number`

#### Returns

\{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`
