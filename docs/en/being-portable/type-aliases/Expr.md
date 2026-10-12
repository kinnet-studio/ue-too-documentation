[@ue-too/being-portable](../globals.md) / Expr

# Type Alias: Expr

> **Expr** = [`ScalarValue`](ScalarValue.md) \| \{ `list`: readonly `Expr`[]; `of?`: [`Scalar`](Scalar.md); \} \| \{ `ctx`: `string`; \} \| \{ `payload`: `string`; \} \| \{ `childCtx`: `string`; \} \| \{ `args?`: readonly `Expr`[]; `op`: `string`; \}

Defined in: [being-portable/src/format/types.ts:39](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/being-portable/src/format/types.ts#L39)

An expression. Bare scalars are literals.
