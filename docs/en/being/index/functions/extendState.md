[@ue-too/being](../../modules.md) / [index](../index.md) / extendState

# Function: extendState()

> **extendState**\<`E`, `C`, `S`, `O`\>(`original`, `extension`): [`State`](../interfaces/State.md)\<`E`, `C`, `S`, `O`\>

Defined in: [expansion.ts:231](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/expansion.ts#L231)

Builds a state for a wider machine out of an existing state plus additions.

## Type Parameters

### E

`E`

### C

`C` *extends* [`BaseContext`](../interfaces/BaseContext.md)

### S

`S` *extends* `string`

### O

`O` *extends* `Partial`\<`Record`\<keyof `E`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`E`\>

## Parameters

### original

[`ExtendableState`](../type-aliases/ExtendableState.md)

### extension

[`StateExtension`](../type-aliases/StateExtension.md)\<`E`, `C`, `S`, `O`\>

## Returns

[`State`](../interfaces/State.md)\<`E`, `C`, `S`, `O`\>

## Remarks

Everything the original exposes through the `State` interface is inherited:
reactions, guards, event guards, preconditions, delay and the enter/exit hooks.
The extension merges over that, so an entry with the same event name replaces
the inherited one. Use the function form of `eventReactions` when an override
needs to call the inherited action. A `_defer` on the original is not carried
over because the `State` interface does not expose it.

The target generics are usually inferred from the registration site; name them
explicitly when they are not.

## Example

```typescript
const idle = extendState<ExpEvents, ExpContext, ExpStates, ExpOut>(new KmtIdleState(), {
    eventReactions: inherited => ({
        scroll: scaleZoom(inherited.scroll),
        leftPointerDown: { action: startPlacement, defaultTargetState: 'PLACEMENT' },
    }),
    uponEnter: (context, _m, _from, inherited) => {
        inherited();
        context.reapplyHoverCursor();
    },
});
```
