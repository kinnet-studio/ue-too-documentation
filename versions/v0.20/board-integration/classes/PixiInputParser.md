[@ue-too/board-integration](../globals.md) / PixiInputParser

# Class: PixiInputParser

Defined in: [pixi-input-event-parser.ts:5](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L5)

## Constructors

### Constructor

> **new PixiInputParser**(`app`, `kmtInputStateMachine`, `inputOrchestrator`, `camera`): `PixiInputParser`

Defined in: [pixi-input-event-parser.ts:17](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L17)

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

Defined in: [pixi-input-event-parser.ts:254](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L254)

##### Returns

`boolean`

## Methods

### bindFunctions()

> **bindFunctions**(): `void`

Defined in: [pixi-input-event-parser.ts:30](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L30)

#### Returns

`void`

***

### disable()

> **disable**(): `void`

Defined in: [pixi-input-event-parser.ts:246](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L246)

#### Returns

`void`

***

### enable()

> **enable**(): `void`

Defined in: [pixi-input-event-parser.ts:250](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L250)

#### Returns

`void`

***

### hideHitAreaDebug()

> **hideHitAreaDebug**(): `void`

Defined in: [pixi-input-event-parser.ts:140](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L140)

Hides the hitArea debug visualization.

#### Returns

`void`

***

### keydownHandler()

> **keydownHandler**(`event`): `void`

Defined in: [pixi-input-event-parser.ts:221](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L221)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### keyupHandler()

> **keyupHandler**(`event`): `void`

Defined in: [pixi-input-event-parser.ts:234](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L234)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`event`): `void`

Defined in: [pixi-input-event-parser.ts:167](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L167)

#### Parameters

##### event

`FederatedPointerEvent`

#### Returns

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`event`): `void`

Defined in: [pixi-input-event-parser.ts:195](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L195)

#### Parameters

##### event

`FederatedPointerEvent`

#### Returns

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`event`): `void`

Defined in: [pixi-input-event-parser.ts:181](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L181)

#### Parameters

##### event

`FederatedPointerEvent`

#### Returns

`void`

***

### scrollHandler()

> **scrollHandler**(`event`): `void`

Defined in: [pixi-input-event-parser.ts:210](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L210)

#### Parameters

##### event

`WheelEvent`

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [pixi-input-event-parser.ts:39](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L39)

#### Returns

`void`

***

### showHitAreaDebug()

> **showHitAreaDebug**(): `void`

Defined in: [pixi-input-event-parser.ts:127](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L127)

Shows a visual debug overlay of the hitArea.

#### Returns

`void`

#### Remarks

This creates a red rectangle that shows the current hitArea boundaries.
Useful for debugging hit detection issues. The debug graphics are
automatically updated when `updateHitArea()` is called.

***

### tearDown()

> **tearDown**(): `void`

Defined in: [pixi-input-event-parser.ts:148](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L148)

#### Returns

`void`

***

### updateHitArea()

> **updateHitArea**(): `void`

Defined in: [pixi-input-event-parser.ts:70](https://github.com/ue-too/ue-too/blob/fa2a5e592e085bb95164400745ceeb08136af6cf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L70)

Updates the stage's hitArea to cover the entire viewport in stage local coordinates.

#### Returns

`void`

#### Remarks

This must be called whenever the stage transformation changes (pan, zoom, rotate)
or when the canvas size changes. The hitArea is defined in the stage's local
coordinate space. When the stage transforms, the hitArea moves with it, so we
need to update it to cover the viewport rectangle transformed into stage local space.

Uses the stage's toLocal method to convert viewport corners from screen space
to stage local space, then creates a bounding box for the hitArea.
