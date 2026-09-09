[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomTransitionState

# 類別: ZoomTransitionState

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:185](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L185)

State implementation for zoom animations and transitions.
Processes animation updates and allows user input to interrupt.

## Extends

- `TemplateState`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

## 建構函式

### 建構函式

> **new ZoomTransitionState**(): `ZoomTransitionState`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:191](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L191)

#### 回傳

`ZoomTransitionState`

#### 覆寫了

`TemplateState< ZoomEventPayloadMapping, BaseContext, ZoomControlStates, ZoomControlOutputMapping >.constructor`

## 屬性

### \_defer

> `protected` **\_defer**: `Defer`\<`BaseContext`, [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:581

#### 繼承自

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<`BaseContext`, [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:580

#### 繼承自

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義於: packages/being/dist/interface.d.ts:578

#### 繼承自

`TemplateState._eventGuards`

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

定義於: packages/being/dist/interface.d.ts:579

#### 繼承自

`TemplateState._eventPreconditions`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:195](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L195)

#### 覆寫了

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

定義於: packages/being/dist/interface.d.ts:577

#### 繼承自

`TemplateState._guards`

## 存取器

### delay

#### Getter 簽章

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:587

##### 回傳

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 繼承自

`TemplateState.delay`

***

### eventGuards

#### Getter 簽章

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義於: packages/being/dist/interface.d.ts:584

##### 回傳

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### 繼承自

`TemplateState.eventGuards`

***

### eventPreconditions

#### Getter 簽章

> **get** **eventPreconditions**(): `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

定義於: packages/being/dist/interface.d.ts:585

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; TemplateState always provides it.

##### 回傳

`Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

#### 繼承自

`TemplateState.eventPreconditions`

***

### eventReactions

#### Getter 簽章

> **get** **eventReactions**(): `EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義於: packages/being/dist/interface.d.ts:586

##### 回傳

`EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 繼承自

`TemplateState.eventReactions`

***

### guards

#### Getter 簽章

> **get** **guards**(): `Guard`\<`Context`\>

定義於: packages/being/dist/interface.d.ts:583

##### 回傳

`Guard`\<`Context`\>

#### 繼承自

`TemplateState.guards`

***

### handlingEvents

#### Getter 簽章

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義於: packages/being/dist/interface.d.ts:582

##### 回傳

keyof `EventPayloadMapping`[]

#### 繼承自

`TemplateState.handlingEvents`

## 方法

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

定義於: packages/being/dist/interface.d.ts:589

#### 參數

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

##### to

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md) | `"TERMINAL"`

#### 回傳

`void`

#### 繼承自

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義於: packages/being/dist/interface.d.ts:590

#### 型別參數

##### K

`K` *extends* `string`

#### 參數

##### args

`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

#### 回傳

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### 繼承自

`TemplateState.handles`

***

### lockedOnObjectZoomByAtInput()

> **lockedOnObjectZoomByAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:235](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L235)

#### 參數

##### context

`BaseContext`

##### payload

[`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)

#### 回傳

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### lockedOnObjectZoomToAtInput()

> **lockedOnObjectZoomToAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:242](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L242)

#### 參數

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### 回傳

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomByAtCenterInput()

> **transitionZoomByAtCenterInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:282](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L282)

#### 參數

##### context

`BaseContext`

##### payload

[`ZoomByPayload`](../type-aliases/ZoomByPayload.md)

#### 回傳

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomByAtInput()

> **transitionZoomByAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:271](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L271)

#### 參數

##### context

`BaseContext`

##### payload

[`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)

#### 回傳

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomToAtCenterInput()

> **transitionZoomToAtCenterInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:300](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L300)

#### 參數

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### 回傳

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomToAtInput()

> **transitionZoomToAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:289](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L289)

#### 參數

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### 回傳

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomToAtWorldInput()

> **transitionZoomToAtWorldInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:307](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L307)

#### 參數

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### 回傳

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

定義於: packages/being/dist/interface.d.ts:588

#### 參數

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

##### from

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md) | `"INITIAL"`

#### 回傳

`void`

#### 繼承自

`TemplateState.uponEnter`

***

### userZoomByAtInput()

> **userZoomByAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:249](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L249)

#### 參數

##### context

`BaseContext`

##### payload

[`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)

#### 回傳

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### userZoomToAtInput()

> **userZoomToAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:260](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L260)

#### 參數

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### 回傳

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)
