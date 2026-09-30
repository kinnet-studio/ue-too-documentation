[@ue-too/board](../../modules.md) / [index](../index.md) / RotateEventPayloadMapping

# Type Alias: RotateEventPayloadMapping

> **RotateEventPayloadMapping** = `object`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:53](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L53)

Event payload type mapping for the rotation control state machine.

## Remarks

Maps event names to their payload types. Events include:
- User input events (`userRotateByInput`, `userRotateToInput`)
- Transition/animation events (`transitionRotateByInput`, `transitionRotateToInput`)
- Locked object events (`lockedOnObjectRotateByInput`, `lockedOnObjectRotateToInput`)
- Control events (`unlock`, `initateTransition`)

## Properties

### initateTransition

> **initateTransition**: `EmptyPayload`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:61](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L61)

***

### lockedOnObjectRotateByInput

> **lockedOnObjectRotateByInput**: [`RotateByInputEventPayload`](RotateByInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:58](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L58)

***

### lockedOnObjectRotateToInput

> **lockedOnObjectRotateToInput**: [`RotateToInputEventPayload`](RotateToInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:59](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L59)

***

### transitionRotateByInput

> **transitionRotateByInput**: [`RotateByInputEventPayload`](RotateByInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:56](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L56)

***

### transitionRotateToInput

> **transitionRotateToInput**: [`RotateToInputEventPayload`](RotateToInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:57](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L57)

***

### unlock

> **unlock**: `EmptyPayload`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:60](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L60)

***

### userRotateByInput

> **userRotateByInput**: [`RotateByInputEventPayload`](RotateByInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:54](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L54)

***

### userRotateToInput

> **userRotateToInput**: [`RotateToInputEventPayload`](RotateToInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:55](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L55)
