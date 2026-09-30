[@ue-too/board](../../modules.md) / [index](../index.md) / CanvasProxy

# 類別: CanvasProxy

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:196](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L196)

A proxy for the canvas element to prevent constant invoking of the getBoundingClientRect method.

## 備註

This is mainly used as a proxy to the canvas to prevent invoking the getBoundingClientRect method on the canvas every time a pointer event is triggered or a coordinate conversion is needed. Also to autoscale the canvas buffer depending on the device pixel ratio. It's important to note that in normal circumstances, you would not need to set the size of the canvas manually; you should use the css style width and height to set the size of the canvas.

## 參閱

 - [Canvas](../interfaces/Canvas.md) for the interface that this class implements
 - [Observable](../interfaces/Observable.md) for the observable that this class emits
 - [Observer](../type-aliases/Observer.md) for the observer that can subscribe to the observable
 - [SubscriptionOptions](../interfaces/SubscriptionOptions.md) for the options that can be passed to the subscribe method
 - [SynchronousObservable](SynchronousObservable.md) for the synchronous observable that this class emits
 - [CanvasPositionDimensionPublisher](CanvasPositionDimensionPublisher.md) for the publisher that is used to publish the canvas dimensions

## 實作

- [`Canvas`](../interfaces/Canvas.md)
- [`Observable`](../interfaces/Observable.md)\<\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]\>

## 建構函式

### 建構函式

> **new CanvasProxy**(`canvas?`): `CanvasProxy`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:204](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L204)

#### 參數

##### canvas?

`HTMLCanvasElement`

#### 回傳

`CanvasProxy`

## 存取器

### detached

#### Getter 簽章

> **get** **detached**(): `boolean`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:255](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L255)

Whether the canvas is currently detached from the DOM

##### 回傳

`boolean`

Whether the canvas is currently detached from the DOM

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

#### Getter 簽章

> **get** **dimensions**(): `object`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:259](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L259)

Combined dimensions and position information

##### 回傳

`object`

###### height

> **height**: `number`

###### position

> **position**: `Point`

###### width

> **width**: `number`

Combined dimensions and position information

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`dimensions`](../interfaces/Canvas.md#dimensions)

***

### height

#### Getter 簽章

> **get** **height**(): `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:335](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L335)

The canvas height in CSS pixels

##### 回傳

`number`

The canvas height in CSS pixels

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

#### Getter 簽章

> **get** **position**(): `Point`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:339](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L339)

The top-left position of the canvas in window coordinates

##### 回傳

`Point`

The top-left position of the canvas in window coordinates

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### width

#### Getter 簽章

> **get** **width**(): `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:267](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L267)

The canvas width in CSS pixels

##### 回傳

`number`

The canvas width in CSS pixels

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## 方法

### attach()

> **attach**(`canvas`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:357](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L357)

#### 參數

##### canvas

`HTMLCanvasElement`

#### 回傳

`void`

***

### notify()

> **notify**(...`data`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:251](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L251)

#### 參數

##### data

...\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]

#### 回傳

`void`

#### 實作了

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### setCanvasHeight()

> **setCanvasHeight**(`height`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:314](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L314)

#### 參數

##### height

`number`

#### 回傳

`void`

***

### setCanvasWidth()

> **setCanvasWidth**(`width`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:282](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L282)

#### 參數

##### width

`number`

#### 回傳

`void`

***

### setCursor()

> **setCursor**(`style`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:343](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L343)

Sets the CSS cursor style for visual feedback

#### 參數

##### style

`"grab"` | `"default"` | `"grabbing"`

#### 回傳

`void`

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### setHeight()

> **setHeight**(`height`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:307](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L307)

set the height of the canvas
the height is synonymous with the canvas style height not the canvas height

#### 參數

##### height

`number`

#### 回傳

`void`

***

### setWidth()

> **setWidth**(`width`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:275](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L275)

set the width of the canvas
the width is synonymous with the canvas style width not the canvas width

#### 參數

##### width

`number`

#### 回傳

`void`

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:244](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L244)

#### 參數

##### observer

[`Observer`](../type-aliases/Observer.md)\<\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]\>

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

#### 回傳

> (): `void`

##### 回傳

`void`

#### 實作了

[`Observable`](../interfaces/Observable.md).[`subscribe`](../interfaces/Observable.md#subscribe)

***

### tearDown()

> **tearDown**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:349](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L349)

Cleanup method to dispose of resources and event listeners

#### 回傳

`void`

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
