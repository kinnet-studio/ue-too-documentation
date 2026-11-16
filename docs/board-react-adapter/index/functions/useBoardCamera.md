[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useBoardCamera

# Function: useBoardCamera()

> **useBoardCamera**(): `ObservableBoardCamera`

Defined in: [hooks/useBoardify.tsx:454](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board-react-adapter/src/hooks/useBoardify.tsx#L454)

Hook to access the camera instance from the Board context.

## Returns

`ObservableBoardCamera`

The camera instance from the board

## Remarks

This is a convenience hook that returns the camera from the board instance.
Equivalent to calling `useBoard().camera` but more concise.

## Throws

Error if used outside of BoardProvider

## Example

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

## See

[useBoard](useBoard.md) for accessing the full board instance
