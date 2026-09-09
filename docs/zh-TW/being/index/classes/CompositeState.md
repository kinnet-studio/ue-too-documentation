[@ue-too/being](../../modules.md) / [index](../index.md) / CompositeState

# 抽象 類別: CompositeState\<EventPayloadMapping, Context, ParentStates, ChildStates, EventOutputMapping\>

定義於: [hierarchical.ts:106](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L106)

Composite state that contains a child state machine.

## 備註

A composite state is a state that contains its own internal state machine.
When the composite state is active, its child state machine is also active.
Events are first handled by the child state machine, and if unhandled,
they bubble up to the parent state machine.

## 範例

```typescript
type ParentStates = "IDLE" | "ACTIVE";
type ChildStates = "LOADING" | "READY" | "ERROR";

class ActiveState extends CompositeState<Events, Context, ParentStates, ChildStates> {
  eventReactions = {
    stop: {
      action: () => console.log("Stopping..."),
      defaultTargetState: "IDLE"
    }
  };

  getChildStateMachine() {
    return {
      stateMachine: new TemplateStateMachine(...),
      defaultChildState: "LOADING",
      rememberHistory: true
    };
  }
}
```

## Extends

- [`TemplateState`](TemplateState.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

## 型別參數

### EventPayloadMapping

`EventPayloadMapping` = `any`

Event payload mapping

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md) = [`BaseContext`](../interfaces/BaseContext.md)

Context type

### ParentStates

`ParentStates` *extends* `string` = `string`

Parent state names

### ChildStates

`ChildStates` *extends* `string` = `string`

Child state names

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

Event output mapping

## 建構函式

### 建構函式

> **new CompositeState**\<`EventPayloadMapping`, `Context`, `ParentStates`, `ChildStates`, `EventOutputMapping`\>(): `CompositeState`\<`EventPayloadMapping`, `Context`, `ParentStates`, `ChildStates`, `EventOutputMapping`\>

#### 回傳

`CompositeState`\<`EventPayloadMapping`, `Context`, `ParentStates`, `ChildStates`, `EventOutputMapping`\>

#### 繼承自

[`TemplateState`](TemplateState.md).[`constructor`](TemplateState.md#constructor)

## 屬性

### \_childStateMachineConfig

> `protected` **\_childStateMachineConfig**: [`ChildStateMachineConfig`](../interfaces/ChildStateMachineConfig.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\> \| `null` = `null`

定義於: [hierarchical.ts:120](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L120)

***

### \_context

> `protected` **\_context**: `Context` \| `null` = `null`

定義於: [hierarchical.ts:127](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L127)

***

### \_defer

> `protected` **\_defer**: [`Defer`](../type-aliases/Defer.md)\<`Context`, `EventPayloadMapping`, `ParentStates`, `EventOutputMapping`\> \| `undefined` = `undefined`

定義於: [interface.ts:1007](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L1007)

#### 繼承自

[`TemplateState`](TemplateState.md).[`_defer`](TemplateState.md#defer)

***

### \_delay

> `protected` **\_delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `ParentStates`, `EventOutputMapping`\> \| `undefined` = `undefined`

定義於: [interface.ts:1003](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L1003)

#### 繼承自

[`TemplateState`](TemplateState.md).[`_delay`](TemplateState.md#delay)

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義於: [interface.ts:993](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L993)

#### 繼承自

[`TemplateState`](TemplateState.md).[`_eventGuards`](TemplateState.md#eventguards)

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義於: [interface.ts:998](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L998)

#### 繼承自

[`TemplateState`](TemplateState.md).[`_eventPreconditions`](TemplateState.md#eventpreconditions)

***

### \_eventReactions

> `protected` **\_eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義於: [interface.ts:981](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L981)

#### 繼承自

[`TemplateState`](TemplateState.md).[`_eventReactions`](TemplateState.md#eventreactions)

***

### \_guards

> `protected` **\_guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

定義於: [interface.ts:992](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L992)

#### 繼承自

[`TemplateState`](TemplateState.md).[`_guards`](TemplateState.md#guards)

***

### \_historyState

> `protected` **\_historyState**: `ChildStates` \| `null` = `null`

定義於: [hierarchical.ts:126](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L126)

## 存取器

### delay

#### Getter 簽章

> **get** **delay**(): [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義於: [interface.ts:1042](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L1042)

##### 回傳

[`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 繼承自

[`TemplateState`](TemplateState.md).[`delay`](TemplateState.md#delay)

***

### eventGuards

#### Getter 簽章

> **get** **eventGuards**(): `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義於: [interface.ts:1021](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L1021)

##### 回傳

`Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

#### 繼承自

[`TemplateState`](TemplateState.md).[`eventGuards`](TemplateState.md#eventguards)

***

### eventPreconditions

#### Getter 簽章

> **get** **eventPreconditions**(): `Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義於: [interface.ts:1027](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L1027)

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; [TemplateState](TemplateState.md) always provides it.

##### 回傳

`Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; [TemplateState](TemplateState.md) always provides it.

#### 繼承自

[`TemplateState`](TemplateState.md).[`eventPreconditions`](TemplateState.md#eventpreconditions)

***

### eventReactions

#### Getter 簽章

> **get** **eventReactions**(): [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義於: [interface.ts:1033](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L1033)

##### 回傳

[`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 繼承自

[`TemplateState`](TemplateState.md).[`eventReactions`](TemplateState.md#eventreactions)

***

### guards

#### Getter 簽章

> **get** **guards**(): [`Guard`](../type-aliases/Guard.md)\<`Context`\>

定義於: [interface.ts:1017](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L1017)

##### 回傳

[`Guard`](../type-aliases/Guard.md)\<`Context`\>

#### 繼承自

[`TemplateState`](TemplateState.md).[`guards`](TemplateState.md#guards)

***

### handlingEvents

#### Getter 簽章

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義於: [interface.ts:1011](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L1011)

##### 回傳

keyof `EventPayloadMapping`[]

#### 繼承自

[`TemplateState`](TemplateState.md).[`handlingEvents`](TemplateState.md#handlingevents)

## 方法

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

定義於: [hierarchical.ts:217](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L217)

#### 參數

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

##### to

`"TERMINAL"` | `ParentStates`

#### 回傳

`void`

#### 覆寫了

[`TemplateState`](TemplateState.md).[`beforeExit`](TemplateState.md#beforeexit)

***

### getChildStateMachine()

> `abstract` `protected` **getChildStateMachine**(): [`ChildStateMachineConfig`](../interfaces/ChildStateMachineConfig.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\>

定義於: [hierarchical.ts:133](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L133)

Returns the configuration for the child state machine.
Override this method to provide child state machine setup.

#### 回傳

[`ChildStateMachineConfig`](../interfaces/ChildStateMachineConfig.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\>

***

### getCurrentChildState()

> **getCurrentChildState**(): `ChildStates` \| `null`

定義於: [hierarchical.ts:143](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L143)

Gets the current child state, or null if no child state machine is active.

#### 回傳

`ChildStates` \| `null`

***

### getStatePath()

> **getStatePath**(`parentState`): [`HierarchicalStatePath`](../type-aliases/HierarchicalStatePath.md)\<`ParentStates`, `ChildStates`\>

定義於: [hierarchical.ts:164](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L164)

Gets the full hierarchical path of the current state.

#### 參數

##### parentState

`ParentStates`

#### 回傳

[`HierarchicalStatePath`](../type-aliases/HierarchicalStatePath.md)\<`ParentStates`, `ChildStates`\>

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): [`EventResult`](../type-aliases/EventResult.md)\<`ParentStates`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

定義於: [hierarchical.ts:255](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L255)

#### 型別參數

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### 參數

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

#### 回傳

[`EventResult`](../type-aliases/EventResult.md)\<`ParentStates`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

#### 覆寫了

[`TemplateState`](TemplateState.md).[`handles`](TemplateState.md#handles)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

定義於: [hierarchical.ts:177](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/hierarchical.ts#L177)

#### 參數

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

##### from

`"INITIAL"` | `ParentStates`

#### 回傳

`void`

#### 覆寫了

[`TemplateState`](TemplateState.md).[`uponEnter`](TemplateState.md#uponenter)
