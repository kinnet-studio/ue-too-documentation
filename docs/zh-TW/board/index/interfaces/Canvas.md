[@ue-too/board](../../modules.md) / [index](../index.md) / Canvas

# 介面: Canvas

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:66](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L66)

Abstraction interface for canvas element access and manipulation.

## 備註

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

## 屬性

### detached

> **detached**: `boolean`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:78](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L78)

Whether the canvas is currently detached from the DOM

***

### dimensions

> **dimensions**: [`CanvasDimensions`](../type-aliases/CanvasDimensions.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:76](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L76)

Combined dimensions and position information

***

### height

> **height**: `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:70](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L70)

The canvas height in CSS pixels

***

### position

> **position**: `Point`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:72](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L72)

The top-left position of the canvas in window coordinates

***

### setCursor()

> **setCursor**: (`style`) => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:74](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L74)

Sets the CSS cursor style for visual feedback

#### 參數

##### style

[`CursorStyle`](../enumerations/CursorStyle.md)

#### 回傳

`void`

***

### tearDown()

> **tearDown**: () => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:80](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L80)

Cleanup method to dispose of resources and event listeners

#### 回傳

`void`

***

### width

> **width**: `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:68](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L68)

The canvas width in CSS pixels
