[@ue-too/board](../globals.md) / TouchInputTracker

# Class: TouchInputTracker

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:99](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L99)

Production implementation of TouchContext that tracks multi-touch state.

## Remarks

This class maintains a map of active touch points, storing their initial positions
to enable gesture recognition. The state machine uses this context to:

- Calculate pan deltas (difference between initial and current midpoint)
- Calculate zoom factors (change in distance between two touch points)
- Determine gesture type (pan vs zoom based on relative magnitudes)

**Touch Point Lifecycle**:
1. `addTouchPoints`: Called on touchstart to register new touches
2. `updateTouchPoints`: Called on touchmove to update current positions
3. `removeTouchPoints`: Called on touchend/touchcancel to unregister touches

The initial positions are preserved until the touch ends, allowing continuous
calculation of deltas throughout the gesture.

## Example

```typescript
const canvasProxy = new CanvasProxy(canvasElement);
const context = new TouchInputTracker(canvasProxy);
const stateMachine = createTouchInputStateMachine(context);

// When a two-finger touch starts
context.addTouchPoints([
  {ident: 0, x: 100, y: 200},
  {ident: 1, x: 300, y: 200}
]);
console.log(context.getCurrentTouchPointsCount()); // 2
```

## Implements

- [`TouchContext`](../interfaces/TouchContext.md)

## Constructors

### Constructor

> **new TouchInputTracker**(`canvas`): `TouchInputTracker`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:107](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L107)

#### Parameters

##### canvas

[`Canvas`](../interfaces/Canvas.md)

#### Returns

`TouchInputTracker`

## Accessors

### alignCoordinateSystem

#### Get Signature

> **get** **alignCoordinateSystem**(): `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:151](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L151)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### Returns

`boolean`

#### Set Signature

> **set** **alignCoordinateSystem**(`value`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:155](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L155)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### Parameters

###### value

`boolean`

##### Returns

`void`

Whether to use standard screen coordinate system (vs inverted Y-axis)

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`alignCoordinateSystem`](../interfaces/TouchContext.md#aligncoordinatesystem)

***

### canvas

#### Get Signature

> **get** **canvas**(): [`Canvas`](../interfaces/Canvas.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:159](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L159)

Canvas accessor for dimensions and coordinate transformations

##### Returns

[`Canvas`](../interfaces/Canvas.md)

Canvas accessor for dimensions and coordinate transformations

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`canvas`](../interfaces/TouchContext.md#canvas)

## Methods

### addTouchPoints()

> **addTouchPoints**(`points`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:112](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L112)

Adds new touch points to tracking

#### Parameters

##### points

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`addTouchPoints`](../interfaces/TouchContext.md#addtouchpoints)

***

### cleanup()

> **cleanup**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:163](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L163)

#### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`cleanup`](../interfaces/TouchContext.md#cleanup)

***

### getCurrentTouchPointsCount()

> **getCurrentTouchPointsCount**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:126](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L126)

Returns the current number of active touch points

#### Returns

`number`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`getCurrentTouchPointsCount`](../interfaces/TouchContext.md#getcurrenttouchpointscount)

***

### getInitialTouchPointsPositions()

> **getInitialTouchPointsPositions**(`idents`): [`TouchPoints`](../type-aliases/TouchPoints.md)[]

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:130](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L130)

Retrieves the initial positions of specific touch points

#### Parameters

##### idents

`number`[]

#### Returns

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`getInitialTouchPointsPositions`](../interfaces/TouchContext.md#getinitialtouchpointspositions)

***

### removeTouchPoints()

> **removeTouchPoints**(`identifiers`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:118](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L118)

Removes touch points from tracking by identifier

#### Parameters

##### identifiers

`number`[]

#### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`removeTouchPoints`](../interfaces/TouchContext.md#removetouchpoints)

***

### setup()

> **setup**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:165](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L165)

#### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`setup`](../interfaces/TouchContext.md#setup)

***

### updateTouchPoints()

> **updateTouchPoints**(`pointsMoved`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:143](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L143)

Updates the current positions of touch points

#### Parameters

##### pointsMoved

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### Returns

`void`

#### Implementation of

[`TouchContext`](../interfaces/TouchContext.md).[`updateTouchPoints`](../interfaces/TouchContext.md#updatetouchpoints)
