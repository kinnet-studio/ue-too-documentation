[@ue-too/being-portable](../globals.md) / TypeSpec

# 型エイリアス: TypeSpec

> **TypeSpec** = [`Scalar`](Scalar.md) \| \{ `type`: [`Scalar`](Scalar.md); \} \| \{ `of`: [`Scalar`](Scalar.md); `type`: `"list"`; \}

定義: [being-portable/src/format/types.ts:14](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/format/types.ts#L14)

A type written in a document: a bare scalar name, `{ "type": scalar }`, or
`{ "type": "list", "of": scalar }`.
