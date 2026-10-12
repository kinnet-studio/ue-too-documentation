[@ue-too/being-portable](../globals.md) / LoadError

# 型別別名: LoadError

> **LoadError** = `object`

定義於: [being-portable/src/errors.ts:47](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/being-portable/src/errors.ts#L47)

One problem found while loading a definition or restoring a snapshot.

## 屬性

### code

> `readonly` **code**: [`LoadErrorCode`](LoadErrorCode.md)

定義於: [being-portable/src/errors.ts:48](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/being-portable/src/errors.ts#L48)

***

### message

> `readonly` **message**: `string`

定義於: [being-portable/src/errors.ts:49](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/being-portable/src/errors.ts#L49)

***

### path

> `readonly` **path**: `string`

定義於: [being-portable/src/errors.ts:51](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/being-portable/src/errors.ts#L51)

JSON path into the document, e.g. `states.READY.on.select.do[1]`.
