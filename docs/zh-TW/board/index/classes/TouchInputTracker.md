[@ue-too/board](../../modules.md) / [index](../index.md) / TouchInputTracker

# 類別: TouchInputTracker

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:99](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L99)

Production implementation of TouchContext that tracks multi-touch state.

## 備註

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

## 範例

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

## 實作

- [`TouchContext`](../interfaces/TouchContext.md)

## 建構函式

### 建構函式

> **new TouchInputTracker**(`canvas`): `TouchInputTracker`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:107](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L107)

#### 參數

##### canvas

[`Canvas`](../interfaces/Canvas.md)

#### 回傳

`TouchInputTracker`

## 存取器

### alignCoordinateSystem

#### Getter 簽章

> **get** **alignCoordinateSystem**(): `boolean`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:151](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L151)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### 回傳

`boolean`

#### Setter 簽章

> **set** **alignCoordinateSystem**(`value`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:155](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L155)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### 參數

###### value

`boolean`

##### 回傳

`void`

Whether to use standard screen coordinate system (vs inverted Y-axis)

#### 實作了

[`TouchContext`](../interfaces/TouchContext.md).[`alignCoordinateSystem`](../interfaces/TouchContext.md#aligncoordinatesystem)

***

### canvas

#### Getter 簽章

> **get** **canvas**(): [`Canvas`](../interfaces/Canvas.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:159](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L159)

Canvas accessor for dimensions and coordinate transformations

##### 回傳

[`Canvas`](../interfaces/Canvas.md)

Canvas accessor for dimensions and coordinate transformations

#### 實作了

[`TouchContext`](../interfaces/TouchContext.md).[`canvas`](../interfaces/TouchContext.md#canvas)

## 方法

### addTouchPoints()

> **addTouchPoints**(`points`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:112](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L112)

Adds new touch points to tracking

#### 參數

##### points

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### 回傳

`void`

#### 實作了

[`TouchContext`](../interfaces/TouchContext.md).[`addTouchPoints`](../interfaces/TouchContext.md#addtouchpoints)

***

### cleanup()

> **cleanup**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:163](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L163)

#### 回傳

`void`

#### 實作了

[`TouchContext`](../interfaces/TouchContext.md).[`cleanup`](../interfaces/TouchContext.md#cleanup)

***

### getCurrentTouchPointsCount()

> **getCurrentTouchPointsCount**(): `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:126](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L126)

Returns the current number of active touch points

#### 回傳

`number`

#### 實作了

[`TouchContext`](../interfaces/TouchContext.md).[`getCurrentTouchPointsCount`](../interfaces/TouchContext.md#getcurrenttouchpointscount)

***

### getInitialTouchPointsPositions()

> **getInitialTouchPointsPositions**(`idents`): [`TouchPoints`](../type-aliases/TouchPoints.md)[]

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:130](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L130)

Retrieves the initial positions of specific touch points

#### 參數

##### idents

`number`[]

#### 回傳

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### 實作了

[`TouchContext`](../interfaces/TouchContext.md).[`getInitialTouchPointsPositions`](../interfaces/TouchContext.md#getinitialtouchpointspositions)

***

### removeTouchPoints()

> **removeTouchPoints**(`identifiers`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:118](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L118)

Removes touch points from tracking by identifier

#### 參數

##### identifiers

`number`[]

#### 回傳

`void`

#### 實作了

[`TouchContext`](../interfaces/TouchContext.md).[`removeTouchPoints`](../interfaces/TouchContext.md#removetouchpoints)

***

### setup()

> **setup**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:165](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L165)

#### 回傳

`void`

#### 實作了

[`TouchContext`](../interfaces/TouchContext.md).[`setup`](../interfaces/TouchContext.md#setup)

***

### updateTouchPoints()

> **updateTouchPoints**(`pointsMoved`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:143](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L143)

Updates the current positions of touch points

#### 參數

##### pointsMoved

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### 回傳

`void`

#### 實作了

[`TouchContext`](../interfaces/TouchContext.md).[`updateTouchPoints`](../interfaces/TouchContext.md#updatetouchpoints)
