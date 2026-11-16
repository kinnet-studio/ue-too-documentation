[@ue-too/board](../../modules.md) / [index](../index.md) / OneFingerPanTouchStates

# 型別別名: OneFingerPanTouchStates

> **OneFingerPanTouchStates** = `"IDLE"` \| `"PANNING"` \| `"PINCHING"`

定義於: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:36](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L36)

States of the one-finger-pan touch input state machine.

## 備註

- **IDLE**: No fingers down
- **PANNING**: One finger down; moving it pans the camera
- **PINCHING**: Two or more fingers down; the first two pinch-zoom and pan

Every `touchstart` and `touchend` picks the next state from the number of
fingers still down, so lifting one finger mid-pinch drops back to
**PANNING** with the finger that remains.
