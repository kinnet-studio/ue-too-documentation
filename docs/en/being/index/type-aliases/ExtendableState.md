[@ue-too/being](../../modules.md) / [index](../index.md) / ExtendableState

# Type Alias: ExtendableState

> **ExtendableState** = `object`

Defined in: [expansion.ts:81](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L81)

The part of a state [extendState](../functions/extendState.md) reads from the original.

## Remarks

Structural for the same reason as `HostableStateMachine`: a concrete state is
not assignable to `State<any, any, any, any>`. Every `State` satisfies it.

## Properties

### beforeExit()

> **beforeExit**: (...`args`) => `void`

Defined in: [expansion.ts:88](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L88)

#### Parameters

##### args

...`any`[]

#### Returns

`void`

***

### delay

> `readonly` **delay**: `unknown`

Defined in: [expansion.ts:86](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L86)

***

### eventGuards

> `readonly` **eventGuards**: `object`

Defined in: [expansion.ts:84](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L84)

***

### eventPreconditions?

> `readonly` `optional` **eventPreconditions**: `object`

Defined in: [expansion.ts:85](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L85)

***

### eventReactions

> `readonly` **eventReactions**: `object`

Defined in: [expansion.ts:82](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L82)

***

### guards

> `readonly` **guards**: `object`

Defined in: [expansion.ts:83](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L83)

***

### uponEnter()

> **uponEnter**: (...`args`) => `void`

Defined in: [expansion.ts:87](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L87)

#### Parameters

##### args

...`any`[]

#### Returns

`void`
