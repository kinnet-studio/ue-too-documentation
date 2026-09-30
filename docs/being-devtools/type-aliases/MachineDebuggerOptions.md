[@ue-too/being-devtools](../globals.md) / MachineDebuggerOptions

# Type Alias: MachineDebuggerOptions

> **MachineDebuggerOptions** = `object`

Defined in: [debugger.ts:26](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L26)

Options for a [MachineDebugger](../classes/MachineDebugger.md) panel.

## Properties

### container?

> `optional` **container**: `HTMLElement`

Defined in: [debugger.ts:28](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L28)

Render inline into this element instead of as a floating overlay.

***

### hotkey?

> `optional` **hotkey**: `string` \| `false`

Defined in: [debugger.ts:30](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L30)

Toggle shortcut (default [DEFAULT\_HOTKEY](../variables/DEFAULT_HOTKEY.md)). `false` disables it.

***

### openByDefault?

> `optional` **openByDefault**: `boolean`

Defined in: [debugger.ts:32](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L32)

Start expanded. Defaults to `false` for the overlay, `true` with a container.
