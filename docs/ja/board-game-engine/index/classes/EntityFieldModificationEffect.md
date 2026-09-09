[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / EntityFieldModificationEffect

# クラス: EntityFieldModificationEffect

定義: [action-system/effect.ts:219](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/effect.ts#L219)

## 実装

- [`Effect`](../interfaces/Effect.md)

## コンストラクター

### コンストラクター

> **new EntityFieldModificationEffect**(`coordinator`, `componentName`, `entity`, `valuePath`, `newEntityValue`): `EntityFieldModificationEffect`

定義: [action-system/effect.ts:226](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/effect.ts#L226)

#### パラメータ

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

#### 戻り値

`EntityFieldModificationEffect`

## メソッド

### apply()

> **apply**(): `void`

定義: [action-system/effect.ts:240](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/effect.ts#L240)

#### 戻り値

`void`

#### の実装

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)
