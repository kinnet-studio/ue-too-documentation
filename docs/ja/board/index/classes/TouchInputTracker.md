[@ue-too/board](../../modules.md) / [index](../index.md) / TouchInputTracker

# クラス: TouchInputTracker

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:99](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L99)

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

## 例

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

## 実装

- [`TouchContext`](../interfaces/TouchContext.md)

## コンストラクター

### コンストラクター

> **new TouchInputTracker**(`canvas`): `TouchInputTracker`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:107](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L107)

#### パラメータ

##### canvas

[`Canvas`](../interfaces/Canvas.md)

#### 戻り値

`TouchInputTracker`

## アクセッサー

### alignCoordinateSystem

#### 署名を取得する

> **get** **alignCoordinateSystem**(): `boolean`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:151](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L151)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **alignCoordinateSystem**(`value`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:155](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L155)

Whether to use standard screen coordinate system (vs inverted Y-axis)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

Whether to use standard screen coordinate system (vs inverted Y-axis)

#### の実装

[`TouchContext`](../interfaces/TouchContext.md).[`alignCoordinateSystem`](../interfaces/TouchContext.md#aligncoordinatesystem)

***

### canvas

#### 署名を取得する

> **get** **canvas**(): [`Canvas`](../interfaces/Canvas.md)

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:159](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L159)

Canvas accessor for dimensions and coordinate transformations

##### 戻り値

[`Canvas`](../interfaces/Canvas.md)

Canvas accessor for dimensions and coordinate transformations

#### の実装

[`TouchContext`](../interfaces/TouchContext.md).[`canvas`](../interfaces/TouchContext.md#canvas)

## メソッド

### addTouchPoints()

> **addTouchPoints**(`points`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:112](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L112)

Adds new touch points to tracking

#### パラメータ

##### points

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### 戻り値

`void`

#### の実装

[`TouchContext`](../interfaces/TouchContext.md).[`addTouchPoints`](../interfaces/TouchContext.md#addtouchpoints)

***

### cleanup()

> **cleanup**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:163](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L163)

#### 戻り値

`void`

#### の実装

[`TouchContext`](../interfaces/TouchContext.md).[`cleanup`](../interfaces/TouchContext.md#cleanup)

***

### getCurrentTouchPointsCount()

> **getCurrentTouchPointsCount**(): `number`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:126](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L126)

Returns the current number of active touch points

#### 戻り値

`number`

#### の実装

[`TouchContext`](../interfaces/TouchContext.md).[`getCurrentTouchPointsCount`](../interfaces/TouchContext.md#getcurrenttouchpointscount)

***

### getInitialTouchPointsPositions()

> **getInitialTouchPointsPositions**(`idents`): [`TouchPoints`](../type-aliases/TouchPoints.md)[]

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:130](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L130)

Retrieves the initial positions of specific touch points

#### パラメータ

##### idents

`number`[]

#### 戻り値

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### の実装

[`TouchContext`](../interfaces/TouchContext.md).[`getInitialTouchPointsPositions`](../interfaces/TouchContext.md#getinitialtouchpointspositions)

***

### removeTouchPoints()

> **removeTouchPoints**(`identifiers`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:118](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L118)

Removes touch points from tracking by identifier

#### パラメータ

##### identifiers

`number`[]

#### 戻り値

`void`

#### の実装

[`TouchContext`](../interfaces/TouchContext.md).[`removeTouchPoints`](../interfaces/TouchContext.md#removetouchpoints)

***

### setup()

> **setup**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:165](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L165)

#### 戻り値

`void`

#### の実装

[`TouchContext`](../interfaces/TouchContext.md).[`setup`](../interfaces/TouchContext.md#setup)

***

### updateTouchPoints()

> **updateTouchPoints**(`pointsMoved`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts:143](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/touch-input-context.ts#L143)

Updates the current positions of touch points

#### パラメータ

##### pointsMoved

[`TouchPoints`](../type-aliases/TouchPoints.md)[]

#### 戻り値

`void`

#### の実装

[`TouchContext`](../interfaces/TouchContext.md).[`updateTouchPoints`](../interfaces/TouchContext.md#updatetouchpoints)
