[@ue-too/board](../globals.md) / createCameraMuxWithAnimationAndLock

# Function: createCameraMuxWithAnimationAndLock()

> **createCameraMuxWithAnimationAndLock**(): [`CameraMux`](../interfaces/CameraMux.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:431](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L431)

Creates a camera mux with animation and locking capabilities from a camera instance.

## Returns

[`CameraMux`](../interfaces/CameraMux.md)

Configured camera mux with animation support

## Remarks

This factory function creates a complete camera input flow control system with:
1. A default [CameraRig](../interfaces/CameraRig.md) wrapping the provided camera
2. Three state machines (pan, zoom, rotation) for animation control
3. A [CameraMuxWithAnimationAndLock](../classes/CameraMuxWithAnimationAndLock.md) coordinating the state machines

**What you get:**
- Smooth camera animations (pan-to, zoom-to, rotate-to)
- Automatic input blocking during animations
- State-based input arbitration
- All with sensible default configurations

**Use this when:**
- You have a camera and want animation support out-of-the-box
- You don't need custom camera rig configuration
- You want the simplest setup for animated camera control

## Example

```typescript
const camera = new DefaultBoardCamera(1920, 1080);
const mux = createCameraMuxWithAnimationAndLock(camera);

// Start a pan animation
mux.notifyPanToAnimationInput({ x: 1000, y: 500 });

// User input is blocked during animation
const result = mux.notifyPanInput({ x: 50, y: 30 });
console.log(result.allowPassThrough); // false during animation
```

## See

 - [CameraMuxWithAnimationAndLock](../classes/CameraMuxWithAnimationAndLock.md) for the implementation
 - createCameraMuxWithAnimationAndLockWithCameraRig for custom rig version
