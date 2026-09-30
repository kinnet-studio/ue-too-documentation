[@ue-too/being-devtools](../globals.md) / attachMachineDebugger

# 函式: attachMachineDebugger()

> **attachMachineDebugger**(`machine`, `options?`): [`AttachHandle`](../type-aliases/AttachHandle.md)

定義於: [attach.ts:98](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/attach.ts#L98)

Attaches a machine to the page's shared floating panel, creating the
panel on first use. Press Ctrl+Shift+M (Cmd+Shift+M on macOS) to open it.

## 參數

### machine

[`MachineLike`](../type-aliases/MachineLike.md)

### options?

[`AttachOptions`](../type-aliases/AttachOptions.md)

## 回傳

[`AttachHandle`](../type-aliases/AttachHandle.md)

## 範例

```ts
const handle = attachMachineDebugger(machine, { name: 'pan-control' });
// on teardown
handle.dispose();
```
