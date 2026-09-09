[@ue-too/board](../../modules.md) / [index](../index.md) / TouchStates

# 型エイリアス: TouchStates

> **TouchStates** = `"IDLE"` \| `"PENDING"` \| `"IN_PROGRESS"`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:27](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L27)

Possible states of the touch input state machine.

## Remarks

State transitions:
- **IDLE**: No touches active, or single touch (reserved for UI)
- **PENDING**: Exactly two touches active, waiting for movement to determine gesture type
- **IN_PROGRESS**: Two-finger gesture in progress (pan or zoom)

The state machine only handles two-finger gestures. Single-finger touches are ignored
to avoid interfering with UI interactions (button clicks, text selection, etc.).
