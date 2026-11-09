[@ue-too/board-react-adapter](../globals.md) / useAnimationFrameWithBoard

# Function: useAnimationFrameWithBoard()

> **useAnimationFrameWithBoard**(`callback?`): `void`

Defined in: [hooks/useAnimationFrame.ts:103](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-react-adapter/src/hooks/useAnimationFrame.ts#L103)

Hook to run an animation loop integrated with the Board's step function.

## Parameters

### callback?

(`timestamp`, `ctx`) => `void`

Optional function to call after board.step(), receives timestamp and canvas context

## Returns

`void`

## Remarks

This hook automatically calls `board.step(timestamp)` on every frame to update the board's
camera transform, then invokes your callback with the timestamp and canvas context.
This is the recommended way to implement drawing logic for board-based applications.

The hook handles:
- Calling `board.step()` to update camera transforms
- Providing the canvas context for drawing
- Warning if context is not available
- Cleaning up the animation loop on unmount

**Typical Usage Pattern**:
1. Board calls `step()` to update transforms
2. Your callback draws on the canvas
3. Browser paints the frame
4. Repeat next frame

## Example

```tsx
function MyBoard() {
  useAnimationFrameWithBoard((timestamp, ctx) => {
    // Draw a rectangle at world position (0, 0)
    ctx.fillStyle = 'red';
    ctx.fillRect(0, 0, 100, 100);

    // Draw a circle that moves
    const x = Math.sin(timestamp / 1000) * 200;
    const y = Math.cos(timestamp / 1000) * 200;
    ctx.fillStyle = 'blue';
    ctx.beginPath();
    ctx.arc(x, y, 20, 0, Math.PI * 2);
    ctx.fill();
  });

  return <Board width={800} height={600} />;
}
```

## See

[useAnimationFrame](useAnimationFrame.md) for generic animation frame hook
