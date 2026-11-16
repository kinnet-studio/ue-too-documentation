[@ue-too/board](../globals.md) / createTouchInputStateMachine

# Function: createTouchInputStateMachine()

> **createTouchInputStateMachine**(`context`): [`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:434](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L434)

Creates a new touch input state machine for multi-touch gesture recognition.

## Parameters

### context

[`TouchContext`](../interfaces/TouchContext.md)

The context providing touch point tracking and canvas access

## Returns

[`TouchInputStateMachine`](../type-aliases/TouchInputStateMachine.md)

A configured state machine ready to process touch events

## Remarks

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

## Example

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
