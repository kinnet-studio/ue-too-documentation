# @ue-too/being-devtools v0.18.1

Attachable devtools for `@ue-too/being` state machines.

## 備註

Attach a floating debugger panel to any running machine with one call:

```ts
import { attachMachineDebugger } from '@ue-too/being-devtools';

attachMachineDebugger(machine, { name: 'pan-control' });
```

The panel draws the machine's state chart, highlights the current state,
dims transitions whose preconditions currently fail, logs every event the
machine handles (coalescing repeats), shows the context, and lets you fire
events by hand. Ctrl+Shift+M (Cmd+Shift+M on macOS) toggles it.

## Core

- [attachBoardDebugger](functions/attachBoardDebugger.md)
- [attachMachineDebugger](functions/attachMachineDebugger.md)
- [MachineDebugger](classes/MachineDebugger.md)

## Types

- [AttachHandle](type-aliases/AttachHandle.md)
- [AttachOptions](type-aliases/AttachOptions.md)
- [BeingDevtoolsHook](type-aliases/BeingDevtoolsHook.md)
- [BoardLike](type-aliases/BoardLike.md)
- [DEFAULT\_HOTKEY](variables/DEFAULT_HOTKEY.md)
- [HOOK\_KEY](variables/HOOK_KEY.md)
- [MachineDebuggerOptions](type-aliases/MachineDebuggerOptions.md)
- [MachineLike](type-aliases/MachineLike.md)
