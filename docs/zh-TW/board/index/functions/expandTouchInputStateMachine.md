[@ue-too/board](../../modules.md) / [index](../index.md) / expandTouchInputStateMachine

# 函式: expandTouchInputStateMachine()

> **expandTouchInputStateMachine**\<`E`, `C`, `S`, `O`\>(`context`, `define`, `initialState`): `TemplateStateMachine`\<`E`, `C`, `S`, `O`\>

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:493](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L493)

Builds a touch input state machine with more events, states, context or
outputs than the stock one, reusing every built-in state.

## 型別參數

### E

`E` *extends* [`TouchEventMapping`](../type-aliases/TouchEventMapping.md)

### C

`C` *extends* [`TouchContext`](../interfaces/TouchContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md) & `Partial`\<`Record`\<keyof `E`, `unknown`\>\>

## 參數

### context

`C`

The expanded context; must satisfy [TouchContext](../interfaces/TouchContext.md)

### define

\[[`TouchStates`](../type-aliases/TouchStates.md)\] *extends* \[`S`\] ? [`TouchInputStateMachineExpansion`](../type-aliases/TouchInputStateMachineExpansion.md)\<`E`, `C`, `S`, `O`\> : `object`

Receives the stock states and an `extend` helper, returns the
expanded state map. See [TouchInputStateMachineExpansion](../type-aliases/TouchInputStateMachineExpansion.md).

### initialState

`S` = `...`

Defaults to `'IDLE'`

## 回傳

`TemplateStateMachine`\<`E`, `C`, `S`, `O`\>

A machine over the expanded generics

## 備註

Same rules as [expandKmtInputStateMachine](expandKmtInputStateMachine.md): every generic must be a
superset of the stock one, `S` must include every [TouchStates](../type-aliases/TouchStates.md) member,
and shared events keep the stock payload.
