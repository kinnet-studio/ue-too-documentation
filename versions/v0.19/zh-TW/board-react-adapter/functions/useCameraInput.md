[@ue-too/board-react-adapter](../globals.md) / useCameraInput

# Function: useCameraInput()

> **useCameraInput**(): `object`

Defined in: [hooks/useBoardify.tsx:147](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-react-adapter/src/hooks/useBoardify.tsx#L147)

Hook to get camera control functions for programmatic camera manipulation.

## Returns

`object`

Object containing camera control functions:
- `panToWorld` - Pan camera to a world position
- `panToViewPort` - Pan camera to a viewport position
- `zoomTo` - Set camera zoom to specific level
- `zoomBy` - Adjust camera zoom by delta
- `rotateTo` - Set camera rotation to specific angle
- `rotateBy` - Adjust camera rotation by delta

### panByViewPort()

> **panByViewPort**: (`delta`) => `void`

#### Parameters

##### delta

`Point`

#### Returns

`void`

### panByWorld()

> **panByWorld**: (`delta`) => `void`

#### Parameters

##### delta

`Point`

#### Returns

`void`

### panToViewPort()

> **panToViewPort**: (`viewPortPosition`) => `void`

#### Parameters

##### viewPortPosition

`Point`

#### Returns

`void`

### panToWorld()

> **panToWorld**: (`worldPosition`) => `void`

#### Parameters

##### worldPosition

`Point`

#### Returns

`void`

### rotateBy()

> **rotateBy**: (`rotationDelta`) => `void`

#### Parameters

##### rotationDelta

`number`

#### Returns

`void`

### rotateTo()

> **rotateTo**: (`rotation`) => `void`

#### Parameters

##### rotation

`number`

#### Returns

`void`

### zoomBy()

> **zoomBy**: (`zoomDelta`) => `void`

#### Parameters

##### zoomDelta

`number`

#### Returns

`void`

### zoomTo()

> **zoomTo**: (`zoomLevel`) => `void`

#### Parameters

##### zoomLevel

`number`

#### Returns

`void`

### zoomToAtViewPort()

> **zoomToAtViewPort**: (`zoomLevel`, `at`) => `void`

#### Parameters

##### zoomLevel

`number`

##### at

`Point`

#### Returns

`void`

### zoomToAtWorld()

> **zoomToAtWorld**: (`zoomLevel`, `at`) => `void`

#### Parameters

##### zoomLevel

`number`

##### at

`Point`

#### Returns

`void`

## Remarks

This hook provides a stable set of functions to control the camera programmatically.
The functions are memoized and only recreate when the board instance changes.

All camera operations go through the camera rig, which enforces boundaries,
restrictions, and other constraints configured on the board.

## Example

```tsx
function CameraControls() {
  const { panToWorld, zoomTo, rotateTo } = useCameraInput();

  return (
    <div>
      <button onClick={() => panToWorld({ x: 0, y: 0 })}>
        Center Camera
      </button>
      <button onClick={() => zoomTo(1.0)}>
        Reset Zoom
      </button>
      <button onClick={() => rotateTo(0)}>
        Reset Rotation
      </button>
    </div>
  );
}
```
