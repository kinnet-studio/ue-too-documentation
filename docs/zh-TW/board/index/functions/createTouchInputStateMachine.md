[@ue-too/board](../../modules.md) / [index](../index.md) / createTouchInputStateMachine

# 函式: createTouchInputStateMachine()

> **createTouchInputStateMachine**(`context`): [`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:434](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L434)

Creates a new touch input state machine for multi-touch gesture recognition.

## 參數

### context

[`TouchContext`](../interfaces/TouchContext.md)

The context providing touch point tracking and canvas access

## 回傳

[`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

A configured state machine ready to process touch events

## 備註

This factory creates a state machine that recognizes two-finger pan and pinch-to-zoom gestures.

**State Flow**:
```
IDLE → (2 touches start) → PENDING → (touch move) → IN_PROGRESS
IN_PROGRESS → (touch end) → IDLE
```

**Gesture Recognition Algorithm**:
1. Wait for exactly 2 touches (IDLE → PENDING)
2. On first move, determine gesture type:
   - If distance change > midpoint change: ZOOM
   - If midpoint change > distance change: PAN
3. Continue producing pan/zoom outputs until touches end

**Pan Gesture**:
Delta = current midpoint - initial midpoint

**Zoom Gesture**:
Delta = (current distance - initial distance) * 0.005
Anchor = midpoint in viewport coordinates

## 範例

```typescript
const canvasProxy = new CanvasProxy(canvasElement);
const context = new TouchInputTracker(canvasProxy);
const stateMachine = createTouchInputStateMachine(context);

// Process a touch start event with 2 fingers
const result = stateMachine.happens("touchstart", {
  points: [
    {ident: 0, x: 100, y: 200},
    {ident: 1, x: 300, y: 200}
  ]
});
console.log(result.nextState); // "PENDING"
```
