[@ue-too/board](../../modules.md) / [index](../index.md) / RotationTransitionState

# クラス: RotationTransitionState

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:264](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L264)

State implementation for rotation animations and transitions.
Processes animation updates and allows user input to interrupt.

## 拡張

- `TemplateState`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

## コンストラクター

### コンストラクター

> **new RotationTransitionState**(): `RotationTransitionState`

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:270](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L270)

#### 戻り値

`RotationTransitionState`

#### 上書き

`TemplateState< RotateEventPayloadMapping, BaseContext, RotateControlStates, RotateControlOutputMapping >.constructor`

## プロパティ

### \_defer

> `protected` **\_defer**: `Defer`\<`BaseContext`, [`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\> \| `undefined`

定義: packages/being/dist/interface.d.ts:581

#### 継承元

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<`BaseContext`, [`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\> \| `undefined`

定義: packages/being/dist/interface.d.ts:580

#### 継承元

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:578

#### 継承元

`TemplateState._eventGuards`

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:579

#### 継承元

`TemplateState._eventPreconditions`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:274](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L274)

#### 上書き

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

定義: packages/being/dist/interface.d.ts:577

#### 継承元

`TemplateState._guards`

## アクセッサー

### delay

#### 署名を取得する

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義: packages/being/dist/interface.d.ts:587

##### 戻り値

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 継承元

`TemplateState.delay`

***

### eventGuards

#### 署名を取得する

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:584

##### 戻り値

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### 継承元

`TemplateState.eventGuards`

***

### eventPreconditions

#### 署名を取得する

> **get** **eventPreconditions**(): `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:585

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; TemplateState always provides it.

##### 戻り値

`Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

#### 継承元

`TemplateState.eventPreconditions`

***

### eventReactions

#### 署名を取得する

> **get** **eventReactions**(): `EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義: packages/being/dist/interface.d.ts:586

##### 戻り値

`EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 継承元

`TemplateState.eventReactions`

***

### guards

#### 署名を取得する

> **get** **guards**(): `Guard`\<`Context`\>

定義: packages/being/dist/interface.d.ts:583

##### 戻り値

`Guard`\<`Context`\>

#### 継承元

`TemplateState.guards`

***

### handlingEvents

#### 署名を取得する

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義: packages/being/dist/interface.d.ts:582

##### 戻り値

keyof `EventPayloadMapping`[]

#### 継承元

`TemplateState.handlingEvents`

## メソッド

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

定義: packages/being/dist/interface.d.ts:589

#### パラメータ

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

##### to

[`RotateControlStates`](../type-aliases/RotateControlStates.md) | `"TERMINAL"`

#### 戻り値

`void`

#### 継承元

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義: packages/being/dist/interface.d.ts:590

#### 型パラメーター

##### K

`K` *extends* `string`

#### パラメータ

##### args

`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

#### 戻り値

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### 継承元

`TemplateState.handles`

***

### lockedOnObjectRotateByInputHandler()

> **lockedOnObjectRotateByInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:334](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L334)

#### パラメータ

##### context

`BaseContext`

##### payload

[`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)

#### 戻り値

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### lockedOnObjectRotateToInputHandler()

> **lockedOnObjectRotateToInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:341](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L341)

#### パラメータ

##### context

`BaseContext`

##### payload

[`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)

#### 戻り値

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### transitionRotateByInputHandler()

> **transitionRotateByInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:320](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L320)

#### パラメータ

##### context

`BaseContext`

##### payload

[`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)

#### 戻り値

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### transitionRotateToInputHandler()

> **transitionRotateToInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:327](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L327)

#### パラメータ

##### context

`BaseContext`

##### payload

[`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)

#### 戻り値

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

定義: packages/being/dist/interface.d.ts:588

#### パラメータ

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

##### from

[`RotateControlStates`](../type-aliases/RotateControlStates.md) | `"INITIAL"`

#### 戻り値

`void`

#### 継承元

`TemplateState.uponEnter`

***

### userRotateByInputHandler()

> **userRotateByInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:306](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L306)

#### パラメータ

##### context

`BaseContext`

##### payload

[`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)

#### 戻り値

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### userRotateToInputHandler()

> **userRotateToInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:313](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L313)

#### パラメータ

##### context

`BaseContext`

##### payload

[`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)

#### 戻り値

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)
