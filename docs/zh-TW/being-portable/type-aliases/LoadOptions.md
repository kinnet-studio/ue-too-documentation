[@ue-too/being-portable](../globals.md) / LoadOptions

# 型別別名: LoadOptions

> **LoadOptions** = `object`

定義於: [being-portable/src/api-types.ts:90](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L90)

## 屬性

### autoStart?

> `readonly` `optional` **autoStart**: `boolean`

定義於: [being-portable/src/api-types.ts:96](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L96)

Defaults to `true`. Ignored when `snapshot` is given.

***

### restoreMode?

> `readonly` `optional` **restoreMode**: [`RestoreMode`](RestoreMode.md)

定義於: [being-portable/src/api-types.ts:94](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L94)

Defaults to `'strict'`.

***

### snapshot?

> `readonly` `optional` **snapshot**: `unknown`

定義於: [being-portable/src/api-types.ts:92](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L92)

Restore this snapshot instead of starting.
