[@ue-too/being-portable](../globals.md) / RuntimeError

# 型エイリアス: RuntimeError

> **RuntimeError** = `object`

定義: [being-portable/src/errors.ts:77](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/errors.ts#L77)

A failure reported to the host's `onError`. The machine tree has already
been rolled back when this is reported.

## プロパティ

### code

> `readonly` **code**: [`RuntimeErrorCode`](RuntimeErrorCode.md)

定義: [being-portable/src/errors.ts:78](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/errors.ts#L78)

***

### effectsCalled

> `readonly` **effectsCalled**: readonly `string`[]

定義: [being-portable/src/errors.ts:85](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/errors.ts#L85)

Effects that ran before the failure. They are not undone.

***

### event

> `readonly` **event**: `string` \| `null`

定義: [being-portable/src/errors.ts:83](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/errors.ts#L83)

The event being handled, or `null` for start, reset and wrapup.

***

### message

> `readonly` **message**: `string`

定義: [being-portable/src/errors.ts:79](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/errors.ts#L79)

***

### path

> `readonly` **path**: `string`

定義: [being-portable/src/errors.ts:81](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/errors.ts#L81)

JSON path of the statement or guard that failed.
