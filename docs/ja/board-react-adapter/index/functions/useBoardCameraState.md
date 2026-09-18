[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useBoardCameraState

# 関数: useBoardCameraState()

> **useBoardCameraState**\<`K`\>(`state`): `CameraState`\[`K`\]

定義: [hooks/useBoardify.tsx:68](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-react-adapter/src/hooks/useBoardify.tsx#L68)

Hook to subscribe to a specific camera state property with automatic re-rendering.

## 型パラメーター

### K

`K` *extends* keyof `CameraState`

Key of the camera state to subscribe to

## パラメータ

### state

`K`

The camera state property to track ("position", "rotation", or "zoomLevel")

## 戻り値

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

## 例

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

## 参照

[useAllBoardCameraState](useAllBoardCameraState.md) for subscribing to all camera state at once
