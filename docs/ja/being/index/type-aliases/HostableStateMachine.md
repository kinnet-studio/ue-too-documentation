[@ue-too/being](../../modules.md) / [index](../index.md) / HostableStateMachine

# 型エイリアス: HostableStateMachine

> **HostableStateMachine** = `object`

定義: [delegating-state.ts:21](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L21)

The part of a state machine a [DelegatingState](../classes/DelegatingState.md) drives.

## Remarks

Structural on purpose: `StateMachine<any, any, any, any>` is not a supertype
of a concrete machine because the `State` type is invariant in its generics,
so the host is typed against just the members it calls. Every
`TemplateStateMachine` satisfies it.

## プロパティ

### currentState

> `readonly` **currentState**: `string`

定義: [delegating-state.ts:22](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L22)

***

### happens()

> **happens**: (...`args`) => [`EventResult`](EventResult.md)\<`any`, `any`\>

定義: [delegating-state.ts:23](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L23)

#### パラメータ

##### args

...`any`[]

#### 戻り値

[`EventResult`](EventResult.md)\<`any`, `any`\>

## メソッド

### reset()

> **reset**(): `void`

定義: [delegating-state.ts:25](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L25)

#### 戻り値

`void`

***

### start()

> **start**(): `void`

定義: [delegating-state.ts:24](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L24)

#### 戻り値

`void`

***

### wrapup()

> **wrapup**(): `void`

定義: [delegating-state.ts:26](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L26)

#### 戻り値

`void`
