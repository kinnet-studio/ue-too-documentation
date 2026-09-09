[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / HexGridSystem

# 類別: HexGridSystem

定義於: [grid-system/hex-grid.ts:100](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L100)

## 實作

- `System`

## 建構函式

### 建構函式

> **new HexGridSystem**(`coordinator`): `HexGridSystem`

定義於: [grid-system/hex-grid.ts:104](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L104)

#### 參數

##### coordinator

`Coordinator`

#### 回傳

`HexGridSystem`

## 屬性

### entities

> **entities**: `Set`\<`number`\>

定義於: [grid-system/hex-grid.ts:101](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L101)

#### 實作了

`System.entities`

## 方法

### addEntityToGridCell()

> **addEntityToGridCell**(`grid`, `q`, `r`, `entity`, `direction`, `displace`): `void`

定義於: [grid-system/hex-grid.ts:138](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L138)

#### 參數

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

#### 回傳

`void`

***

### getCellEntityAt()

> **getCellEntityAt**(`grid`, `q`, `r`): `number` \| `null`

定義於: [grid-system/hex-grid.ts:240](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L240)

#### 參數

##### grid

`number`

##### q

`number`

##### r

`number`

#### 回傳

`number` \| `null`

***

### getEntireGridEntities()

> **getEntireGridEntities**(`grid`): \{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`

定義於: [grid-system/hex-grid.ts:192](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/grid-system/hex-grid.ts#L192)

#### 參數

##### grid

`number`

#### 回傳

\{ `entities`: (`number` \| `null`)[][]; `hasHole`: `boolean`; \} \| `null`
