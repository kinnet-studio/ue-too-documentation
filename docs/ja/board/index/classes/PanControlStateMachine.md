[@ue-too/board](../../modules.md) / [index](../index.md) / PanControlStateMachine

# クラス: PanControlStateMachine

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:129](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L129)

State machine controlling pan input flow and animations.

## Remarks

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

## 例

```typescript
const stateMachine = createDefaultPanControlStateMachine(cameraRig);

// User pans - accepted in ACCEPTING_USER_INPUT state
const result = stateMachine.notifyPanInput({ x: 50, y: 30 });

// Start animation - transitions to TRANSITION state
stateMachine.notifyPanToAnimationInput({ x: 1000, y: 500 });

// User input now blocked while animating
```

## 参照

[createDefaultPanControlStateMachine](../functions/createDefaultPanControlStateMachine.md) for factory function

## 拡張

- `TemplateStateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

## コンストラクター

### コンストラクター

> **new PanControlStateMachine**(`states`, `initialState`, `context`): `PanControlStateMachine`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:135](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L135)

#### パラメータ

##### states

`Record`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `State`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>\>

##### initialState

[`PanControlStates`](../type-aliases/PanControlStates.md)

##### context

`BaseContext`

#### 戻り値

`PanControlStateMachine`

#### 上書き

`TemplateStateMachine< PanEventPayloadMapping, BaseContext, PanControlStates, PanControlOutputMapping >.constructor`

## プロパティ

### \_context

> `protected` **\_context**: `BaseContext`

定義: packages/being/dist/interface.d.ts:468

#### 継承元

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`PanControlStates`](../type-aliases/PanControlStates.md) \| `"INITIAL"` \| `"TERMINAL"`

定義: packages/being/dist/interface.d.ts:466

#### 継承元

`TemplateStateMachine._currentState`

***

### \_eventResultCallbacks

> `protected` **\_eventResultCallbacks**: `EventResultCallback`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md)\>[]

定義: packages/being/dist/interface.d.ts:472

#### 継承元

`TemplateStateMachine._eventResultCallbacks`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

定義: packages/being/dist/interface.d.ts:471

#### パラメータ

##### args

\[`"unlock"`\] | \[`"initateTransition"`\] | \[`"userPanByInput"`, [`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)\] | \[`"userPanToInput"`, [`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)\] | \[`"transitionPanByInput"`, [`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)\] | \[`"transitionPanToInput"`, [`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)\] | \[`"lockedOnObjectPanByInput"`, [`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)\] | \[`"lockedOnObjectPanToInput"`, [`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)\] | \[`string`, `unknown`\]

##### context

`BaseContext`

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine._happensCallbacks`

***

### \_initialState

> `protected` **\_initialState**: [`PanControlStates`](../type-aliases/PanControlStates.md)

定義: packages/being/dist/interface.d.ts:474

#### 継承元

`TemplateStateMachine._initialState`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>[]

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

> `protected` **\_statesArray**: [`PanControlStates`](../type-aliases/PanControlStates.md)[]

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

> **happens**\<`K`\>(...`args`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `K` *extends* keyof [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md) ? [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義: packages/being/dist/interface.d.ts:480

##### 型パラメーター

###### K

`K` *extends* keyof [`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md)

##### パラメータ

###### args

...`EventArgs`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `K`\>

##### 戻り値

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `K` *extends* keyof [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md) ? [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

##### 継承元

`TemplateStateMachine.happens`

#### コールシグネチャ

> **happens**\<`K`\>(...`args`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `unknown`\>

定義: packages/being/dist/interface.d.ts:481

##### 型パラメーター

###### K

`K` *extends* `string`

##### パラメータ

###### args

...`EventArgs`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `K`\>

##### 戻り値

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `unknown`\>

##### 継承元

`TemplateStateMachine.happens`

***

### initateTransition()

> **initateTransition**(): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `void`\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:186](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L186)

Initiates transition to `TRANSITION` state.

#### 戻り値

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `void`\>

#### Remarks

Forces state change to begin animation or transition sequence.
Called when starting programmatic camera movements.

***

### notifyPanInput()

> **notifyPanInput**(`diff`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:161](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L161)

Notifies the state machine of user pan input.

#### パラメータ

##### diff

`Point`

Pan displacement in viewport coordinates

#### 戻り値

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)\>

Event handling result with output event

#### Remarks

Dispatches `userPanByInput` event. Accepted in `ACCEPTING_USER_INPUT` and `TRANSITION` states,
where it may transition back to `ACCEPTING_USER_INPUT` (user interrupting animation).

***

### notifyPanToAnimationInput()

> **notifyPanToAnimationInput**(`target`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:175](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L175)

Initiates a pan animation to a target position.

#### パラメータ

##### target

`Point`

Target position in world coordinates

#### 戻り値

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionPanToInput` event, starting a pan animation.
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

`EventResultCallback`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md)\>

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

`StateChangeCallback`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>

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

[`PanControlStates`](../type-aliases/PanControlStates.md) | `"INITIAL"` | `"TERMINAL"`

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
