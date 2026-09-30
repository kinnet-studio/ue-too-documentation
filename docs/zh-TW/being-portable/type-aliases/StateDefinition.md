[@ue-too/being-portable](../globals.md) / StateDefinition

# 型別別名: StateDefinition

> **StateDefinition** = `object`

定義於: [being-portable/src/format/types.ts:117](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/format/types.ts#L117)

One state.

## 屬性

### child?

> `readonly` `optional` **child**: [`ChildDefinition`](ChildDefinition.md)

定義於: [being-portable/src/format/types.ts:123](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/format/types.ts#L123)

***

### enter?

> `readonly` `optional` **enter**: readonly [`Stmt`](Stmt.md)[]

定義於: [being-portable/src/format/types.ts:120](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/format/types.ts#L120)

***

### exit?

> `readonly` `optional` **exit**: readonly [`Stmt`](Stmt.md)[]

定義於: [being-portable/src/format/types.ts:121](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/format/types.ts#L121)

***

### final?

> `readonly` `optional` **final**: `boolean`

定義於: [being-portable/src/format/types.ts:118](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/format/types.ts#L118)

***

### guards?

> `readonly` `optional` **guards**: `Readonly`\<`Record`\<`string`, [`Expr`](Expr.md)\>\>

定義於: [being-portable/src/format/types.ts:119](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/format/types.ts#L119)

***

### on?

> `readonly` `optional` **on**: `Readonly`\<`Record`\<`string`, [`Reaction`](Reaction.md)\>\>

定義於: [being-portable/src/format/types.ts:122](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/format/types.ts#L122)

***

### onDone?

> `readonly` `optional` **onDone**: [`DoneReaction`](DoneReaction.md)

定義於: [being-portable/src/format/types.ts:124](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/format/types.ts#L124)
