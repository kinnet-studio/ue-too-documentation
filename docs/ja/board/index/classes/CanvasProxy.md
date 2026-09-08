[@ue-too/board](../../modules.md) / [index](../index.md) / CanvasProxy

# クラス: CanvasProxy

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:179](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L179)

A proxy for the canvas element to prevent constant invoking of the getBoundingClientRect method.

## Remarks

This is mainly used as a proxy to the canvas to prevent invoking the getBoundingClientRect method on the canvas every time a pointer event is triggered or a coordinate conversion is needed. Also to autoscale the canvas buffer depending on the device pixel ratio. It's important to note that in normal circumstances, you would not need to set the size of the canvas manually; you should use the css style width and height to set the size of the canvas.

## 参照

 - [Canvas](../interfaces/Canvas.md) for the interface that this class implements
 - [Observable](../interfaces/Observable.md) for the observable that this class emits
 - [Observer](../type-aliases/Observer.md) for the observer that can subscribe to the observable
 - [SubscriptionOptions](../interfaces/SubscriptionOptions.md) for the options that can be passed to the subscribe method
 - [SynchronousObservable](SynchronousObservable.md) for the synchronous observable that this class emits
 - [CanvasPositionDimensionPublisher](CanvasPositionDimensionPublisher.md) for the publisher that is used to publish the canvas dimensions

## 実装

- [`Canvas`](../interfaces/Canvas.md)
- [`Observable`](../interfaces/Observable.md)\<\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]\>

## コンストラクター

### コンストラクター

> **new CanvasProxy**(`canvas?`): `CanvasProxy`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:187](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L187)

#### パラメータ

##### canvas?

`HTMLCanvasElement`

#### 戻り値

`CanvasProxy`

## アクセッサー

### detached

#### 署名を取得する

> **get** **detached**(): `boolean`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:238](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L238)

Whether the canvas is currently detached from the DOM

##### 戻り値

`boolean`

Whether the canvas is currently detached from the DOM

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`detached`](../interfaces/Canvas.md#detached)

***

### dimensions

#### 署名を取得する

> **get** **dimensions**(): `object`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:242](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L242)

Combined dimensions and position information

##### 戻り値

`object`

###### height

> **height**: `number`

###### position

> **position**: `Point`

###### width

> **width**: `number`

Combined dimensions and position information

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`dimensions`](../interfaces/Canvas.md#dimensions)

***

### height

#### 署名を取得する

> **get** **height**(): `number`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:308](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L308)

The canvas height in CSS pixels

##### 戻り値

`number`

The canvas height in CSS pixels

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

#### 署名を取得する

> **get** **position**(): `Point`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:312](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L312)

The top-left position of the canvas in window coordinates

##### 戻り値

`Point`

The top-left position of the canvas in window coordinates

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### width

#### 署名を取得する

> **get** **width**(): `number`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:250](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L250)

The canvas width in CSS pixels

##### 戻り値

`number`

The canvas width in CSS pixels

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## メソッド

### attach()

> **attach**(`canvas`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:330](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L330)

#### パラメータ

##### canvas

`HTMLCanvasElement`

#### 戻り値

`void`

***

### notify()

> **notify**(...`data`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:234](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L234)

#### パラメータ

##### data

...\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]

#### 戻り値

`void`

#### の実装

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### setCanvasHeight()

> **setCanvasHeight**(`height`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:292](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L292)

#### パラメータ

##### height

`number`

#### 戻り値

`void`

***

### setCanvasWidth()

> **setCanvasWidth**(`width`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:265](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L265)

#### パラメータ

##### width

`number`

#### 戻り値

`void`

***

### setCursor()

> **setCursor**(`style`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:316](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L316)

Sets the CSS cursor style for visual feedback

#### パラメータ

##### style

`"grab"` | `"default"` | `"grabbing"`

#### 戻り値

`void`

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### setHeight()

> **setHeight**(`height`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:285](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L285)

set the height of the canvas
the height is synonymous with the canvas style height not the canvas height

#### パラメータ

##### height

`number`

#### 戻り値

`void`

***

### setWidth()

> **setWidth**(`width`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:258](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L258)

set the width of the canvas
the width is synonymous with the canvas style width not the canvas width

#### パラメータ

##### width

`number`

#### 戻り値

`void`

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:227](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L227)

#### パラメータ

##### observer

[`Observer`](../type-aliases/Observer.md)\<\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]\>

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

#### 戻り値

> (): `void`

##### 戻り値

`void`

#### の実装

[`Observable`](../interfaces/Observable.md).[`subscribe`](../interfaces/Observable.md#subscribe)

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:322](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L322)

Cleanup method to dispose of resources and event listeners

#### 戻り値

`void`

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
