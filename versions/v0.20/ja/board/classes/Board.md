[@ue-too/board](../globals.md) / Board

# Class: Board

Defined in: [packages/board/src/boardify/index.ts:199](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L199)

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

Defined in: [packages/board/src/boardify/index.ts:525](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L525)

##### Returns

`boolean`

#### Set Signature

> **set** **alignCoordinateSystem**(`align`): `void`

Defined in: [packages/board/src/boardify/index.ts:519](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L519)

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

Defined in: [packages/board/src/boardify/index.ts:614](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L614)

##### Description

The underlying camera of the board. The camera of the board can be switched.
The boundaries are based on camera meaning you can have cameras with different boundaries, and you can switch between them during runtime.

##### Returns

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

#### Set Signature

> **set** **camera**(`camera`): `void`

Defined in: [packages/board/src/boardify/index.ts:618](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L618)

##### Parameters

###### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

##### Returns

`void`

***

### cameraMux

#### Get Signature

> **get** **cameraMux**(): [`CameraMux`](../interfaces/CameraMux.md)

Defined in: [packages/board/src/boardify/index.ts:628](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L628)

##### Returns

[`CameraMux`](../interfaces/CameraMux.md)

#### Set Signature

> **set** **cameraMux**(`cameraMux`): `void`

Defined in: [packages/board/src/boardify/index.ts:632](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L632)

##### Parameters

###### cameraMux

[`CameraMux`](../interfaces/CameraMux.md)

##### Returns

`void`

***

### canvasDimensions

#### Get Signature

> **get** **canvasDimensions**(): [`CanvasDimensions`](../type-aliases/CanvasDimensions.md)

Defined in: [packages/board/src/boardify/index.ts:941](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L941)

##### Returns

[`CanvasDimensions`](../type-aliases/CanvasDimensions.md)

***

### clampRotation

#### Get Signature

> **get** **clampRotation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:921](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L921)

##### Returns

`boolean`

#### Set Signature

> **set** **clampRotation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:925](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L925)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### clampTranslation

#### Get Signature

> **get** **clampTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:905](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L905)

##### Returns

`boolean`

#### Set Signature

> **set** **clampTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:909](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L909)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### clampZoom

#### Get Signature

> **get** **clampZoom**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:913](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L913)

##### Returns

`boolean`

#### Set Signature

> **set** **clampZoom**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:917](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L917)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### context

#### Get Signature

> **get** **context**(): `CanvasRenderingContext2D` \| `undefined`

Defined in: [packages/board/src/boardify/index.ts:549](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L549)

##### Description

The context used to draw on the canvas.
If alignCoordinateSystem is false, this returns a proxy that automatically negates y-coordinates for relevant drawing methods.

##### Returns

`CanvasRenderingContext2D` \| `undefined`

***

### fullScreen

#### Get Signature

> **get** **fullScreen**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:533](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L533)

##### Description

Determines if the board should be full screen. If this is set to true, the width and height of the board will be set to the window's inner width and inner height respectively,
and the width and height of the board will resize with the window.

##### Returns

`boolean`

#### Set Signature

> **set** **fullScreen**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:537](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L537)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### height

#### Get Signature

> **get** **height**(): `number`

Defined in: [packages/board/src/boardify/index.ts:510](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L510)

##### Returns

`number`

***

### inputOrchestrator

#### Get Signature

> **get** **inputOrchestrator**(): [`InputOrchestrator`](InputOrchestrator.md)

Defined in: [packages/board/src/boardify/index.ts:485](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L485)

##### Returns

[`InputOrchestrator`](InputOrchestrator.md)

***

### kmtParser

#### Get Signature

> **get** **kmtParser**(): [`KMTEventParser`](../interfaces/KMTEventParser.md)

Defined in: [packages/board/src/boardify/index.ts:588](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L588)

##### Returns

[`KMTEventParser`](../interfaces/KMTEventParser.md)

#### Set Signature

> **set** **kmtParser**(`parser`): `void`

Defined in: [packages/board/src/boardify/index.ts:578](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L578)

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

Defined in: [packages/board/src/boardify/index.ts:570](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L570)

##### Returns

`boolean`

#### Set Signature

> **set** **limitEntireViewPort**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:560](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L560)

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

Defined in: [packages/board/src/boardify/index.ts:756](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L756)

##### Description

The max translation height of the camera. This is the maximum distance the camera can move in the vertical direction.

##### Returns

`number` \| `undefined`

***

### maxHalfTransWidth

#### Get Signature

> **get** **maxHalfTransWidth**(): `number` \| `undefined`

Defined in: [packages/board/src/boardify/index.ts:763](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L763)

##### Description

The max translation width of the camera. This is the maximum distance the camera can move in the horizontal direction.

##### Returns

`number` \| `undefined`

***

### restrictRelativeXTranslation

#### Get Signature

> **get** **restrictRelativeXTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:857](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L857)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictRelativeXTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:873](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L873)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictRelativeYTranslation

#### Get Signature

> **get** **restrictRelativeYTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:861](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L861)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictRelativeYTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:877](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L877)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictRotation

#### Get Signature

> **get** **restrictRotation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:897](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L897)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictRotation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:901](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L901)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictXTranslation

#### Get Signature

> **get** **restrictXTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:865](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L865)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictXTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:881](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L881)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictYTranslation

#### Get Signature

> **get** **restrictYTranslation**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:869](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L869)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictYTranslation**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:885](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L885)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### restrictZoom

#### Get Signature

> **get** **restrictZoom**(): `boolean`

Defined in: [packages/board/src/boardify/index.ts:889](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L889)

##### Returns

`boolean`

#### Set Signature

> **set** **restrictZoom**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:893](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L893)

##### Parameters

###### value

`boolean`

##### Returns

`void`

***

### touchParser

#### Get Signature

> **get** **touchParser**(): [`TouchEventParser`](../interfaces/TouchEventParser.md)

Defined in: [packages/board/src/boardify/index.ts:606](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L606)

##### Returns

[`TouchEventParser`](../interfaces/TouchEventParser.md)

#### Set Signature

> **set** **touchParser**(`parser`): `void`

Defined in: [packages/board/src/boardify/index.ts:596](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L596)

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

Defined in: [packages/board/src/boardify/index.ts:506](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L506)

##### Returns

`number`

## Methods

### convertWindowPoint2WorldCoord()

> **convertWindowPoint2WorldCoord**(`clickPointInWindow`): `Point`

Defined in: [packages/board/src/boardify/index.ts:708](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L708)

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

Defined in: [packages/board/src/boardify/index.ts:475](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L475)

#### Returns

`void`

***

### enableEventListeners()

> **enableEventListeners**(): `void`

Defined in: [packages/board/src/boardify/index.ts:480](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L480)

#### Returns

`void`

***

### getCameraRig()

> **getCameraRig**(): [`CameraRig`](../interfaces/CameraRig.md)

Defined in: [packages/board/src/boardify/index.ts:929](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L929)

#### Returns

[`CameraRig`](../interfaces/CameraRig.md)

***

### on()

> **on**\<`K`\>(`eventName`, `callback`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [packages/board/src/boardify/index.ts:731](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L731)

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

Defined in: [packages/board/src/boardify/index.ts:937](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L937)

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

Defined in: [packages/board/src/boardify/index.ts:746](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L746)

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

Defined in: [packages/board/src/boardify/index.ts:933](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L933)

#### Parameters

##### mode

`"kmt"` | `"trackpad"`

#### Returns

`void`

***

### step()

> **step**(`timestamp`): `void`

Defined in: [packages/board/src/boardify/index.ts:645](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L645)

#### Parameters

##### timestamp

`number`

#### Returns

`void`

#### Description

This is the step function that is called in the animation frame. This function is responsible for updating the canvas context and the camera state.

## Helper Methods

### setMaxTransWidthWithFixedMaxBoundary()

> **setMaxTransWidthWithFixedMaxBoundary**(`value`): `void`

Defined in: [packages/board/src/boardify/index.ts:826](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L826)

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

Defined in: [packages/board/src/boardify/index.ts:791](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L791)

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

Defined in: [packages/board/src/boardify/index.ts:303](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L303)

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

Defined in: [packages/board/src/boardify/index.ts:454](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L454)

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

Defined in: [packages/board/src/boardify/index.ts:493](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/boardify/index.ts#L493)

#### Returns

`void`

#### Description

This function is used to clean up the board. It removes all the event listeners and disconnects the resize observer and the attribute observer.
