[@ue-too/board](../../modules.md) / [index](../index.md) / PanEventPayloadMapping

# 型別別名: PanEventPayloadMapping

> **PanEventPayloadMapping** = `object`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:54](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L54)

Event payload type mapping for the pan control state machine.

## 備註

Maps event names to their payload types. Events include:
- User input events (`userPanByInput`, `userPanToInput`)
- Transition/animation events (`transitionPanByInput`, `transitionPanToInput`)
- Locked object events (`lockedOnObjectPanByInput`, `lockedOnObjectPanToInput`)
- Control events (`unlock`, `initateTransition`)

## 屬性

### initateTransition

> **initateTransition**: `EmptyPayload`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:62](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L62)

***

### lockedOnObjectPanByInput

> **lockedOnObjectPanByInput**: [`PanByInputEventPayload`](PanByInputEventPayload.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:59](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L59)

***

### lockedOnObjectPanToInput

> **lockedOnObjectPanToInput**: [`PanToInputEventPayload`](PanToInputEventPayload.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:60](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L60)

***

### transitionPanByInput

> **transitionPanByInput**: [`PanByInputEventPayload`](PanByInputEventPayload.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:57](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L57)

***

### transitionPanToInput

> **transitionPanToInput**: [`PanToInputEventPayload`](PanToInputEventPayload.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:58](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L58)

***

### unlock

> **unlock**: `EmptyPayload`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:61](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L61)

***

### userPanByInput

> **userPanByInput**: [`PanByInputEventPayload`](PanByInputEventPayload.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:55](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L55)

***

### userPanToInput

> **userPanToInput**: [`PanToInputEventPayload`](PanToInputEventPayload.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:56](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L56)
