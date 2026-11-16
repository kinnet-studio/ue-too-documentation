[@ue-too/board](../globals.md) / TouchContext

# Interface: TouchContext

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:47](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L47)

Context interface for the touch input state machine.

## Remarks

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

## Properties

### addTouchPoints()

> **addTouchPoints**: (`points`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:49](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L49)

Adds new touch points to tracking

#### Parameters

##### points

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### Returns

`void`

***

### alignCoordinateSystem

> **alignCoordinateSystem**: `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:59](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L59)

Whether to use standard screen coordinate system (vs inverted Y-axis)

***

### canvas

> **canvas**: [`Canvas`](Canvas.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:61](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L61)

Canvas accessor for dimensions and coordinate transformations

***

### getCurrentTouchPointsCount()

> **getCurrentTouchPointsCount**: () => `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:53](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L53)

Returns the current number of active touch points

#### Returns

`number`

***

### getInitialTouchPointsPositions()

> **getInitialTouchPointsPositions**: (`idents`) => [`TouchPoints`](../type-aliases/TouchPoints.md)[]

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:55](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L55)

Retrieves the initial positions of specific touch points

#### Parameters

##### idents

`number`[]

#### Returns

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

***

### removeTouchPoints()

> **removeTouchPoints**: (`idents`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:51](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L51)

Removes touch points from tracking by identifier

#### Parameters

##### idents

`number`[]

#### Returns

`void`

***

### updateTouchPoints()

> **updateTouchPoints**: (`pointsMoved`) => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:57](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L57)

Updates the current positions of touch points

#### Parameters

##### pointsMoved

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### Returns

`void`

## Methods

### cleanup()

> **cleanup**(): `void`

Defined in: packages/being/dist/interface.d.ts:31

#### Returns

`void`

#### Inherited from

`BaseContext.cleanup`

***

### setup()

> **setup**(): `void`

Defined in: packages/being/dist/interface.d.ts:30

#### Returns

`void`

#### Inherited from

`BaseContext.setup`
