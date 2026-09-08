[@ue-too/board](../../modules.md) / [index](../index.md) / TouchOutputEvent

# 型別別名: TouchOutputEvent

> **TouchOutputEvent** = \{ `delta`: `Point`; `type`: `"pan"`; \} \| \{ `anchorPointInViewPort`: `Point`; `delta`: `number`; `type`: `"zoom"`; \} \| \{ `type`: `"none"`; \}

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:63](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L63)

Output events produced by the touch state machine for the orchestrator.

## 備註

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
