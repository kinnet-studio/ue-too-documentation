[@ue-too/being](../../modules.md) / [index](../index.md) / ExtendableState

# 型別別名: ExtendableState

> **ExtendableState** = `object`

定義於: [expansion.ts:81](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L81)

The part of a state [extendState](../functions/extendState.md) reads from the original.

## 備註

Structural for the same reason as `HostableStateMachine`: a concrete state is
not assignable to `State<any, any, any, any>`. Every `State` satisfies it.

## 屬性

### beforeExit()

> **beforeExit**: (...`args`) => `void`

定義於: [expansion.ts:88](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L88)

#### 參數

##### args

...`any`[]

#### 回傳

`void`

***

### delay

> `readonly` **delay**: `unknown`

定義於: [expansion.ts:86](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L86)

***

### eventGuards

> `readonly` **eventGuards**: `object`

定義於: [expansion.ts:84](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L84)

***

### eventPreconditions?

> `readonly` `optional` **eventPreconditions**: `object`

定義於: [expansion.ts:85](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L85)

***

### eventReactions

> `readonly` **eventReactions**: `object`

定義於: [expansion.ts:82](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L82)

***

### guards

> `readonly` **guards**: `object`

定義於: [expansion.ts:83](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L83)

***

### uponEnter()

> **uponEnter**: (...`args`) => `void`

定義於: [expansion.ts:87](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L87)

#### 參數

##### args

...`any`[]

#### 回傳

`void`
