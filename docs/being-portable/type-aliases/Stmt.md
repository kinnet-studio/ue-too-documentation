[@ue-too/being-portable](../globals.md) / Stmt

# Type Alias: Stmt

> **Stmt** = \{ `set`: `string`; `to`: [`Expr`](Expr.md); \} \| \{ `push`: `string`; `value`: [`Expr`](Expr.md); \} \| \{ `index`: [`Expr`](Expr.md); `removeAt`: `string`; \} \| \{ `else?`: readonly `Stmt`[]; `if`: [`Expr`](Expr.md); `then`: readonly `Stmt`[]; \} \| \{ `args?`: `Readonly`\<`Record`\<`string`, [`Expr`](Expr.md)\>\>; `call`: `string`; `into?`: `string`; \} \| \{ `output`: [`Expr`](Expr.md); \}

Defined in: [being-portable/src/format/types.ts:60](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/format/types.ts#L60)

A statement.
