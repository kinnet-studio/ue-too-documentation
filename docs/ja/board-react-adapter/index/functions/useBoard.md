[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useBoard

# 関数: useBoard()

> **useBoard**(): `Board`

定義: [hooks/useBoardify.tsx:419](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-react-adapter/src/hooks/useBoardify.tsx#L419)

Hook to access the Board instance from context.

## 戻り値

`Board`

The Board instance from context

## Remarks

This hook retrieves the Board instance provided by [BoardProvider](BoardProvider.md).
It must be used within a component that is a descendant of BoardProvider,
otherwise it will throw an error.

## Throws

Error if used outside of BoardProvider

## 例

```tsx
function MyComponent() {
  const board = useBoard();

  useEffect(() => {
    // Configure board
    board.camera.boundaries = { min: { x: -1000, y: -1000 }, max: { x: 1000, y: 1000 } };
  }, [board]);

  return <div>Board ready</div>;
}
```

## 参照

[BoardProvider](BoardProvider.md) for providing the board instance
