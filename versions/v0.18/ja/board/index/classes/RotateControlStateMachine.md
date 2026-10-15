[@ue-too/board](../../modules.md) / [index](../index.md) / RotateControlStateMachine

# クラス: RotateControlStateMachine

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:128](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L128)

State machine controlling rotation input flow and animations.

## Remarks

This state machine manages the lifecycle of rotation operations:
- **User input handling**: Accepts or blocks user rotation gestures based on state
- **Animation control**: Manages smooth rotate-to animations
- **Object tracking**: Supports locking camera to follow objects with rotation

**State transitions:**
- `ACCEPTING_USER_INPUT` → `TRANSITION`: Start animation (`initateTransition`)
- `ACCEPTING_USER_INPUT` → `LOCKED_ON_OBJECT`: Lock to object (`lockedOnObjectRotate...`)
- `TRANSITION` → `ACCEPTING_USER_INPUT`: User input interrupts animation
- `LOCKED_ON_OBJECT` → `ACCEPTING_USER_INPUT`: Unlock (`unlock` event)

Helper methods simplify event dispatching without memorizing event names.

## 例

```typescript
const stateMachine = createDefaultRotateControlStateMachine(cameraRig);

// User rotates - accepted in ACCEPTING_USER_INPUT state
const result = stateMachine.notifyRotateByInput(Math.PI / 4);

// Start animation - transitions to TRANSITION state
stateMachine.notifyRotateToAnimationInput(Math.PI);

// User input now blocked while animating
```

## 参照

[createDefaultRotateControlStateMachine](../functions/createDefaultRotateControlStateMachine.md) for factory function

## 拡張

- `TemplateStateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

## コンストラクター

### コンストラクター

> **new RotateControlStateMachine**(`states`, `initialState`, `context`): `RotateControlStateMachine`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:134](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L134)

#### パラメータ

##### states

`Record`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `State`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>\>

##### initialState

[`RotateControlStates`](../type-aliases/RotateControlStates.md)

##### context

`BaseContext`

#### 戻り値

`RotateControlStateMachine`

#### 上書き

`TemplateStateMachine< RotateEventPayloadMapping, BaseContext, RotateControlStates, RotateControlOutputMapping >.constructor`

## プロパティ

### \_context

> `protected` **\_context**: `BaseContext`

定義: packages/being/dist/interface.d.ts:468

#### 継承元

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`RotateControlStates`](../type-aliases/RotateControlStates.md) \| `"INITIAL"` \| `"TERMINAL"`

定義: packages/being/dist/interface.d.ts:466

#### 継承元

`TemplateStateMachine._currentState`

***

### \_eventResultCallbacks

> `protected` **\_eventResultCallbacks**: `EventResultCallback`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md)\>[]

定義: packages/being/dist/interface.d.ts:472

#### 継承元

`TemplateStateMachine._eventResultCallbacks`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

定義: packages/being/dist/interface.d.ts:471

#### パラメータ

##### args

\[`"userRotateByInput"`, [`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)\] | \[`"userRotateToInput"`, [`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)\] | \[`"transitionRotateByInput"`, [`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)\] | \[`"transitionRotateToInput"`, [`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)\] | \[`"lockedOnObjectRotateByInput"`, [`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)\] | \[`"lockedOnObjectRotateToInput"`, [`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)\] | \[`"unlock"`\] | \[`"initateTransition"`\] | \[`string`, `unknown`\]

##### context

`BaseContext`

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine._happensCallbacks`

***

### \_initialState

> `protected` **\_initialState**: [`RotateControlStates`](../type-aliases/RotateControlStates.md)

定義: packages/being/dist/interface.d.ts:474

#### 継承元

`TemplateStateMachine._initialState`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>[]

定義: packages/being/dist/interface.d.ts:470

#### 継承元

`TemplateStateMachine._stateChangeCallbacks`

***

### \_states

> `protected` **\_states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

定義: packages/being/dist/interface.d.ts:467

#### 継承元

`TemplateStateMachine._states`

***

### \_statesArray

> `protected` **\_statesArray**: [`RotateControlStates`](../type-aliases/RotateControlStates.md)[]

定義: packages/being/dist/interface.d.ts:469

#### 継承元

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined`

定義: packages/being/dist/interface.d.ts:473

#### 継承元

[`KmtInputStateMachineWebWorkerProxy`](KmtInputStateMachineWebWorkerProxy.md).[`_timeouts`](KmtInputStateMachineWebWorkerProxy.md#timeouts)

## アクセッサー

### context

#### 署名を取得する

> **get** **context**(): `Context`

定義: packages/being/dist/interface.d.ts:487

Read-only access to the machine's live context object. Optional so
existing StateMachine implementations remain valid;
TemplateStateMachine always provides it. Intended for
tooling/introspection (e.g. visualizers evaluating guards against
the current context) — mutate state through events, not through
this reference.

##### 戻り値

`Context`

#### 継承元

`TemplateStateMachine.context`

***

### currentState

#### 署名を取得する

> **get** **currentState**(): `States` \| `"INITIAL"` \| `"TERMINAL"`

定義: packages/being/dist/interface.d.ts:485

##### 戻り値

`States` \| `"INITIAL"` \| `"TERMINAL"`

#### 継承元

`TemplateStateMachine.currentState`

***

### possibleStates

#### 署名を取得する

> **get** **possibleStates**(): `States`[]

定義: packages/being/dist/interface.d.ts:488

##### 戻り値

`States`[]

#### 継承元

`TemplateStateMachine.possibleStates`

***

### states

#### 署名を取得する

> **get** **states**(): `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

定義: packages/being/dist/interface.d.ts:489

##### 戻り値

`Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### 継承元

`TemplateStateMachine.states`

## メソッド

### happens()

#### コールシグネチャ

> **happens**\<`K`\>(...`args`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義: packages/being/dist/interface.d.ts:480

##### 型パラメーター

###### K

`K` *extends* keyof [`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md)

##### パラメータ

###### args

...`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### 戻り値

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

##### 継承元

`TemplateStateMachine.happens`

#### コールシグネチャ

> **happens**\<`K`\>(...`args`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `unknown`\>

定義: packages/being/dist/interface.d.ts:481

##### 型パラメーター

###### K

`K` *extends* `string`

##### パラメータ

###### args

...`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### 戻り値

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `unknown`\>

##### 継承元

`TemplateStateMachine.happens`

***

### initateTransition()

> **initateTransition**(): `void`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:185](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L185)

Initiates transition to `TRANSITION` state.

#### 戻り値

`void`

#### Remarks

Forces state change to begin animation or transition sequence.
Called when starting programmatic camera movements.

***

### notifyRotateByInput()

> **notifyRotateByInput**(`diff`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:160](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L160)

Notifies the state machine of user rotation input.

#### パラメータ

##### diff

`number`

Rotation angle delta in radians

#### 戻り値

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Event handling result with output event

#### Remarks

Dispatches `userRotateByInput` event. Accepted in `ACCEPTING_USER_INPUT` and `TRANSITION` states,
where it may transition back to `ACCEPTING_USER_INPUT` (user interrupting animation).

***

### notifyRotateToAnimationInput()

> **notifyRotateToAnimationInput**(`target`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:174](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L174)

Initiates a rotation animation to a target angle.

#### パラメータ

##### target

`number`

Target rotation angle in radians

#### 戻り値

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionRotateToInput` event, starting a rotation animation.
Transitions to `TRANSITION` state where animation updates occur.

***

### onEventResult()

> **onEventResult**(`callback`): () => `void`

定義: packages/being/dist/interface.d.ts:484

Subscribe to every event result. Optional so existing StateMachine
implementations remain valid; TemplateStateMachine always
provides it. Returns a disposer on implementations that support one.
Disposing during a dispatch takes effect starting with the next
dispatch, not the one in progress — see EventResultCallback
for the exact snapshot-iteration semantics.

#### パラメータ

##### callback

`EventResultCallback`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

#### 戻り値

> (): `void`

##### 戻り値

`void`

#### 継承元

`TemplateStateMachine.onEventResult`

***

### onHappens()

> **onHappens**(`callback`): () => `void`

定義: packages/being/dist/interface.d.ts:483

Subscribe to every `happens()` call, before the state handles it.
Returns a disposer on implementations that support one. Disposing
during a dispatch takes effect starting with the next dispatch, not
the one in progress — see EventResultCallback for the exact
snapshot-iteration semantics.

#### パラメータ

##### callback

(`args`, `context`) => `void`

#### 戻り値

> (): `void`

##### 戻り値

`void`

#### 継承元

`TemplateStateMachine.onHappens`

***

### onStateChange()

> **onStateChange**(`callback`): () => `void`

定義: packages/being/dist/interface.d.ts:482

Subscribe to state changes. Returns a disposer on implementations that
support one. Disposing during a dispatch takes effect starting with
the next dispatch, not the one in progress — see
EventResultCallback for the exact snapshot-iteration semantics.

#### パラメータ

##### callback

`StateChangeCallback`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md)\>

#### 戻り値

> (): `void`

##### 戻り値

`void`

#### 継承元

`TemplateStateMachine.onStateChange`

***

### reset()

> **reset**(): `void`

定義: packages/being/dist/interface.d.ts:476

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine.reset`

***

### setContext()

> **setContext**(`context`): `void`

定義: packages/being/dist/interface.d.ts:486

#### パラメータ

##### context

`BaseContext`

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine.setContext`

***

### start()

> **start**(): `void`

定義: packages/being/dist/interface.d.ts:477

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine.start`

***

### switchTo()

> **switchTo**(`state`): `void`

定義: packages/being/dist/interface.d.ts:479

#### パラメータ

##### state

[`RotateControlStates`](../type-aliases/RotateControlStates.md) | `"INITIAL"` | `"TERMINAL"`

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine.switchTo`

***

### wrapup()

> **wrapup**(): `void`

定義: packages/being/dist/interface.d.ts:478

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine.wrapup`
