[@ue-too/being-portable](../globals.md) / LoadOptions

# Type Alias: LoadOptions

> **LoadOptions** = `object`

Defined in: [being-portable/src/api-types.ts:90](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L90)

## Properties

### autoStart?

> `readonly` `optional` **autoStart**: `boolean`

Defined in: [being-portable/src/api-types.ts:96](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L96)

Defaults to `true`. Ignored when `snapshot` is given.

***

### restoreMode?

> `readonly` `optional` **restoreMode**: [`RestoreMode`](RestoreMode.md)

Defined in: [being-portable/src/api-types.ts:94](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L94)

Defaults to `'strict'`.

***

### snapshot?

> `readonly` `optional` **snapshot**: `unknown`

Defined in: [being-portable/src/api-types.ts:92](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L92)

Restore this snapshot instead of starting.
