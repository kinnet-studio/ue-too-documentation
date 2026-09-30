[@ue-too/board](../../modules.md) / [index](../index.md) / CanvasProxy

# Class: CanvasProxy

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:196](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L196)

A proxy for the canvas element to prevent constant invoking of the getBoundingClientRect method.

## Remarks

This is mainly used as a proxy to the canvas to prevent invoking the getBoundingClientRect method on the canvas every time a pointer event is triggered or a coordinate conversion is needed. Also to autoscale the canvas buffer depending on the device pixel ratio. It's important to note that in normal circumstances, you would not need to set the size of the canvas manually; you should use the css style width and height to set the size of the canvas.

## See

 - [Canvas](../interfaces/Canvas.md) for the interface that this class implements
 - [Observable](../interfaces/Observable.md) for the observable that this class emits
 - [Observer](../type-aliases/Observer.md) for the observer that can subscribe to the observable
 - [SubscriptionOptions](../interfaces/SubscriptionOptions.md) for the options that can be passed to the subscribe method
 - [SynchronousObservable](SynchronousObservable.md) for the synchronous observable that this class emits
 - [CanvasPositionDimensionPublisher](CanvasPositionDimensionPublisher.md) for the publisher that is used to publish the canvas dimensions

## Implements

- [`Canvas`](../interfaces/Canvas.md)
- [`Observable`](../interfaces/Observable.md)\<\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]\>

## Constructors

### Constructor

> **new CanvasProxy**(`canvas?`): `CanvasProxy`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:204](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L204)

#### Parameters

##### canvas?

`HTMLCanvasElement`

#### Returns

`CanvasProxy`

## Accessors

### detached

#### Get Signature

> **get** **detached**(): `boolean`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:255](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L255)

Whether the canvas is currently detached from the DOM

##### Returns

`boolean`

Whether the canvas is currently detached from the DOM

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

#### Get Signature

> **get** **dimensions**(): `object`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:259](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L259)

Combined dimensions and position information

##### Returns

`object`

###### height

> **height**: `number`

###### position

> **position**: `Point`

###### width

> **width**: `number`

Combined dimensions and position information

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`dimensions`](../interfaces/Canvas.md#dimensions)

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:335](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L335)

The canvas height in CSS pixels

##### Returns

`number`

The canvas height in CSS pixels

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

#### Get Signature

> **get** **position**(): `Point`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:339](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L339)

The top-left position of the canvas in window coordinates

##### Returns

`Point`

The top-left position of the canvas in window coordinates

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:267](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L267)

The canvas width in CSS pixels

##### Returns

`number`

The canvas width in CSS pixels

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:357](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L357)

#### Parameters

##### canvas

`HTMLCanvasElement`

#### Returns

`void`

***

### notify()

> **notify**(...`data`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:251](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L251)

#### Parameters

##### data

...\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]

#### Returns

`void`

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### setCanvasHeight()

> **setCanvasHeight**(`height`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:314](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L314)

#### Parameters

##### height

`number`

#### Returns

`void`

***

### setCanvasWidth()

> **setCanvasWidth**(`width`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:282](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L282)

#### Parameters

##### width

`number`

#### Returns

`void`

***

### setCursor()

> **setCursor**(`style`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:343](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L343)

Sets the CSS cursor style for visual feedback

#### Parameters

##### style

`"grab"` | `"default"` | `"grabbing"`

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### setHeight()

> **setHeight**(`height`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:307](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L307)

set the height of the canvas
the height is synonymous with the canvas style height not the canvas height

#### Parameters

##### height

`number`

#### Returns

`void`

***

### setWidth()

> **setWidth**(`width`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:275](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L275)

set the width of the canvas
the width is synonymous with the canvas style width not the canvas width

#### Parameters

##### width

`number`

#### Returns

`void`

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:244](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L244)

#### Parameters

##### observer

[`Observer`](../type-aliases/Observer.md)\<\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]\>

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

#### Returns

> (): `void`

##### Returns

`void`

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`subscribe`](../interfaces/Observable.md#subscribe)

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:349](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L349)

Cleanup method to dispose of resources and event listeners

#### Returns

`void`

#### Implementation of

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
