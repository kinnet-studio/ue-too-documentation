[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useCustomInputHandling

# 関数: useCustomInputHandling()

> **useCustomInputHandling**(): `object`

定義: [hooks/useBoardify.tsx:325](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-react-adapter/src/hooks/useBoardify.tsx#L325)

The custom input handling logic is before everything else. To use this hook, you would need to handle the event from the canvas and pass down the result to the `processInputEvent` function.

## 戻り値

`object`

Object containing the `processInputEvent` function

### processInputEvent()

> **processInputEvent**: (`input`) => `void`

#### パラメータ

##### input

`OutputEvent`

#### 戻り値

`void`

## 例

```typescript
const { processInputEvent } = useCustomInputHandling();

const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
  // custom logic to determine the user input

  // if the user input is valid, pass it to the `processInputEvent` function
  // e.g. pass the pan event down the input handling system
  processInputEvent({
    type: "pan",
    delta: {
      x: 10,
      y: 10,
    },
  });
}
```
