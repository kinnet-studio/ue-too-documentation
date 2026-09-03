[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / MoveEntityToZoneEffect

# 類別: MoveEntityToZoneEffect

定義於: [zone-system/effect.ts:13](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/zone-system/effect.ts#L13)

## 實作

- [`Effect`](../interfaces/Effect.md)

## 建構函式

### 建構函式

> **new MoveEntityToZoneEffect**(`coordinator`, `entity`, `zoneEntity`, `addToIfZoneOrdered`): `MoveEntityToZoneEffect`

定義於: [zone-system/effect.ts:19](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/zone-system/effect.ts#L19)

#### 參數

##### coordinator

`Coordinator`

##### entity

`number`

##### zoneEntity

`number`

##### addToIfZoneOrdered

`"top"` | `"bottom"`

#### 回傳

`MoveEntityToZoneEffect`

## 方法

### apply()

> **apply**(): `void`

定義於: [zone-system/effect.ts:31](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-game-engine/src/zone-system/effect.ts#L31)

#### 回傳

`void`

#### 實作了

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)
