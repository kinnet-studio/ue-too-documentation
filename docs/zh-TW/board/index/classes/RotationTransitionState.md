[@ue-too/board](../../modules.md) / [index](../index.md) / RotationTransitionState

# 類別: RotationTransitionState

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:264](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L264)

State implementation for rotation animations and transitions.
Processes animation updates and allows user input to interrupt.

## Extends

- `TemplateState`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

## 建構函式

### 建構函式

> **new RotationTransitionState**(): `RotationTransitionState`

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:270](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L270)

#### 回傳

`RotationTransitionState`

#### 覆寫了

`TemplateState< RotateEventPayloadMapping, BaseContext, RotateControlStates, RotateControlOutputMapping >.constructor`

## 屬性

### \_defer

> `protected` **\_defer**: `Defer`\<`BaseContext`, [`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:581

#### 繼承自

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<`BaseContext`, [`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\> \| `undefined`

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

> `protected` **\_eventReactions**: `EventReactions`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:274](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L274)

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

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

##### to

[`RotateControlStates`](../type-aliases/RotateControlStates.md) | `"TERMINAL"`

#### 回傳

`void`

#### 繼承自

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義於: packages/being/dist/interface.d.ts:590

#### 型別參數

##### K

`K` *extends* `string`

#### 參數

##### args

`EventArgs`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `K`\>

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

#### 回傳

`EventResult`\<[`RotateControlStates`](../type-aliases/RotateControlStates.md), `K` *extends* keyof [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md) ? [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### 繼承自

`TemplateState.handles`

***

### lockedOnObjectRotateByInputHandler()

> **lockedOnObjectRotateByInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:334](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L334)

#### 參數

##### context

`BaseContext`

##### payload

[`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)

#### 回傳

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### lockedOnObjectRotateToInputHandler()

> **lockedOnObjectRotateToInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:341](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L341)

#### 參數

##### context

`BaseContext`

##### payload

[`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)

#### 回傳

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### transitionRotateByInputHandler()

> **transitionRotateByInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:320](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L320)

#### 參數

##### context

`BaseContext`

##### payload

[`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)

#### 回傳

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### transitionRotateToInputHandler()

> **transitionRotateToInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:327](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L327)

#### 參數

##### context

`BaseContext`

##### payload

[`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)

#### 回傳

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

定義於: packages/being/dist/interface.d.ts:588

#### 參數

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`RotateEventPayloadMapping`](../type-aliases/RotateEventPayloadMapping.md), `BaseContext`, [`RotateControlStates`](../type-aliases/RotateControlStates.md), [`RotateControlOutputMapping`](../type-aliases/RotateControlOutputMapping.md)\>

##### from

[`RotateControlStates`](../type-aliases/RotateControlStates.md) | `"INITIAL"`

#### 回傳

`void`

#### 繼承自

`TemplateState.uponEnter`

***

### userRotateByInputHandler()

> **userRotateByInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:306](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L306)

#### 參數

##### context

`BaseContext`

##### payload

[`RotateByInputEventPayload`](../type-aliases/RotateByInputEventPayload.md)

#### 回傳

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

***

### userRotateToInputHandler()

> **userRotateToInputHandler**(`context`, `payload`): [`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)

定義於: [packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts:313](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/rotation-control-state-machine.ts#L313)

#### 參數

##### context

`BaseContext`

##### payload

[`RotateToInputEventPayload`](../type-aliases/RotateToInputEventPayload.md)

#### 回傳

[`RotateControlOutputEvent`](../type-aliases/RotateControlOutputEvent.md)
