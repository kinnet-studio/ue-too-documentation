[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useAllBoardCameraState

# Function: useAllBoardCameraState()

> **useAllBoardCameraState**(): `object`

Defined in: [hooks/useBoardify.tsx:226](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-react-adapter/src/hooks/useBoardify.tsx#L226)

Hook to subscribe to all camera state properties with automatic re-rendering.

## Returns

`object`

Object containing:
- `position` - Current camera position {x, y}
- `rotation` - Current camera rotation in radians
- `zoomLevel` - Current camera zoom level

### position

> **position**: `object`

#### position.x

> **x**: `number`

#### position.y

> **y**: `number`

### rotation

> **rotation**: `number`

### zoomLevel

> **zoomLevel**: `number`

## Remarks

This hook provides a snapshot of all camera state (position, rotation, zoomLevel) and
re-renders only when any of these values change. It's more efficient than using multiple
[useBoardCameraState](useBoardCameraState.md) calls when you need all state properties.

**Performance**: The hook uses snapshot caching to maintain referential equality when
values haven't changed, preventing unnecessary re-renders in child components.

## Example

```tsx
function CameraStateDisplay() {
  const { position, rotation, zoomLevel } = useAllBoardCameraState();

  return (
    <div>
      <h3>Camera State</h3>
      <p>Position: ({position.x.toFixed(2)}, {position.y.toFixed(2)})</p>
      <p>Rotation: {rotation.toFixed(2)} rad</p>
      <p>Zoom: {zoomLevel.toFixed(2)}x</p>
    </div>
  );
}
```

## See

[useBoardCameraState](useBoardCameraState.md) for subscribing to individual state properties
