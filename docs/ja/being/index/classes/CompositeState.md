[@ue-too/being](../../modules.md) / [index](../index.md) / CompositeState

# 抽象 クラス: CompositeState\<EventPayloadMapping, Context, ParentStates, ChildStates, EventOutputMapping\>

定義: [hierarchical.ts:106](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L106)

Composite state that contains a child state machine.

## Remarks

A composite state is a state that contains its own internal state machine.
When the composite state is active, its child state machine is also active.
Events are first handled by the child state machine, and if unhandled,
they bubble up to the parent state machine.

## 例

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

## 拡張

- [`TemplateState`](TemplateState.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

## 型パラメーター

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

## コンストラクター

### コンストラクター

> **new CompositeState**\<`EventPayloadMapping`, `Context`, `ParentStates`, `ChildStates`, `EventOutputMapping`\>(): `CompositeState`\<`EventPayloadMapping`, `Context`, `ParentStates`, `ChildStates`, `EventOutputMapping`\>

#### 戻り値

`CompositeState`\<`EventPayloadMapping`, `Context`, `ParentStates`, `ChildStates`, `EventOutputMapping`\>

#### 継承元

[`TemplateState`](TemplateState.md).[`constructor`](TemplateState.md#constructor)

## プロパティ

### \_childStateMachineConfig

> `protected` **\_childStateMachineConfig**: [`ChildStateMachineConfig`](../interfaces/ChildStateMachineConfig.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\> \| `null` = `null`

定義: [hierarchical.ts:120](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L120)

***

### \_context

> `protected` **\_context**: `Context` \| `null` = `null`

定義: [hierarchical.ts:127](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L127)

***

### \_defer

> `protected` **\_defer**: [`Defer`](../type-aliases/Defer.md)\<`Context`, `EventPayloadMapping`, `ParentStates`, `EventOutputMapping`\> \| `undefined` = `undefined`

定義: [interface.ts:1007](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L1007)

#### 継承元

[`TemplateState`](TemplateState.md).[`_defer`](TemplateState.md#defer)

***

### \_delay

> `protected` **\_delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `ParentStates`, `EventOutputMapping`\> \| `undefined` = `undefined`

定義: [interface.ts:1003](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L1003)

#### 継承元

[`TemplateState`](TemplateState.md).[`_delay`](TemplateState.md#delay)

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義: [interface.ts:993](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L993)

#### 継承元

[`TemplateState`](TemplateState.md).[`_eventGuards`](TemplateState.md#eventguards)

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義: [interface.ts:998](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L998)

#### 継承元

[`TemplateState`](TemplateState.md).[`_eventPreconditions`](TemplateState.md#eventpreconditions)

***

### \_eventReactions

> `protected` **\_eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義: [interface.ts:981](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L981)

#### 継承元

[`TemplateState`](TemplateState.md).[`_eventReactions`](TemplateState.md#eventreactions)

***

### \_guards

> `protected` **\_guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

定義: [interface.ts:992](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L992)

#### 継承元

[`TemplateState`](TemplateState.md).[`_guards`](TemplateState.md#guards)

***

### \_historyState

> `protected` **\_historyState**: `ChildStates` \| `null` = `null`

定義: [hierarchical.ts:126](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L126)

## アクセッサー

### delay

#### 署名を取得する

> **get** **delay**(): [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義: [interface.ts:1042](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L1042)

##### 戻り値

[`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 継承元

[`TemplateState`](TemplateState.md).[`delay`](TemplateState.md#delay)

***

### eventGuards

#### 署名を取得する

> **get** **eventGuards**(): `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義: [interface.ts:1021](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L1021)

##### 戻り値

`Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

#### 継承元

[`TemplateState`](TemplateState.md).[`eventGuards`](TemplateState.md#eventguards)

***

### eventPreconditions

#### 署名を取得する

> **get** **eventPreconditions**(): `Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義: [interface.ts:1027](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L1027)

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; [TemplateState](TemplateState.md) always provides it.

##### 戻り値

`Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; [TemplateState](TemplateState.md) always provides it.

#### 継承元

[`TemplateState`](TemplateState.md).[`eventPreconditions`](TemplateState.md#eventpreconditions)

***

### eventReactions

#### 署名を取得する

> **get** **eventReactions**(): [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義: [interface.ts:1033](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L1033)

##### 戻り値

[`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 継承元

[`TemplateState`](TemplateState.md).[`eventReactions`](TemplateState.md#eventreactions)

***

### guards

#### 署名を取得する

> **get** **guards**(): [`Guard`](../type-aliases/Guard.md)\<`Context`\>

定義: [interface.ts:1017](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L1017)

##### 戻り値

[`Guard`](../type-aliases/Guard.md)\<`Context`\>

#### 継承元

[`TemplateState`](TemplateState.md).[`guards`](TemplateState.md#guards)

***

### handlingEvents

#### 署名を取得する

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義: [interface.ts:1011](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L1011)

##### 戻り値

keyof `EventPayloadMapping`[]

#### 継承元

[`TemplateState`](TemplateState.md).[`handlingEvents`](TemplateState.md#handlingevents)

## メソッド

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

定義: [hierarchical.ts:217](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L217)

#### パラメータ

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

##### to

`"TERMINAL"` | `ParentStates`

#### 戻り値

`void`

#### 上書き

[`TemplateState`](TemplateState.md).[`beforeExit`](TemplateState.md#beforeexit)

***

### getChildStateMachine()

> `abstract` `protected` **getChildStateMachine**(): [`ChildStateMachineConfig`](../interfaces/ChildStateMachineConfig.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\>

定義: [hierarchical.ts:133](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L133)

Returns the configuration for the child state machine.
Override this method to provide child state machine setup.

#### 戻り値

[`ChildStateMachineConfig`](../interfaces/ChildStateMachineConfig.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\>

***

### getCurrentChildState()

> **getCurrentChildState**(): `ChildStates` \| `null`

定義: [hierarchical.ts:143](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L143)

Gets the current child state, or null if no child state machine is active.

#### 戻り値

`ChildStates` \| `null`

***

### getStatePath()

> **getStatePath**(`parentState`): [`HierarchicalStatePath`](../type-aliases/HierarchicalStatePath.md)\<`ParentStates`, `ChildStates`\>

定義: [hierarchical.ts:164](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L164)

Gets the full hierarchical path of the current state.

#### パラメータ

##### parentState

`ParentStates`

#### 戻り値

[`HierarchicalStatePath`](../type-aliases/HierarchicalStatePath.md)\<`ParentStates`, `ChildStates`\>

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): [`EventResult`](../type-aliases/EventResult.md)\<`ParentStates`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

定義: [hierarchical.ts:255](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L255)

#### 型パラメーター

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### パラメータ

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

#### 戻り値

[`EventResult`](../type-aliases/EventResult.md)\<`ParentStates`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

#### 上書き

[`TemplateState`](TemplateState.md).[`handles`](TemplateState.md#handles)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

定義: [hierarchical.ts:177](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/hierarchical.ts#L177)

#### パラメータ

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

##### from

`"INITIAL"` | `ParentStates`

#### 戻り値

`void`

#### 上書き

[`TemplateState`](TemplateState.md).[`uponEnter`](TemplateState.md#uponenter)
