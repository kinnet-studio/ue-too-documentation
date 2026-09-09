[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / EntityFieldModificationEffect

# 類別: EntityFieldModificationEffect

定義於: [action-system/effect.ts:219](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/effect.ts#L219)

## 實作

- [`Effect`](../interfaces/Effect.md)

## 建構函式

### 建構函式

> **new EntityFieldModificationEffect**(`coordinator`, `componentName`, `entity`, `valuePath`, `newEntityValue`): `EntityFieldModificationEffect`

定義於: [action-system/effect.ts:226](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/effect.ts#L226)

#### 參數

##### coordinator

`Coordinator`

##### componentName

`symbol`

##### entity

`number`

##### valuePath

`string`

##### newEntityValue

`number`

#### 回傳

`EntityFieldModificationEffect`

## 方法

### apply()

> **apply**(): `void`

定義於: [action-system/effect.ts:240](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/effect.ts#L240)

#### 回傳

`void`

#### 實作了

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)
