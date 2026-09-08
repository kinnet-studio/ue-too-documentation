[@ue-too/board](../../modules.md) / [index](../index.md) / createKmtInputStateMachine

# 函式: createKmtInputStateMachine()

> **createKmtInputStateMachine**(`context`): [`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:733](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L733)

Creates a new KMT (Keyboard/Mouse/Trackpad) input state machine.

## 參數

### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

The context providing state and canvas access for the state machine

## 回傳

[`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md)

A configured state machine ready to process KMT input events

## 備註

This factory function creates a fully configured state machine with all KMT gesture
recognition states. The state machine processes raw input events and produces
high-level gesture outputs (pan, zoom, rotate).

**State Flow**:
```
IDLE → (spacebar) → READY_TO_PAN_VIA_SPACEBAR → (click) → INITIAL_PAN → PAN
IDLE → (middle-click) → READY_TO_PAN_VIA_SCROLL_WHEEL → PAN_VIA_SCROLL_WHEEL
IDLE → (scroll) → [produces pan or zoom output, stays in IDLE]
```

**Gesture Recognition**:
- **Pan via spacebar**: Spacebar + left-click drag
- **Pan via middle-click**: Middle-click drag
- **Zoom**: Ctrl + scroll (mouse) or scroll (trackpad, auto-detected)
- **Pan via scroll**: Scroll (trackpad) or scroll without Ctrl (varies by device)

## 範例

```typescript
const canvasProxy = new CanvasProxy(canvasElement);
const context = new ObservableInputTracker(canvasProxy);
const stateMachine = createKmtInputStateMachine(context);

// Process an event
const result = stateMachine.happens("scroll", {
  deltaX: 0,
  deltaY: 10,
  x: 500,
  y: 300
});

// Check for output
if (result.output) {
  console.log("Gesture recognized:", result.output.type);
}
```
