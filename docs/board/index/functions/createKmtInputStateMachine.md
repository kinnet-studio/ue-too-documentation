[@ue-too/board](../../modules.md) / [index](../index.md) / createKmtInputStateMachine

# Function: createKmtInputStateMachine()

> **createKmtInputStateMachine**(`context`): [`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:736](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L736)

Creates a new KMT (Keyboard/Mouse/Trackpad) input state machine.

## Parameters

### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

The context providing state and canvas access for the state machine

## Returns

[`KmtInputStateMachine`](../type-aliases/KmtInputStateMachine.md)

A configured state machine ready to process KMT input events

## Remarks

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

## Example

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
