[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputContext

# 介面: KmtInputContext

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:583](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L583)

Context interface for the Keyboard/Mouse/Trackpad (KMT) input state machine.

## 備註

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

## Extends

- `BaseContext`

## 屬性

### addKmtTrackpadTrackScore()

> **addKmtTrackpadTrackScore**: () => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:599](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L599)

Increases the score toward mouse

#### 回傳

`void`

***

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:585](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L585)

Whether to use standard screen coordinate system (vs inverted Y-axis)

***

### cancelCurrentAction()

> **cancelCurrentAction**: () => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:591](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L591)

Cancels the current action and resets cursor position

#### 回傳

`void`

***

### canvas

> **canvas**: [`Canvas`](Canvas.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:587](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L587)

Canvas accessor for dimensions and cursor control

***

### initialCursorPosition

> **initialCursorPosition**: `Point`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:593](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L593)

The cursor position when a pan gesture started

***

### kmtTrackpadTrackScore

> **kmtTrackpadTrackScore**: `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:595](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L595)

Score tracking input modality: >0 for mouse, <0 for trackpad, 0 for undetermined

***

### mode

> **mode**: `"kmt"` \| `"trackpad"` \| `"TBD"`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:603](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L603)

The current input modality: 'kmt' (mouse), 'trackpad', or 'TBD' (to be determined)

***

### setInitialCursorPosition()

> **setInitialCursorPosition**: (`position`) => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:589](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L589)

Sets the initial cursor position when starting a pan gesture

#### 參數

##### position

`Point`

#### 回傳

`void`

***

### setMode()

> **setMode**: (`mode`) => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:601](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L601)

Sets the determined input modality

#### 參數

##### mode

`"kmt"` | `"trackpad"` | `"TBD"`

#### 回傳

`void`

***

### subtractKmtTrackpadTrackScore()

> **subtractKmtTrackpadTrackScore**: () => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:597](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L597)

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
