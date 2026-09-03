[@ue-too/board](../../modules.md) / [index](../index.md) / VanillaKMTEventParser

# クラス: VanillaKMTEventParser

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:174](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L174)

Interface for KMT (Keyboard/Mouse/Trackpad) event parsers.

## Remarks

Event parsers bridge the gap between DOM events and the state machine.
They listen for raw DOM events, convert them to state machine events,
and coordinate with the orchestrator for output processing.

## 実装

- [`KMTEventParser`](../interfaces/KMTEventParser.md)

## コンストラクター

### コンストラクター

> **new VanillaKMTEventParser**(`kmtInputStateMachine`, `orchestrator`, `canvas?`): `VanillaKMTEventParser`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:182](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L182)

#### パラメータ

##### kmtInputStateMachine

[`StateMachine`](../interfaces/StateMachine.md)

##### orchestrator

[`InputOrchestrator`](InputOrchestrator.md)

##### canvas?

`HTMLCanvasElement` | `SVGSVGElement`

#### 戻り値

`VanillaKMTEventParser`

## プロパティ

### \_canvas?

> `protected` `optional` **\_canvas**: `HTMLCanvasElement` \| `SVGSVGElement`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:180](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L180)

## アクセッサー

### disabled

#### 署名を取得する

> **get** **disabled**(): `boolean`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:195](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L195)

Whether the parser is currently disabled

##### 戻り値

`boolean`

Whether the parser is currently disabled

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`disabled`](../interfaces/KMTEventParser.md#disabled)

***

### stateMachine

#### 署名を取得する

> **get** **stateMachine**(): [`StateMachine`](../interfaces/StateMachine.md)

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:394](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L394)

The state machine this parser dispatches into, when the implementation
exposes one. Optional so existing external parser implementations
remain valid — typed to the minimal `{ happens }` contract this parser
itself needs, so an external implementation satisfies this member
without providing a full `being` `StateMachine`. Intended for
tooling/introspection — dispatch through the parser, not through this
reference.

##### 戻り値

[`StateMachine`](../interfaces/StateMachine.md)

#### 署名を設定する

> **set** **stateMachine**(`stateMachine`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:398](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L398)

The state machine this parser dispatches into, when the implementation
exposes one. Optional so existing external parser implementations
remain valid — typed to the minimal `{ happens }` contract this parser
itself needs, so an external implementation satisfies this member
without providing a full `being` `StateMachine`. Intended for
tooling/introspection — dispatch through the parser, not through this
reference.

##### パラメータ

###### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)

##### 戻り値

`void`

The state machine this parser dispatches into, when the implementation
exposes one. Optional so existing external parser implementations
remain valid — typed to the minimal `{ happens }` contract this parser
itself needs, so an external implementation satisfies this member
without providing a full `being` `StateMachine`. Intended for
tooling/introspection — dispatch through the parser, not through this
reference.

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`stateMachine`](../interfaces/KMTEventParser.md#statemachine)

## メソッド

### addEventListeners()

> **addEventListeners**(`signal`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:207](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L207)

#### パラメータ

##### signal

`AbortSignal`

#### 戻り値

`void`

***

### attach()

> **attach**(`canvas`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:388](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L388)

Attaches to a new canvas element

#### パラメータ

##### canvas

`HTMLCanvasElement`

#### 戻り値

`void`

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`attach`](../interfaces/KMTEventParser.md#attach)

***

### bindFunctions()

> **bindFunctions**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:248](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L248)

#### 戻り値

`void`

***

### disable()

> **disable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:199](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L199)

Disables the parser; the event listeners are still attached just not processing any events

#### 戻り値

`void`

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`disable`](../interfaces/KMTEventParser.md#disable)

***

### enable()

> **enable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:203](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L203)

Enables the parser

#### 戻り値

`void`

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`enable`](../interfaces/KMTEventParser.md#enable)

***

### keypressHandler()

> **keypressHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:348](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L348)

#### パラメータ

##### e

`KeyboardEvent`

#### 戻り値

`void`

***

### keyupHandler()

> **keyupHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:379](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L379)

#### パラメータ

##### e

`KeyboardEvent`

#### 戻り値

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:270](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L270)

#### パラメータ

##### e

`PointerEvent`

#### 戻り値

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:307](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L307)

#### パラメータ

##### e

`PointerEvent`

#### 戻り値

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:290](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L290)

#### パラメータ

##### e

`PointerEvent`

#### 戻り値

`void`

***

### processEvent()

> `protected` **processEvent**\<`K`\>(...`args`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:257](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L257)

#### 型パラメーター

##### K

`K` *extends* keyof [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md)

#### パラメータ

##### args

...`EventArgs`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `K`\>

#### 戻り値

`void`

***

### scrollHandler()

> **scrollHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:328](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L328)

#### パラメータ

##### e

`WheelEvent`

#### 戻り値

`void`

***

### setUp()

> **setUp**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:235](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L235)

Initializes event listeners

#### 戻り値

`void`

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`setUp`](../interfaces/KMTEventParser.md#setup)

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:242](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L242)

Removes event listeners and cleans up

#### 戻り値

`void`

#### の実装

[`KMTEventParser`](../interfaces/KMTEventParser.md).[`tearDown`](../interfaces/KMTEventParser.md#teardown)
