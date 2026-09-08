[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / TypeModificationEffect

# クラス: TypeModificationEffect\<T\>

定義: [action-system/effect.ts:156](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/effect.ts#L156)

## 型パラメーター

### T

`T` *extends* `string`

## 実装

- [`Effect`](../interfaces/Effect.md)

## コンストラクター

### コンストラクター

> **new TypeModificationEffect**\<`T`\>(`coordinator`, `componentName`, `entity`, `valuePath`, `newType`, `allowedValues?`): `TypeModificationEffect`\<`T`\>

定義: [action-system/effect.ts:164](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/effect.ts#L164)

#### パラメータ

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

#### 戻り値

`TypeModificationEffect`\<`T`\>

## メソッド

### apply()

> **apply**(): `void`

定義: [action-system/effect.ts:180](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-game-engine/src/action-system/effect.ts#L180)

#### 戻り値

`void`

#### の実装

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)
