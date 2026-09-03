[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / createHexGrid

# 関数: createHexGrid()

> **createHexGrid**(`coordinator`, `width`, `height`, `name`, `variant`): `number`

定義: [grid-system/hex-grid.ts:49](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/grid-system/hex-grid.ts#L49)

Creates a hexagonal grid with offset coordinates (q, r).

## パラメータ

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

## 戻り値

`number`

The grid entity
