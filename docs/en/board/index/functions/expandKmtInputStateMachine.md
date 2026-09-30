[@ue-too/board](../../modules.md) / [index](../index.md) / expandKmtInputStateMachine

# Function: expandKmtInputStateMachine()

> **expandKmtInputStateMachine**\<`E`, `C`, `S`, `O`\>(`context`, `define`, `initialState`): `TemplateStateMachine`\<`E`, `C`, `S`, `O`\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:862](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L862)

Builds a KMT input state machine with more events, states, context or outputs
than the stock one, reusing every built-in state.

## Type Parameters

### E

`E` *extends* [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md)

### C

`C` *extends* [`KmtInputContext`](../interfaces/KmtInputContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md) & `Partial`\<`Record`\<keyof `E`, `unknown`\>\>

## Parameters

### context

`C`

The expanded context; must satisfy [KmtInputContext](../interfaces/KmtInputContext.md)

### define

\[`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\] *extends* \[`S`\] ? [`KmtInputStateMachineExpansion`](../type-aliases/KmtInputStateMachineExpansion.md)\<`E`, `C`, `S`, `O`\> : `object`

Receives the stock states and an `extend` helper, returns the
expanded state map. See [KmtInputStateMachineExpansion](../type-aliases/KmtInputStateMachineExpansion.md).

### initialState

`S` = `...`

Defaults to `'IDLE'`

## Returns

`TemplateStateMachine`\<`E`, `C`, `S`, `O`\>

A machine over the expanded generics

## Remarks

The generics must be supersets of the stock ones: `E` extends
[KmtInputEventMapping](../type-aliases/KmtInputEventMapping.md), `C` extends [KmtInputContext](../interfaces/KmtInputContext.md), `O` extends
[KmtInputEventOutputMapping](../type-aliases/KmtInputEventOutputMapping.md), and `S` must include every
[KmtInputStates](../type-aliases/KmtInputStates.md) member (a type error otherwise). Shared events must keep
the stock payload. Untouched stock states keep their stock behaviour and simply
ignore events they do not know.

## Example

```typescript
type ExpEvents = KmtInputEventMapping & { rightPointerUp: PointerEventPayload };
type ExpStates = KmtInputStates | 'PLACEMENT';
type ExpOut = KmtInputEventOutputMapping & { rightPointerUp: KmtOutputEvent };

const machine = expandKmtInputStateMachine<ExpEvents, ExpContext, ExpStates, ExpOut>(
    context,
    (stock, extend) => ({
        ...stock,
        IDLE: extend(stock.IDLE, {
            eventReactions: { rightPointerUp: { action: openMenu, defaultTargetState: 'PLACEMENT' } },
        }),
        PLACEMENT: new PlacementState(),
    })
);
```
