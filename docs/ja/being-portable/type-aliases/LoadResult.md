[@ue-too/being-portable](../globals.md) / LoadResult

# 型エイリアス: LoadResult

> **LoadResult** = \{ `machine`: [`PortableMachine`](../interfaces/PortableMachine.md); `ok`: `true`; `restoreReport?`: [`RestoreReport`](RestoreReport.md); \} \| \{ `errors`: readonly [`LoadError`](LoadError.md)[]; `ok`: `false`; \}

定義: [being-portable/src/api-types.ts:102](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/being-portable/src/api-types.ts#L102)

## 型宣言

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
