[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputStateMachineWebWorkerProxy

# クラス: KmtInputStateMachineWebWorkerProxy

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:761](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L761)

## 拡張

- `TemplateStateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

## コンストラクター

### コンストラクター

> **new KmtInputStateMachineWebWorkerProxy**(`webworker`): `KmtInputStateMachineWebWorkerProxy`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:769](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L769)

#### パラメータ

##### webworker

`Worker`

#### 戻り値

`KmtInputStateMachineWebWorkerProxy`

#### 上書き

`TemplateStateMachine< KmtInputEventMapping, KmtInputContext, KmtInputStates, KmtInputEventOutputMapping >.constructor`

## プロパティ

### \_context

> `protected` **\_context**: [`KmtInputContext`](../interfaces/KmtInputContext.md)

定義: packages/being/dist/interface.d.ts:468

#### 継承元

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: `"INITIAL"` \| `"TERMINAL"` \| `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`

定義: packages/being/dist/interface.d.ts:466

#### 継承元

`TemplateStateMachine._currentState`

***

### \_eventResultCallbacks

> `protected` **\_eventResultCallbacks**: `EventResultCallback`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>[]

定義: packages/being/dist/interface.d.ts:472

#### 継承元

`TemplateStateMachine._eventResultCallbacks`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

定義: packages/being/dist/interface.d.ts:471

#### パラメータ

##### args

\[`string`, `unknown`\] | \[`"leftPointerDown"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"leftPointerUp"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"leftPointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"spacebarDown"`\] | \[`"spacebarUp"`\] | \[`"escapeKey"`\] | \[`"stayIdle"`\] | \[`"cursorOnElement"`\] | \[`"scroll"`, [`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)\] | \[`"scrollWithCtrl"`, [`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)\] | \[`"middlePointerDown"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"middlePointerUp"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"middlePointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"disable"`\] | \[`"enable"`\] | \[`"pointerMove"`, [`PointerEventPayload`](../type-aliases/PointerEventPayload.md)\] | \[`"arrowUp"`\] | \[`"arrowDown"`\] | \[`"F"`\] | \[`"G"`\] | \[`"Q"`\]

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### 戻り値

`void`

#### 継承元

`TemplateStateMachine._happensCallbacks`

***

### \_initialState

> `protected` **\_initialState**: `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`

定義: packages/being/dist/interface.d.ts:474

#### 継承元

`TemplateStateMachine._initialState`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>[]

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

> `protected` **\_statesArray**: (`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`)[]

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

> **happens**(...`args`): `EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:786](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L786)

#### パラメータ

##### args

...\[`string`, `unknown`\]

#### 戻り値

`EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

#### 上書き

`TemplateStateMachine.happens`

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

`EventResultCallback`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

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

`StateChangeCallback`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`\>

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

[`KmtInputContext`](../interfaces/KmtInputContext.md)

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

`"INITIAL"` | `"TERMINAL"` | `"IDLE"` | `"READY_TO_PAN_VIA_SPACEBAR"` | `"READY_TO_PAN_VIA_SCROLL_WHEEL"` | `"PAN"` | `"INITIAL_PAN"` | `"PAN_VIA_SCROLL_WHEEL"` | `"DISABLED"`

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
