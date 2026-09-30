[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useCustomCameraMux

# 関数: useCustomCameraMux()

> **useCustomCameraMux**(`cameraMux`): `void`

定義: [hooks/useBoardify.tsx:295](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-react-adapter/src/hooks/useBoardify.tsx#L295)

Hook to set a custom camera multiplexer on the board.

## パラメータ

### cameraMux

`CameraMux`

Custom camera mux implementation to use

## 戻り値

`void`

## Remarks

This hook allows you to replace the board's default camera mux with a custom implementation.
Useful when you need custom input coordination, animation control, or state-based input blocking.

The camera mux is updated whenever the provided `cameraMux` instance changes.

## 例

```tsx
function CustomMuxBoard() {
  const myCustomMux = useMemo(() => {
    return createCameraMuxWithAnimationAndLock(camera);
  }, []);

  useCustomCameraMux(myCustomMux);

  return <Board />;
}
```

## 参照

CameraMux from @ue-too/board for camera mux interface
