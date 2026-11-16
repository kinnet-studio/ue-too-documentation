[@ue-too/board](../../modules.md) / [index](../index.md) / TouchEventParser

# インターフェイス: TouchEventParser

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:20](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L20)

Interface for touch event parsers.

## Remarks

Touch event parsers bridge DOM TouchEvents and the touch state machine.
They provide granular control over which gesture types are enabled.

## プロパティ

### disabled

> **disabled**: `boolean`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:22](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L22)

Whether all touch input is disabled

***

### stateMachine?

> `readonly` `optional` **stateMachine**: [`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:49](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L49)

The state machine this parser dispatches into, when the implementation
exposes one. Optional so existing external parser implementations
remain valid, but note this member is typed to the full
`TouchInputStateMachine` — unlike
[KMTEventParser.stateMachine](KMTEventParser.md#statemachine)'s minimal `{ happens }` contract,
an external implementation is more likely to need adjustment to
satisfy this member's shape. Intended for tooling/introspection —
dispatch through the parser, not through this reference.

[VanillaTouchEventParser](../classes/VanillaTouchEventParser.md) can drive any machine that takes
[TouchEventMapping](../type-aliases/TouchEventMapping.md) events, such as the one from
[createOneFingerPanTouchInputStateMachine](../functions/createOneFingerPanTouchInputStateMachine.md). It still reports that
machine through this member's stock type, so keep your own reference
when you need its real type.

## メソッド

### attach()

> **attach**(`canvas`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:28](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L28)

Attaches to a new canvas element

#### パラメータ

##### canvas

`HTMLCanvasElement`

#### 戻り値

`void`

***

### disable()

> **disable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:30](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L30)

Disables the parser; the event listeners are still attached just not processing any events

#### 戻り値

`void`

***

### enable()

> **enable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:32](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L32)

Enables the parser

#### 戻り値

`void`

***

### setUp()

> **setUp**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:24](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L24)

Initializes event listeners

#### 戻り値

`void`

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:26](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L26)

Removes event listeners and cleans up

#### 戻り値

`void`
