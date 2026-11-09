[@ue-too/board](../globals.md) / PanEventPayloadMapping

# Type Alias: PanEventPayloadMapping

> **PanEventPayloadMapping** = `object`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:54](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L54)

Event payload type mapping for the pan control state machine.

## Remarks

Maps event names to their payload types. Events include:
- User input events (`userPanByInput`, `userPanToInput`)
- Transition/animation events (`transitionPanByInput`, `transitionPanToInput`)
- Locked object events (`lockedOnObjectPanByInput`, `lockedOnObjectPanToInput`)
- Control events (`unlock`, `initateTransition`)

## Properties

### initateTransition

> **initateTransition**: `EmptyPayload`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:62](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L62)

***

### lockedOnObjectPanByInput

> **lockedOnObjectPanByInput**: [`PanByInputEventPayload`](PanByInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:59](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L59)

***

### lockedOnObjectPanToInput

> **lockedOnObjectPanToInput**: [`PanToInputEventPayload`](PanToInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:60](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L60)

***

### transitionPanByInput

> **transitionPanByInput**: [`PanByInputEventPayload`](PanByInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:57](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L57)

***

### transitionPanToInput

> **transitionPanToInput**: [`PanToInputEventPayload`](PanToInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:58](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L58)

***

### unlock

> **unlock**: `EmptyPayload`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:61](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L61)

***

### userPanByInput

> **userPanByInput**: [`PanByInputEventPayload`](PanByInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:55](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L55)

***

### userPanToInput

> **userPanToInput**: [`PanToInputEventPayload`](PanToInputEventPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:56](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L56)
