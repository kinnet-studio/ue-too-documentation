[@ue-too/board](../../modules.md) / [index](../index.md) / PanControlStateMachine

# 類別: PanControlStateMachine

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:129](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L129)

State machine controlling pan input flow and animations.

## 備註

This state machine manages the lifecycle of pan operations:
- **User input handling**: Accepts or blocks user pan gestures based on state
- **Animation control**: Manages smooth pan-to animations
- **Object tracking**: Supports locking camera to follow objects

**State transitions:**
- `ACCEPTING_USER_INPUT` → `TRANSITION`: Start animation (`initateTransition`)
- `ACCEPTING_USER_INPUT` → `LOCKED_ON_OBJECT`: Lock to object (`lockedOnObjectPan...`)
- `TRANSITION` → `ACCEPTING_USER_INPUT`: User input interrupts animation
- `LOCKED_ON_OBJECT` → `ACCEPTING_USER_INPUT`: Unlock (`unlock` event)

Helper methods simplify event dispatching without memorizing event names.

## 範例

```typescript
const stateMachine = createDefaultPanControlStateMachine(cameraRig);

// User pans - accepted in ACCEPTING_USER_INPUT state
const result = stateMachine.notifyPanInput({ x: 50, y: 30 });

// Start animation - transitions to TRANSITION state
stateMachine.notifyPanToAnimationInput({ x: 1000, y: 500 });

// User input now blocked while animating
```

## 參閱

[createDefaultPanControlStateMachine](../functions/createDefaultPanControlStateMachine.md) for factory function

## Extends

- `TemplateStateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

## 建構函式

### 建構函式

> **new PanControlStateMachine**(`states`, `initialState`, `context`): `PanControlStateMachine`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:135](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L135)

#### 參數

##### states

`Record`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `State`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>\>

##### initialState

[`PanControlStates`](../type-aliases/PanControlStates.md)

##### context

`BaseContext`

#### 回傳

`PanControlStateMachine`

#### 覆寫了

`TemplateStateMachine< PanEventPayloadMapping, BaseContext, PanControlStates, PanControlOutputMapping >.constructor`

## 屬性

### \_context

> `protected` **\_context**: `BaseContext`

定義於: packages/being/dist/interface.d.ts:468

#### 繼承自

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`PanControlStates`](../type-aliases/PanControlStates.md) \| `"INITIAL"` \| `"TERMINAL"`

定義於: packages/being/dist/interface.d.ts:466

#### 繼承自

`TemplateStateMachine._currentState`

***

### \_eventResultCallbacks

> `protected` **\_eventResultCallbacks**: `EventResultCallback`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md)\>[]

定義於: packages/being/dist/interface.d.ts:472

#### 繼承自

`TemplateStateMachine._eventResultCallbacks`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

定義於: packages/being/dist/interface.d.ts:471

#### 參數

##### args

\[`"unlock"`\] | \[`"initateTransition"`\] | \[`"userPanByInput"`, [`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)\] | \[`"userPanToInput"`, [`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)\] | \[`"transitionPanByInput"`, [`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)\] | \[`"transitionPanToInput"`, [`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)\] | \[`"lockedOnObjectPanByInput"`, [`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)\] | \[`"lockedOnObjectPanToInput"`, [`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)\] | \[`string`, `unknown`\]

##### context

`BaseContext`

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine._happensCallbacks`

***

### \_initialState

> `protected` **\_initialState**: [`PanControlStates`](../type-aliases/PanControlStates.md)

定義於: packages/being/dist/interface.d.ts:474

#### 繼承自

`TemplateStateMachine._initialState`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>[]

定義於: packages/being/dist/interface.d.ts:470

#### 繼承自

`TemplateStateMachine._stateChangeCallbacks`

***

### \_states

> `protected` **\_states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

定義於: packages/being/dist/interface.d.ts:467

#### 繼承自

`TemplateStateMachine._states`

***

### \_statesArray

> `protected` **\_statesArray**: [`PanControlStates`](../type-aliases/PanControlStates.md)[]

定義於: packages/being/dist/interface.d.ts:469

#### 繼承自

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined`

定義於: packages/being/dist/interface.d.ts:473

#### 繼承自

[`KmtInputStateMachineWebWorkerProxy`](KmtInputStateMachineWebWorkerProxy.md).[`_timeouts`](KmtInputStateMachineWebWorkerProxy.md#timeouts)

## 存取器

### context

#### Getter 簽章

> **get** **context**(): `Context`

定義於: packages/being/dist/interface.d.ts:487

Read-only access to the machine's live context object. Optional so
existing StateMachine implementations remain valid;
TemplateStateMachine always provides it. Intended for
tooling/introspection (e.g. visualizers evaluating guards against
the current context) — mutate state through events, not through
this reference.

##### 回傳

`Context`

#### 繼承自

`TemplateStateMachine.context`

***

### currentState

#### Getter 簽章

> **get** **currentState**(): `States` \| `"INITIAL"` \| `"TERMINAL"`

定義於: packages/being/dist/interface.d.ts:485

##### 回傳

`States` \| `"INITIAL"` \| `"TERMINAL"`

#### 繼承自

`TemplateStateMachine.currentState`

***

### possibleStates

#### Getter 簽章

> **get** **possibleStates**(): `States`[]

定義於: packages/being/dist/interface.d.ts:488

##### 回傳

`States`[]

#### 繼承自

`TemplateStateMachine.possibleStates`

***

### states

#### Getter 簽章

> **get** **states**(): `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

定義於: packages/being/dist/interface.d.ts:489

##### 回傳

`Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### 繼承自

`TemplateStateMachine.states`

## 方法

### happens()

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `K` *extends* keyof [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md) ? [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義於: packages/being/dist/interface.d.ts:480

##### 型別參數

###### K

`K` *extends* keyof [`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md)

##### 參數

###### args

...`EventArgs`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `K`\>

##### 回傳

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `K` *extends* keyof [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md) ? [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

##### 繼承自

`TemplateStateMachine.happens`

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `unknown`\>

定義於: packages/being/dist/interface.d.ts:481

##### 型別參數

###### K

`K` *extends* `string`

##### 參數

###### args

...`EventArgs`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `K`\>

##### 回傳

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `unknown`\>

##### 繼承自

`TemplateStateMachine.happens`

***

### initateTransition()

> **initateTransition**(): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `void`\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:186](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L186)

Initiates transition to `TRANSITION` state.

#### 回傳

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `void`\>

#### 備註

Forces state change to begin animation or transition sequence.
Called when starting programmatic camera movements.

***

### notifyPanInput()

> **notifyPanInput**(`diff`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:161](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L161)

Notifies the state machine of user pan input.

#### 參數

##### diff

`Point`

Pan displacement in viewport coordinates

#### 回傳

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)\>

Event handling result with output event

#### 備註

Dispatches `userPanByInput` event. Accepted in `ACCEPTING_USER_INPUT` and `TRANSITION` states,
where it may transition back to `ACCEPTING_USER_INPUT` (user interrupting animation).

***

### notifyPanToAnimationInput()

> **notifyPanToAnimationInput**(`target`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:175](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L175)

Initiates a pan animation to a target position.

#### 參數

##### target

`Point`

Target position in world coordinates

#### 回傳

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)\>

Event handling result

#### 備註

Dispatches `transitionPanToInput` event, starting a pan animation.
Transitions to `TRANSITION` state where animation updates occur.

***

### onEventResult()

> **onEventResult**(`callback`): () => `void`

定義於: packages/being/dist/interface.d.ts:484

Subscribe to every event result. Optional so existing StateMachine
implementations remain valid; TemplateStateMachine always
provides it. Returns a disposer on implementations that support one.
Disposing during a dispatch takes effect starting with the next
dispatch, not the one in progress — see EventResultCallback
for the exact snapshot-iteration semantics.

#### 參數

##### callback

`EventResultCallback`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md)\>

#### 回傳

> (): `void`

##### 回傳

`void`

#### 繼承自

`TemplateStateMachine.onEventResult`

***

### onHappens()

> **onHappens**(`callback`): () => `void`

定義於: packages/being/dist/interface.d.ts:483

Subscribe to every `happens()` call, before the state handles it.
Returns a disposer on implementations that support one. Disposing
during a dispatch takes effect starting with the next dispatch, not
the one in progress — see EventResultCallback for the exact
snapshot-iteration semantics.

#### 參數

##### callback

(`args`, `context`) => `void`

#### 回傳

> (): `void`

##### 回傳

`void`

#### 繼承自

`TemplateStateMachine.onHappens`

***

### onStateChange()

> **onStateChange**(`callback`): () => `void`

定義於: packages/being/dist/interface.d.ts:482

Subscribe to state changes. Returns a disposer on implementations that
support one. Disposing during a dispatch takes effect starting with
the next dispatch, not the one in progress — see
EventResultCallback for the exact snapshot-iteration semantics.

#### 參數

##### callback

`StateChangeCallback`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>

#### 回傳

> (): `void`

##### 回傳

`void`

#### 繼承自

`TemplateStateMachine.onStateChange`

***

### reset()

> **reset**(): `void`

定義於: packages/being/dist/interface.d.ts:476

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine.reset`

***

### setContext()

> **setContext**(`context`): `void`

定義於: packages/being/dist/interface.d.ts:486

#### 參數

##### context

`BaseContext`

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine.setContext`

***

### start()

> **start**(): `void`

定義於: packages/being/dist/interface.d.ts:477

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine.start`

***

### switchTo()

> **switchTo**(`state`): `void`

定義於: packages/being/dist/interface.d.ts:479

#### 參數

##### state

[`PanControlStates`](../type-aliases/PanControlStates.md) | `"INITIAL"` | `"TERMINAL"`

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine.switchTo`

***

### wrapup()

> **wrapup**(): `void`

定義於: packages/being/dist/interface.d.ts:478

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine.wrapup`
