[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useAnimationFrame

# 関数: useAnimationFrame()

> **useAnimationFrame**(`callback`): `void`

定義: [hooks/useAnimationFrame.ts:36](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-react-adapter/src/hooks/useAnimationFrame.ts#L36)

Hook to run a callback on every animation frame.

## パラメータ

### callback

(`timestamp`) => `void`

Function to call on each animation frame, receives the current timestamp

## 戻り値

`void`

## Remarks

This hook uses `requestAnimationFrame` to execute a callback repeatedly for smooth animations.
The animation loop starts when the component mounts and stops when it unmounts, automatically
cleaning up the animation frame request.

**Performance Note**: The callback is called on every frame, so ensure your callback is
optimized to avoid performance issues. The callback dependency should be stable to prevent
restarting the animation loop unnecessarily.

## 例

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

## 参照

[useAnimationFrameWithBoard](useAnimationFrameWithBoard.md) for board-integrated animation loop
