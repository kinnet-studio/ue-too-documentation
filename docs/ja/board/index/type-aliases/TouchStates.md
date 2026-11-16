[@ue-too/board](../../modules.md) / [index](../index.md) / TouchStates

# 型エイリアス: TouchStates

> **TouchStates** = `"IDLE"` \| `"PENDING"` \| `"IN_PROGRESS"`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:30](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L30)

Possible states of the touch input state machine.

## Remarks

State transitions:
- **IDLE**: No touches active, or single touch (reserved for UI)
- **PENDING**: Exactly two touches active, waiting for movement to determine gesture type
- **IN_PROGRESS**: Two-finger gesture in progress (pan or zoom)

The state machine only handles two-finger gestures. Single-finger touches are ignored
to avoid interfering with UI interactions (button clicks, text selection, etc.).
