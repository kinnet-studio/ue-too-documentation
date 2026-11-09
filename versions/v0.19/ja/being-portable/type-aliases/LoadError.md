[@ue-too/being-portable](../globals.md) / LoadError

# 型エイリアス: LoadError

> **LoadError** = `object`

定義: [being-portable/src/errors.ts:47](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/errors.ts#L47)

One problem found while loading a definition or restoring a snapshot.

## プロパティ

### code

> `readonly` **code**: [`LoadErrorCode`](LoadErrorCode.md)

定義: [being-portable/src/errors.ts:48](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/errors.ts#L48)

***

### message

> `readonly` **message**: `string`

定義: [being-portable/src/errors.ts:49](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/errors.ts#L49)

***

### path

> `readonly` **path**: `string`

定義: [being-portable/src/errors.ts:51](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/errors.ts#L51)

JSON path into the document, e.g. `states.READY.on.select.do[1]`.
