[@ue-too/board](../globals.md) / CameraMuxWithAnimationAndLock

# Class: CameraMuxWithAnimationAndLock

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:79](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L79)

Advanced camera input multiplexer with animation support and input locking via state machines.

## Remarks

This [CameraMux](../interfaces/CameraMux.md) implementation provides sophisticated input flow control using
separate state machines for pan, zoom, and rotation. Each state machine can:
- Block user input during camera animations
- Manage animation playback
- Arbitrate between user input and programmatic camera control
- Handle transitions between different camera control states

**Key features:**
- **Animation system**: Support for smooth camera animations (pan-to, zoom-to, rotate-to)
- **Input locking**: Automatically block user input during animations
- **State-based control**: Each camera operation (pan/zoom/rotate) has its own state machine
- **Flexible transitions**: Initiate transitions to interrupt or chain animations

**Architecture:**
- Three independent state machines: [PanControlStateMachine](PanControlStateMachine.md), [ZoomControlStateMachine](ZoomControlStateMachine.md), [RotateControlStateMachine](RotateControlStateMachine.md)
- Each state machine decides whether to allow or block input based on current state
- State machines receive events and produce output events for camera operations

**When to use:**
- Applications requiring smooth camera animations (e.g., "focus on object", "zoom to region")
- UI where user input should be blocked during programmatic camera movements
- Games or interactive experiences with scripted camera sequences

**Alternatives:**
- Use [Relay](Relay.md) for simple passthrough without animation support
- Implement custom [CameraMux](../interfaces/CameraMux.md) for different state management approaches

## Example

```typescript
const camera = new DefaultBoardCamera();
const mux = createCameraMuxWithAnimationAndLock(camera);

// Start a pan animation - user input will be blocked
mux.notifyPanToAnimationInput({ x: 1000, y: 500 });

// User tries to pan during animation - will be blocked
const result = mux.notifyPanInput({ x: 50, y: 30 });
// result.allowPassThrough = false (blocked during animation)

// After animation completes, user input allowed again
```

## See

 - [CameraMux](../interfaces/CameraMux.md) for the interface definition
 - [Relay](Relay.md) for simpler passthrough implementation
 - [createCameraMuxWithAnimationAndLock](../functions/createCameraMuxWithAnimationAndLock.md) for factory function

## Implements

- [`CameraMux`](../interfaces/CameraMux.md)

## Constructors

### Constructor

> **new CameraMuxWithAnimationAndLock**(`panStateMachine`, `zoomStateMachine`, `rotateStateMachine`): `CameraMuxWithAnimationAndLock`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:95](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L95)

Creates a new camera mux with animation and locking capabilities.

#### Parameters

##### panStateMachine

[`PanControlStateMachine`](PanControlStateMachine.md)

State machine controlling pan operations and animations

##### zoomStateMachine

[`ZoomControlStateMachine`](ZoomControlStateMachine.md)

State machine controlling zoom operations and animations

##### rotateStateMachine

[`RotateControlStateMachine`](RotateControlStateMachine.md)

State machine controlling rotation operations and animations

#### Returns

`CameraMuxWithAnimationAndLock`

#### Remarks

Typically created via factory functions like [createCameraMuxWithAnimationAndLock](../functions/createCameraMuxWithAnimationAndLock.md)
rather than direct instantiation.

## Accessors

### panStateMachine

#### Get Signature

> **get** **panStateMachine**(): [`PanControlStateMachine`](PanControlStateMachine.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:373](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L373)

Gets the pan state machine.

##### Remarks

Provides direct access to the pan state machine for advanced control
or state inspection.

##### Returns

[`PanControlStateMachine`](PanControlStateMachine.md)

The pan state machine instance

***

### rotateStateMachine

#### Get Signature

> **get** **rotateStateMachine**(): [`RotateControlStateMachine`](RotateControlStateMachine.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:360](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L360)

Gets the rotation state machine.

##### Remarks

Provides direct access to the rotation state machine for advanced control
or state inspection.

##### Returns

[`RotateControlStateMachine`](RotateControlStateMachine.md)

The rotation state machine instance

***

### zoomStateMachine

#### Get Signature

> **get** **zoomStateMachine**(): [`ZoomControlStateMachine`](ZoomControlStateMachine.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:386](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L386)

Gets the zoom state machine.

##### Remarks

Provides direct access to the zoom state machine for advanced control
or state inspection.

##### Returns

[`ZoomControlStateMachine`](ZoomControlStateMachine.md)

The zoom state machine instance

## Methods

### initatePanTransition()

> **initatePanTransition**(): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:325](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L325)

Initiates a transition in the pan state machine.

#### Returns

`void`

#### Remarks

This method forces the pan state machine to transition to its next state.
Can be used to interrupt animations or force state changes.

***

### initateRotateTransition()

> **initateRotateTransition**(): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:347](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L347)

Initiates a transition in the rotation state machine.

#### Returns

`void`

#### Remarks

This method forces the rotation state machine to transition to its next state.
Can be used to interrupt animations or force state changes.

***

### initateZoomTransition()

> **initateZoomTransition**(): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:336](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L336)

Initiates a transition in the zoom state machine.

#### Returns

`void`

#### Remarks

This method forces the zoom state machine to transition to its next state.
Can be used to interrupt animations or force state changes.

***

### notifyPanInput()

> **notifyPanInput**(`delta`): [`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:167](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L167)

Processes user pan input (implements [CameraMux](../interfaces/CameraMux.md)).

#### Parameters

##### delta

`Point`

Pan delta in viewport coordinates

#### Returns

[`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

Output indicating whether pan is allowed

#### Remarks

This method is called when the user attempts to pan the camera (e.g., mouse drag).
The pan state machine determines whether to allow the input based on current state:
- **Allowed**: When in idle state or user control state
- **Blocked**: When camera animation is playing

#### Example

```typescript
// User drags mouse
const result = mux.notifyPanInput({ x: 50, y: 30 });
if (result.allowPassThrough) {
  // Apply pan to camera
  cameraRig.panByViewPort(result.delta);
}
```

#### Implementation of

[`CameraMux`](../interfaces/CameraMux.md).[`notifyPanInput`](../interfaces/CameraMux.md#notifypaninput)

***

### notifyPanToAnimationInput()

> **notifyPanToAnimationInput**(`target`): [`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:126](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L126)

Initiates a pan animation to a target position.

#### Parameters

##### target

`Point`

Target position in world coordinates

#### Returns

[`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

Pan output indicating whether animation was initiated

#### Remarks

This method starts a camera pan animation to the specified world position.
The state machine handles:
- Starting the animation
- Blocking user input during animation
- Producing incremental pan deltas each frame

The animation continues until the camera reaches the target or is interrupted.

#### Example

```typescript
// Animate camera to world position
mux.notifyPanToAnimationInput({ x: 1000, y: 500 });
```

***

### notifyRotateByInput()

> **notifyRotateByInput**(`delta`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:231](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L231)

Processes user rotation input (rotate-by variant).

#### Parameters

##### delta

`number`

Rotation delta in radians

#### Returns

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Output from rotation state machine

#### Remarks

Delegates to the rotation state machine's rotate-by handler.
The state machine determines whether to allow rotation based on current state.

***

### notifyRotateToAnimationInput()

> **notifyRotateToAnimationInput**(`target`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:245](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L245)

Initiates a rotation animation to a target angle.

#### Parameters

##### target

`number`

Target rotation angle in radians

#### Returns

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Output from rotation state machine

#### Remarks

Starts a camera rotation animation to the specified angle.
User input will be blocked during the animation.

***

### notifyRotationInput()

> **notifyRotationInput**(`delta`): [`CameraMuxRotationOutput`](../type-aliases/CameraMuxRotationOutput.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:305](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L305)

Processes user rotation input (implements [CameraMux](../interfaces/CameraMux.md)).

#### Parameters

##### delta

`number`

Rotation delta in radians

#### Returns

[`CameraMuxRotationOutput`](../type-aliases/CameraMuxRotationOutput.md)

Output indicating whether rotation is allowed

#### Remarks

This method is called when the user attempts to rotate the camera.
The rotation state machine determines whether to allow the input based on current state:
- **Allowed**: When in idle state or user control state
- **Blocked**: When rotation animation is playing

#### Example

```typescript
// User rotates camera
const result = mux.notifyRotationInput(0.1);
if (result.allowPassThrough) {
  cameraRig.rotateBy(result.delta);
}
```

#### Implementation of

[`CameraMux`](../interfaces/CameraMux.md).[`notifyRotationInput`](../interfaces/CameraMux.md#notifyrotationinput)

***

### notifyZoomInput()

> **notifyZoomInput**(`delta`, `at`): [`CameraMuxZoomOutput`](../type-aliases/CameraMuxZoomOutput.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:203](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L203)

Processes user zoom input (implements [CameraMux](../interfaces/CameraMux.md)).

#### Parameters

##### delta

`number`

Zoom delta (change in zoom level)

##### at

`Point`

Anchor point in viewport coordinates

#### Returns

[`CameraMuxZoomOutput`](../type-aliases/CameraMuxZoomOutput.md)

Output indicating whether zoom is allowed

#### Remarks

This method is called when the user attempts to zoom (e.g., mouse wheel).
The zoom state machine determines whether to allow the input based on current state:
- **Allowed**: When in idle state or user control state
- **Blocked**: When zoom animation is playing

#### Example

```typescript
// User scrolls mouse wheel
const result = mux.notifyZoomInput(0.1, mousePosition);
if (result.allowPassThrough) {
  // Apply zoom to camera
  cameraRig.zoomByAt(result.delta, result.anchorPoint);
}
```

#### Implementation of

[`CameraMux`](../interfaces/CameraMux.md).[`notifyZoomInput`](../interfaces/CameraMux.md#notifyzoominput)

***

### notifyZoomInputAnimation()

> **notifyZoomInputAnimation**(`targetZoom`, `at`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:260](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L260)

Initiates a zoom animation to a target level at a viewport position.

#### Parameters

##### targetZoom

`number`

Target zoom level

##### at

`Point` = `...`

Anchor point in viewport coordinates (defaults to origin)

#### Returns

`void`

#### Remarks

Starts a zoom animation that zooms to the specified level while keeping
the anchor point stationary (zoom-to-cursor behavior).
User input will be blocked during the animation.

***

### notifyZoomInputAnimationWorld()

> **notifyZoomInputAnimationWorld**(`targetZoom`, `at`): `void`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:277](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L277)

Initiates a zoom animation to a target level at a world position.

#### Parameters

##### targetZoom

`number`

Target zoom level

##### at

`Point` = `...`

Anchor point in world coordinates (defaults to origin)

#### Returns

`void`

#### Remarks

Similar to [notifyZoomInputAnimation](#notifyzoominputanimation) but accepts world-space coordinates
for the anchor point instead of viewport coordinates.
