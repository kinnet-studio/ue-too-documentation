[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputContext

# インターフェイス: KmtInputContext

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:610](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L610)

Context interface for the Keyboard/Mouse/Trackpad (KMT) input state machine.

## Remarks

This context provides the state and behavior needed by the KMT state machine to:
1. Track cursor positions for calculating pan deltas
2. Distinguish between mouse and trackpad input modalities
3. Access canvas dimensions for coordinate transformations
4. Manage coordinate system alignment (inverted Y-axis handling)

**Input Modality Detection**:
The context uses a scoring system (`kmtTrackpadTrackScore`) to differentiate between
mouse and trackpad input, which have different zoom behaviors:
- Mouse: Ctrl+Scroll = zoom, Scroll = pan
- Trackpad: Scroll = zoom (no Ctrl needed), Two-finger gesture = pan

**Coordinate System**:
The `alignCoordinateSystem` flag determines Y-axis orientation:
- `true`: Standard screen coordinates (Y increases downward)
- `false`: Inverted coordinates (Y increases upward)

This interface extends BaseContext from the @ue-too/being state machine library,
inheriting setup() and cleanup() lifecycle methods.

## 拡張

- `BaseContext`

## プロパティ

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**: () => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:626](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L626)

Increases the score toward mouse

#### 戻り値

`void`

***

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:612](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L612)

Whether to use standard screen coordinate system (vs inverted Y-axis)

***

### cancelCurrentAction()

> **cancelCurrentAction**: () => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:618](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L618)

Cancels the current action and resets cursor position

#### 戻り値

`void`

***

### canvas

> **canvas**: [`Canvas`](Canvas.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:614](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L614)

Canvas accessor for dimensions and cursor control

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:620](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L620)

The cursor position when a pan gesture started

***

### kmtTrackpadTrackScore

> **kmtTrackpadTrackScore**: `number`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:622](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L622)

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

***

### mode

> **mode**: `"kmt"` \| `"trackpad"` \| `"TBD"`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:630](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L630)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**: (`position`) => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:616](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L616)

Sets the initial cursor position when starting a pan gesture

#### パラメータ

##### position

`Point`

#### 戻り値

`void`

***

### setMode()

> **setMode**: (`mode`) => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:628](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L628)

Sets the determined input modality

#### パラメータ

##### mode

`"kmt"` | `"trackpad"` | `"TBD"`

#### 戻り値

`void`

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**: () => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:624](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L624)

Decreases the score toward trackpad

#### 戻り値

`void`

## メソッド

### cleanup()

> **cleanup**(): `void`

定義: packages/being/dist/interface.d.ts:31

#### 戻り値

`void`

#### 継承元

`BaseContext.cleanup`

***

### setup()

> **setup**(): `void`

定義: packages/being/dist/interface.d.ts:30

#### 戻り値

`void`

#### 継承元

`BaseContext.setup`
