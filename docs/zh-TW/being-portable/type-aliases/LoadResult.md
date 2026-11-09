[@ue-too/being-portable](../globals.md) / LoadResult

# 型別別名: LoadResult

> **LoadResult** = \{ `machine`: [`PortableMachine`](../interfaces/PortableMachine.md); `ok`: `true`; `restoreReport?`: [`RestoreReport`](RestoreReport.md); \} \| \{ `errors`: readonly [`LoadError`](LoadError.md)[]; `ok`: `false`; \}

定義於: [being-portable/src/api-types.ts:102](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being-portable/src/api-types.ts#L102)

## 型別宣告

\{ `machine`: [`PortableMachine`](../interfaces/PortableMachine.md); `ok`: `true`; `restoreReport?`: [`RestoreReport`](RestoreReport.md); \}

### machine

> `readonly` **machine**: [`PortableMachine`](../interfaces/PortableMachine.md)

### ok

> `readonly` **ok**: `true`

### restoreReport?

> `readonly` `optional` **restoreReport**: [`RestoreReport`](RestoreReport.md)

Present when a snapshot was restored.

\{ `errors`: readonly [`LoadError`](LoadError.md)[]; `ok`: `false`; \}

### errors

> `readonly` **errors**: readonly [`LoadError`](LoadError.md)[]

### ok

> `readonly` **ok**: `false`
