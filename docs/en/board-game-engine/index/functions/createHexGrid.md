[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / createHexGrid

# Function: createHexGrid()

> **createHexGrid**(`coordinator`, `width`, `height`, `name`, `variant`): `number`

Defined in: [grid-system/hex-grid.ts:49](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L49)

Creates a hexagonal grid with offset coordinates (q, r).

## Parameters

### coordinator

`Coordinator`

The ECS coordinator

### width

`number`

The width of the grid (q dimension)

### height

`number`

The height of the grid (r dimension)

### name

`string`

The name of the grid

### variant

[`HexGridVariant`](../type-aliases/HexGridVariant.md) = `'odd-r'`

The offset coordinate variant: 'odd-r', 'even-r', 'odd-q', or 'even-q'

## Returns

`number`

The grid entity
