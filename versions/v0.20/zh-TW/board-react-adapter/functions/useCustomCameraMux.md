[@ue-too/board-react-adapter](../globals.md) / useCustomCameraMux

# Function: useCustomCameraMux()

> **useCustomCameraMux**(`cameraMux`): `void`

Defined in: [hooks/useBoardify.tsx:294](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-react-adapter/src/hooks/useBoardify.tsx#L294)

Hook to set a custom camera multiplexer on the board.

## Parameters

### cameraMux

`CameraMux`

Custom camera mux implementation to use

## Returns

`void`

## Remarks

This hook allows you to replace the board's default camera mux with a custom implementation.
Useful when you need custom input coordination, animation control, or state-based input blocking.

The camera mux is updated whenever the provided `cameraMux` instance changes.

## Example

```tsx
function CustomMuxBoard() {
  const myCustomMux = useMemo(() => {
    return createCameraMuxWithAnimationAndLock(camera);
  }, []);

  useCustomCameraMux(myCustomMux);

  return <Board />;
}
```

## See

CameraMux from @ue-too/board for camera mux interface
