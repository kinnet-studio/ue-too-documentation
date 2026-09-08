[@ue-too/board](../../modules.md) / [index](../index.md) / TouchContext

# 介面: TouchContext

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:47](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L47)

Context interface for the touch input state machine.

## 備註

This context manages the state required for multi-touch gesture recognition:

**Touch Point Tracking**:
- Maintains a map of active touch points by identifier
- Stores initial positions to calculate deltas for pan gestures
- Stores initial distances to calculate zoom factors

**Gesture Recognition**:
- Single-finger: Not handled (reserved for UI interactions)
- Two-finger: Pan and pinch-to-zoom gestures
- Three+ fingers: Currently not handled

**Coordinate System**:
Similar to KMT, the `alignCoordinateSystem` flag controls Y-axis orientation.

This interface extends BaseContext from the @ue-too/being state machine library.

## Extends

- `BaseContext`

## 屬性

### addTouchPoints()

> **addTouchPoints**: (`points`) => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:49](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L49)

Adds new touch points to tracking

#### 參數

##### points

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### 回傳

`void`

***

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:59](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L59)

Whether to use standard screen coordinate system (vs inverted Y-axis)

***

### canvas

> **canvas**: [`Canvas`](Canvas.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:61](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L61)

Canvas accessor for dimensions and coordinate transformations

***

### getCurrentTouchPointsCount()

> **getCurrentTouchPointsCount**: () => `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:53](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L53)

Returns the current number of active touch points

#### 回傳

`number`

***

### getInitialTouchPointsPositions()

> **getInitialTouchPointsPositions**: (`idents`) => [`TouchPoints`](../type-aliases/TouchPoints.md)[]

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:55](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L55)

Retrieves the initial positions of specific touch points

#### 參數

##### idents

`number`[]

#### 回傳

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

***

### removeTouchPoints()

> **removeTouchPoints**: (`idents`) => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:51](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L51)

Removes touch points from tracking by identifier

#### 參數

##### idents

`number`[]

#### 回傳

`void`

***

### updateTouchPoints()

> **updateTouchPoints**: (`pointsMoved`) => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:57](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L57)

Updates the current positions of touch points

#### 參數

##### pointsMoved

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

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
