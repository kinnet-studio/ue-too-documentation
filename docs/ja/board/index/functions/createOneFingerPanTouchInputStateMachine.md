[@ue-too/board](../../modules.md) / [index](../index.md) / createOneFingerPanTouchInputStateMachine

# 関数: createOneFingerPanTouchInputStateMachine()

> **createOneFingerPanTouchInputStateMachine**(`context`): [`OneFingerPanTouchInputStateMachine`](../type-aliases/OneFingerPanTouchInputStateMachine.md)

定義: [packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts:348](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/input-interpretation/input-state-machine/one-finger-pan-touch-input-state-machine.ts#L348)

Creates a touch input state machine where one finger pans and two fingers
pinch-zoom.

## パラメータ

### context

[`TouchContext`](../interfaces/TouchContext.md)

Touch point tracking and canvas access, e.g. a
[TouchInputTracker](../classes/TouchInputTracker.md)

## 戻り値

[`OneFingerPanTouchInputStateMachine`](../type-aliases/OneFingerPanTouchInputStateMachine.md)

A machine that takes the same events as
[createTouchInputStateMachine](createTouchInputStateMachine.md)'s

## Remarks

An opt-in alternative to the board's default touch machine, which leaves
single-finger touches alone for the app's own UI.

**State Flow**:
```
IDLE ──1 finger──▶ PANNING ──2nd finger──▶ PINCHING
  ▲                   │  ▲                     │
  └──last finger up───┘  └───down to 1 finger──┘
```

See [OneFingerPanPanningState](../classes/OneFingerPanPanningState.md) and [OneFingerPanPinchingState](../classes/OneFingerPanPinchingState.md)
for the outputs. To change the behaviour, start from
[expandOneFingerPanTouchInputStateMachine](expandOneFingerPanTouchInputStateMachine.md).

## Examples

Use it on a board:
```typescript
const board = new Board(canvas);
board.setTouchInputStateMachine(createOneFingerPanTouchInputStateMachine);
```

Wire it to your own parser:
```typescript
const machine = createOneFingerPanTouchInputStateMachine(
    new TouchInputTracker(canvasProxy)
);
const parser = new VanillaTouchEventParser(machine, orchestrator, canvas);
parser.setUp();
```
