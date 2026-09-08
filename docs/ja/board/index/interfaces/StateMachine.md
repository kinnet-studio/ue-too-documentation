[@ue-too/board](../../modules.md) / [index](../index.md) / StateMachine

# インターフェイス: StateMachine

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:171](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L171)

DOM event parser for Keyboard/Mouse/Trackpad input.

## Remarks

This parser converts raw DOM events into state machine events and coordinates with
the orchestrator to process outputs. It serves as the entry point for all KMT input
in the input interpretation pipeline.

**Event Flow**:
```
DOM Events → Parser → State Machine → Parser → Orchestrator → Camera/Observers
```

**Responsibilities**:
1. Listen for DOM pointer, wheel, and keyboard events
2. Convert DOM events to state machine event format
3. Send events to the state machine
4. Forward state machine outputs to the orchestrator

**Handled DOM Events**:
- pointerdown/up/move (canvas-scoped)
- wheel (canvas-scoped)
- keydown/up (window-scoped for spacebar)

**Keyboard Handling**:
Keyboard events are only processed when `document.body` is the target,
preventing interference with text inputs and other UI elements.

The parser can be disabled to temporarily stop input processing (e.g., during
modal dialogs or animations).

## 例

```typescript
const canvasElement = document.getElementById("canvas");
const stateMachine = createKmtInputStateMachine(context);
const orchestrator = new InputOrchestrator(cameraMux, cameraRig, publisher);
const parser = new VanillaKMTEventParser(stateMachine, orchestrator, canvasElement);

parser.setUp(); // Starts listening for events

// Later, to disable input temporarily
parser.disabled = true;

// Cleanup when done
parser.tearDown();
```

## プロパティ

### happens()

> **happens**: (...`args`) => `EventResult`\<`any`\>

定義: [packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts:172](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-parser/vanilla-kmt-event-parser.ts#L172)

#### パラメータ

##### args

...`any`[]

#### 戻り値

`EventResult`\<`any`\>
