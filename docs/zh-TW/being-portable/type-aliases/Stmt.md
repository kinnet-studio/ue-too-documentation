[@ue-too/being-portable](../globals.md) / Stmt

# 型別別名: Stmt

> **Stmt** = \{ `set`: `string`; `to`: [`Expr`](Expr.md); \} \| \{ `push`: `string`; `value`: [`Expr`](Expr.md); \} \| \{ `index`: [`Expr`](Expr.md); `removeAt`: `string`; \} \| \{ `else?`: readonly `Stmt`[]; `if`: [`Expr`](Expr.md); `then`: readonly `Stmt`[]; \} \| \{ `args?`: `Readonly`\<`Record`\<`string`, [`Expr`](Expr.md)\>\>; `call`: `string`; `into?`: `string`; \} \| \{ `output`: [`Expr`](Expr.md); \}

定義於: [being-portable/src/format/types.ts:60](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being-portable/src/format/types.ts#L60)

A statement.
