[@ue-too/board](../../modules.md) / [index](../index.md) / Board

# クラス: Board

定義: [packages/board/src/boardify/index.ts:236](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L236)

Main user-facing API class that provides an infinite canvas with pan, zoom, and rotate capabilities.

The Board class is the primary entry point for using the board package. It integrates all subsystems
including camera management, input handling, and state machines into a simple, unified API for
creating interactive 2D canvases with advanced camera controls.

## Remarks

## Architecture Overview

The Board class orchestrates several subsystems:

- **Camera System**: Manages viewport transformations (pan/zoom/rotate) through [ObservableBoardCamera](../interfaces/ObservableBoardCamera.md).
  The camera can be configured with boundaries, zoom limits, and various movement constraints.

- **Input System**: Processes user input through state machines for both mouse/keyboard/trackpad (KMT)
  and touch events. Input is parsed, interpreted, and translated into camera movements.

- **Camera Rig**: Enforces constraints and restrictions on camera movement (boundaries, zoom limits,
  clamping behavior). See [CameraRig](../interfaces/CameraRig.md) for details.

- **Camera Multiplexer**: Coordinates between different camera control sources (user input, animations,
  programmatic control) to ensure smooth transitions. See [CameraMux](../interfaces/CameraMux.md) for details.

## Coordinate Systems

The Board supports three coordinate systems:

1. **World Coordinates**: The infinite canvas space where your content lives. When the camera is at
   position (0, 0) with no zoom or rotation, world coordinates map directly to viewport coordinates.

2. **Viewport Coordinates**: The visible area of the canvas relative to the camera center. The camera
   center is at (0, 0) in viewport space, with coordinates extending in both directions based on the
   canvas size.

3. **Window/Canvas Coordinates**: The browser's coordinate system, with (0, 0) at the top-left corner
   of the canvas element. Use [convertWindowPoint2WorldCoord](#convertwindowpoint2worldcoord) to convert from window to world space.

By default, [alignCoordinateSystem](#aligncoordinatesystem) is `true`, which means the Y-axis points down (standard HTML
canvas orientation). Set it to `false` to use a mathematical coordinate system where Y points up.

## Main Features

- **Camera Control**: Pan, zoom, and rotate the viewport through user input or programmatic API
- **Boundaries**: Define world-space boundaries to constrain camera movement
- **Zoom Limits**: Set minimum and maximum zoom levels
- **Input Modes**: Support for mouse/keyboard/trackpad and touch input with customizable parsers
- **Event System**: Subscribe to camera events (pan, zoom, rotate) and input events
- **Coordinate Conversion**: Convert between window and world coordinates
- **Flexible Configuration**: Extensive options for restricting/clamping camera movement

## Examples

Basic setup with drawing
```typescript
const canvasElement = document.querySelector("canvas") as HTMLCanvasElement;
const board = new Board(canvasElement);

function draw(timestamp: number) {
  board.step(timestamp);

  // Because board can be initialized without a canvas element,
  // the context can be undefined until the canvas is attached
  if(board.context == undefined) {
    return;
  }

  // Draw after the board has stepped
  // The coordinate system has (0, 0) at the center of the canvas when camera position is at (0, 0)
  board.context.beginPath();
  board.context.rect(0, 0, 100, 100);
  board.context.fill();

  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
```

Handling camera and input events
```typescript
const board = new Board(canvasElement);

// Listen to camera pan events
board.on('pan', (event, cameraState) => {
  console.log('Camera panned to:', cameraState.position);
});

// Listen to camera zoom events
board.on('zoom', (event, cameraState) => {
  console.log('Camera zoom level:', cameraState.zoomLevel);
});

// Listen to raw input events (before camera movement)
board.onInput('pan', (event) => {
  console.log('User is panning');
});
```

Configuring boundaries and zoom limits
```typescript
const board = new Board(canvasElement);

// Set world boundaries
board.camera.boundaries = {
  min: { x: -1000, y: -1000 },
  max: { x: 1000, y: 1000 }
};

// Set zoom limits
board.camera.setMinZoomLevel(0.1);
board.camera.setMaxZoomLevel(5.0);

// Ensure entire viewport stays within boundaries
board.limitEntireViewPort = true;

// Clamp camera position to boundaries
board.clampTranslation = true;
board.clampZoom = true;
```

Converting window coordinates to world coordinates
```typescript
const board = new Board(canvasElement);

canvasElement.addEventListener('click', (event) => {
  const windowPoint = { x: event.clientX, y: event.clientY };
  const worldPoint = board.convertWindowPoint2WorldCoord(windowPoint);
  console.log('Clicked at world position:', worldPoint);
});
```

Initialize board without canvas, attach canvas later
```typescript
const board = new Board();

// Attach canvas later
const canvasElement = document.createElement('canvas');
document.body.appendChild(canvasElement);
board.attach(canvasElement);
```

## 参照

 - [ObservableBoardCamera](../interfaces/ObservableBoardCamera.md) for camera API details
 - [CameraRig](../interfaces/CameraRig.md) for camera constraint configuration
 - [CameraMux](../interfaces/CameraMux.md) for camera control coordination

## アクセッサー

### alignCoordinateSystem

#### 署名を取得する

> **get** **alignCoordinateSystem**(): `boolean`

定義: [packages/board/src/boardify/index.ts:561](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L561)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **alignCoordinateSystem**(`align`): `void`

定義: [packages/board/src/boardify/index.ts:555](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L555)

##### Description

This is an attribute that determines if the coordinate system should be aligned with the one of the HTML canvas element. The default is true.
If you set this to true, the coordinate system will be aligned with the one of the HTML canvas element.
If you change this value during runtime, you should update the context to be aligned with the new coordinate system. (just call board.context again)

##### パラメータ

###### align

`boolean`

##### 戻り値

`void`

***

### camera

#### 署名を取得する

> **get** **camera**(): [`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

定義: [packages/board/src/boardify/index.ts:761](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L761)

##### Description

The underlying camera of the board. The camera of the board can be switched.
The boundaries are based on camera meaning you can have cameras with different boundaries, and you can switch between them during runtime.

##### 戻り値

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

#### 署名を設定する

> **set** **camera**(`camera`): `void`

定義: [packages/board/src/boardify/index.ts:765](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L765)

##### パラメータ

###### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

##### 戻り値

`void`

***

### cameraMux

#### 署名を取得する

> **get** **cameraMux**(): [`CameraMux`](../interfaces/CameraMux.md)

定義: [packages/board/src/boardify/index.ts:775](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L775)

##### 戻り値

[`CameraMux`](../interfaces/CameraMux.md)

#### 署名を設定する

> **set** **cameraMux**(`cameraMux`): `void`

定義: [packages/board/src/boardify/index.ts:779](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L779)

##### パラメータ

###### cameraMux

[`CameraMux`](../interfaces/CameraMux.md)

##### 戻り値

`void`

***

### canvasDimensions

#### 署名を取得する

> **get** **canvasDimensions**(): [`CanvasDimensions`](../type-aliases/CanvasDimensions.md)

定義: [packages/board/src/boardify/index.ts:1141](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1141)

##### 戻り値

[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)

***

### clampRotation

#### 署名を取得する

> **get** **clampRotation**(): `boolean`

定義: [packages/board/src/boardify/index.ts:1068](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1068)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **clampRotation**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:1072](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1072)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

***

### clampTranslation

#### 署名を取得する

> **get** **clampTranslation**(): `boolean`

定義: [packages/board/src/boardify/index.ts:1052](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1052)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **clampTranslation**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:1056](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1056)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

***

### clampZoom

#### 署名を取得する

> **get** **clampZoom**(): `boolean`

定義: [packages/board/src/boardify/index.ts:1060](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1060)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **clampZoom**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:1064](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1064)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

***

### context

#### 署名を取得する

> **get** **context**(): `CanvasRenderingContext2D` \| `undefined`

定義: [packages/board/src/boardify/index.ts:585](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L585)

##### Description

The context used to draw on the canvas.
If alignCoordinateSystem is false, this returns a proxy that automatically negates y-coordinates for relevant drawing methods.

##### 戻り値

`CanvasRenderingContext2D` \| `undefined`

***

### fullScreen

#### 署名を取得する

> **get** **fullScreen**(): `boolean`

定義: [packages/board/src/boardify/index.ts:569](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L569)

##### Description

Determines if the board should be full screen. If this is set to true, the width and height of the board will be set to the window's inner width and inner height respectively,
and the width and height of the board will resize with the window.

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **fullScreen**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:573](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L573)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

***

### height

#### 署名を取得する

> **get** **height**(): `number`

定義: [packages/board/src/boardify/index.ts:546](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L546)

##### 戻り値

`number`

***

### inputMode

#### 署名を取得する

> **get** **inputMode**(): `"kmt"` \| `"trackpad"` \| `"TBD"`

定義: [packages/board/src/boardify/index.ts:1107](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1107)

The current input modality.

##### 戻り値

`"kmt"` \| `"trackpad"` \| `"TBD"`

`'kmt'` (keyboard-mouse, the default), `'trackpad'`, or `'TBD'`
when auto-detection was turned on with [enableAutoInputMode](#enableautoinputmode) and has
not yet committed to a mode.

***

### inputOrchestrator

#### 署名を取得する

> **get** **inputOrchestrator**(): [`InputOrchestrator`](InputOrchestrator.md)

定義: [packages/board/src/boardify/index.ts:521](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L521)

##### 戻り値

[`InputOrchestrator`](InputOrchestrator.md)

***

### kmtInputStateMachine

#### 署名を取得する

> **get** **kmtInputStateMachine**(): [`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md) \| `undefined`

定義: [packages/board/src/boardify/index.ts:651](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L651)

The keyboard/mouse/trackpad input state machine currently driving the
board, read from the active parser so it stays correct after a
[kmtParser](#kmtparser) swap.

##### Remarks

Intended for tooling/introspection — a visualizer reading
`currentState` and `context`, for instance. Drive the board through
real input or through the parser, not by dispatching here, and never
call `wrapup()` on it: that parks the machine in `TERMINAL` and the
board stops responding to all input.

`KMTEventParser.stateMachine` is only typed for the minimal
`{ happens }` contract the parser itself needs, so a custom parser can
install a `stateMachine` that satisfies that contract without being a
real `being` state machine. This getter structurally checks for the
`being` `StateMachine` surface and returns `undefined` rather than
handing back something that doesn't actually have `currentState` or
`onStateChange`.

##### 戻り値

[`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md) \| `undefined`

The machine, or `undefined` when a custom parser does not
expose one.

***

### kmtParser

#### 署名を取得する

> **get** **kmtParser**(): [`KMTEventParser`](../interfaces/KMTEventParser.md)

定義: [packages/board/src/boardify/index.ts:624](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L624)

##### 戻り値

[`KMTEventParser`](../interfaces/KMTEventParser.md)

#### 署名を設定する

> **set** **kmtParser**(`parser`): `void`

定義: [packages/board/src/boardify/index.ts:614](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L614)

##### Description

The strategy used to handle the keyboard, mouse events. The default strategy is the DefaultBoardKMTStrategy.
You can implement your own strategy by implementing the BoardKMTStrategy interface.

##### パラメータ

###### parser

[`KMTEventParser`](../interfaces/KMTEventParser.md)

##### 戻り値

`void`

***

### limitEntireViewPort

#### 署名を取得する

> **get** **limitEntireViewPort**(): `boolean`

定義: [packages/board/src/boardify/index.ts:606](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L606)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **limitEntireViewPort**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:596](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L596)

##### Description

Determines the behavior of the camera when the camera is at the edge of the boundaries. If set to true, the entire view port would not move beyond the boundaries.
If set to false, only the center of the camera is bounded by the boundaries.

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

***

### maxHalfTransHeight

#### 署名を取得する

> **get** **maxHalfTransHeight**(): `number` \| `undefined`

定義: [packages/board/src/boardify/index.ts:903](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L903)

##### Description

The max translation height of the camera. This is the maximum distance the camera can move in the vertical direction.

##### 戻り値

`number` \| `undefined`

***

### maxHalfTransWidth

#### 署名を取得する

> **get** **maxHalfTransWidth**(): `number` \| `undefined`

定義: [packages/board/src/boardify/index.ts:910](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L910)

##### Description

The max translation width of the camera. This is the maximum distance the camera can move in the horizontal direction.

##### 戻り値

`number` \| `undefined`

***

### restrictRelativeXTranslation

#### 署名を取得する

> **get** **restrictRelativeXTranslation**(): `boolean`

定義: [packages/board/src/boardify/index.ts:1004](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1004)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **restrictRelativeXTranslation**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:1020](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1020)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

***

### restrictRelativeYTranslation

#### 署名を取得する

> **get** **restrictRelativeYTranslation**(): `boolean`

定義: [packages/board/src/boardify/index.ts:1008](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1008)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **restrictRelativeYTranslation**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:1024](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1024)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

***

### restrictRotation

#### 署名を取得する

> **get** **restrictRotation**(): `boolean`

定義: [packages/board/src/boardify/index.ts:1044](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1044)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **restrictRotation**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:1048](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1048)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

***

### restrictXTranslation

#### 署名を取得する

> **get** **restrictXTranslation**(): `boolean`

定義: [packages/board/src/boardify/index.ts:1012](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1012)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **restrictXTranslation**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:1028](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1028)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

***

### restrictYTranslation

#### 署名を取得する

> **get** **restrictYTranslation**(): `boolean`

定義: [packages/board/src/boardify/index.ts:1016](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1016)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **restrictYTranslation**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:1032](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1032)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

***

### restrictZoom

#### 署名を取得する

> **get** **restrictZoom**(): `boolean`

定義: [packages/board/src/boardify/index.ts:1036](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1036)

##### 戻り値

`boolean`

#### 署名を設定する

> **set** **restrictZoom**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:1040](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1040)

##### パラメータ

###### value

`boolean`

##### 戻り値

`void`

***

### touchInputStateMachine

#### 署名を取得する

> **get** **touchInputStateMachine**(): [`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md) \| `undefined`

定義: [packages/board/src/boardify/index.ts:699](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L699)

The touch input state machine currently driving the board, read from
the active parser so it stays correct after a [touchParser](#touchparser) swap.

##### Remarks

Intended for tooling/introspection — a visualizer reading
`currentState` and `context`, for instance. Drive the board through
real input or through the parser, not by dispatching here, and never
call `wrapup()` on it: that parks the machine in `TERMINAL` and the
board stops responding to all input.

`TouchEventParser.stateMachine` is typed to the full
`TouchInputStateMachine`, but a custom parser could still install a
value that satisfies that type shape without behaving like a real
`being` state machine at runtime (e.g. across a duck-typed adapter).
This getter applies the same structural check as
[kmtInputStateMachine](#kmtinputstatemachine) and returns `undefined` rather than
handing back something that doesn't actually have `currentState` or
`onStateChange`.

##### 戻り値

[`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md) \| `undefined`

The machine, or `undefined` when a custom parser does not
expose one.

***

### touchParser

#### 署名を取得する

> **get** **touchParser**(): [`TouchEventParser`](../interfaces/TouchEventParser.md)

定義: [packages/board/src/boardify/index.ts:672](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L672)

##### 戻り値

[`TouchEventParser`](../interfaces/TouchEventParser.md)

#### 署名を設定する

> **set** **touchParser**(`parser`): `void`

定義: [packages/board/src/boardify/index.ts:662](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L662)

##### Description

The parser used to handle touch events. The default parser is the DefaultTouchParser.
You can have your own parser by implementing the BoardTouchParser interface.

##### パラメータ

###### parser

[`TouchEventParser`](../interfaces/TouchEventParser.md)

##### 戻り値

`void`

***

### width

#### 署名を取得する

> **get** **width**(): `number`

定義: [packages/board/src/boardify/index.ts:542](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L542)

##### 戻り値

`number`

## メソッド

### convertWindowPoint2WorldCoord()

> **convertWindowPoint2WorldCoord**(`clickPointInWindow`): `Point`

定義: [packages/board/src/boardify/index.ts:855](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L855)

TODO add the option to make the camera position to be at the top left corner of the canvas; or better yet any point in the viewport (within the viewport boundaries)

#### パラメータ

##### clickPointInWindow

`Point`

The point in window coordinates to convert.

#### 戻り値

`Point`

The converted point in world coordinates.

#### Description

Converts a point from window coordinates to world coordinates.

***

### disableEventListeners()

> **disableEventListeners**(): `void`

定義: [packages/board/src/boardify/index.ts:511](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L511)

#### 戻り値

`void`

***

### enableAutoInputMode()

> **enableAutoInputMode**(): `void`

定義: [packages/board/src/boardify/index.ts:1133](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1133)

Opts into auto-detection of the input modality.

The mode becomes `'TBD'`, where a plain scroll pans, until a middle-click
settles it on `'kmt'`. Auto-detection is off by default; prefer letting
the user choose with [setInputMode](#setinputmode).

#### 戻り値

`void`

***

### enableEventListeners()

> **enableEventListeners**(): `void`

定義: [packages/board/src/boardify/index.ts:516](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L516)

#### 戻り値

`void`

***

### getCameraRig()

> **getCameraRig**(): [`CameraRig`](../interfaces/CameraRig.md)

定義: [packages/board/src/boardify/index.ts:1076](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1076)

#### 戻り値

[`CameraRig`](../interfaces/CameraRig.md)

***

### on()

> **on**\<`K`\>(`eventName`, `callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義: [packages/board/src/boardify/index.ts:878](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L878)

#### 型パラメーター

##### K

`K` *extends* keyof [`CameraEventMap`](../type-aliases/CameraEventMap.md)

#### パラメータ

##### eventName

`K`

The event name to listen for. The events are "pan", "zoom", and "rotate".

##### callback

(`event`, `cameraState`) => `void`

The callback function to call when the event is triggered. The event provided to the callback is different for the different events.

#### 戻り値

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

The converted point in world coordinates.

#### Description

Add an camera movement event listener. The events are "pan", "zoom", and "rotate".
There's also an "all" event that will be triggered when any of the above events are triggered.

***

### onCanvasDimensionChange()

> **onCanvasDimensionChange**(`callback`): () => `void`

定義: [packages/board/src/boardify/index.ts:1137](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1137)

#### パラメータ

##### callback

(`dimensions`) => `void`

#### 戻り値

> (): `void`

##### 戻り値

`void`

***

### onInput()

> **onInput**\<`K`\>(`eventName`, `callback`): [`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

定義: [packages/board/src/boardify/index.ts:893](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L893)

#### 型パラメーター

##### K

`K` *extends* keyof [`RawUserInputEventMap`](../type-aliases/RawUserInputEventMap.md)

#### パラメータ

##### eventName

`K`

##### callback

(`event`) => `void`

#### 戻り値

[`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

#### Description

Add an input event listener. The events are "pan", "zoom", and "rotate". This is different from the camera event listener as this is for input events.
There's also an "all" event that will be triggered when any of the above events are triggered.
Input event does not necesarily mean that the camera will move. The input events are the events triggered when the user interacts with the board.

***

### setInputMode()

> **setInputMode**(`mode`): `void`

定義: [packages/board/src/boardify/index.ts:1096](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1096)

Sets the input device the board is set up for and turns auto-detection off.

#### パラメータ

##### mode

[`KmtInputMode`](../type-aliases/KmtInputMode.md)

`'kmt'` or `'trackpad'`

#### 戻り値

`void`

#### Remarks

Boards start in `'kmt'` (keyboard + mouse: a plain scroll wheel zooms). In
`'trackpad'` a two-finger swipe pans and a pinch zooms. Give users a way to
choose (and remember their choice) rather than guessing from their input.

#### 例

```typescript
const board = new Board(canvas);
board.setInputMode('trackpad');
```

***

### setTouchInputStateMachine()

> **setTouchInputStateMachine**\<`Machine`\>(`createMachine`): `Machine`

定義: [packages/board/src/boardify/index.ts:741](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L741)

Swaps the state machine that turns touch input into camera moves.

#### 型パラメーター

##### Machine

`Machine` *extends* [`StateMachine`](../interfaces/StateMachine.md)

#### パラメータ

##### createMachine

(`context`) => `Machine`

Builds the machine from the board's own touch
context, e.g. [createOneFingerPanTouchInputStateMachine](../functions/createOneFingerPanTouchInputStateMachine.md),
[createTouchInputStateMachine](../functions/createTouchInputStateMachine.md), or your own function wrapping an
`expand...` helper

#### 戻り値

`Machine`

The machine `createMachine` built, with its real type

#### Remarks

The board installs a new [VanillaTouchEventParser](VanillaTouchEventParser.md) driving the
machine, through the [touchParser](#touchparser) setter. A disabled touch
parser stays disabled. Because the machine shares the board's touch
context, [alignCoordinateSystem](#aligncoordinatesystem) keeps applying to it.

[touchParser](#touchparser) and [touchInputStateMachine](#touchinputstatemachine) return the new
machine afterwards, but keep their stock type; use the return value
when you need the machine's real type.

To use a custom parser instead, build it with the machine and assign it
to [touchParser](#touchparser).

#### Examples

One finger pans, two fingers pinch-zoom:
```typescript
const board = new Board(canvas);
board.setTouchInputStateMachine(createOneFingerPanTouchInputStateMachine);
```

Back to the default, where only two-finger gestures move the camera:
```typescript
board.setTouchInputStateMachine(createTouchInputStateMachine);
```

***

### step()

> **step**(`timestamp`): `void`

定義: [packages/board/src/boardify/index.ts:792](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L792)

#### パラメータ

##### timestamp

`number`

#### 戻り値

`void`

#### Description

This is the step function that is called in the animation frame. This function is responsible for updating the canvas context and the camera state.

***

### toggleInputMode()

> **toggleInputMode**(): `void`

定義: [packages/board/src/boardify/index.ts:1122](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L1122)

Flips the input mode between keyboard-mouse and trackpad and locks it,
disabling auto-detection.

From `'kmt'` this switches to `'trackpad'`; from `'trackpad'` or `'TBD'`
it switches to `'kmt'`. (`'TBD'` already behaves like trackpad, so the
natural "other" mode to toggle into is `'kmt'`.)

#### 戻り値

`void`

#### 参照

[setInputMode](#setinputmode) to set a specific mode, and
[enableAutoInputMode](#enableautoinputmode) to return to auto-detection.

## Helper Methods

### setMaxTransWidthWithFixedMaxBoundary()

> **setMaxTransWidthWithFixedMaxBoundary**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:973](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L973)

#### パラメータ

##### value

`number`

#### 戻り値

`void`

#### Description

This function sets the max translation width of the camera while fixing the minimum x boundary.

***

### setMaxTransWidthWithFixedMinBoundary()

> **setMaxTransWidthWithFixedMinBoundary**(`value`): `void`

定義: [packages/board/src/boardify/index.ts:938](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L938)

#### パラメータ

##### value

`number`

#### 戻り値

`void`

#### Description

This function sets the max translation width of the camera while fixing the minimum x boundary.

## LifeCycle

### コンストラクター

> **new Board**(`canvas?`, `debug?`): `Board`

定義: [packages/board/src/boardify/index.ts:340](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L340)

Creates a new Board instance with an optional canvas element.

The constructor initializes all subsystems including the camera, input parsers, state machines,
and event publishers. The board can be created with or without a canvas element - if no canvas
is provided, you can attach one later using [attach](#attach).

#### パラメータ

##### canvas?

`HTMLCanvasElement`

Optional HTMLCanvasElement to attach to the board. If provided, the board will
  immediately initialize with this canvas. If omitted, you must call [attach](#attach) before the
  board can be used.

##### debug?

`boolean` = `false`

Optional debug flag that enables `willReadFrequently` hint on the canvas context,
  which optimizes the canvas for frequent readback operations. Default is `false`. Only use this
  if you need to frequently read pixel data from the canvas.

#### 戻り値

`Board`

#### Remarks

## Initialization Sequence

When the constructor is called, it performs the following initialization:

1. **Camera Setup**: Creates a [DefaultBoardCamera](DefaultBoardCamera.md) with default boundaries of ±50,000 units
   in both X and Y directions. This provides a large working area for most use cases.

2. **Canvas Proxy**: Initializes a [CanvasProxy](CanvasProxy.md) that observes canvas dimension changes and
   automatically updates the camera's viewport dimensions.

3. **Camera Rig**: Creates a [CameraRig](../interfaces/CameraRig.md) with default configuration:
   - `limitEntireViewPort: true` - Entire viewport is constrained within boundaries
   - `clampTranslation: true` - Camera position is clamped to boundaries
   - `clampZoom: true` - Zoom level is clamped to min/max limits
   - All translation restrictions are disabled by default

4. **Input System**: Initializes both keyboard/mouse/trackpad (KMT) and touch input parsers,
   state machines, and the input orchestrator that coordinates camera control.

5. **Canvas Attachment** (if canvas provided): If a canvas element is provided, it's immediately
   attached and the viewport dimensions are synchronized with the canvas size.

## Default Configuration

The board is created with sensible defaults:
- World boundaries: (-50000, -50000) to (50000, 50000)
- Coordinate system: Aligned with HTML canvas (Y-axis points down)
- Camera position: (0, 0)
- Zoom level: 1.0
- Rotation: 0 radians
- Full screen: disabled

You can customize these defaults after construction by setting properties on the board or camera.

#### Examples

Create board with canvas element
```typescript
const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const board = new Board(canvas);
// Board is ready to use immediately
```

Create board without canvas, attach later
```typescript
const board = new Board();
// ... later, when canvas is ready
const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
board.attach(canvas);
```

Enable debug mode for pixel readback
```typescript
const board = new Board(canvas, true);
// Now getImageData() and similar operations will be optimized
```

#### 参照

 - [attach](#attach) for attaching a canvas after construction
 - [tearDown](#teardown) for cleanup when done with the board

***

### attach()

> **attach**(`canvas`, `debug`): `void`

定義: [packages/board/src/boardify/index.ts:490](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L490)

Attaches a canvas element to the board, enabling rendering and input handling.

This method connects a canvas element to the board's rendering and input systems. It must be
called before the board can be used if no canvas was provided to the constructor. If a canvas
was already attached, this method will replace it with the new canvas.

#### パラメータ

##### canvas

`HTMLCanvasElement`

The HTMLCanvasElement to attach to the board. This canvas will be used for
  rendering and will receive all input events.

##### debug

`boolean` = `false`

Optional debug flag that enables `willReadFrequently` hint on the canvas context.
  Default is `false`. Set to `true` if you need to frequently read pixel data from the canvas,
  which will optimize the context for readback operations.

#### 戻り値

`void`

#### Remarks

When a canvas is attached, the following happens:

1. **Context Creation**: A 2D rendering context is obtained from the canvas with the specified
   debug settings.

2. **Input Parser Attachment**: Both KMT (keyboard/mouse/trackpad) and touch input parsers are
   attached to the canvas to begin receiving input events.

3. **Canvas Proxy Attachment**: The canvas proxy begins observing the canvas for dimension changes,
   automatically updating the camera's viewport dimensions when the canvas is resized.

4. **Zoom Level Synchronization**: If [limitEntireViewPort](#limitentireviewport) is enabled, the minimum zoom
   level is calculated and set to ensure the entire viewport can fit within the camera boundaries.

5. **Coordinate System Setup**: Both standard and Y-reversed rendering contexts are created to
   support both coordinate system modes (see [alignCoordinateSystem](#aligncoordinatesystem)).

#### Examples

Attach canvas during construction
```typescript
const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const board = new Board(canvas);
// No need to call attach() - already attached
```

Attach canvas after construction
```typescript
const board = new Board();

// Later, when canvas is ready...
const canvas = document.createElement('canvas');
canvas.width = 800;
canvas.height = 600;
document.body.appendChild(canvas);

board.attach(canvas);
// Board is now ready to use
```

Switch to a different canvas
```typescript
const board = new Board(canvas1);

// Later, switch to a different canvas
const canvas2 = document.querySelector('#other-canvas') as HTMLCanvasElement;
board.attach(canvas2);
// Board is now rendering to canvas2
```

#### 参照

 - [tearDown](#teardown) for detaching and cleaning up
 - [context](#context) for accessing the rendering context

***

### tearDown()

> **tearDown**(): `void`

定義: [packages/board/src/boardify/index.ts:529](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/boardify/index.ts#L529)

#### 戻り値

`void`

#### Description

This function is used to clean up the board. It removes all the event listeners and disconnects the resize observer and the attribute observer.
