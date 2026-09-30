[@ue-too/board-pixi-integration](../../modules.md) / [index](../index.md) / attachBaseTeardown

# 函式: attachBaseTeardown()

> **attachBaseTeardown**\<`T`\>(`components`): `T` & `object`

定義於: [base-teardown.ts:26](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-pixi-integration/src/base-teardown.ts#L26)

Attaches the base teardown to a components object and returns THAT SAME
 object with `cleanup` set.

 The teardown reads `kmtParser` / `touchParser` off the object AT TEARDOWN
 TIME, not at creation: apps routinely assign extended parsers onto the
 returned components after `baseInitApp` resolves (tearing the originals
 down as part of the swap), and those swapped-in parsers own window-level
 keydown/keyup listeners. A teardown that closed over the original parser
 variables — or read from a different object than the one the app mutates
 — would leave the live parsers registered and retain the whole app graph
 across remounts. That is why this mutates and returns the same object
 rather than spreading into a new one.

 The teardown is also registered in `cleanups`, so the React integration
 runs it even when an app replaces `cleanup` by spreading these components
 into its own object.

## 型別參數

### T

`T` *extends* [`BaseTeardownTarget`](../interfaces/BaseTeardownTarget.md)

## 參數

### components

`T`

## 回傳

`T` & `object`
