[@ue-too/board](../../modules.md) / [index](../index.md) / CanvasCacheInWebWorker

# 類別: CanvasCacheInWebWorker

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:112](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L112)

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

## 建構函式

### 建構函式

> **new CanvasCacheInWebWorker**(`postMessageFunction`): `CanvasCacheInWebWorker`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:118](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L118)

#### 參數

##### postMessageFunction

\{(`message`, `targetOrigin`, `transfer?`): `void`; (`message`, `options?`): `void`; \}

#### 回傳

`CanvasCacheInWebWorker`

## 存取器

### detached

#### Getter 簽章

> **get** **detached**(): `boolean`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:163](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L163)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:125](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L125)

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

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:151](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L151)

The canvas height in CSS pixels

##### 回傳

`number`

#### Setter 簽章

> **set** **height**(`height`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:139](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L139)

The canvas height in CSS pixels

##### 參數

###### height

`number`

##### 回傳

`void`

The canvas height in CSS pixels

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

#### Getter 簽章

> **get** **position**(): `Point`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:155](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L155)

The top-left position of the canvas in window coordinates

##### 回傳

`Point`

#### Setter 簽章

> **set** **position**(`position`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:143](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L143)

The top-left position of the canvas in window coordinates

##### 參數

###### position

`Point`

##### 回傳

`void`

The top-left position of the canvas in window coordinates

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### width

#### Getter 簽章

> **get** **width**(): `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:147](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L147)

The canvas width in CSS pixels

##### 回傳

`number`

#### Setter 簽章

> **set** **width**(`width`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:135](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L135)

The canvas width in CSS pixels

##### 參數

###### width

`number`

##### 回傳

`void`

The canvas width in CSS pixels

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## 方法

### setCursor()

> **setCursor**(`style`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:159](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L159)

Sets the CSS cursor style for visual feedback

#### 參數

##### style

`"grab"` | `"default"` | `"grabbing"`

#### 回傳

`void`

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### tearDown()

> **tearDown**(): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:133](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L133)

Cleanup method to dispose of resources and event listeners

#### 回傳

`void`

#### 實作了

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
