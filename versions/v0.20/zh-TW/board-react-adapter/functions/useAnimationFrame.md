[@ue-too/board-react-adapter](../globals.md) / useAnimationFrame

# Function: useAnimationFrame()

> **useAnimationFrame**(`callback`): `void`

Defined in: [hooks/useAnimationFrame.ts:36](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-react-adapter/src/hooks/useAnimationFrame.ts#L36)

Hook to run a callback on every animation frame.

## Parameters

### callback

(`timestamp`) => `void`

Function to call on each animation frame, receives the current timestamp

## Returns

`void`

## Remarks

This hook uses `requestAnimationFrame` to execute a callback repeatedly for smooth animations.
The animation loop starts when the component mounts and stops when it unmounts, automatically
cleaning up the animation frame request.

**Performance Note**: The callback is called on every frame, so ensure your callback is
optimized to avoid performance issues. The callback dependency should be stable to prevent
restarting the animation loop unnecessarily.

## Example

```tsx
function AnimatedComponent() {
  const [rotation, setRotation] = useState(0);

  useAnimationFrame((timestamp) => {
    // Rotate 45 degrees per second
    setRotation((prev) => prev + (Math.PI / 4) * (1 / 60));
  });

  return <div style={{ transform: `rotate(${rotation}rad)` }}>Spinning!</div>;
}
```

## See

[useAnimationFrameWithBoard](useAnimationFrameWithBoard.md) for board-integrated animation loop
