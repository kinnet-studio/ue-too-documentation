[@ue-too/board-pixi-integration](../../modules.md) / [index](../index.md) / PixiInputParser

# 類別: PixiInputParser

定義於: [pixi-input-event-parser.ts:17](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L17)

## 建構函式

### 建構函式

> **new PixiInputParser**(`app`, `kmtInputStateMachine`, `inputOrchestrator`, `camera`): `PixiInputParser`

定義於: [pixi-input-event-parser.ts:29](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L29)

#### 參數

##### app

`Application`

##### kmtInputStateMachine

`KmtInputStateMachine`

##### inputOrchestrator

`InputOrchestrator`

##### camera

`BoardCamera`

#### 回傳

`PixiInputParser`

## 存取器

### disabled

#### Getter 簽章

> **get** **disabled**(): `boolean`

定義於: [pixi-input-event-parser.ts:352](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L352)

##### 回傳

`boolean`

## 方法

### bindFunctions()

> **bindFunctions**(): `void`

定義於: [pixi-input-event-parser.ts:46](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L46)

#### 回傳

`void`

***

### disable()

> **disable**(): `void`

定義於: [pixi-input-event-parser.ts:344](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L344)

#### 回傳

`void`

***

### enable()

> **enable**(): `void`

定義於: [pixi-input-event-parser.ts:348](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L348)

#### 回傳

`void`

***

### hideHitAreaDebug()

> **hideHitAreaDebug**(): `void`

定義於: [pixi-input-event-parser.ts:206](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L206)

Hides the hitArea debug visualization.

#### 回傳

`void`

***

### keydownHandler()

> **keydownHandler**(`event`): `void`

定義於: [pixi-input-event-parser.ts:319](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L319)

#### 參數

##### event

`KeyboardEvent`

#### 回傳

`void`

***

### keyupHandler()

> **keyupHandler**(`event`): `void`

定義於: [pixi-input-event-parser.ts:332](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L332)

#### 參數

##### event

`KeyboardEvent`

#### 回傳

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`event`): `void`

定義於: [pixi-input-event-parser.ts:233](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L233)

#### 參數

##### event

`FederatedPointerEvent`

#### 回傳

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`event`): `void`

定義於: [pixi-input-event-parser.ts:273](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L273)

#### 參數

##### event

`FederatedPointerEvent`

#### 回傳

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`event`): `void`

定義於: [pixi-input-event-parser.ts:253](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L253)

#### 參數

##### event

`FederatedPointerEvent`

#### 回傳

`void`

***

### scrollHandler()

> **scrollHandler**(`event`): `void`

定義於: [pixi-input-event-parser.ts:297](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L297)

#### 參數

##### event

`WheelEvent`

#### 回傳

`void`

***

### setUp()

> **setUp**(): `void`

定義於: [pixi-input-event-parser.ts:55](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L55)

#### 回傳

`void`

***

### showHitAreaDebug()

> **showHitAreaDebug**(): `void`

定義於: [pixi-input-event-parser.ts:193](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L193)

Shows a visual debug overlay of the hitArea.

#### 回傳

`void`

#### 備註

This creates a red polygon/rectangle that shows the current hitArea boundaries.
Useful for debugging hit detection issues. The debug graphics are
automatically updated when `updateHitArea()` is called.

***

### tearDown()

> **tearDown**(): `void`

定義於: [pixi-input-event-parser.ts:214](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L214)

#### 回傳

`void`

***

### updateHitArea()

> **updateHitArea**(): `void`

定義於: [pixi-input-event-parser.ts:93](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-integration/src/pixi-input-event-parser.ts#L93)

Updates the stage's hitArea to cover the entire viewport in stage local coordinates.

#### 回傳

`void`

#### 備註

This must be called whenever the stage transformation changes (pan, zoom, rotate)
or when the canvas size changes. The hitArea is defined in the stage's local
coordinate space. When the stage transforms, the hitArea moves with it, so we
need to update it to cover the viewport rectangle transformed into stage local space.

Uses a Polygon instead of Rectangle to support rotated viewports. The four corners
of the viewport are converted from viewport space to world space (which matches
the stage's local space when the stage transform is applied).
