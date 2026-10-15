[@ue-too/board-game-engine](../globals.md) / TypeModificationEffect

# Class: TypeModificationEffect\<T\>

Defined in: [action-system/effect.ts:156](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/action-system/effect.ts#L156)

## Type Parameters

### T

`T` *extends* `string`

## Implements

- [`Effect`](../interfaces/Effect.md)

## Constructors

### Constructor

> **new TypeModificationEffect**\<`T`\>(`coordinator`, `componentName`, `entity`, `valuePath`, `newType`, `allowedValues?`): `TypeModificationEffect`\<`T`\>

Defined in: [action-system/effect.ts:164](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/action-system/effect.ts#L164)

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

Defined in: [action-system/effect.ts:180](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-game-engine/src/action-system/effect.ts#L180)

#### Returns

`void`

#### Implementation of

[`Effect`](../interfaces/Effect.md).[`apply`](../interfaces/Effect.md#apply)
