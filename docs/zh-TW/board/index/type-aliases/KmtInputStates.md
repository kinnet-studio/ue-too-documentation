[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputStates

# 型別別名: KmtInputStates

> **KmtInputStates** = `CreateStateType`\<*typeof* `KMT_INPUT_STATES`\>

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:51](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L51)

Possible states of the Keyboard/Mouse/Trackpad input state machine.

## 備註

State transitions:
- **IDLE**: Default state, waiting for user input
- **READY_TO_PAN_VIA_SPACEBAR**: Spacebar pressed, ready to pan with left-click drag
- **INITIAL_PAN**: First frame of pan via spacebar (detects accidental clicks)
- **PAN**: Active panning via spacebar + left-click drag
- **READY_TO_PAN_VIA_SCROLL_WHEEL**: Middle mouse button pressed, ready to pan
- **PAN_VIA_SCROLL_WHEEL**: Active panning via middle-click drag
- **DISABLED**: Input temporarily disabled (e.g., during UI interactions)
