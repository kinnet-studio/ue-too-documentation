[@ue-too/being](../../modules.md) / [index](../index.md) / StateExtension

# 型別別名: StateExtension\<E, C, S, O\>

> **StateExtension**\<`E`, `C`, `S`, `O`\> = `object`

定義於: [expansion.ts:96](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L96)

What [extendState](../functions/extendState.md) may add to or wrap on an existing state.

## 型別參數

### E

`E`

### C

`C` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* `Partial`\<`Record`\<keyof `E`, `unknown`\>\>

## 屬性

### beforeExit()?

> `optional` **beforeExit**: (`context`, `stateMachine`, `to`, `inherited`) => `void`

定義於: [expansion.ts:124](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L124)

Wraps the inherited `beforeExit`; call `inherited()` to run the original.

#### 參數

##### context

`C`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`E`, `C`, `S`, `O`\>

##### to

`S` | `"TERMINAL"`

##### inherited

() => `void`

#### 回傳

`void`

***

### eventGuards?

> `optional` **eventGuards**: `Partial`\<[`EventGuards`](EventGuards.md)\<`E`, `S`, `C`, [`Guard`](Guard.md)\<`C`\>\>\>

定義於: [expansion.ts:115](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L115)

Event guards to add; merged over the inherited event guards.

***

### eventReactions?

> `optional` **eventReactions**: `Partial`\<[`EventReactions`](EventReactions.md)\<`E`, `C`, `S`, `O`\>\> \| (`inherited`) => `Partial`\<[`EventReactions`](EventReactions.md)\<`E`, `C`, `S`, `O`\>\>

定義於: [expansion.ts:107](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L107)

Reactions to add or override. Pass an object to merge over the inherited
reactions, or a function that receives the inherited reactions so an
override can wrap the original action.

***

### guards?

> `optional` **guards**: [`Guard`](Guard.md)\<`C`\>

定義於: [expansion.ts:113](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L113)

Guards to add; merged over the inherited guards.

***

### uponEnter()?

> `optional` **uponEnter**: (`context`, `stateMachine`, `from`, `inherited`) => `void`

定義於: [expansion.ts:117](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L117)

Wraps the inherited `uponEnter`; call `inherited()` to run the original.

#### 參數

##### context

`C`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`E`, `C`, `S`, `O`\>

##### from

`S` | `"INITIAL"`

##### inherited

() => `void`

#### 回傳

`void`
