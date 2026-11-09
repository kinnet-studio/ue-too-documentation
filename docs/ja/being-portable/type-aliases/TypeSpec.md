[@ue-too/being-portable](../globals.md) / TypeSpec

# 型エイリアス: TypeSpec

> **TypeSpec** = [`Scalar`](Scalar.md) \| \{ `type`: [`Scalar`](Scalar.md); \} \| \{ `of`: [`Scalar`](Scalar.md); `type`: `"list"`; \}

定義: [being-portable/src/format/types.ts:14](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being-portable/src/format/types.ts#L14)

A type written in a document: a bare scalar name, `{ "type": scalar }`, or
`{ "type": "list", "of": scalar }`.
