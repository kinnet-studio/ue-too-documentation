[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputContext

# インターフェイス: KmtInputContext

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:583](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L583)

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

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:599](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L599)

Increases the score toward mouse

#### 戻り値

`void`

***

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:585](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L585)

Whether to use standard screen coordinate system (vs inverted Y-axis)

***

### cancelCurrentAction()

> **cancelCurrentAction**: () => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:591](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L591)

Cancels the current action and resets cursor position

#### 戻り値

`void`

***

### canvas

> **canvas**: [`Canvas`](Canvas.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:587](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L587)

Canvas accessor for dimensions and cursor control

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:593](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L593)

The cursor position when a pan gesture started

***

### kmtTrackpadTrackScore

> **kmtTrackpadTrackScore**: `number`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:595](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L595)

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

***

### mode

> **mode**: `"kmt"` \| `"trackpad"` \| `"TBD"`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:603](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L603)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**: (`position`) => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:589](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L589)

Sets the initial cursor position when starting a pan gesture

#### パラメータ

##### position

`Point`

#### 戻り値

`void`

***

### setMode()

> **setMode**: (`mode`) => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:601](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L601)

Sets the determined input modality

#### パラメータ

##### mode

`"kmt"` | `"trackpad"` | `"TBD"`

#### 戻り値

`void`

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**: () => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:597](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L597)

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
