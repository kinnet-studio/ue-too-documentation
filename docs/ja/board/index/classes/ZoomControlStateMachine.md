[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomControlStateMachine

# クラス: ZoomControlStateMachine

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:436](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L436)

State machine controlling zoom input flow and animations.

## Remarks

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

## 例

```typescript
const stateMachine = createDefaultZoomControlStateMachine(cameraRig);

// User zooms - accepted in ACCEPTING_USER_INPUT state
const result = stateMachine.notifyZoomByAtInput(1.2, { x: 400, y: 300 });

// Start animation - transitions to TRANSITION state
stateMachine.notifyZoomToAtWorldInput(2.0, { x: 1000, y: 500 });

// User input now may interrupt animation
```

## 参照

[createDefaultZoomControlStateMachine](../functions/createDefaultZoomControlStateMachine.md) for factory function

## 拡張

- `TemplateStateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

## コンストラクター

### コンストラクター

> **new ZoomControlStateMachine**(`states`, `initialState`, `context`): `ZoomControlStateMachine`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:442](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L442)

#### パラメータ

##### states

`Record`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `State`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>\>

##### initialState

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

##### context

`BaseContext`

#### 戻り値

`ZoomControlStateMachine`

#### 上書き

`TemplateStateMachine< ZoomEventPayloadMapping, BaseContext, ZoomControlStates, ZoomControlOutputMapping >.constructor`

## プロパティ

### \_context

> `protected` **\_context**: `BaseContext`

定義: packages/being/dist/interface.d.ts:468

#### 継承元

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md) \| `"INITIAL"` \| `"TERMINAL"`

定義: packages/being/dist/interface.d.ts:466

#### 継承元

`TemplateStateMachine._currentState`

***

### \_eventResultCallbacks

> `protected` **\_eventResultCallbacks**: `EventResultCallback`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>[]

定義: packages/being/dist/interface.d.ts:472

#### 継承元

`TemplateStateMachine._eventResultCallbacks`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

定義: packages/being/dist/interface.d.ts:471

#### パラメータ

##### args

\[`"unlock"`\] | \[`string`, `unknown`\] | \[`"userZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"userZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"transitionZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomByAtCenterInput"`, [`ZoomByPayload`](../type-aliases/ZoomByPayload.md)\] | \[`"transitionZoomToAtCenterInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"transitionZoomToAtWorldInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"lockedOnObjectZoomByAtInput"`, [`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)\] | \[`"lockedOnObjectZoomToAtInput"`, [`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)\] | \[`"initiateTransition"`\]

##### context

`BaseContext`

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine._happensCallbacks`

***

### \_initialState

> `protected` **\_initialState**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)

定義: packages/being/dist/interface.d.ts:474

#### 継承元

`TemplateStateMachine._initialState`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>[]

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

> `protected` **\_statesArray**: [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)[]

定義: packages/being/dist/interface.d.ts:469

#### 継承元

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined`

定義: packages/being/dist/interface.d.ts:473

#### 継承元

`TemplateStateMachine._timeouts`

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

> **happens**\<`K`\>(...`args`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義: packages/being/dist/interface.d.ts:480

##### 型パラメーター

###### K

`K` *extends* keyof [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md)

##### パラメータ

###### args

...`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

##### 継承元

`TemplateStateMachine.happens`

#### コールシグネチャ

> **happens**\<`K`\>(...`args`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `unknown`\>

定義: packages/being/dist/interface.d.ts:481

##### 型パラメーター

###### K

`K` *extends* `string`

##### パラメータ

###### args

...`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `unknown`\>

##### 継承元

`TemplateStateMachine.happens`

***

### initateTransition()

> **initateTransition**(): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `void`\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:533](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L533)

Initiates transition to `TRANSITION` state.

#### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `void`\>

#### Remarks

Forces state change to begin animation or transition sequence.
Called when starting programmatic camera movements.

***

### notifyZoomByAtInput()

> **notifyZoomByAtInput**(`delta`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:468](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L468)

Notifies the state machine of user zoom input around an anchor point.

#### パラメータ

##### delta

`number`

Zoom delta (multiplier)

##### at

`Point`

Anchor point for zoom

#### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result with output event

#### Remarks

Dispatches `userZoomByAtInput` event. Accepted in `ACCEPTING_USER_INPUT` and `TRANSITION` states.

***

### notifyZoomByAtInputAnimation()

> **notifyZoomByAtInputAnimation**(`delta`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:485](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L485)

Initiates a zoom animation around an anchor point.

#### パラメータ

##### delta

`number`

Zoom delta (multiplier)

##### at

`Point`

Anchor point for zoom

#### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionZoomByAtInput` event, starting a zoom animation.

***

### notifyZoomToAtCenterInput()

> **notifyZoomToAtCenterInput**(`targetZoom`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:502](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L502)

Initiates a zoom animation to target level around center anchor.

#### パラメータ

##### targetZoom

`number`

Target zoom level

##### at

`Point`

Anchor point for zoom

#### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionZoomToAtCenterInput` event for center-anchored zoom animation.

***

### notifyZoomToAtWorldInput()

> **notifyZoomToAtWorldInput**(`targetZoom`, `at`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:519](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L519)

Initiates a zoom animation to target level around world anchor.

#### パラメータ

##### targetZoom

`number`

Target zoom level

##### at

`Point`

World anchor point for zoom

#### 戻り値

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionZoomToAtWorldInput` event for world-anchored zoom animation.

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

`EventResultCallback`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

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

`StateChangeCallback`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md)\>

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

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md) | `"INITIAL"` | `"TERMINAL"`

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
