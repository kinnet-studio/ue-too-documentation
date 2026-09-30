[@ue-too/board](../../modules.md) / [index](../index.md) / DummyKmtInputContext

# Class: DummyKmtInputContext

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:647](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L647)

No-op implementation of KmtInputContext for web worker relay scenarios.

## Remarks

Used when the input state machine is configured to relay events to a web worker
rather than process them locally. The state machine requires a context, but in
the relay scenario, no actual state tracking is needed - events are simply forwarded.

All methods are no-ops and all properties return default values.

## See

[DummyCanvas](DummyCanvas.md)

## Implements

- [`KmtInputContext`](../interfaces/KmtInputContext.md)

## Constructors

### Constructor

> **new DummyKmtInputContext**(): `DummyKmtInputContext`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:652](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L652)

#### Returns

`DummyKmtInputContext`

## Properties

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean` = `false`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:648](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L648)

Whether to use standard screen coordinate system (vs inverted Y-axis)

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`alignCoordinateSystem`](../interfaces/KmtInputContext.md#aligncoordinatesystem)

***

### canvas

> **canvas**: [`Canvas`](../interfaces/Canvas.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:649](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L649)

Canvas accessor for dimensions and cursor control

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`canvas`](../interfaces/KmtInputContext.md#canvas)

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:650](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L650)

The cursor position when a pan gesture started

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`initialCursorPosition`](../interfaces/KmtInputContext.md#initialcursorposition)

***

### setCursorPosition()

> **setCursorPosition**: (`position`) => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:656](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L656)

#### Parameters

##### position

`Point`

#### Returns

`void`

***

### toggleOffEdgeAutoCameraInput()

> **toggleOffEdgeAutoCameraInput**: () => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:655](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L655)

#### Returns

`void`

***

### toggleOnEdgeAutoCameraInput()

> **toggleOnEdgeAutoCameraInput**: () => `void` = `NO_OP`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:654](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L654)

#### Returns

`void`

## Accessors

### kmtTrackpadTrackScore

#### Get Signature

> **get** **kmtTrackpadTrackScore**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:664](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L664)

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

##### Returns

`number`

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`kmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#kmttrackpadtrackscore)

***

### mode

#### Get Signature

> **get** **mode**(): `"kmt"` \| `"trackpad"` \| `"TBD"`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:674](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L674)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

##### Returns

`"kmt"` \| `"trackpad"` \| `"TBD"`

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`mode`](../interfaces/KmtInputContext.md#mode)

## Methods

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:670](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L670)

Increases the score toward mouse

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`addKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#addkmttrackpadtrackscore)

***

### cancelCurrentAction()

> **cancelCurrentAction**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:678](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L678)

Cancels the current action and resets cursor position

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cancelCurrentAction`](../interfaces/KmtInputContext.md#cancelcurrentaction)

***

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:660](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L660)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cleanup`](../interfaces/KmtInputContext.md#cleanup)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**(`position`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:658](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L658)

Sets the initial cursor position when starting a pan gesture

#### Parameters

##### position

`Point`

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setInitialCursorPosition`](../interfaces/KmtInputContext.md#setinitialcursorposition)

***

### setMode()

> **setMode**(`mode`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:672](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L672)

Sets the determined input modality

#### Parameters

##### mode

`"kmt"` | `"trackpad"` | `"TBD"`

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setMode`](../interfaces/KmtInputContext.md#setmode)

***

### setup()

> **setup**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:662](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L662)

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setup`](../interfaces/KmtInputContext.md#setup)

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:668](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L668)

Decreases the score toward trackpad

#### Returns

`void`

#### Implementation of

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`subtractKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#subtractkmttrackpadtrackscore)
