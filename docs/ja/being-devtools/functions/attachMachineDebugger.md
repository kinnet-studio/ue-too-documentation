[@ue-too/being-devtools](../globals.md) / attachMachineDebugger

# 関数: attachMachineDebugger()

> **attachMachineDebugger**(`machine`, `options?`): [`AttachHandle`](../type-aliases/AttachHandle.md)

定義: [attach.ts:98](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/attach.ts#L98)

Attaches a machine to the page's shared floating panel, creating the
panel on first use. Press Ctrl+Shift+M (Cmd+Shift+M on macOS) to open it.

## パラメータ

### machine

[`MachineLike`](../type-aliases/MachineLike.md)

### options?

[`AttachOptions`](../type-aliases/AttachOptions.md)

## 戻り値

[`AttachHandle`](../type-aliases/AttachHandle.md)

## 例

```ts
const handle = attachMachineDebugger(machine, { name: 'pan-control' });
// on teardown
handle.dispose();
```
