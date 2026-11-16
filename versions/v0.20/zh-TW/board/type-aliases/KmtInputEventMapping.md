[@ue-too/board](../globals.md) / KmtInputEventMapping

# Type Alias: KmtInputEventMapping

> **KmtInputEventMapping** = `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:115](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L115)

Event mapping for the KMT input state machine.

## Remarks

Maps event names to their payload types. Used by the state machine framework
to provide type-safe event handling.

Key events:
- **leftPointerDown/Up/Move**: Left mouse button interactions
- **middlePointerDown/Up/Move**: Middle mouse button interactions (pan)
- **spacebarDown/Up**: Spacebar for pan mode
- **scroll**: Regular scroll (pan or zoom depending on device)
- **scrollWithCtrl**: Ctrl + scroll (always zoom)
- **disable/enable**: Temporarily disable/enable input processing

## Properties

### cursorOnElement

> **cursorOnElement**: `EmptyPayload`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:122](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L122)

***

### disable

> **disable**: `EmptyPayload`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:128](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L128)

***

### enable

> **enable**: `EmptyPayload`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:129](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L129)

***

### leftPointerDown

> **leftPointerDown**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:116](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L116)

***

### leftPointerMove

> **leftPointerMove**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:118](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L118)

***

### leftPointerUp

> **leftPointerUp**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:117](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L117)

***

### middlePointerDown

> **middlePointerDown**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:125](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L125)

***

### middlePointerMove

> **middlePointerMove**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:127](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L127)

***

### middlePointerUp

> **middlePointerUp**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:126](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L126)

***

### pointerMove

> **pointerMove**: [`PointerEventPayload`](PointerEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:130](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L130)

***

### scroll

> **scroll**: [`ScrollWithCtrlEventPayload`](ScrollWithCtrlEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:123](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L123)

***

### scrollWithCtrl

> **scrollWithCtrl**: [`ScrollWithCtrlEventPayload`](ScrollWithCtrlEventPayload.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:124](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L124)

***

### spacebarDown

> **spacebarDown**: `EmptyPayload`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:119](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L119)

***

### spacebarUp

> **spacebarUp**: `EmptyPayload`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:120](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L120)

***

### stayIdle

> **stayIdle**: `EmptyPayload`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:121](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L121)
