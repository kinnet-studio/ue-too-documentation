[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputMode

# Type Alias: KmtInputMode

> **KmtInputMode** = `"kmt"` \| `"trackpad"`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:596](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L596)

The input device a KMT board is set up for.

## Remarks

- `'kmt'`: keyboard + mouse. A plain scroll wheel zooms at the cursor.
- `'trackpad'`: a two-finger swipe pans; pinch (Ctrl+Scroll) zooms.

Boards start in `'kmt'`. Let the user choose rather than guessing: switch with
[ObservableInputTracker.setMode](../classes/ObservableInputTracker.md#setmode) (or `Board.setInputMode`).
