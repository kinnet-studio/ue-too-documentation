[@ue-too/being](../../modules.md) / [index](../index.md) / WidenedState

# Type Alias: WidenedState\<E1, C1, S1, O1, E2, C2, S2, O2\>

> **WidenedState**\<`E1`, `C1`, `S1`, `O1`, `E2`, `C2`, `S2`, `O2`\> = \[`E2`\] *extends* \[`E1`\] ? \[`C2`\] *extends* \[`C1`\] ? \[`S1`\] *extends* \[`S2`\] ? \[`O2`\] *extends* \[`O1`\] ? [`State`](../interfaces/State.md)\<`E2`, `C2` & [`BaseContext`](../interfaces/BaseContext.md), `S2` & `string`, `O2` & `Partial`\<`Record`\<keyof `E2`, `unknown`\>\>\> : `object` : `object` : `object` : `object`

Defined in: [expansion.ts:19](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L19)

Resolves to `State<E2, C2, S2, O2>` when the target generics are a superset of
the original's, and to a descriptive error object otherwise so the mistake
surfaces where the widened state is registered.

## Type Parameters

### E1

`E1`

### C1

`C1`

### S1

`S1`

### O1

`O1`

### E2

`E2`

### C2

`C2`

### S2

`S2`

### O2

`O2`
