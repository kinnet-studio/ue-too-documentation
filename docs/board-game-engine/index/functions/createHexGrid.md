[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / createHexGrid

# Function: createHexGrid()

> **createHexGrid**(`coordinator`, `width`, `height`, `name`, `variant`): `number`

Defined in: [grid-system/hex-grid.ts:49](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/board-game-engine/src/grid-system/hex-grid.ts#L49)

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
