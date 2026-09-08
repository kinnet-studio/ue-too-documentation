[@ue-too/board](../../modules.md) / [index](../index.md) / ObservableInputTracker

# 類別: ObservableInputTracker

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:690](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L690)

Production implementation of KmtInputContext that tracks input state for the state machine.

## 備註

This class provides the concrete implementation of the KMT input context, maintaining
all state required by the state machine to recognize and track gestures:

**State Tracking**:
- Initial cursor position for calculating pan deltas
- Input modality score to distinguish mouse vs trackpad
- Determined input mode (kmt/trackpad/TBD)
- Coordinate system alignment preference

**Input Modality Detection**:
The `kmtTrackpadTrackScore` accumulates evidence about the input device:
- Positive values indicate mouse behavior (middle-click, no horizontal scroll)
- Negative values indicate trackpad behavior (horizontal scroll, two-finger gestures)
- Score is used to determine zoom behavior (Ctrl+Scroll for mouse vs Scroll for trackpad)

**Design Pattern**:
This class follows the Context pattern from the @ue-too/being state machine library,
providing stateful data and operations that states can access and modify during transitions.

## 範例

```typescript
const canvasProxy = new CanvasProxy(canvasElement);
const context = new ObservableInputTracker(canvasProxy);
const stateMachine = createKmtInputStateMachine(context);

// Context tracks state as the state machine processes events
stateMachine.happens("leftPointerDown", {x: 100, y: 200});
console.log(context.initialCursorPosition); // {x: 100, y: 200}
```

## 實作

- [`KmtInputContext`](../interfaces/KmtInputContext.md)

## 建構函式

### 建構函式

> **new ObservableInputTracker**(`canvasOperator`): `ObservableInputTracker`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:698](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L698)

#### 參數

##### canvasOperator

[`Canvas`](../interfaces/Canvas.md)

#### 回傳

`ObservableInputTracker`

## 存取器

### alignCoordinateSystem

#### Getter 簽章

> **get** **alignCoordinateSystem**(): `boolean`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:747](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L747)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### 回傳

`boolean`

#### Setter 簽章

> **set** **alignCoordinateSystem**(`value`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:759](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L759)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:751](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L751)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:755](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L755)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:721](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L721)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:706](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L706)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

##### 回傳

`"kmt"` \| `"trackpad"` \| `"TBD"`

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`mode`](../interfaces/KmtInputContext.md#mode)

## 方法

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:736](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L736)

Increases the score toward mouse

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`addKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#addkmttrackpadtrackscore)

***

### cancelCurrentAction()

> **cancelCurrentAction**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:763](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L763)

Cancels the current action and resets cursor position

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cancelCurrentAction`](../interfaces/KmtInputContext.md#cancelcurrentaction)

***

### cleanup()

> **cleanup**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:771](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L771)

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cleanup`](../interfaces/KmtInputContext.md#cleanup)

***

### enableInputModeDetection()

> **enableInputModeDetection**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:715](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L715)

#### 回傳

`void`

***

### setInitialCursorPosition()

> **setInitialCursorPosition**(`position`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:767](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L767)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:710](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L710)

Sets the determined input modality

#### 參數

##### mode

`"kmt"` | `"trackpad"` | `"TBD"`

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setMode`](../interfaces/KmtInputContext.md#setmode)

***

### setup()

> **setup**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:773](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L773)

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setup`](../interfaces/KmtInputContext.md#setup)

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:725](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L725)

Decreases the score toward trackpad

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`subtractKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#subtractkmttrackpadtrackscore)
