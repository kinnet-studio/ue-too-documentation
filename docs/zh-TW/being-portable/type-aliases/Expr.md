[@ue-too/being-portable](../globals.md) / Expr

# 型別別名: Expr

> **Expr** = [`ScalarValue`](ScalarValue.md) \| \{ `list`: readonly `Expr`[]; `of?`: [`Scalar`](Scalar.md); \} \| \{ `ctx`: `string`; \} \| \{ `payload`: `string`; \} \| \{ `childCtx`: `string`; \} \| \{ `args?`: readonly `Expr`[]; `op`: `string`; \}

定義於: [being-portable/src/format/types.ts:39](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/being-portable/src/format/types.ts#L39)

An expression. Bare scalars are literals.
