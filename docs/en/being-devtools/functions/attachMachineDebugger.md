[@ue-too/being-devtools](../globals.md) / attachMachineDebugger

# Function: attachMachineDebugger()

> **attachMachineDebugger**(`machine`, `options?`): [`AttachHandle`](../type-aliases/AttachHandle.md)

Defined in: [attach.ts:98](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/attach.ts#L98)

Attaches a machine to the page's shared floating panel, creating the
panel on first use. Press Ctrl+Shift+M (Cmd+Shift+M on macOS) to open it.

## Parameters

### machine

[`MachineLike`](../type-aliases/MachineLike.md)

### options?

[`AttachOptions`](../type-aliases/AttachOptions.md)

## Returns

[`AttachHandle`](../type-aliases/AttachHandle.md)

## Example

```ts
const handle = attachMachineDebugger(machine, { name: 'pan-control' });
// on teardown
handle.dispose();
```
