[@ue-too/being-portable](../globals.md) / TypeSpec

# 型エイリアス: TypeSpec

> **TypeSpec** = [`Scalar`](Scalar.md) \| \{ `type`: [`Scalar`](Scalar.md); \} \| \{ `of`: [`Scalar`](Scalar.md); `type`: `"list"`; \}

定義: [being-portable/src/format/types.ts:14](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/being-portable/src/format/types.ts#L14)

A type written in a document: a bare scalar name, `{ "type": scalar }`, or
`{ "type": "list", "of": scalar }`.
