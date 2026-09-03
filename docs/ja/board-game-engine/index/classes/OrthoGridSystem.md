[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / OrthoGridSystem

# クラス: OrthoGridSystem

定義: [grid-system/ortho-grid.ts:86](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/grid-system/ortho-grid.ts#L86)

## 実装

- `System`

## コンストラクター

### コンストラクター

> **new OrthoGridSystem**(`coordinator`): `OrthoGridSystem`

定義: [grid-system/ortho-grid.ts:90](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/grid-system/ortho-grid.ts#L90)

#### パラメータ

##### coordinator

`Coordinator`

#### 戻り値

`OrthoGridSystem`

## プロパティ

### entities

> **entities**: `Set`\<`number`\>

定義: [grid-system/ortho-grid.ts:87](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/grid-system/ortho-grid.ts#L87)

#### の実装

`System.entities`

## メソッド

### addEntityToGridCell()

> **addEntityToGridCell**(`grid`, `row`, `column`, `entity`, `direction`, `displace`): `void`

定義: [grid-system/ortho-grid.ts:124](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/grid-system/ortho-grid.ts#L124)

#### パラメータ

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

#### 戻り値

`void`

***

### getCellEntityAt()

> **getCellEntityAt**(`grid`, `row`, `column`): `number` \| `null`

定義: [grid-system/ortho-grid.ts:218](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/grid-system/ortho-grid.ts#L218)

#### パラメータ

##### grid

`number`

##### row

`number`

##### column

`number`

#### 戻り値

`number` \| `null`

***

### getEntireGridEntities()

> **getEntireGridEntities**(`grid`): \{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`

定義: [grid-system/ortho-grid.ts:178](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/grid-system/ortho-grid.ts#L178)

#### パラメータ

##### grid

`number`

#### 戻り値

\{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`
