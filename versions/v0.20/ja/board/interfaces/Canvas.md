[@ue-too/board](../globals.md) / Canvas

# Interface: Canvas

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:66](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L66)

Abstraction interface for canvas element access and manipulation.

## Remarks

This interface provides a decoupled way to access canvas properties without direct DOM access.
Multiple implementations exist to support different use cases:
- **CanvasProxy**: Full implementation for HTML canvas elements with dimension tracking
- **SvgProxy**: Implementation for SVG elements
- **DummyCanvas**: No-op implementation for web worker contexts
- **WorkerRelayCanvas**: Relays canvas dimension updates to web workers
- **CanvasCacheInWebWorker**: Caches canvas dimensions within a web worker

The abstraction enables:
- Coordinate system transformations (window → canvas → viewport)
- Canvas dimension tracking without repeated DOM queries
- Cursor style management
- Support for both canvas and SVG rendering contexts

## Properties

### detached

> **detached**: `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:78](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L78)

Whether the canvas is currently detached from the DOM

***

### dimensions

> **dimensions**: [`CanvasDimensions`](../type-aliases/CanvasDimensions.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:76](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L76)

Combined dimensions and position information

***

### height

> **height**: `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:70](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L70)

The canvas height in CSS pixels

***

### position

> **position**: `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:72](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L72)

The top-left position of the canvas in window coordinates

***

### setCursor()

> **setCursor**: (`style`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:74](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L74)

Sets the CSS cursor style for visual feedback

#### Parameters

##### style

[`CursorStyle`](../enumerations/CursorStyle.md)

#### Returns

`void`

***

### tearDown()

> **tearDown**: () => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:80](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L80)

Cleanup method to dispose of resources and event listeners

#### Returns

`void`

***

### width

> **width**: `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:68](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L68)

The canvas width in CSS pixels
