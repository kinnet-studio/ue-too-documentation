[@ue-too/board](../globals.md) / MinimumPointerEvent

# Type Alias: MinimumPointerEvent

> **MinimumPointerEvent** = `object`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:43](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L43)

Minimal pointer event interface for framework interoperability.

## Remarks

This subset of the DOM PointerEvent interface allows the parser to work with
both vanilla JavaScript PointerEvents and framework-wrapped events (e.g., PixiJS).

## Properties

### button

> **button**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:45](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L45)

Mouse button number (0=left, 1=middle, 2=right)

***

### buttons

> **buttons**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:53](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L53)

Bitmask of currently pressed buttons

***

### clientX

> **clientX**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:49](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L49)

X coordinate in window space

***

### clientY

> **clientY**: `number`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:51](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L51)

Y coordinate in window space

***

### pointerType

> **pointerType**: `string`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:47](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L47)

Pointer type ("mouse", "pen", "touch")
