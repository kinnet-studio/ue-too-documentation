[@ue-too/board](../globals.md) / convertUserInputDeltaToCameraDelta

# Function: convertUserInputDeltaToCameraDelta()

> **convertUserInputDeltaToCameraDelta**(`delta`, `camera`): `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:714](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/pan-handler.ts#L714)

Converts a user input delta (viewport space) to camera movement delta (world space).

## Parameters

### delta

`Point`

Movement delta in viewport/screen coordinates (CSS pixels)

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides rotation and zoom)

## Returns

`Point`

Equivalent delta in world space

## Remarks

This function performs the standard viewport-to-world delta conversion:
1. Rotate delta by camera rotation (convert screen direction to world direction)
2. Scale by inverse zoom (convert screen distance to world distance)

Formula: `worldDelta = rotate(viewportDelta, cameraRotation) / zoomLevel`

This is the core conversion used by [DefaultCameraRig.panByViewPort](../classes/DefaultCameraRig.md#panbyviewport).

## Examples

```typescript
// User drags mouse 100 pixels right, 50 pixels down
const viewportDelta = { x: 100, y: 50 };

// Camera at 2x zoom, no rotation
camera.zoomLevel = 2.0;
camera.rotation = 0;

const worldDelta = convertUserInputDeltaToCameraDelta(viewportDelta, camera);
// worldDelta = { x: 50, y: 25 } - half the viewport delta due to 2x zoom
```

```typescript
// With camera rotation
camera.zoomLevel = 1.0;
camera.rotation = Math.PI / 2;  // 90 degrees

const viewportDelta = { x: 100, y: 0 };  // Drag right
const worldDelta = convertUserInputDeltaToCameraDelta(viewportDelta, camera);
// worldDelta ≈ { x: 0, y: -100 } - rotated 90 degrees in world space
```

## See

[DefaultCameraRig.panByViewPort](../classes/DefaultCameraRig.md#panbyviewport) for usage
