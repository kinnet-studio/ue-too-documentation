[@ue-too/being-portable](../globals.md) / RuntimeError

# Type Alias: RuntimeError

> **RuntimeError** = `object`

Defined in: [being-portable/src/errors.ts:77](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/errors.ts#L77)

A failure reported to the host's `onError`. The machine tree has already
been rolled back when this is reported.

## Properties

### code

> `readonly` **code**: [`RuntimeErrorCode`](RuntimeErrorCode.md)

Defined in: [being-portable/src/errors.ts:78](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/errors.ts#L78)

***

### effectsCalled

> `readonly` **effectsCalled**: readonly `string`[]

Defined in: [being-portable/src/errors.ts:85](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/errors.ts#L85)

Effects that ran before the failure. They are not undone.

***

### event

> `readonly` **event**: `string` \| `null`

Defined in: [being-portable/src/errors.ts:83](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/errors.ts#L83)

The event being handled, or `null` for start, reset and wrapup.

***

### message

> `readonly` **message**: `string`

Defined in: [being-portable/src/errors.ts:79](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/errors.ts#L79)

***

### path

> `readonly` **path**: `string`

Defined in: [being-portable/src/errors.ts:81](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/errors.ts#L81)

JSON path of the statement or guard that failed.
