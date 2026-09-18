[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / OrthoGridSystem

# 類別: OrthoGridSystem

定義於: [grid-system/ortho-grid.ts:86](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/grid-system/ortho-grid.ts#L86)

## 實作

- `System`

## 建構函式

### 建構函式

> **new OrthoGridSystem**(`coordinator`): `OrthoGridSystem`

定義於: [grid-system/ortho-grid.ts:90](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/grid-system/ortho-grid.ts#L90)

#### 參數

##### coordinator

`Coordinator`

#### 回傳

`OrthoGridSystem`

## 屬性

### entities

> **entities**: `Set`\<`number`\>

定義於: [grid-system/ortho-grid.ts:87](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/grid-system/ortho-grid.ts#L87)

#### 實作了

`System.entities`

## 方法

### addEntityToGridCell()

> **addEntityToGridCell**(`grid`, `row`, `column`, `entity`, `direction`, `displace`): `void`

定義於: [grid-system/ortho-grid.ts:124](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/grid-system/ortho-grid.ts#L124)

#### 參數

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

#### 回傳

`void`

***

### getCellEntityAt()

> **getCellEntityAt**(`grid`, `row`, `column`): `number` \| `null`

定義於: [grid-system/ortho-grid.ts:218](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/grid-system/ortho-grid.ts#L218)

#### 參數

##### grid

`number`

##### row

`number`

##### column

`number`

#### 回傳

`number` \| `null`

***

### getEntireGridEntities()

> **getEntireGridEntities**(`grid`): \{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`

定義於: [grid-system/ortho-grid.ts:178](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/grid-system/ortho-grid.ts#L178)

#### 參數

##### grid

`number`

#### 回傳

\{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`
