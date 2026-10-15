[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomControlStateMachine

# 類別: ZoomControlStateMachine

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:436](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L436)

State machine controlling zoom input flow and animations.

## 備註

This state machine manages the lifecycle of zoom operations:
- **User input handling**: Accepts or blocks user zoom gestures based on state
- **Animation control**: Manages smooth zoom-to animations
- **Object tracking**: Supports locking camera to follow objects with zoom

**State transitions:**
- `ACCEPTING_USER_INPUT` → `TRANSITION`: Start animation (`initiateTransition`)
- `ACCEPTING_USER_INPUT` → `LOCKED_ON_OBJECT`: Lock to object (`lockedOnObjectZoom...`)
- `TRANSITION` → `ACCEPTING_USER_INPUT`: User input interrupts animation
- `LOCKED_ON_OBJECT` → `ACCEPTING_USER_INPUT`: User input unlocks

Helper methods simplify event dispatching without memorizing event names.

## 範例

```typescript
const stateMachine = createDefaultZoomControlStateMachine(cameraRig);

// User zooms - accepted in ACCEPTING_USER_INPUT state
const result = stateMachine.notifyZoomByAtInput(1.2, { x: 400, y: 300 });

// Start animation - transitions to TRANSITION state
stateMachine.notifyZoomToAtWorldInput(2.0, { x: 1000, y: 500 });

// User input now may interrupt animation
```

## 參閱

[createDefaultZoomControlStateMachine](../functions/createDefaultZoomControlStateMachine.md) for factory function

## Extends

- `TemplateStateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

## 建構函式

### 建構函式

> **new ZoomControlStateMachine**(`states`, `initialState`, `context`): `ZoomControlStateMachine`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:442](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L442)

#### 參數

##### states

`Record`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `State`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>\>

##### initialState

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

##### context

`BaseContext`

#### 回傳

`ZoomControlStateMachine`

#### 覆寫了

`TemplateStateMachine< ZoomEventPayloadMapping, BaseContext, ZoomControlStates, ZoomControlOutputMapping >.constructor`

## 屬性

### \_context

> `protected` **\_context**: `BaseContext`

定義於: packages/being/dist/interface.d.ts:468

#### 繼承自

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md) \| `"INITIAL"` \| `"TERMINAL"`

定義於: packages/being/dist/interface.d.ts:466

#### 繼承自

`TemplateStateMachine._currentState`

***

### \_eventResultCallbacks

> `protected` **\_eventResultCallbacks**: `EventResultCallback`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>[]

定義於: packages/being/dist/interface.d.ts:472

#### 繼承自

`TemplateStateMachine._eventResultCallbacks`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

定義於: packages/being/dist/interface.d.ts:471

#### 參數

##### args

\[`"unlock"`\] | \[`string`, `unknown`\] | \[`"userZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"userZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"transitionZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomByAtCenterInput"`, [`ZoomByPayload`](../type-aliases/ZoomByPayload.md)\] | \[`"transitionZoomToAtCenterInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomToAtWorldInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"lockedOnObjectZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"lockedOnObjectZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"initiateTransition"`\]

##### context

`BaseContext`

#### 回傳

`void`

#### 繼承自

`TemplateStateMachine._happensCallbacks`

***

### \_initialState

> `protected` **\_initialState**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

定義於: packages/being/dist/interface.d.ts:474

#### 繼承自

`TemplateStateMachine._initialState`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>[]

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

> `protected` **\_statesArray**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)[]

定義於: packages/being/dist/interface.d.ts:469

#### 繼承自

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined`

定義於: packages/being/dist/interface.d.ts:473

#### 繼承自

`TemplateStateMachine._timeouts`

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

> **happens**\<`K`\>(...`args`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義於: packages/being/dist/interface.d.ts:480

##### 型別參數

###### K

`K` *extends* keyof [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md)

##### 參數

###### args

...`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### 回傳

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

##### 繼承自

`TemplateStateMachine.happens`

#### 呼叫簽章

> **happens**\<`K`\>(...`args`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `unknown`\>

定義於: packages/being/dist/interface.d.ts:481

##### 型別參數

###### K

`K` *extends* `string`

##### 參數

###### args

...`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### 回傳

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `unknown`\>

##### 繼承自

`TemplateStateMachine.happens`

***

### initateTransition()

> **initateTransition**(): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `void`\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:533](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L533)

Initiates transition to `TRANSITION` state.

#### 回傳

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `void`\>

#### 備註

Forces state change to begin animation or transition sequence.
Called when starting programmatic camera movements.

***

### notifyZoomByAtInput()

> **notifyZoomByAtInput**(`delta`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:468](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L468)

Notifies the state machine of user zoom input around an anchor point.

#### 參數

##### delta

`number`

Zoom delta (multiplier)

##### at

`Point`

Anchor point for zoom

#### 回傳

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result with output event

#### 備註

Dispatches `userZoomByAtInput` event. Accepted in `ACCEPTING_USER_INPUT` and `TRANSITION` states.

***

### notifyZoomByAtInputAnimation()

> **notifyZoomByAtInputAnimation**(`delta`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:485](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L485)

Initiates a zoom animation around an anchor point.

#### 參數

##### delta

`number`

Zoom delta (multiplier)

##### at

`Point`

Anchor point for zoom

#### 回傳

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result

#### 備註

Dispatches `transitionZoomByAtInput` event, starting a zoom animation.

***

### notifyZoomToAtCenterInput()

> **notifyZoomToAtCenterInput**(`targetZoom`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:502](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L502)

Initiates a zoom animation to target level around center anchor.

#### 參數

##### targetZoom

`number`

Target zoom level

##### at

`Point`

Anchor point for zoom

#### 回傳

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result

#### 備註

Dispatches `transitionZoomToAtCenterInput` event for center-anchored zoom animation.

***

### notifyZoomToAtWorldInput()

> **notifyZoomToAtWorldInput**(`targetZoom`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:519](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L519)

Initiates a zoom animation to target level around world anchor.

#### 參數

##### targetZoom

`number`

Target zoom level

##### at

`Point`

World anchor point for zoom

#### 回傳

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result

#### 備註

Dispatches `transitionZoomToAtWorldInput` event for world-anchored zoom animation.

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

`EventResultCallback`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

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

`StateChangeCallback`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

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

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md) | `"INITIAL"` | `"TERMINAL"`

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
