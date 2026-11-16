[@ue-too/board](../globals.md) / createCameraMuxWithAnimationAndLockWithCameraRig

# Function: createCameraMuxWithAnimationAndLockWithCameraRig()

> **createCameraMuxWithAnimationAndLockWithCameraRig**(`cameraRig`): [`CameraMux`](../interfaces/CameraMux.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts:448](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board/src/camera/camera-mux/animation-and-lock/animation-and-lock.ts#L448)

Creates a camera mux with animation and locking capabilities from a camera rig.

## Parameters

### cameraRig

[`CameraRig`](../interfaces/CameraRig.md)

Pre-configured camera rig to use

## Returns

[`CameraMux`](../interfaces/CameraMux.md)

Configured camera mux with animation support

## Remarks

Similar to [createCameraMuxWithAnimationAndLock](createCameraMuxWithAnimationAndLock.md) but accepts an existing
camera rig instead of creating a default one. Use this when you need:
- Custom camera rig configuration
- Specific pan/zoom/rotation constraints
- Non-default handler pipelines
- To share a camera rig between multiple systems

**Advantages over camera-only variant:**
- Full control over camera rig settings
- Ability to configure boundaries, restrictions, clamping
- Use custom handler functions
- Reuse existing rig instance

## Example

```typescript
// Create custom camera rig with specific config
const camera = new DefaultBoardCamera(1920, 1080);
const rig = new DefaultCameraRig({
  limitEntireViewPort: true,
  clampTranslation: true,
  boundaries: {
    min: { x: 0, y: 0 },
    max: { x: 2000, y: 1000 }
  }
}, camera);

// Create mux with custom rig
const mux = createCameraMuxWithAnimationAndLockWithCameraRig(rig);

// Animations respect rig's boundaries and constraints
mux.notifyPanToAnimationInput({ x: 3000, y: 1500 });
// Camera will be clamped to boundaries during animation
```

## See

 - [CameraMuxWithAnimationAndLock](../classes/CameraMuxWithAnimationAndLock.md) for the implementation
 - [createCameraMuxWithAnimationAndLock](createCameraMuxWithAnimationAndLock.md) for simpler camera-only version
