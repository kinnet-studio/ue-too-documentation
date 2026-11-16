[@ue-too/board](../../modules.md) / [index](../index.md) / ObservableInputTracker

# クラス: ObservableInputTracker

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:744](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L744)

Production implementation of KmtInputContext that tracks input state for the state machine.

## Remarks

This class provides the concrete implementation of the KMT input context, maintaining
all state required by the state machine to recognize and track gestures:

**State Tracking**:
- Initial cursor position for calculating pan deltas
- Input mode (kmt/trackpad, or TBD while auto-detecting)
- Coordinate system alignment preference

**Input Mode**:
The tracker starts locked in the mode passed to the constructor (`'kmt'` by
default). Auto-detection is off: guessing the device from wheel events is
unreliable, so give the user a choice and call [setMode](#setmode) with it.

[enableInputModeDetection](#enableinputmodedetection) opts back into auto-detection: the mode becomes
`'TBD'` (a plain scroll pans) and `kmtTrackpadTrackScore` accumulates evidence
(positive for mouse-like wheel events and middle-clicks, negative for two-axis
scrolls). A middle-click settles the mode on `'kmt'`.

**Design Pattern**:
This class follows the Context pattern from the @ue-too/being state machine library,
providing stateful data and operations that states can access and modify during transitions.

## Examples

```typescript
const canvasProxy = new CanvasProxy(canvasElement);
const context = new ObservableInputTracker(canvasProxy);
const stateMachine = createKmtInputStateMachine(context);

// Context tracks state as the state machine processes events
stateMachine.happens("leftPointerDown", {x: 100, y: 200});
console.log(context.initialCursorPosition); // {x: 100, y: 200}
```

Start a board set up for a trackpad
```typescript
const context = new ObservableInputTracker(canvasProxy, 'trackpad');
```

## 実装

- [`KmtInputContext`](../interfaces/KmtInputContext.md)

## コンストラクター

### コンストラクター

> **new ObservableInputTracker**(`canvasOperator`, `inputMode`): `ObservableInputTracker`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:757](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L757)

#### パラメータ

##### canvasOperator

[`Canvas`](../interfaces/Canvas.md)

Canvas accessor for dimensions and cursor control

##### inputMode

[`KmtInputMode`](../type-aliases/KmtInputMode.md) = `'kmt'`

The input device to start in. Defaults to `'kmt'`
(keyboard + mouse).

#### 戻り値

`ObservableInputTracker`

## アクセッサー

### alignCoordinateSystem

#### 署名を取得する

> **get** **alignCoordinateSystem**(): `boolean`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:823](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L823)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **alignCoordinateSystem**(`value`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:835](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L835)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

Whether to use standard screen coordinate system (vs inverted Y-axis)

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`alignCoordinateSystem`](../interfaces/KmtInputContext.md#aligncoordinatesystem)

***

### canvas

#### 署名を取得する

> **get** **canvas**(): [`Canvas`](../interfaces/Canvas.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:827](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L827)

Canvas accessor for dimensions and cursor control

##### 戻り値

[`Canvas`](../interfaces/Canvas.md)

Canvas accessor for dimensions and cursor control

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`canvas`](../interfaces/KmtInputContext.md#canvas)

***

### initialCursorPosition

#### 署名を取得する

> **get** **initialCursorPosition**(): `Point`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:831](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L831)

The cursor position when a pan gesture started

##### 戻り値

`Point`

The cursor position when a pan gesture started

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`initialCursorPosition`](../interfaces/KmtInputContext.md#initialcursorposition)

***

### kmtTrackpadTrackScore

#### 署名を取得する

> **get** **kmtTrackpadTrackScore**(): `number`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:797](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L797)

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

##### 戻り値

`number`

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`kmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#kmttrackpadtrackscore)

***

### mode

#### 署名を取得する

> **get** **mode**(): `"kmt"` \| `"trackpad"` \| `"TBD"`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:769](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L769)

The current input mode: `'kmt'`, `'trackpad'`, or `'TBD'` while
auto-detection is on and undecided.

##### 戻り値

`"kmt"` \| `"trackpad"` \| `"TBD"`

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`mode`](../interfaces/KmtInputContext.md#mode)

## メソッド

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:812](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L812)

Increases the score toward mouse

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`addKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#addkmttrackpadtrackscore)

***

### cancelCurrentAction()

> **cancelCurrentAction**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:839](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L839)

Cancels the current action and resets cursor position

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cancelCurrentAction`](../interfaces/KmtInputContext.md#cancelcurrentaction)

***

### cleanup()

> **cleanup**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:847](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L847)

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cleanup`](../interfaces/KmtInputContext.md#cleanup)

***

### enableInputModeDetection()

> **enableInputModeDetection**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:791](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L791)

Opts into auto-detection: resets the mode to `'TBD'` (a plain scroll pans)
and starts scoring input. A middle-click settles the mode on `'kmt'`.

#### 戻り値

`void`

#### Remarks

Auto-detection is off by default. Prefer letting the user choose with
[setMode](#setmode).

***

### setInitialCursorPosition()

> **setInitialCursorPosition**(`position`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:843](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L843)

Sets the initial cursor position when starting a pan gesture

#### パラメータ

##### position

`Point`

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setInitialCursorPosition`](../interfaces/KmtInputContext.md#setinitialcursorposition)

***

### setMode()

> **setMode**(`mode`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:778](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L778)

Switches the input mode and turns auto-detection off.

#### パラメータ

##### mode

The input mode to lock in

`"kmt"` | `"trackpad"` | `"TBD"`

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setMode`](../interfaces/KmtInputContext.md#setmode)

***

### setup()

> **setup**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:849](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L849)

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setup`](../interfaces/KmtInputContext.md#setup)

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:801](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L801)

Decreases the score toward trackpad

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`subtractKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#subtractkmttrackpadtrackscore)
