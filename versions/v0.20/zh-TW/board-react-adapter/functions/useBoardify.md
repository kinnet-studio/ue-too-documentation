[@ue-too/board-react-adapter](../globals.md) / useBoardify

# Function: useBoardify()

> **useBoardify**(`fullScreen`): `object`

Defined in: [hooks/useBoardify.tsx:47](https://github.com/ue-too/ue-too/blob/aabc0f56e9e83141d0fd935ef6ac3e5fe0af0a61/packages/board-react-adapter/src/hooks/useBoardify.tsx#L47)

Hook to create and manage a Board instance.

## Parameters

### fullScreen

`boolean` = `false`

Whether the board should be in fullscreen mode (resizes with window)

## Returns

`object`

Object containing the board instance and a subscribe function

### board

> **board**: `Board` = `boardRef.current`

### subscribe()

> **subscribe**: (`callback`) => () => `void`

#### Parameters

##### callback

() => `void`

#### Returns

> (): `void`

##### Returns

`void`

## Remarks

This hook creates a stable Board instance that persists across re-renders.
The board is created once and stored in a ref, making it suitable for use
in React components without recreating the board on every render.

**Important**: This hook creates an independent board instance. If you need
to share a board across multiple components, use [BoardProvider](BoardProvider.md) and
[useBoard](useBoard.md) instead.

## Example

```tsx
function MyComponent() {
  const { board, subscribe } = useBoardify(true);

  useEffect(() => {
    // Subscribe to camera pan events
    const unsubscribe = subscribe(() => {
      console.log('Camera panned');
    });
    return unsubscribe;
  }, [subscribe]);

  return <canvas ref={(ref) => ref && board.attach(ref)} />;
}
```
