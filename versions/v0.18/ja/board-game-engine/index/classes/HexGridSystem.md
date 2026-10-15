[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / HexGridSystem

# クラス: HexGridSystem

定義: [grid-system/hex-grid.ts:100](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/grid-system/hex-grid.ts#L100)

## 実装

- `System`

## コンストラクター

### コンストラクター

> **new HexGridSystem**(`coordinator`): `HexGridSystem`

定義: [grid-system/hex-grid.ts:104](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/grid-system/hex-grid.ts#L104)

#### パラメータ

##### coordinator

`Coordinator`

#### 戻り値

`HexGridSystem`

## プロパティ

### entities

> **entities**: `Set`\<`number`\>

定義: [grid-system/hex-grid.ts:101](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/grid-system/hex-grid.ts#L101)

#### の実装

`System.entities`

## メソッド

### addEntityToGridCell()

> **addEntityToGridCell**(`grid`, `q`, `r`, `entity`, `direction`, `displace`): `void`

定義: [grid-system/hex-grid.ts:138](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/grid-system/hex-grid.ts#L138)

#### パラメータ

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

#### 戻り値

`void`

***

### getCellEntityAt()

> **getCellEntityAt**(`grid`, `q`, `r`): `number` \| `null`

定義: [grid-system/hex-grid.ts:240](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/grid-system/hex-grid.ts#L240)

#### パラメータ

##### grid

`number`

##### q

`number`

##### r

`number`

#### 戻り値

`number` \| `null`

***

### getEntireGridEntities()

> **getEntireGridEntities**(`grid`): \{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`

定義: [grid-system/hex-grid.ts:192](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/grid-system/hex-grid.ts#L192)

#### パラメータ

##### grid

`number`

#### 戻り値

\{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`
