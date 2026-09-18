[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useBoardCamera

# 函式: useBoardCamera()

> **useBoardCamera**(): `ObservableBoardCamera`

定義於: [hooks/useBoardify.tsx:454](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-react-adapter/src/hooks/useBoardify.tsx#L454)

Hook to access the camera instance from the Board context.

## 回傳

`ObservableBoardCamera`

The camera instance from the board

## 備註

This is a convenience hook that returns the camera from the board instance.
Equivalent to calling `useBoard().camera` but more concise.

## 拋出

Error if used outside of BoardProvider

## 範例

```tsx
function CameraConfig() {
  const camera = useBoardCamera();

  useEffect(() => {
    camera.setMinZoomLevel(0.5);
    camera.setMaxZoomLevel(4.0);
  }, [camera]);

  return null;
}
```

## 參閱

[useBoard](useBoard.md) for accessing the full board instance
