[@ue-too/being-portable](../globals.md) / LoadResult

# Type Alias: LoadResult

> **LoadResult** = \{ `machine`: [`PortableMachine`](../interfaces/PortableMachine.md); `ok`: `true`; `restoreReport?`: [`RestoreReport`](RestoreReport.md); \} \| \{ `errors`: readonly [`LoadError`](LoadError.md)[]; `ok`: `false`; \}

Defined in: [being-portable/src/api-types.ts:102](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/api-types.ts#L102)

## Type Declaration

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
