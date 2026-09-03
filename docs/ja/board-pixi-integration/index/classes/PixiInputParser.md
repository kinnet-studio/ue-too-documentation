[@ue-too/board-pixi-integration](../../modules.md) / [index](../index.md) / PixiInputParser

# クラス: PixiInputParser

定義: [pixi-input-event-parser.ts:17](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L17)

## コンストラクター

### コンストラクター

> **new PixiInputParser**(`app`, `kmtInputStateMachine`, `inputOrchestrator`, `camera`): `PixiInputParser`

定義: [pixi-input-event-parser.ts:29](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L29)

#### パラメータ

##### app

`Application`

##### kmtInputStateMachine

`KmtInputStateMachine`

##### inputOrchestrator

`InputOrchestrator`

##### camera

`BoardCamera`

#### 戻り値

`PixiInputParser`

## アクセッサー

### disabled

#### 署名を取得する

> **get** **disabled**(): `boolean`

定義: [pixi-input-event-parser.ts:352](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L352)

##### 戻り値

`boolean`

## メソッド

### bindFunctions()

> **bindFunctions**(): `void`

定義: [pixi-input-event-parser.ts:46](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L46)

#### 戻り値

`void`

***

### disable()

> **disable**(): `void`

定義: [pixi-input-event-parser.ts:344](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L344)

#### 戻り値

`void`

***

### enable()

> **enable**(): `void`

定義: [pixi-input-event-parser.ts:348](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L348)

#### 戻り値

`void`

***

### hideHitAreaDebug()

> **hideHitAreaDebug**(): `void`

定義: [pixi-input-event-parser.ts:206](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L206)

Hides the hitArea debug visualization.

#### 戻り値

`void`

***

### keydownHandler()

> **keydownHandler**(`event`): `void`

定義: [pixi-input-event-parser.ts:319](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L319)

#### パラメータ

##### event

`KeyboardEvent`

#### 戻り値

`void`

***

### keyupHandler()

> **keyupHandler**(`event`): `void`

定義: [pixi-input-event-parser.ts:332](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L332)

#### パラメータ

##### event

`KeyboardEvent`

#### 戻り値

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`event`): `void`

定義: [pixi-input-event-parser.ts:233](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L233)

#### パラメータ

##### event

`FederatedPointerEvent`

#### 戻り値

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`event`): `void`

定義: [pixi-input-event-parser.ts:273](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L273)

#### パラメータ

##### event

`FederatedPointerEvent`

#### 戻り値

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`event`): `void`

定義: [pixi-input-event-parser.ts:253](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L253)

#### パラメータ

##### event

`FederatedPointerEvent`

#### 戻り値

`void`

***

### scrollHandler()

> **scrollHandler**(`event`): `void`

定義: [pixi-input-event-parser.ts:297](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L297)

#### パラメータ

##### event

`WheelEvent`

#### 戻り値

`void`

***

### setUp()

> **setUp**(): `void`

定義: [pixi-input-event-parser.ts:55](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L55)

#### 戻り値

`void`

***

### showHitAreaDebug()

> **showHitAreaDebug**(): `void`

定義: [pixi-input-event-parser.ts:193](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L193)

Shows a visual debug overlay of the hitArea.

#### 戻り値

`void`

#### Remarks

This creates a red polygon/rectangle that shows the current hitArea boundaries.
Useful for debugging hit detection issues. The debug graphics are
automatically updated when `updateHitArea()` is called.

***

### tearDown()

> **tearDown**(): `void`

定義: [pixi-input-event-parser.ts:214](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L214)

#### 戻り値

`void`

***

### updateHitArea()

> **updateHitArea**(): `void`

定義: [pixi-input-event-parser.ts:93](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L93)

Updates the stage's hitArea to cover the entire viewport in stage local coordinates.

#### 戻り値

`void`

#### Remarks

This must be called whenever the stage transformation changes (pan, zoom, rotate)
or when the canvas size changes. The hitArea is defined in the stage's local
coordinate space. When the stage transforms, the hitArea moves with it, so we
need to update it to cover the viewport rectangle transformed into stage local space.

Uses a Polygon instead of Rectangle to support rotated viewports. The four corners
of the viewport are converted from viewport space to world space (which matches
the stage's local space when the stage transform is applied).
