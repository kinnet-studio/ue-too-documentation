[@ue-too/being](../../modules.md) / [index](../index.md) / createStateWidener

# 関数: createStateWidener()

> **createStateWidener**\<`E2`, `C2`, `S2`, `O2`\>(): \<`E1`, `C1`, `S1`, `O1`\>(`state`) => [`WidenedState`](../type-aliases/WidenedState.md)\<`E1`, `C1`, `S1`, `O1`, `E2`, `C2`, `S2`, `O2`\>

定義: [expansion.ts:55](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L55)

Creates a function that retypes a state for a machine with a superset of its
events, states, context and outputs.

## 型パラメーター

### E2

`E2`

### C2

`C2` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### S2

`S2` *extends* `string`

### O2

`O2` *extends* `Partial`\<`Record`\<keyof `E2`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`E2`\>

## 戻り値

> \<`E1`, `C1`, `S1`, `O1`\>(`state`): [`WidenedState`](../type-aliases/WidenedState.md)\<`E1`, `C1`, `S1`, `O1`, `E2`, `C2`, `S2`, `O2`\>

### 型パラメーター

#### E1

`E1`

#### C1

`C1` *extends* [`BaseContext`](../interfaces/BaseContext.md)

#### S1

`S1` *extends* `string`

#### O1

`O1` *extends* `Partial`\<`Record`\<keyof `E1`, `unknown`\>\>

### パラメータ

#### state

[`State`](../interfaces/State.md)\<`E1`, `C1`, `S1`, `O1`\>

### 戻り値

[`WidenedState`](../type-aliases/WidenedState.md)\<`E1`, `C1`, `S1`, `O1`, `E2`, `C2`, `S2`, `O2`\>

## Remarks

At runtime a state only ever consults its own reactions, so an original state
behaves correctly inside a wider machine: events it does not list come back
`handled: false`. The `State` type is invariant in its generics, though, so the
compiler rejects the registration. This helper is that cast, guarded so that a
target which *narrows* the original produces a type error instead of a lie.

Name the target generics once, then widen as many original states as needed.

## 例

```typescript
const widen = createStateWidener<ExpEvents, ExpContext, ExpStates, ExpOut>();
const states = { PAN: widen(new PanState()), IDLE: widen(new KmtIdleState()) };
```
