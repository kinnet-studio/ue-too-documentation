[@ue-too/board](../../modules.md) / [index](../index.md) / expandOneFingerPanTouchInputStateMachine

# 函式: expandOneFingerPanTouchInputStateMachine()

> **expandOneFingerPanTouchInputStateMachine**\<`E`, `C`, `S`, `O`\>(`context`, `define`, `initialState`): `TemplateStateMachine`\<`E`, `C`, `S`, `O`\>

定義於: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:434](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L434)

Builds a one-finger-pan touch input state machine with more events, states,
context or outputs than the stock one, reusing every built-in state.

## 型別參數

### E

`E` *extends* [`TouchEventMapping`](../type-aliases/TouchEventMapping.md)

### C

`C` *extends* [`TouchContext`](../interfaces/TouchContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* [`OneFingerPanTouchInputEventOutputMapping`](../type-aliases/OneFingerPanTouchInputEventOutputMapping.md) & `Partial`\<`Record`\<keyof `E`, `unknown`\>\>

## 參數

### context

`C`

The expanded context; must satisfy [TouchContext](../interfaces/TouchContext.md)

### define

\[[`OneFingerPanTouchStates`](../type-aliases/OneFingerPanTouchStates.md)\] *extends* \[`S`\] ? [`OneFingerPanTouchInputStateMachineExpansion`](../type-aliases/OneFingerPanTouchInputStateMachineExpansion.md)\<`E`, `C`, `S`, `O`\> : `object`

Receives the stock states and an `extend` helper, returns
the expanded state map. See [OneFingerPanTouchInputStateMachineExpansion](../type-aliases/OneFingerPanTouchInputStateMachineExpansion.md).

### initialState

`S` = `...`

Defaults to `'IDLE'`

## 回傳

`TemplateStateMachine`\<`E`, `C`, `S`, `O`\>

A machine over the expanded generics

## 備註

Same rules as [expandTouchInputStateMachine](expandTouchInputStateMachine.md): every generic must be a
superset of the stock one, `S` must include every
[OneFingerPanTouchStates](../type-aliases/OneFingerPanTouchStates.md) member, and shared events keep the stock
payload.

## 範例

Halve the pan speed while panning with one finger:
```typescript
const machine = expandOneFingerPanTouchInputStateMachine<
    TouchEventMapping,
    TouchContext,
    OneFingerPanTouchStates,
    OneFingerPanTouchInputEventOutputMapping
>(context, (stock, extend) => ({
    ...stock,
    PANNING: extend(stock.PANNING, {
        eventReactions: inherited => ({
            touchmove: {
                ...inherited.touchmove!,
                action: (context, payload, machine) =>
                    inherited.touchmove!.action(context, payload, machine)
                        ?.map(output =>
                            output.type === 'pan'
                                ? { ...output, delta: PointCal.multiplyVectorByScalar(output.delta, 0.5) }
                                : output
                        ),
            },
        }),
    }),
}));
```
