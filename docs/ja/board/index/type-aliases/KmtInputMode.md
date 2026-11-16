[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputMode

# 型エイリアス: KmtInputMode

> **KmtInputMode** = `"kmt"` \| `"trackpad"`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:596](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L596)

The input device a KMT board is set up for.

## Remarks

- `'kmt'`: keyboard + mouse. A plain scroll wheel zooms at the cursor.
- `'trackpad'`: a two-finger swipe pans; pinch (Ctrl+Scroll) zooms.

Boards start in `'kmt'`. Let the user choose rather than guessing: switch with
[ObservableInputTracker.setMode](../classes/ObservableInputTracker.md#setmode) (or `Board.setInputMode`).
