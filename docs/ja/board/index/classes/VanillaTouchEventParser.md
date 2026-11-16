[@ue-too/board](../../modules.md) / [index](../index.md) / VanillaTouchEventParser

# クラス: VanillaTouchEventParser

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:109](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L109)

DOM event parser for touch input.

## Remarks

This parser converts raw DOM TouchEvents into state machine events and coordinates
with the orchestrator to process outputs. It serves as the entry point for all touch
input in the input interpretation pipeline.

**Event Flow**:
```
DOM TouchEvents → Parser → State Machine → Parser → Orchestrator → Camera/Observers
```

**Responsibilities**:
1. Listen for DOM touch events (touchstart/move/end/cancel)
2. Extract touch point data (identifier, x, y)
3. Convert to state machine event format
4. Send events to the state machine
5. Forward state machine outputs to the orchestrator

**Touch Point Extraction**:
- touchstart/touchend: Uses `changedTouches` (only new/removed touches)
- touchmove: Uses `targetTouches` (all touches on the canvas)

**Gesture Control**:
Individual gesture types (pan, zoom, rotate) can be disabled independently,
though currently the state machine outputs are filtered by the orchestrator
rather than the parser.

The parser prevents default touch behavior to avoid browser scroll/zoom
interfering with canvas gestures.

**State Machine**:
Any machine that takes [TouchEventMapping](../type-aliases/TouchEventMapping.md) events works: the default
from [createTouchInputStateMachine](../functions/createTouchInputStateMachine.md), the one-finger-pan one from
[createOneFingerPanTouchInputStateMachine](../functions/createOneFingerPanTouchInputStateMachine.md), or an expanded machine.
The [stateMachine](#statemachine) getter keeps its stock type for compatibility, so
hold on to your own reference to a non-stock machine.

## 例

```typescript
const canvasElement = document.getElementById("canvas");
const stateMachine = createTouchInputStateMachine(context);
const orchestrator = new InputOrchestrator(cameraMux, cameraRig, publisher);
const parser = new VanillaTouchEventParser(stateMachine, orchestrator, canvasElement);

parser.setUp(); // Starts listening for touch events

// Disable zoom gestures temporarily
parser.zoomDisabled = true;

// Cleanup when done
parser.tearDown();
```

## 実装

- [`TouchEventParser`](../interfaces/TouchEventParser.md)

## コンストラクター

### コンストラクター

> **new VanillaTouchEventParser**(`touchInputStateMachine`, `orchestrator`, `canvas?`): `VanillaTouchEventParser`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:129](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L129)

#### パラメータ

##### touchInputStateMachine

[`StateMachine`](../interfaces/StateMachine.md)

Any machine that takes
[TouchEventMapping](../type-aliases/TouchEventMapping.md) events, e.g. from
[createTouchInputStateMachine](../functions/createTouchInputStateMachine.md) or
[createOneFingerPanTouchInputStateMachine](../functions/createOneFingerPanTouchInputStateMachine.md)

##### orchestrator

[`InputOrchestrator`](InputOrchestrator.md)

Receives the machine's outputs

##### canvas?

The element to listen on; can be attached later

`HTMLCanvasElement` | `SVGSVGElement`

#### 戻り値

`VanillaTouchEventParser`

## アクセッサー

### disabled

#### 署名を取得する

> **get** **disabled**(): `boolean`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:210](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L210)

Whether all touch input is disabled

##### 戻り値

`boolean`

Whether all touch input is disabled

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`disabled`](../interfaces/TouchEventParser.md#disabled)

***

### orchestrator

#### 署名を取得する

> **get** **orchestrator**(): [`InputOrchestrator`](InputOrchestrator.md)

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:143](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L143)

##### 戻り値

[`InputOrchestrator`](InputOrchestrator.md)

***

### stateMachine

#### 署名を取得する

> **get** **stateMachine**(): [`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:156](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L156)

The machine this parser dispatches into.

##### Remarks

Typed as the stock [TouchInputStateMachine](../type-aliases/TouchInputStateMachine.md) for compatibility,
even when the parser was built with a different machine (such as one
from [createOneFingerPanTouchInputStateMachine](../functions/createOneFingerPanTouchInputStateMachine.md)). Keep your own
reference when you need that machine's real type.

##### 戻り値

[`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

The state machine this parser dispatches into, when the implementation
exposes one. Optional so existing external parser implementations
remain valid, but note this member is typed to the full
`TouchInputStateMachine` — unlike
[KMTEventParser.stateMachine](../interfaces/KMTEventParser.md#statemachine)'s minimal `{ happens }` contract,
an external implementation is more likely to need adjustment to
satisfy this member's shape. Intended for tooling/introspection —
dispatch through the parser, not through this reference.

VanillaTouchEventParser can drive any machine that takes
[TouchEventMapping](../type-aliases/TouchEventMapping.md) events, such as the one from
[createOneFingerPanTouchInputStateMachine](../functions/createOneFingerPanTouchInputStateMachine.md). It still reports that
machine through this member's stock type, so keep your own reference
when you need its real type.

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`stateMachine`](../interfaces/TouchEventParser.md#statemachine)

## メソッド

### attach()

> **attach**(`canvas`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:298](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L298)

Attaches to a new canvas element

#### パラメータ

##### canvas

`HTMLCanvasElement`

#### 戻り値

`void`

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`attach`](../interfaces/TouchEventParser.md#attach)

***

### bindListeners()

> **bindListeners**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:160](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L160)

#### 戻り値

`void`

***

### disable()

> **disable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:214](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L214)

Disables the parser; the event listeners are still attached just not processing any events

#### 戻り値

`void`

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`disable`](../interfaces/TouchEventParser.md#disable)

***

### disableStrategy()

> **disableStrategy**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:171](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L171)

#### 戻り値

`void`

***

### enable()

> **enable**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:218](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L218)

Enables the parser

#### 戻り値

`void`

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`enable`](../interfaces/TouchEventParser.md#enable)

***

### enableStrategy()

> **enableStrategy**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:167](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L167)

#### 戻り値

`void`

***

### setUp()

> **setUp**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:175](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L175)

Initializes event listeners

#### 戻り値

`void`

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`setUp`](../interfaces/TouchEventParser.md#setup)

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:204](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L204)

Removes event listeners and cleans up

#### 戻り値

`void`

#### の実装

[`TouchEventParser`](../interfaces/TouchEventParser.md).[`tearDown`](../interfaces/TouchEventParser.md#teardown)

***

### touchcancelHandler()

> **touchcancelHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:252](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L252)

#### パラメータ

##### e

`TouchEvent`

#### 戻り値

`void`

***

### touchendHandler()

> **touchendHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:267](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L267)

#### パラメータ

##### e

`TouchEvent`

#### 戻り値

`void`

***

### touchmoveHandler()

> **touchmoveHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:282](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L282)

#### パラメータ

##### e

`TouchEvent`

#### 戻り値

`void`

***

### touchstartHandler()

> **touchstartHandler**(`e`): `void`

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts:235](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/raw-input-parser/vanilla-touch-event-parser.ts#L235)

#### パラメータ

##### e

`TouchEvent`

#### 戻り値

`void`
