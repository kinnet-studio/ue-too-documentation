[@ue-too/board](../../modules.md) / [index](../index.md) / TouchStates

# Type Alias: TouchStates

> **TouchStates** = `"IDLE"` \| `"PENDING"` \| `"IN_PROGRESS"`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:27](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L27)

Possible states of the touch input state machine.

## Remarks

State transitions:
- **IDLE**: No touches active, or single touch (reserved for UI)
- **PENDING**: Exactly two touches active, waiting for movement to determine gesture type
- **IN_PROGRESS**: Two-finger gesture in progress (pan or zoom)

The state machine only handles two-finger gestures. Single-finger touches are ignored
to avoid interfering with UI interactions (button clicks, text selection, etc.).
