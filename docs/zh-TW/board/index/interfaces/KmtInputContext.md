[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputContext

# 介面: KmtInputContext

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:628](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L628)

Context interface for the Keyboard/Mouse/Trackpad (KMT) input state machine.

## 備註

This context provides the state and behavior needed by the KMT state machine to:
1. Track cursor positions for calculating pan deltas
2. Distinguish between mouse and trackpad input modalities
3. Access canvas dimensions for coordinate transformations
4. Manage coordinate system alignment (inverted Y-axis handling)

**Input Modality**:
`mode` decides what a plain scroll does (Ctrl+Scroll, which is also what browsers
send for a trackpad pinch, always zooms):
- `'kmt'` (keyboard + mouse): Scroll = zoom at the cursor
- `'trackpad'`: Scroll (two-finger swipe) = pan
- `'TBD'` (auto-detection, undecided): Scroll = pan

The scoring members (`kmtTrackpadTrackScore` and friends) only matter while
auto-detection is on.

**Coordinate System**:
The `alignCoordinateSystem` flag determines Y-axis orientation:
- `true`: Standard screen coordinates (Y increases downward)
- `false`: Inverted coordinates (Y increases upward)

This interface extends BaseContext from the @ue-too/being state machine library,
inheriting setup() and cleanup() lifecycle methods.

## Extends

- `BaseContext`

## 屬性

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**: () => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:644](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L644)

Increases the score toward mouse

#### 回傳

`void`

***

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:630](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L630)

Whether to use standard screen coordinate system (vs inverted Y-axis)

***

### cancelCurrentAction()

> **cancelCurrentAction**: () => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:636](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L636)

Cancels the current action and resets cursor position

#### 回傳

`void`

***

### canvas

> **canvas**: [`Canvas`](Canvas.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:632](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L632)

Canvas accessor for dimensions and cursor control

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:638](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L638)

The cursor position when a pan gesture started

***

### kmtTrackpadTrackScore

> **kmtTrackpadTrackScore**: `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:640](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L640)

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

***

### mode

> **mode**: `"kmt"` \| `"trackpad"` \| `"TBD"`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:648](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L648)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**: (`position`) => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:634](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L634)

Sets the initial cursor position when starting a pan gesture

#### 參數

##### position

`Point`

#### 回傳

`void`

***

### setMode()

> **setMode**: (`mode`) => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:646](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L646)

Sets the input modality and stops auto-detection

#### 參數

##### mode

`"kmt"` | `"trackpad"` | `"TBD"`

#### 回傳

`void`

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**: () => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:642](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L642)

Decreases the score toward trackpad

#### 回傳

`void`

## 方法

### cleanup()

> **cleanup**(): `void`

定義於: packages/being/dist/interface.d.ts:31

#### 回傳

`void`

#### 繼承自

`BaseContext.cleanup`

***

### setup()

> **setup**(): `void`

定義於: packages/being/dist/interface.d.ts:30

#### 回傳

`void`

#### 繼承自

`BaseContext.setup`
