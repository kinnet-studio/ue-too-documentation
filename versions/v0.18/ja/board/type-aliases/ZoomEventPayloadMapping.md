[@ue-too/board](../globals.md) / ZoomEventPayloadMapping

# Type Alias: ZoomEventPayloadMapping

> **ZoomEventPayloadMapping** = `object`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:73](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L73)

Event payload type mapping for the zoom control state machine.

## Remarks

Maps event names to their payload types. Events include:
- User input events (`userZoomByAtInput`, `userZoomToAtInput`)
- Transition/animation events (`transitionZoomByAtInput`, `transitionZoomToAtInput`, etc.)
- Locked object events (`lockedOnObjectZoomByAtInput`, `lockedOnObjectZoomToAtInput`)
- Control events (`unlock`, `initiateTransition`)

## Properties

### initiateTransition

> **initiateTransition**: `object`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:84](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L84)

***

### lockedOnObjectZoomByAtInput

> **lockedOnObjectZoomByAtInput**: [`ZoomByAtInputPayload`](ZoomByAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:81](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L81)

***

### lockedOnObjectZoomToAtInput

> **lockedOnObjectZoomToAtInput**: [`ZoomToAtInputPayload`](ZoomToAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:82](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L82)

***

### transitionZoomByAtCenterInput

> **transitionZoomByAtCenterInput**: [`ZoomByPayload`](ZoomByPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:78](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L78)

***

### transitionZoomByAtInput

> **transitionZoomByAtInput**: [`ZoomByAtInputPayload`](ZoomByAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:76](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L76)

***

### transitionZoomToAtCenterInput

> **transitionZoomToAtCenterInput**: [`ZoomToAtInputPayload`](ZoomToAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:79](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L79)

***

### transitionZoomToAtInput

> **transitionZoomToAtInput**: [`ZoomToAtInputPayload`](ZoomToAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:77](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L77)

***

### transitionZoomToAtWorldInput

> **transitionZoomToAtWorldInput**: [`ZoomToAtInputPayload`](ZoomToAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:80](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L80)

***

### unlock

> **unlock**: `object`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:83](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L83)

***

### userZoomByAtInput

> **userZoomByAtInput**: [`ZoomByAtInputPayload`](ZoomByAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:74](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L74)

***

### userZoomToAtInput

> **userZoomToAtInput**: [`ZoomToAtInputPayload`](ZoomToAtInputPayload.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:75](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L75)
