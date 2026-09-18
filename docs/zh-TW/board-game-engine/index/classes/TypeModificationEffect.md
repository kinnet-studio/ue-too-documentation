[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / TypeModificationEffect

# 類別: TypeModificationEffect\<T\>

定義於: [action-system/effect.ts:156](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/action-system/effect.ts#L156)

## 型別參數

### T

`T` *extends* `string`

## 實作

- [`Effect`](../interfaces/Effect.md)

## 建構函式

### 建構函式

> **new TypeModificationEffect**\<`T`\>(`coordinator`, `componentName`, `entity`, `valuePath`, `newType`, `allowedValues?`): `TypeModificationEffect`\<`T`\>

定義於: [action-system/effect.ts:164](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/action-system/effect.ts#L164)

#### 參數

##### coordinator

`Coordinator`

##### componentName

`symbol`

##### entity

`number`

##### valuePath

`string`

##### newType

`T`

##### allowedValues?

readonly `T`[]

#### 回傳

`TypeModificationEffect`\<`T`\>

## 方法

### apply()

> **apply**(): `void`

定義於: [action-system/effect.ts:180](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-game-engine/src/action-system/effect.ts#L180)

#### 回傳

`void`

#### 實作了

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)
