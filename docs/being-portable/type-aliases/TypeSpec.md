[@ue-too/being-portable](../globals.md) / TypeSpec

# Type Alias: TypeSpec

> **TypeSpec** = [`Scalar`](Scalar.md) \| \{ `type`: [`Scalar`](Scalar.md); \} \| \{ `of`: [`Scalar`](Scalar.md); `type`: `"list"`; \}

Defined in: [being-portable/src/format/types.ts:14](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/being-portable/src/format/types.ts#L14)

A type written in a document: a bare scalar name, `{ "type": scalar }`, or
`{ "type": "list", "of": scalar }`.
