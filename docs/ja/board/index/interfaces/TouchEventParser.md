[@ue-too/board](../../modules.md) / [index](../index.md) / TouchEventParser

# インターフェイス: TouchEventParser

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:19](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L19)

Interface for touch event parsers.

## Remarks

Touch event parsers bridge DOM TouchEvents and the touch state machine.
They provide granular control over which gesture types are enabled.

## プロパティ

### disabled

> **disabled**: `boolean`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:21](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L21)

Whether all touch input is disabled

***

### stateMachine?

> `readonly` `optional` **stateMachine**: [`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:42](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L42)

The state machine this parser dispatches into, when the implementation
exposes one. Optional so existing external parser implementations
remain valid, but note this member is typed to the full
`TouchInputStateMachine` — unlike
[KMTEventParser.stateMachine](KMTEventParser.md#statemachine)'s minimal `{ happens }` contract,
an external implementation is more likely to need adjustment to
satisfy this member's shape. Intended for tooling/introspection —
dispatch through the parser, not through this reference.

## メソッド

### attach()

> **attach**(`canvas`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:27](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L27)

Attaches to a new canvas element

#### パラメータ

##### canvas

`HTMLCanvasElement`

#### 戻り値

`void`

***

### disable()

> **disable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:29](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L29)

Disables the parser; the event listeners are still attached just not processing any events

#### 戻り値

`void`

***

### enable()

> **enable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:31](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L31)

Enables the parser

#### 戻り値

`void`

***

### setUp()

> **setUp**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:23](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L23)

Initializes event listeners

#### 戻り値

`void`

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:25](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L25)

Removes event listeners and cleans up

#### 戻り値

`void`
