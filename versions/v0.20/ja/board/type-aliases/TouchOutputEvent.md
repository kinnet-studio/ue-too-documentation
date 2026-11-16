[@ue-too/board](../globals.md) / TouchOutputEvent

# Type Alias: TouchOutputEvent

> **TouchOutputEvent** = \{ `delta`: `Point`; `type`: `"pan"`; \} \| \{ `anchorPointInViewPort`: `Point`; `delta`: `number`; `type`: `"zoom"`; \} \| \{ `type`: `"none"`; \}

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:63](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L63)

Output events produced by the touch state machine for the orchestrator.

## Remarks

Touch gestures are recognized from two-finger interactions:

**Pan Gesture**:
- Two fingers move in the same direction
- Delta is calculated from the midpoint movement
- Triggers when midpoint delta > distance delta

**Zoom Gesture**:
- Two fingers move toward/away from each other (pinch)
- Delta is calculated from distance change between fingers
- Anchor point is the midpoint between fingers
- Triggers when distance delta > midpoint delta

**Coordinate Spaces**:
- Pan delta is in window pixels
- Zoom anchor point is in viewport coordinates
