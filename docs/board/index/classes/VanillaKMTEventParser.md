[@ue-too/board](../../modules.md) / [index](../index.md) / VanillaKMTEventParser

# Class: VanillaKMTEventParser

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:174](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L174)

Interface for KMT (Keyboard/Mouse/Trackpad) event parsers.

## Remarks

Event parsers bridge the gap between DOM events and the state machine.
They listen for raw DOM events, convert them to state machine events,
and coordinate with the orchestrator for output processing.

## Implements

- [`KMTEventParser`](../interfaces/KMTEventParser.md)

## Constructors

### Constructor

> **new VanillaKMTEventParser**(`kmtInputStateMachine`, `orchestrator`, `canvas?`): `VanillaKMTEventParser`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:182](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L182)

#### Parameters

##### kmtInputStateMachine

[`StateMachine`](../interfaces/StateMachine.md)

##### orchestrator

[`InputOrchestrator`](InputOrchestrator.md)

##### canvas?

`HTMLCanvasElement` | `SVGSVGElement`

#### Returns

`VanillaKMTEventParser`

## Properties

### \_canvas?

> `protected` `optional` **\_canvas**: `HTMLCanvasElement` \| `SVGSVGElement`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:180](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L180)

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:195](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L195)

Whether the parser is currently disabled

##### Returns

`boolean`

Whether the parser is currently disabled

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`disabled`](../interfaces/KMTEventParser.md#disabled)

***

### stateMachine

#### Get Signature

> **get** **stateMachine**(): [`StateMachine`](../interfaces/StateMachine.md)

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:394](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L394)

The state machine this parser dispatches into, when the implementation
exposes one. Optional so existing external parser implementations
remain valid — typed to the minimal `{ happens }` contract this parser
itself needs, so an external implementation satisfies this member
without providing a full `being` `StateMachine`. Intended for
tooling/introspection — dispatch through the parser, not through this
reference.

##### Returns

[`StateMachine`](../interfaces/StateMachine.md)

#### Set Signature

> **set** **stateMachine**(`stateMachine`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:398](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L398)

The state machine this parser dispatches into, when the implementation
exposes one. Optional so existing external parser implementations
remain valid — typed to the minimal `{ happens }` contract this parser
itself needs, so an external implementation satisfies this member
without providing a full `being` `StateMachine`. Intended for
tooling/introspection — dispatch through the parser, not through this
reference.

##### Parameters

###### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)

##### Returns

`void`

The state machine this parser dispatches into, when the implementation
exposes one. Optional so existing external parser implementations
remain valid — typed to the minimal `{ happens }` contract this parser
itself needs, so an external implementation satisfies this member
without providing a full `being` `StateMachine`. Intended for
tooling/introspection — dispatch through the parser, not through this
reference.

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`stateMachine`](../interfaces/KMTEventParser.md#statemachine)

## Methods

### addEventListeners()

> **addEventListeners**(`signal`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:207](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L207)

#### Parameters

##### signal

`AbortSignal`

#### Returns

`void`

***

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:388](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L388)

Attaches to a new canvas element

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`attach`](../interfaces/KMTEventParser.md#attach)

***

### bindFunctions()

> **bindFunctions**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:248](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L248)

#### Returns

`void`

***

### disable()

> **disable**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:199](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L199)

Disables the parser; the event listeners are still attached just not processing any events

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`disable`](../interfaces/KMTEventParser.md#disable)

***

### enable()

> **enable**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:203](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L203)

Enables the parser

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`enable`](../interfaces/KMTEventParser.md#enable)

***

### keypressHandler()

> **keypressHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:348](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L348)

#### Parameters

##### e

`KeyboardEvent`

#### Returns

`void`

***

### keyupHandler()

> **keyupHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:379](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L379)

#### Parameters

##### e

`KeyboardEvent`

#### Returns

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:270](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L270)

#### Parameters

##### e

`PointerEvent`

#### Returns

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:307](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L307)

#### Parameters

##### e

`PointerEvent`

#### Returns

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:290](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L290)

#### Parameters

##### e

`PointerEvent`

#### Returns

`void`

***

### processEvent()

> `protected` **processEvent**\<`K`\>(...`args`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:257](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L257)

#### Type Parameters

##### K

`K` *extends* keyof [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md)

#### Parameters

##### args

...`EventArgs`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `K`\>

#### Returns

`void`

***

### scrollHandler()

> **scrollHandler**(`e`): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:328](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L328)

#### Parameters

##### e

`WheelEvent`

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:235](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L235)

Initializes event listeners

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`setUp`](../interfaces/KMTEventParser.md#setup)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:242](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L242)

Removes event listeners and cleans up

#### Returns

`void`

#### Implementation of

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`tearDown`](../interfaces/KMTEventParser.md#teardown)
