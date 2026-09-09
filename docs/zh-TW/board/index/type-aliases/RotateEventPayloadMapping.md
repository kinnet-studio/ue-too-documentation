[@ue-too/board](../../modules.md) / [index](../index.md) / RotateEventPayloadMapping

# 型別別名: RotateEventPayloadMapping

> **RotateEventPayloadMapping** = `object`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:53](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L53)

Event payload type mapping for the rotation control state machine.

## 備註

Maps event names to their payload types. Events include:
- User input events (`userRotateByInput`, `userRotateToInput`)
- Transition/animation events (`transitionRotateByInput`, `transitionRotateToInput`)
- Locked object events (`lockedOnObjectRotateByInput`, `lockedOnObjectRotateToInput`)
- Control events (`unlock`, `initateTransition`)

## 屬性

### initateTransition

> **initateTransition**: `EmptyPayload`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:61](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L61)

***

### lockedOnObjectRotateByInput

> **lockedOnObjectRotateByInput**: [`RotateByInputEventPayload`](RotateByInputEventPayload.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:58](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L58)

***

### lockedOnObjectRotateToInput

> **lockedOnObjectRotateToInput**: [`RotateToInputEventPayload`](RotateToInputEventPayload.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:59](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L59)

***

### transitionRotateByInput

> **transitionRotateByInput**: [`RotateByInputEventPayload`](RotateByInputEventPayload.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:56](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L56)

***

### transitionRotateToInput

> **transitionRotateToInput**: [`RotateToInputEventPayload`](RotateToInputEventPayload.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:57](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L57)

***

### unlock

> **unlock**: `EmptyPayload`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:60](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L60)

***

### userRotateByInput

> **userRotateByInput**: [`RotateByInputEventPayload`](RotateByInputEventPayload.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:54](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L54)

***

### userRotateToInput

> **userRotateToInput**: [`RotateToInputEventPayload`](RotateToInputEventPayload.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:55](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L55)
