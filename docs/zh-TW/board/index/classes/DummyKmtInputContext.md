[@ue-too/board](../../modules.md) / [index](../index.md) / DummyKmtInputContext

# 類別: DummyKmtInputContext

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:620](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L620)

No-op implementation of KmtInputContext for web worker relay scenarios.

## 備註

Used when the input state machine is configured to relay events to a web worker
rather than process them locally. The state machine requires a context, but in
the relay scenario, no actual state tracking is needed - events are simply forwarded.

All methods are no-ops and all properties return default values.

## 參閱

[DummyCanvas](DummyCanvas.md)

## 實作

- [`KmtInputContext`](../interfaces/KmtInputContext.md)

## 建構函式

### 建構函式

> **new DummyKmtInputContext**(): `DummyKmtInputContext`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:625](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L625)

#### 回傳

`DummyKmtInputContext`

## 屬性

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean` = `false`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:621](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L621)

Whether to use standard screen coordinate system (vs inverted Y-axis)

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`alignCoordinateSystem`](../interfaces/KmtInputContext.md#aligncoordinatesystem)

***

### canvas

> **canvas**: [`Canvas`](../interfaces/Canvas.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:622](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L622)

Canvas accessor for dimensions and cursor control

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`canvas`](../interfaces/KmtInputContext.md#canvas)

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:623](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L623)

The cursor position when a pan gesture started

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`initialCursorPosition`](../interfaces/KmtInputContext.md#initialcursorposition)

***

### setCursorPosition()

> **setCursorPosition**: (`position`) => `void` = `NO_OP`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:629](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L629)

#### 參數

##### position

`Point`

#### 回傳

`void`

***

### toggleOffEdgeAutoCameraInput()

> **toggleOffEdgeAutoCameraInput**: () => `void` = `NO_OP`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:628](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L628)

#### 回傳

`void`

***

### toggleOnEdgeAutoCameraInput()

> **toggleOnEdgeAutoCameraInput**: () => `void` = `NO_OP`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:627](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L627)

#### 回傳

`void`

## 存取器

### kmtTrackpadTrackScore

#### Getter 簽章

> **get** **kmtTrackpadTrackScore**(): `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:637](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L637)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:647](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L647)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

##### 回傳

`"kmt"` \| `"trackpad"` \| `"TBD"`

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`mode`](../interfaces/KmtInputContext.md#mode)

## 方法

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:643](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L643)

Increases the score toward mouse

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`addKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#addkmttrackpadtrackscore)

***

### cancelCurrentAction()

> **cancelCurrentAction**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:651](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L651)

Cancels the current action and resets cursor position

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cancelCurrentAction`](../interfaces/KmtInputContext.md#cancelcurrentaction)

***

### cleanup()

> **cleanup**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:633](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L633)

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cleanup`](../interfaces/KmtInputContext.md#cleanup)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**(`position`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:631](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L631)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:645](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L645)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:635](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L635)

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setup`](../interfaces/KmtInputContext.md#setup)

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:641](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L641)

Decreases the score toward trackpad

#### 回傳

`void`

#### 實作了

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`subtractKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#subtractkmttrackpadtrackscore)
