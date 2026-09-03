[@ue-too/board](../../modules.md) / [index](../index.md) / KMTEventParser

# インターフェイス: KMTEventParser

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:16](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L16)

Interface for KMT (Keyboard/Mouse/Trackpad) event parsers.

## Remarks

Event parsers bridge the gap between DOM events and the state machine.
They listen for raw DOM events, convert them to state machine events,
and coordinate with the orchestrator for output processing.

## プロパティ

### disabled

> **disabled**: `boolean`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:18](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L18)

Whether the parser is currently disabled

***

### stateMachine?

> `readonly` `optional` **stateMachine**: [`StateMachine`](StateMachine.md)

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:38](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L38)

The state machine this parser dispatches into, when the implementation
exposes one. Optional so existing external parser implementations
remain valid — typed to the minimal `{ happens }` contract this parser
itself needs, so an external implementation satisfies this member
without providing a full `being` `StateMachine`. Intended for
tooling/introspection — dispatch through the parser, not through this
reference.

## メソッド

### attach()

> **attach**(`canvas`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:24](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L24)

Attaches to a new canvas element

#### パラメータ

##### canvas

`HTMLCanvasElement`

#### 戻り値

`void`

***

### disable()

> **disable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:26](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L26)

Disables the parser; the event listeners are still attached just not processing any events

#### 戻り値

`void`

***

### enable()

> **enable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:28](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L28)

Enables the parser

#### 戻り値

`void`

***

### setUp()

> **setUp**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:20](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L20)

Initializes event listeners

#### 戻り値

`void`

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:22](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L22)

Removes event listeners and cleans up

#### 戻り値

`void`
