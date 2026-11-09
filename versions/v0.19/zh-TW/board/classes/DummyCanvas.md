[@ue-too/board](../globals.md) / DummyCanvas

# Class: DummyCanvas

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:98](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L98)

No-op implementation of Canvas interface for web worker relay contexts.

## Remarks

This class is used when an input state machine is configured to relay events to a web worker
rather than perform actual canvas operations. The state machine requires a Canvas in its context,
but in the relay scenario, no actual canvas operations are needed - events are simply forwarded
to the worker thread.

All properties return default/empty values and all methods are no-ops.

## See

[DummyKmtInputContext](DummyKmtInputContext.md)

## Implements

- [`Canvas`](../interfaces/Canvas.md)

## Constructors

### Constructor

> **new DummyCanvas**(): `DummyCanvas`

#### Returns

`DummyCanvas`

## Properties

### detached

> **detached**: `boolean` = `false`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:108](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L108)

Whether the canvas is currently detached from the DOM

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

> **dimensions**: `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:103](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L103)

Combined dimensions and position information

#### height

> **height**: `number`

#### position

> **position**: `Point`

#### width

> **width**: `number`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`dimensions`](../interfaces/Canvas.md#dimensions)

***

### height

> **height**: `number` = `0`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:100](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L100)

The canvas height in CSS pixels

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

> **position**: `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:101](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L101)

The top-left position of the canvas in window coordinates

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### setCursor()

> **setCursor**: (`style`) => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:102](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L102)

Sets the CSS cursor style for visual feedback

#### Parameters

##### style

[`CursorStyle`](../enumerations/CursorStyle.md)

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### tearDown()

> **tearDown**: () => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:109](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L109)

Cleanup method to dispose of resources and event listeners

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)

***

### width

> **width**: `number` = `0`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:99](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L99)

The canvas width in CSS pixels

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)
