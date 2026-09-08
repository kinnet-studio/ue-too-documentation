[@ue-too/board](../../modules.md) / [index](../index.md) / CameraMuxWithAnimationAndLock

# クラス: CameraMuxWithAnimationAndLock

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:79](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L79)

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

## 例

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

## 参照

 - [CameraMux](../interfaces/CameraMux.md) for the interface definition
 - [Relay](Relay.md) for simpler passthrough implementation
 - [createCameraMuxWithAnimationAndLock](../functions/createCameraMuxWithAnimationAndLock.md) for factory function

## 実装

- [`CameraMux`](../interfaces/CameraMux.md)

## コンストラクター

### コンストラクター

> **new CameraMuxWithAnimationAndLock**(`panStateMachine`, `zoomStateMachine`, `rotateStateMachine`): `CameraMuxWithAnimationAndLock`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:95](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L95)

Creates a new camera mux with animation and locking capabilities.

#### パラメータ

##### panStateMachine

[`PanControlStateMachine`](PanControlStateMachine.md)

State machine controlling pan operations and animations

##### zoomStateMachine

[`ZoomControlStateMachine`](ZoomControlStateMachine.md)

State machine controlling zoom operations and animations

##### rotateStateMachine

[`RotateControlStateMachine`](RotateControlStateMachine.md)

State machine controlling rotation operations and animations

#### 戻り値

`CameraMuxWithAnimationAndLock`

#### Remarks

Typically created via factory functions like [createCameraMuxWithAnimationAndLock](../functions/createCameraMuxWithAnimationAndLock.md)
rather than direct instantiation.

## アクセッサー

### panStateMachine

#### 署名を取得する

> **get** **panStateMachine**(): [`PanControlStateMachine`](PanControlStateMachine.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:375](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L375)

Gets the pan state machine.

##### Remarks

Provides direct access to the pan state machine for advanced control
or state inspection.

##### 戻り値

[`PanControlStateMachine`](PanControlStateMachine.md)

The pan state machine instance

***

### rotateStateMachine

#### 署名を取得する

> **get** **rotateStateMachine**(): [`RotateControlStateMachine`](RotateControlStateMachine.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:362](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L362)

Gets the rotation state machine.

##### Remarks

Provides direct access to the rotation state machine for advanced control
or state inspection.

##### 戻り値

[`RotateControlStateMachine`](RotateControlStateMachine.md)

The rotation state machine instance

***

### zoomStateMachine

#### 署名を取得する

> **get** **zoomStateMachine**(): [`ZoomControlStateMachine`](ZoomControlStateMachine.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:388](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L388)

Gets the zoom state machine.

##### Remarks

Provides direct access to the zoom state machine for advanced control
or state inspection.

##### 戻り値

[`ZoomControlStateMachine`](ZoomControlStateMachine.md)

The zoom state machine instance

## メソッド

### initatePanTransition()

> **initatePanTransition**(): `void`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:327](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L327)

Initiates a transition in the pan state machine.

#### 戻り値

`void`

#### Remarks

This method forces the pan state machine to transition to its next state.
Can be used to interrupt animations or force state changes.

***

### initateRotateTransition()

> **initateRotateTransition**(): `void`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:349](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L349)

Initiates a transition in the rotation state machine.

#### 戻り値

`void`

#### Remarks

This method forces the rotation state machine to transition to its next state.
Can be used to interrupt animations or force state changes.

***

### initateZoomTransition()

> **initateZoomTransition**(): `void`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:338](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L338)

Initiates a transition in the zoom state machine.

#### 戻り値

`void`

#### Remarks

This method forces the zoom state machine to transition to its next state.
Can be used to interrupt animations or force state changes.

***

### notifyPanInput()

> **notifyPanInput**(`delta`): [`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:167](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L167)

Processes user pan input (implements [CameraMux](../interfaces/CameraMux.md)).

#### パラメータ

##### delta

`Point`

Pan delta in viewport coordinates

#### 戻り値

[`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

Output indicating whether pan is allowed

#### Remarks

This method is called when the user attempts to pan the camera (e.g., mouse drag).
The pan state machine determines whether to allow the input based on current state:
- **Allowed**: When in idle state or user control state
- **Blocked**: When camera animation is playing

#### 例

```typescript
// User drags mouse
const result = mux.notifyPanInput({ x: 50, y: 30 });
if (result.allowPassThrough) {
  // Apply pan to camera
  cameraRig.panByViewPort(result.delta);
}
```

#### の実装

[`CameraMux`](../interfaces/CameraMux.md).[`notifyPanInput`](../interfaces/CameraMux.md#notifypaninput)

***

### notifyPanToAnimationInput()

> **notifyPanToAnimationInput**(`target`): [`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:126](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L126)

Initiates a pan animation to a target position.

#### パラメータ

##### target

`Point`

Target position in world coordinates

#### 戻り値

[`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

Pan output indicating whether animation was initiated

#### Remarks

This method starts a camera pan animation to the specified world position.
The state machine handles:
- Starting the animation
- Blocking user input during animation
- Producing incremental pan deltas each frame

The animation continues until the camera reaches the target or is interrupted.

#### 例

```typescript
// Animate camera to world position
mux.notifyPanToAnimationInput({ x: 1000, y: 500 });
```

***

### notifyRotateByInput()

> **notifyRotateByInput**(`delta`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:233](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L233)

Processes user rotation input (rotate-by variant).

#### パラメータ

##### delta

`number`

Rotation delta in radians

#### 戻り値

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Output from rotation state machine

#### Remarks

Delegates to the rotation state machine's rotate-by handler.
The state machine determines whether to allow rotation based on current state.

***

### notifyRotateToAnimationInput()

> **notifyRotateToAnimationInput**(`target`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:247](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L247)

Initiates a rotation animation to a target angle.

#### パラメータ

##### target

`number`

Target rotation angle in radians

#### 戻り値

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Output from rotation state machine

#### Remarks

Starts a camera rotation animation to the specified angle.
User input will be blocked during the animation.

***

### notifyRotationInput()

> **notifyRotationInput**(`delta`): [`CameraMuxRotationOutput`](../type-aliases/CameraMuxRotationOutput.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:307](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L307)

Processes user rotation input (implements [CameraMux](../interfaces/CameraMux.md)).

#### パラメータ

##### delta

`number`

Rotation delta in radians

#### 戻り値

[`CameraMuxRotationOutput`](../type-aliases/CameraMuxRotationOutput.md)

Output indicating whether rotation is allowed

#### Remarks

This method is called when the user attempts to rotate the camera.
The rotation state machine determines whether to allow the input based on current state:
- **Allowed**: When in idle state or user control state
- **Blocked**: When rotation animation is playing

#### 例

```typescript
// User rotates camera
const result = mux.notifyRotationInput(0.1);
if (result.allowPassThrough) {
  cameraRig.rotateBy(result.delta);
}
```

#### の実装

[`CameraMux`](../interfaces/CameraMux.md).[`notifyRotationInput`](../interfaces/CameraMux.md#notifyrotationinput)

***

### notifyZoomInput()

> **notifyZoomInput**(`delta`, `at`): [`CameraMuxZoomOutput`](../type-aliases/CameraMuxZoomOutput.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:203](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L203)

Processes user zoom input (implements [CameraMux](../interfaces/CameraMux.md)).

#### パラメータ

##### delta

`number`

Zoom delta (change in zoom level)

##### at

`Point`

Anchor point in viewport coordinates

#### 戻り値

[`CameraMuxZoomOutput`](../type-aliases/CameraMuxZoomOutput.md)

Output indicating whether zoom is allowed

#### Remarks

This method is called when the user attempts to zoom (e.g., mouse wheel).
The zoom state machine determines whether to allow the input based on current state:
- **Allowed**: When in idle state or user control state
- **Blocked**: When zoom animation is playing

#### 例

```typescript
// User scrolls mouse wheel
const result = mux.notifyZoomInput(0.1, mousePosition);
if (result.allowPassThrough) {
  // Apply zoom to camera
  cameraRig.zoomByAt(result.delta, result.anchorPoint);
}
```

#### の実装

[`CameraMux`](../interfaces/CameraMux.md).[`notifyZoomInput`](../interfaces/CameraMux.md#notifyzoominput)

***

### notifyZoomInputAnimation()

> **notifyZoomInputAnimation**(`targetZoom`, `at`): `void`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:262](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L262)

Initiates a zoom animation to a target level at a viewport position.

#### パラメータ

##### targetZoom

`number`

Target zoom level

##### at

`Point` = `...`

Anchor point in viewport coordinates (defaults to origin)

#### 戻り値

`void`

#### Remarks

Starts a zoom animation that zooms to the specified level while keeping
the anchor point stationary (zoom-to-cursor behavior).
User input will be blocked during the animation.

***

### notifyZoomInputAnimationWorld()

> **notifyZoomInputAnimationWorld**(`targetZoom`, `at`): `void`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:279](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L279)

Initiates a zoom animation to a target level at a world position.

#### パラメータ

##### targetZoom

`number`

Target zoom level

##### at

`Point` = `...`

Anchor point in world coordinates (defaults to origin)

#### 戻り値

`void`

#### Remarks

Similar to [notifyZoomInputAnimation](#notifyzoominputanimation) but accepts world-space coordinates
for the anchor point instead of viewport coordinates.
