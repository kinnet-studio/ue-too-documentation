[@ue-too/board-game-engine](../../modules.md) / [index](../index.md) / TypeModificationEffect

# Class: TypeModificationEffect\<T\>

Defined in: [action-system/effect.ts:156](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/effect.ts#L156)

## Type Parameters

### T

`T` *extends* `string`

## Implements

- [`Effect`](../interfaces/Effect.md)

## Constructors

### Constructor

> **new TypeModificationEffect**\<`T`\>(`coordinator`, `componentName`, `entity`, `valuePath`, `newType`, `allowedValues?`): `TypeModificationEffect`\<`T`\>

Defined in: [action-system/effect.ts:164](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/effect.ts#L164)

#### Parameters

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

#### Returns

`TypeModificationEffect`\<`T`\>

## Methods

### apply()

> **apply**(): `void`

Defined in: [action-system/effect.ts:180](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-game-engine/src/action-system/effect.ts#L180)

#### Returns

`void`

#### Implementation of

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)
