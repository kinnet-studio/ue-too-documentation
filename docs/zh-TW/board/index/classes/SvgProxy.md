[@ue-too/board](../../modules.md) / [index](../index.md) / SvgProxy

# 類別: SvgProxy

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:336](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L336)

Abstraction interface for canvas element access and manipulation.

## 備註

This interface provides a decoupled way to access canvas properties without direct DOM access.
Multiple implementations exist to support different use cases:
- **CanvasProxy**: Full implementation for HTML canvas elements with dimension tracking
- **SvgProxy**: Implementation for SVG elements
- **DummyCanvas**: No-op implementation for web worker contexts
- **WorkerRelayCanvas**: Relays canvas dimension updates to web workers
- **CanvasCacheInWebWorker**: Caches canvas dimensions within a web worker

The abstraction enables:
- Coordinate system transformations (window → canvas → viewport)
- Canvas dimension tracking without repeated DOM queries
- Cursor style management
- Support for both canvas and SVG rendering contexts

## 實作

- [`Canvas`](../interfaces/Canvas.md)
- [`Observable`](../interfaces/Observable.md)\<\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]\>

## 建構函式

### 建構函式

> **new SvgProxy**(`svg?`): `SvgProxy`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:344](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L344)

#### 參數

##### svg?

`SVGSVGElement`

#### 回傳

`SvgProxy`

## 存取器

### detached

#### Getter 簽章

> **get** **detached**(): `boolean`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:396](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L396)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:400](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L400)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:432](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L432)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:436](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L436)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:408](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L408)

The canvas width in CSS pixels

##### 回傳

`number`

The canvas width in CSS pixels

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## 方法

### attach()

> **attach**(`svg`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:454](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L454)

#### 參數

##### svg

`SVGSVGElement`

#### 回傳

`void`

***

### notify()

> **notify**(...`data`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:392](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L392)

#### 參數

##### data

...\[[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)\]

#### 回傳

`void`

#### 實作了

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### setCursor()

> **setCursor**(`style`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:440](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L440)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:426](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L426)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:416](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L416)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:385](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L385)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:446](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L446)

Cleanup method to dispose of resources and event listeners

#### 回傳

`void`

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
