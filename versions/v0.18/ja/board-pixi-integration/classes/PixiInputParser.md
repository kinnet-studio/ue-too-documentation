[@ue-too/board-pixi-integration](../globals.md) / PixiInputParser

# Class: PixiInputParser

Defined in: [pixi-input-event-parser.ts:17](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L17)

## Constructors

### Constructor

> **new PixiInputParser**(`app`, `kmtInputStateMachine`, `inputOrchestrator`, `camera`): `PixiInputParser`

Defined in: [pixi-input-event-parser.ts:29](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L29)

#### Parameters

##### app

`Application`

##### kmtInputStateMachine

`KmtInputStateMachine`

##### inputOrchestrator

`InputOrchestrator`

##### camera

`BoardCamera`

#### Returns

`PixiInputParser`

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [pixi-input-event-parser.ts:352](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L352)

##### Returns

`boolean`

## Methods

### bindFunctions()

> **bindFunctions**(): `void`

Defined in: [pixi-input-event-parser.ts:46](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L46)

#### Returns

`void`

***

### disable()

> **disable**(): `void`

Defined in: [pixi-input-event-parser.ts:344](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L344)

#### Returns

`void`

***

### enable()

> **enable**(): `void`

Defined in: [pixi-input-event-parser.ts:348](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L348)

#### Returns

`void`

***

### hideHitAreaDebug()

> **hideHitAreaDebug**(): `void`

Defined in: [pixi-input-event-parser.ts:206](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L206)

Hides the hitArea debug visualization.

#### Returns

`void`

***

### keydownHandler()

> **keydownHandler**(`event`): `void`

Defined in: [pixi-input-event-parser.ts:319](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L319)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### keyupHandler()

> **keyupHandler**(`event`): `void`

Defined in: [pixi-input-event-parser.ts:332](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L332)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`event`): `void`

Defined in: [pixi-input-event-parser.ts:233](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L233)

#### Parameters

##### event

`FederatedPointerEvent`

#### Returns

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`event`): `void`

Defined in: [pixi-input-event-parser.ts:273](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L273)

#### Parameters

##### event

`FederatedPointerEvent`

#### Returns

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`event`): `void`

Defined in: [pixi-input-event-parser.ts:253](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L253)

#### Parameters

##### event

`FederatedPointerEvent`

#### Returns

`void`

***

### scrollHandler()

> **scrollHandler**(`event`): `void`

Defined in: [pixi-input-event-parser.ts:297](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L297)

#### Parameters

##### event

`WheelEvent`

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [pixi-input-event-parser.ts:55](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L55)

#### Returns

`void`

***

### showHitAreaDebug()

> **showHitAreaDebug**(): `void`

Defined in: [pixi-input-event-parser.ts:193](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L193)

Shows a visual debug overlay of the hitArea.

#### Returns

`void`

#### Remarks

This creates a red polygon/rectangle that shows the current hitArea boundaries.
Useful for debugging hit detection issues. The debug graphics are
automatically updated when `updateHitArea()` is called.

***

### tearDown()

> **tearDown**(): `void`

Defined in: [pixi-input-event-parser.ts:214](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L214)

#### Returns

`void`

***

### updateHitArea()

> **updateHitArea**(): `void`

Defined in: [pixi-input-event-parser.ts:93](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L93)

Updates the stage's hitArea to cover the entire viewport in stage local coordinates.

#### Returns

`void`

#### Remarks

This must be called whenever the stage transformation changes (pan, zoom, rotate)
or when the canvas size changes. The hitArea is defined in the stage's local
coordinate space. When the stage transforms, the hitArea moves with it, so we
need to update it to cover the viewport rectangle transformed into stage local space.

Uses a Polygon instead of Rectangle to support rotated viewports. The four corners
of the viewport are converted from viewport space to world space (which matches
the stage's local space when the stage transform is applied).
