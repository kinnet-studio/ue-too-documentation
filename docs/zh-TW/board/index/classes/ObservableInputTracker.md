[@ue-too/board](../../modules.md) / [index](../index.md) / ObservableInputTracker

# 類別: ObservableInputTracker

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:744](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L744)

Production implementation of KmtInputContext that tracks input state for the state machine.

## 備註

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

## 實作

- [`KmtInputContext`](../interfaces/KmtInputContext.md)

## 建構函式

### 建構函式

> **new ObservableInputTracker**(`canvasOperator`, `inputMode`): `ObservableInputTracker`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:757](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L757)

#### 參數

##### canvasOperator

[`Canvas`](../interfaces/Canvas.md)

Canvas accessor for dimensions and cursor control

##### inputMode

[`KmtInputMode`](../type-aliases/KmtInputMode.md) = `'kmt'`

The input device to start in. Defaults to `'kmt'`
(keyboard + mouse).

#### 回傳

`ObservableInputTracker`

## 存取器

### alignCoordinateSystem

#### Getter 簽章

> **get** **alignCoordinateSystem**(): `boolean`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:823](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L823)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### 回傳

`boolean`

#### Setter 簽章

> **set** **alignCoordinateSystem**(`value`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:835](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L835)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### 參數

###### value

`boolean`

##### 回傳

`void`

Whether to use standard screen coordinate system (vs inverted Y-axis)

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`alignCoordinateSystem`](../interfaces/KmtInputContext.md#aligncoordinatesystem)

***

### canvas

#### Getter 簽章

> **get** **canvas**(): [`Canvas`](../interfaces/Canvas.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:827](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L827)

Canvas accessor for dimensions and cursor control

##### 回傳

[`Canvas`](../interfaces/Canvas.md)

Canvas accessor for dimensions and cursor control

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`canvas`](../interfaces/KmtInputContext.md#canvas)

***

### initialCursorPosition

#### Getter 簽章

> **get** **initialCursorPosition**(): `Point`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:831](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L831)

The cursor position when a pan gesture started

##### 回傳

`Point`

The cursor position when a pan gesture started

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`initialCursorPosition`](../interfaces/KmtInputContext.md#initialcursorposition)

***

### kmtTrackpadTrackScore

#### Getter 簽章

> **get** **kmtTrackpadTrackScore**(): `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:797](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L797)

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

##### 回傳

`number`

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`kmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#kmttrackpadtrackscore)

***

### mode

#### Getter 簽章

> **get** **mode**(): `"kmt"` \| `"trackpad"` \| `"TBD"`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:769](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L769)

The current input mode: `'kmt'`, `'trackpad'`, or `'TBD'` while
auto-detection is on and undecided.

##### 回傳

`"kmt"` \| `"trackpad"` \| `"TBD"`

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`mode`](../interfaces/KmtInputContext.md#mode)

## 方法

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:812](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L812)

Increases the score toward mouse

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`addKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#addkmttrackpadtrackscore)

***

### cancelCurrentAction()

> **cancelCurrentAction**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:839](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L839)

Cancels the current action and resets cursor position

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cancelCurrentAction`](../interfaces/KmtInputContext.md#cancelcurrentaction)

***

### cleanup()

> **cleanup**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:847](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L847)

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cleanup`](../interfaces/KmtInputContext.md#cleanup)

***

### enableInputModeDetection()

> **enableInputModeDetection**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:791](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L791)

Opts into auto-detection: resets the mode to `'TBD'` (a plain scroll pans)
and starts scoring input. A middle-click settles the mode on `'kmt'`.

#### 回傳

`void`

#### 備註

Auto-detection is off by default. Prefer letting the user choose with
[setMode](#setmode).

***

### setInitialCursorPosition()

> **setInitialCursorPosition**(`position`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:843](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L843)

Sets the initial cursor position when starting a pan gesture

#### 參數

##### position

`Point`

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setInitialCursorPosition`](../interfaces/KmtInputContext.md#setinitialcursorposition)

***

### setMode()

> **setMode**(`mode`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:778](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L778)

Switches the input mode and turns auto-detection off.

#### 參數

##### mode

The input mode to lock in

`"kmt"` | `"trackpad"` | `"TBD"`

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setMode`](../interfaces/KmtInputContext.md#setmode)

***

### setup()

> **setup**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:849](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L849)

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setup`](../interfaces/KmtInputContext.md#setup)

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:801](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L801)

Decreases the score toward trackpad

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`subtractKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#subtractkmttrackpadtrackscore)
