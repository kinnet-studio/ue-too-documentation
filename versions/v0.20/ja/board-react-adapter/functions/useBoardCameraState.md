[@ue-too/board-react-adapter](../globals.md) / useBoardCameraState

# Function: useBoardCameraState()

> **useBoardCameraState**\<`K`\>(`state`): `CameraState`\[`K`\]

Defined in: [hooks/useBoardify.tsx:67](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-react-adapter/src/hooks/useBoardify.tsx#L67)

Hook to subscribe to a specific camera state property with automatic re-rendering.

## Type Parameters

### K

`K` *extends* keyof `CameraState`

Key of the camera state to subscribe to

## Parameters

### state

`K`

The camera state property to track ("position", "rotation", or "zoomLevel")

## Returns

`CameraState`\[`K`\]

The current value of the specified camera state property

## Remarks

This hook uses React's `useSyncExternalStore` to efficiently subscribe to camera state changes.
It only triggers re-renders when the specified property actually changes, and uses caching
to maintain referential equality for object values (like position).

**Performance**: The hook is optimized to prevent unnecessary re-renders by:
- Caching object values (position) to maintain referential equality
- Using `useSyncExternalStore` for efficient subscription management
- Only subscribing to the specific state property needed

## Example

```tsx
function CameraInfo() {
  const position = useBoardCameraState('position');
  const rotation = useBoardCameraState('rotation');
  const zoomLevel = useBoardCameraState('zoomLevel');

  return (
    <div>
      Position: {position.x}, {position.y}<br/>
      Rotation: {rotation}<br/>
      Zoom: {zoomLevel}
    </div>
  );
}
```

## See

[useAllBoardCameraState](useAllBoardCameraState.md) for subscribing to all camera state at once
