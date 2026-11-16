[@ue-too/board](../../modules.md) / [index](../index.md) / DummyKmtInputContext

# クラス: DummyKmtInputContext

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:665](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L665)

No-op implementation of KmtInputContext for web worker relay scenarios.

## Remarks

Used when the input state machine is configured to relay events to a web worker
rather than process them locally. The state machine requires a context, but in
the relay scenario, no actual state tracking is needed - events are simply forwarded.

All methods are no-ops and all properties return default values.

## 参照

[DummyCanvas](DummyCanvas.md)

## 実装

- [`KmtInputContext`](../interfaces/KmtInputContext.md)

## コンストラクター

### コンストラクター

> **new DummyKmtInputContext**(): `DummyKmtInputContext`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:670](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L670)

#### 戻り値

`DummyKmtInputContext`

## プロパティ

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean` = `false`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:666](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L666)

Whether to use standard screen coordinate system (vs inverted Y-axis)

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`alignCoordinateSystem`](../interfaces/KmtInputContext.md#aligncoordinatesystem)

***

### canvas

> **canvas**: [`Canvas`](../interfaces/Canvas.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:667](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L667)

Canvas accessor for dimensions and cursor control

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`canvas`](../interfaces/KmtInputContext.md#canvas)

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:668](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L668)

The cursor position when a pan gesture started

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`initialCursorPosition`](../interfaces/KmtInputContext.md#initialcursorposition)

***

### setCursorPosition()

> **setCursorPosition**: (`position`) => `void` = `NO_OP`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:674](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L674)

#### パラメータ

##### position

`Point`

#### 戻り値

`void`

***

### toggleOffEdgeAutoCameraInput()

> **toggleOffEdgeAutoCameraInput**: () => `void` = `NO_OP`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:673](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L673)

#### 戻り値

`void`

***

### toggleOnEdgeAutoCameraInput()

> **toggleOnEdgeAutoCameraInput**: () => `void` = `NO_OP`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:672](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L672)

#### 戻り値

`void`

## アクセッサー

### kmtTrackpadTrackScore

#### 署名を取得する

> **get** **kmtTrackpadTrackScore**(): `number`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:682](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L682)

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

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:692](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L692)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

##### 戻り値

`"kmt"` \| `"trackpad"` \| `"TBD"`

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`mode`](../interfaces/KmtInputContext.md#mode)

## メソッド

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:688](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L688)

Increases the score toward mouse

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`addKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#addkmttrackpadtrackscore)

***

### cancelCurrentAction()

> **cancelCurrentAction**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:696](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L696)

Cancels the current action and resets cursor position

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cancelCurrentAction`](../interfaces/KmtInputContext.md#cancelcurrentaction)

***

### cleanup()

> **cleanup**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:678](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L678)

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`cleanup`](../interfaces/KmtInputContext.md#cleanup)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**(`position`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:676](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L676)

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

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:690](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L690)

Sets the input modality and stops auto-detection

#### パラメータ

##### mode

`"kmt"` | `"trackpad"` | `"TBD"`

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setMode`](../interfaces/KmtInputContext.md#setmode)

***

### setup()

> **setup**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:680](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L680)

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`setup`](../interfaces/KmtInputContext.md#setup)

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:686](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L686)

Decreases the score toward trackpad

#### 戻り値

`void`

#### の実装

[`KmtInputContext`](../interfaces/KmtInputContext.md).[`subtractKmtTrackpadTrackScore`](../interfaces/KmtInputContext.md#subtractkmttrackpadtrackscore)
