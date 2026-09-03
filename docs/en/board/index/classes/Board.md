[@ue-too/board](../../modules.md) / [index](../index.md) / Board

# Class: Board

Defined in: [packages/board/src/boardify/index.ts:233](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L233)

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

## See

 - [ObservableBoardCamera](../interfaces/ObservableBoardCamera.md) for camera API details
 - [CameraRig](../interfaces/CameraRig.md) for camera constraint configuration
 - [CameraMux](../interfaces/CameraMux.md) for camera control coordination

## Accessors

### alignCoordinateSystem

#### Get Signature

> **get** **alignCoordinateSystem**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:558](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L558)

##### Returns

`boolean`

#### Set Signature

> **set** **alignCoordinateSystem**(`align`): `void`

Defined in: [packages/board/src/boardify/index.ts:552](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L552)

##### Description

This is an attribute that determines if the coordinate system should be aligned with the one of the HTML canvas element. The default is true.
If you set this to true, the coordinate system will be aligned with the one of the HTML canvas element.
If you change this value during runtime, you should update the context to be aligned with the new coordinate system. (just call board.context again)

##### Parameters

###### align

`boolean`

##### Returns

`void`

***

### camera

#### Get Signature

> **get** **camera**(): [`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

Defined in: [packages/board/src/boardify/index.ts:707](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L707)

##### Description

The underlying camera of the board. The camera of the board can be switched.
The boundaries are based on camera meaning you can have cameras with different boundaries, and you can switch between them during runtime.

##### Returns

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

#### Set Signature

> **set** **camera**(`camera`): `void`

Defined in: [packages/board/src/boardify/index.ts:711](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L711)

##### Parameters

###### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

##### Returns

`void`

***

### cameraMux

#### Get Signature

> **get** **cameraMux**(): [`CameraMux`](../interfaces/CameraMux.md)

Defined in: [packages/board/src/boardify/index.ts:721](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L721)

##### Returns

[`CameraMux`](../interfaces/CameraMux.md)

#### Set Signature

> **set** **cameraMux**(`cameraMux`): `void`

Defined in: [packages/board/src/boardify/index.ts:725](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L725)

##### Parameters

###### cameraMux

[`CameraMux`](../interfaces/CameraMux.md)

##### Returns

`void`

***

### canvasDimensions

#### Get Signature

> **get** **canvasDimensions**(): [`CanvasDimensions`](../type-aliases/CanvasDimensions.md)

Defined in: [packages/board/src/boardify/index.ts:1069](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L1069)

##### Returns

[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)

***

### clampRotation

#### Get Signature

> **get** **clampRotation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:1014](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L1014)

##### Returns

`boolean`

#### Set Signature

> **set** **clampRotation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:1018](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L1018)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### clampTranslation

#### Get Signature

> **get** **clampTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:998](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L998)

##### Returns

`boolean`

#### Set Signature

> **set** **clampTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:1002](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L1002)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### clampZoom

#### Get Signature

> **get** **clampZoom**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:1006](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L1006)

##### Returns

`boolean`

#### Set Signature

> **set** **clampZoom**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:1010](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L1010)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### context

#### Get Signature

> **get** **context**(): `CanvasRenderingContext2D` \| `undefined`

Defined in: [packages/board/src/boardify/index.ts:582](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L582)

##### Description

The context used to draw on the canvas.
If alignCoordinateSystem is false, this returns a proxy that automatically negates y-coordinates for relevant drawing methods.

##### Returns

`CanvasRenderingContext2D` \| `undefined`

***

### fullScreen

#### Get Signature

> **get** **fullScreen**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:566](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L566)

##### Description

Determines if the board should be full screen. If this is set to true, the width and height of the board will be set to the window's inner width and inner height respectively,
and the width and height of the board will resize with the window.

##### Returns

`boolean`

#### Set Signature

> **set** **fullScreen**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:570](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L570)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [packages/board/src/boardify/index.ts:543](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L543)

##### Returns

`number`

***

### inputMode

#### Get Signature

> **get** **inputMode**(): `"kmt"` \| `"trackpad"` \| `"TBD"`

Defined in: [packages/board/src/boardify/index.ts:1036](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L1036)

The current input modality.

##### Returns

`"kmt"` \| `"trackpad"` \| `"TBD"`

`'kmt'` (keyboard-mouse), `'trackpad'`, or `'TBD'` when
auto-detection is active and has not yet committed to a mode.

***

### inputOrchestrator

#### Get Signature

> **get** **inputOrchestrator**(): [`InputOrchestrator`](InputOrchestrator.md)

Defined in: [packages/board/src/boardify/index.ts:518](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L518)

##### Returns

[`InputOrchestrator`](InputOrchestrator.md)

***

### kmtInputStateMachine

#### Get Signature

> **get** **kmtInputStateMachine**(): [`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md) \| `undefined`

Defined in: [packages/board/src/boardify/index.ts:648](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L648)

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

##### Returns

[`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md) \| `undefined`

The machine, or `undefined` when a custom parser does not
expose one.

***

### kmtParser

#### Get Signature

> **get** **kmtParser**(): [`KMTEventParser`](../interfaces/KMTEventParser.md)

Defined in: [packages/board/src/boardify/index.ts:621](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L621)

##### Returns

[`KMTEventParser`](../interfaces/KMTEventParser.md)

#### Set Signature

> **set** **kmtParser**(`parser`): `void`

Defined in: [packages/board/src/boardify/index.ts:611](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L611)

##### Description

The strategy used to handle the keyboard, mouse events. The default strategy is the DefaultBoardKMTStrategy.
You can implement your own strategy by implementing the BoardKMTStrategy interface.

##### Parameters

###### parser

[`KMTEventParser`](../interfaces/KMTEventParser.md)

##### Returns

`void`

***

### limitEntireViewPort

#### Get Signature

> **get** **limitEntireViewPort**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:603](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L603)

##### Returns

`boolean`

#### Set Signature

> **set** **limitEntireViewPort**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:593](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L593)

##### Description

Determines the behavior of the camera when the camera is at the edge of the boundaries. If set to true, the entire view port would not move beyond the boundaries.
If set to false, only the center of the camera is bounded by the boundaries.

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### maxHalfTransHeight

#### Get Signature

> **get** **maxHalfTransHeight**(): `number` \| `undefined`

Defined in: [packages/board/src/boardify/index.ts:849](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L849)

##### Description

The max translation height of the camera. This is the maximum distance the camera can move in the vertical direction.

##### Returns

`number` \| `undefined`

***

### maxHalfTransWidth

#### Get Signature

> **get** **maxHalfTransWidth**(): `number` \| `undefined`

Defined in: [packages/board/src/boardify/index.ts:856](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L856)

##### Description

The max translation width of the camera. This is the maximum distance the camera can move in the horizontal direction.

##### Returns

`number` \| `undefined`

***

### restrictRelativeXTranslation

#### Get Signature

> **get** **restrictRelativeXTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:950](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L950)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictRelativeXTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:966](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L966)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictRelativeYTranslation

#### Get Signature

> **get** **restrictRelativeYTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:954](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L954)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictRelativeYTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:970](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L970)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictRotation

#### Get Signature

> **get** **restrictRotation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:990](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L990)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictRotation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:994](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L994)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictXTranslation

#### Get Signature

> **get** **restrictXTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:958](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L958)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictXTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:974](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L974)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictYTranslation

#### Get Signature

> **get** **restrictYTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:962](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L962)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictYTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:978](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L978)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictZoom

#### Get Signature

> **get** **restrictZoom**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:982](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L982)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictZoom**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:986](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L986)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### touchInputStateMachine

#### Get Signature

> **get** **touchInputStateMachine**(): [`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md) \| `undefined`

Defined in: [packages/board/src/boardify/index.ts:696](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L696)

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

##### Returns

[`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md) \| `undefined`

The machine, or `undefined` when a custom parser does not
expose one.

***

### touchParser

#### Get Signature

> **get** **touchParser**(): [`TouchEventParser`](../interfaces/TouchEventParser.md)

Defined in: [packages/board/src/boardify/index.ts:669](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L669)

##### Returns

[`TouchEventParser`](../interfaces/TouchEventParser.md)

#### Set Signature

> **set** **touchParser**(`parser`): `void`

Defined in: [packages/board/src/boardify/index.ts:659](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L659)

##### Description

The parser used to handle touch events. The default parser is the DefaultTouchParser.
You can have your own parser by implementing the BoardTouchParser interface.

##### Parameters

###### parser

[`TouchEventParser`](../interfaces/TouchEventParser.md)

##### Returns

`void`

***

### width

#### Get Signature

> **get** **width**(): `number`

Defined in: [packages/board/src/boardify/index.ts:539](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L539)

##### Returns

`number`

## Methods

### convertWindowPoint2WorldCoord()

> **convertWindowPoint2WorldCoord**(`clickPointInWindow`): `Point`

Defined in: [packages/board/src/boardify/index.ts:801](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L801)

TODO add the option to make the camera position to be at the top left corner of the canvas; or better yet any point in the viewport (within the viewport boundaries)

#### Parameters

##### clickPointInWindow

`Point`

The point in window coordinates to convert.

#### Returns

`Point`

The converted point in world coordinates.

#### Description

Converts a point from window coordinates to world coordinates.

***

### disableEventListeners()

> **disableEventListeners**(): `void`

Defined in: [packages/board/src/boardify/index.ts:508](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L508)

#### Returns

`void`

***

### enableAutoInputMode()

> **enableAutoInputMode**(): `void`

Defined in: [packages/board/src/boardify/index.ts:1061](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L1061)

Returns the board to auto-detection of input modality after a manual lock
set via [setInputMode](#setinputmode) or [toggleInputMode](#toggleinputmode).

The mode reverts to `'TBD'` until auto-detection commits to a mode.

#### Returns

`void`

***

### enableEventListeners()

> **enableEventListeners**(): `void`

Defined in: [packages/board/src/boardify/index.ts:513](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L513)

#### Returns

`void`

***

### getCameraRig()

> **getCameraRig**(): [`CameraRig`](../interfaces/CameraRig.md)

Defined in: [packages/board/src/boardify/index.ts:1022](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L1022)

#### Returns

[`CameraRig`](../interfaces/CameraRig.md)

***

### on()

> **on**\<`K`\>(`eventName`, `callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [packages/board/src/boardify/index.ts:824](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L824)

#### Type Parameters

##### K

`K` *extends* keyof [`CameraEventMap`](../type-aliases/CameraEventMap.md)

#### Parameters

##### eventName

`K`

The event name to listen for. The events are "pan", "zoom", and "rotate".

##### callback

(`event`, `cameraState`) => `void`

The callback function to call when the event is triggered. The event provided to the callback is different for the different events.

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

The converted point in world coordinates.

#### Description

Add an camera movement event listener. The events are "pan", "zoom", and "rotate".
There's also an "all" event that will be triggered when any of the above events are triggered.

***

### onCanvasDimensionChange()

> **onCanvasDimensionChange**(`callback`): () => `void`

Defined in: [packages/board/src/boardify/index.ts:1065](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L1065)

#### Parameters

##### callback

(`dimensions`) => `void`

#### Returns

> (): `void`

##### Returns

`void`

***

### onInput()

> **onInput**\<`K`\>(`eventName`, `callback`): [`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

Defined in: [packages/board/src/boardify/index.ts:839](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L839)

#### Type Parameters

##### K

`K` *extends* keyof [`RawUserInputEventMap`](../type-aliases/RawUserInputEventMap.md)

#### Parameters

##### eventName

`K`

##### callback

(`event`) => `void`

#### Returns

[`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

#### Description

Add an input event listener. The events are "pan", "zoom", and "rotate". This is different from the camera event listener as this is for input events.
There's also an "all" event that will be triggered when any of the above events are triggered.
Input event does not necesarily mean that the camera will move. The input events are the events triggered when the user interacts with the board.

***

### setInputMode()

> **setInputMode**(`mode`): `void`

Defined in: [packages/board/src/boardify/index.ts:1026](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L1026)

#### Parameters

##### mode

`"kmt"` | `"trackpad"`

#### Returns

`void`

***

### step()

> **step**(`timestamp`): `void`

Defined in: [packages/board/src/boardify/index.ts:738](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L738)

#### Parameters

##### timestamp

`number`

#### Returns

`void`

#### Description

This is the step function that is called in the animation frame. This function is responsible for updating the canvas context and the camera state.

***

### toggleInputMode()

> **toggleInputMode**(): `void`

Defined in: [packages/board/src/boardify/index.ts:1051](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L1051)

Flips the input mode between keyboard-mouse and trackpad and locks it,
disabling auto-detection.

From `'kmt'` this switches to `'trackpad'`; from `'trackpad'` or `'TBD'`
it switches to `'kmt'`. (`'TBD'` already behaves like trackpad, so the
natural "other" mode to toggle into is `'kmt'`.)

#### Returns

`void`

#### See

[setInputMode](#setinputmode) to set a specific mode, and
[enableAutoInputMode](#enableautoinputmode) to return to auto-detection.

## Helper Methods

### setMaxTransWidthWithFixedMaxBoundary()

> **setMaxTransWidthWithFixedMaxBoundary**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:919](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L919)

#### Parameters

##### value

`number`

#### Returns

`void`

#### Description

This function sets the max translation width of the camera while fixing the minimum x boundary.

***

### setMaxTransWidthWithFixedMinBoundary()

> **setMaxTransWidthWithFixedMinBoundary**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:884](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L884)

#### Parameters

##### value

`number`

#### Returns

`void`

#### Description

This function sets the max translation width of the camera while fixing the minimum x boundary.

## LifeCycle

### Constructor

> **new Board**(`canvas?`, `debug?`): `Board`

Defined in: [packages/board/src/boardify/index.ts:337](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L337)

Creates a new Board instance with an optional canvas element.

The constructor initializes all subsystems including the camera, input parsers, state machines,
and event publishers. The board can be created with or without a canvas element - if no canvas
is provided, you can attach one later using [attach](#attach).

#### Parameters

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

#### Returns

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

#### See

 - [attach](#attach) for attaching a canvas after construction
 - [tearDown](#teardown) for cleanup when done with the board

***

### attach()

> **attach**(`canvas`, `debug`): `void`

Defined in: [packages/board/src/boardify/index.ts:487](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L487)

Attaches a canvas element to the board, enabling rendering and input handling.

This method connects a canvas element to the board's rendering and input systems. It must be
called before the board can be used if no canvas was provided to the constructor. If a canvas
was already attached, this method will replace it with the new canvas.

#### Parameters

##### canvas

`HTMLCanvasElement`

The HTMLCanvasElement to attach to the board. This canvas will be used for
  rendering and will receive all input events.

##### debug

`boolean` = `false`

Optional debug flag that enables `willReadFrequently` hint on the canvas context.
  Default is `false`. Set to `true` if you need to frequently read pixel data from the canvas,
  which will optimize the context for readback operations.

#### Returns

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

#### See

 - [tearDown](#teardown) for detaching and cleaning up
 - [context](#context) for accessing the rendering context

***

### tearDown()

> **tearDown**(): `void`

Defined in: [packages/board/src/boardify/index.ts:526](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/boardify/index.ts#L526)

#### Returns

`void`

#### Description

This function is used to clean up the board. It removes all the event listeners and disconnects the resize observer and the attribute observer.
