[@ue-too/board](../../modules.md) / [index](../index.md) / CanvasCacheInWebWorker

# クラス: CanvasCacheInWebWorker

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:112](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L112)

Abstraction interface for canvas element access and manipulation.

## Remarks

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

## 実装

- [`Canvas`](../interfaces/Canvas.md)

## コンストラクター

### コンストラクター

> **new CanvasCacheInWebWorker**(`postMessageFunction`): `CanvasCacheInWebWorker`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:118](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L118)

#### パラメータ

##### postMessageFunction

\{(`message`, `targetOrigin`, `transfer?`): `void`; (`message`, `options?`): `void`; \}

#### 戻り値

`CanvasCacheInWebWorker`

## アクセッサー

### detached

#### 署名を取得する

> **get** **detached**(): `boolean`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:163](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L163)

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

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:125](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L125)

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

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:151](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L151)

The canvas height in CSS pixels

##### 戻り値

`number`

#### 署名を設定する

> **set** **height**(`height`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:139](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L139)

The canvas height in CSS pixels

##### パラメータ

###### height

`number`

##### 戻り値

`void`

The canvas height in CSS pixels

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`height`](../interfaces/Canvas.md#height)

***

### position

#### 署名を取得する

> **get** **position**(): `Point`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:155](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L155)

The top-left position of the canvas in window coordinates

##### 戻り値

`Point`

#### 署名を設定する

> **set** **position**(`position`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:143](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L143)

The top-left position of the canvas in window coordinates

##### パラメータ

###### position

`Point`

##### 戻り値

`void`

The top-left position of the canvas in window coordinates

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`position`](../interfaces/Canvas.md#position)

***

### width

#### 署名を取得する

> **get** **width**(): `number`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:147](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L147)

The canvas width in CSS pixels

##### 戻り値

`number`

#### 署名を設定する

> **set** **width**(`width`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:135](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L135)

The canvas width in CSS pixels

##### パラメータ

###### width

`number`

##### 戻り値

`void`

The canvas width in CSS pixels

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`width`](../interfaces/Canvas.md#width)

## メソッド

### setCursor()

> **setCursor**(`style`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:159](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L159)

Sets the CSS cursor style for visual feedback

#### パラメータ

##### style

`"grab"` | `"default"` | `"grabbing"`

#### 戻り値

`void`

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`setCursor`](../interfaces/Canvas.md#setcursor)

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts:133](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-context.ts#L133)

Cleanup method to dispose of resources and event listeners

#### 戻り値

`void`

#### の実装

[`Canvas`](../interfaces/Canvas.md).[`tearDown`](../interfaces/Canvas.md#teardown)
