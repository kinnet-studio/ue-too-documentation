[@ue-too/being-devtools](../globals.md) / MachineDebuggerOptions

# 型エイリアス: MachineDebuggerOptions

> **MachineDebuggerOptions** = `object`

定義: [debugger.ts:26](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L26)

Options for a [MachineDebugger](../classes/MachineDebugger.md) panel.

## プロパティ

### container?

> `optional` **container**: `HTMLElement`

定義: [debugger.ts:28](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L28)

Render inline into this element instead of as a floating overlay.

***

### hotkey?

> `optional` **hotkey**: `string` \| `false`

定義: [debugger.ts:30](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L30)

Toggle shortcut (default [DEFAULT\_HOTKEY](../variables/DEFAULT_HOTKEY.md)). `false` disables it.

***

### openByDefault?

> `optional` **openByDefault**: `boolean`

定義: [debugger.ts:32](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L32)

Start expanded. Defaults to `false` for the overlay, `true` with a container.
