[@ue-too/being-portable](../globals.md) / Expr

# 型別別名: Expr

> **Expr** = [`ScalarValue`](ScalarValue.md) \| \{ `list`: readonly `Expr`[]; `of?`: [`Scalar`](Scalar.md); \} \| \{ `ctx`: `string`; \} \| \{ `payload`: `string`; \} \| \{ `childCtx`: `string`; \} \| \{ `args?`: readonly `Expr`[]; `op`: `string`; \}

定義於: [being-portable/src/format/types.ts:39](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/format/types.ts#L39)

An expression. Bare scalars are literals.
