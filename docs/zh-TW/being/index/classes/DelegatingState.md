[@ue-too/being](../../modules.md) / [index](../index.md) / DelegatingState

# 抽象 類別: DelegatingState\<EventPayloadMapping, Context, States, Child, EventOutputMapping\>

定義於: [delegating-state.ts:65](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L65)

A state that hosts a complete child state machine and forwards events to it.

## 備註

This is the composition primitive for nesting one machine inside another.
While the parent machine is in a `DelegatingState`, every event is offered
to the child first. When the child handles it, the child's output is returned
and the parent stays in this state; the child's own `nextState` is deliberately
dropped because it names a *child* state, not a parent one. When the child does
not handle the event, the state's own `_eventReactions` get their turn, which is
how a subclass declares its exits.

Lifecycle is tied to the parent state: entering starts (or restarts) the child
from its initial state, leaving calls `wrapup()` on it. Subclasses that override
`uponEnter` or `beforeExit` must call `super`.

## 範例

```typescript
class MoveState extends DelegatingState<AppEvents, BaseContext, AppStates, KmtInputStateMachine> {
    constructor(context: KmtInputContext) {
        super(createKmtInputStateMachine(context));
    }
    protected _eventReactions = {
        switchToApp: { action: NO_OP, defaultTargetState: 'IDLE' },
    };
}
```

## Extends

- [`TemplateState`](TemplateState.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## 型別參數

### EventPayloadMapping

`EventPayloadMapping`

The parent machine's event mapping

### Context

`Context` *extends* [`BaseContext`](../interfaces/BaseContext.md)

The parent machine's context

### States

`States` *extends* `string`

The parent machine's state union

### Child

`Child` *extends* [`HostableStateMachine`](../type-aliases/HostableStateMachine.md)

The child machine type, exposed through [DelegatingState.child](#child-1)

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

The parent machine's output mapping

## 建構函式

### 建構函式

> **new DelegatingState**\<`EventPayloadMapping`, `Context`, `States`, `Child`, `EventOutputMapping`\>(`child`): `DelegatingState`\<`EventPayloadMapping`, `Context`, `States`, `Child`, `EventOutputMapping`\>

定義於: [delegating-state.ts:81](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L81)

#### 參數

##### child

`Child`

#### 回傳

`DelegatingState`\<`EventPayloadMapping`, `Context`, `States`, `Child`, `EventOutputMapping`\>

#### 覆寫了

[`TemplateState`](TemplateState.md).[`constructor`](TemplateState.md#constructor)

## 屬性

### \_defer

> `protected` **\_defer**: [`Defer`](../type-aliases/Defer.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\>

定義於: [delegating-state.ts:91](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L91)

#### 覆寫了

[`TemplateState`](TemplateState.md).[`_defer`](TemplateState.md#defer)

***

### \_delay

> `protected` **\_delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined` = `undefined`

定義於: [interface.ts:1003](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1003)

#### 繼承自

[`TemplateState`](TemplateState.md).[`_delay`](TemplateState.md#delay)

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義於: [interface.ts:993](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L993)

#### 繼承自

[`TemplateState`](TemplateState.md).[`_eventGuards`](TemplateState.md#eventguards)

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義於: [interface.ts:998](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L998)

#### 繼承自

[`TemplateState`](TemplateState.md).[`_eventPreconditions`](TemplateState.md#eventpreconditions)

***

### \_eventReactions

> `protected` **\_eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義於: [interface.ts:981](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L981)

#### 繼承自

[`TemplateState`](TemplateState.md).[`_eventReactions`](TemplateState.md#eventreactions)

***

### \_guards

> `protected` **\_guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

定義於: [interface.ts:992](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L992)

#### 繼承自

[`TemplateState`](TemplateState.md).[`_guards`](TemplateState.md#guards)

## 存取器

### child

#### Getter 簽章

> **get** **child**(): `Child`

定義於: [delegating-state.ts:87](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L87)

The hosted child machine, for introspection and tests.

##### 回傳

`Child`

***

### delay

#### Getter 簽章

> **get** **delay**(): [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義於: [interface.ts:1042](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1042)

##### 回傳

[`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 繼承自

[`TemplateState`](TemplateState.md).[`delay`](TemplateState.md#delay)

***

### eventGuards

#### Getter 簽章

> **get** **eventGuards**(): `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義於: [interface.ts:1021](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1021)

##### 回傳

`Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

#### 繼承自

[`TemplateState`](TemplateState.md).[`eventGuards`](TemplateState.md#eventguards)

***

### eventPreconditions

#### Getter 簽章

> **get** **eventPreconditions**(): `Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義於: [interface.ts:1027](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1027)

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

定義於: [interface.ts:1033](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1033)

##### 回傳

[`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 繼承自

[`TemplateState`](TemplateState.md).[`eventReactions`](TemplateState.md#eventreactions)

***

### guards

#### Getter 簽章

> **get** **guards**(): [`Guard`](../type-aliases/Guard.md)\<`Context`\>

定義於: [interface.ts:1017](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1017)

##### 回傳

[`Guard`](../type-aliases/Guard.md)\<`Context`\>

#### 繼承自

[`TemplateState`](TemplateState.md).[`guards`](TemplateState.md#guards)

***

### handlingEvents

#### Getter 簽章

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義於: [interface.ts:1011](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1011)

##### 回傳

keyof `EventPayloadMapping`[]

#### 繼承自

[`TemplateState`](TemplateState.md).[`handlingEvents`](TemplateState.md#handlingevents)

## 方法

### beforeExit()

> **beforeExit**(`_context`, `_stateMachine`, `_to`): `void`

定義於: [delegating-state.ts:129](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L129)

#### 參數

##### \_context

`Context`

##### \_stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

##### \_to

`"TERMINAL"` | `States`

#### 回傳

`void`

#### 覆寫了

[`TemplateState`](TemplateState.md).[`beforeExit`](TemplateState.md#beforeexit)

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

定義於: [interface.ts:1074](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1074)

#### 型別參數

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### 參數

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 回傳

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

#### 繼承自

[`TemplateState`](TemplateState.md).[`handles`](TemplateState.md#handles)

***

### uponEnter()

> **uponEnter**(`_context`, `_stateMachine`, `_from`): `void`

定義於: [delegating-state.ts:112](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L112)

#### 參數

##### \_context

`Context`

##### \_stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

##### \_from

`"INITIAL"` | `States`

#### 回傳

`void`

#### 覆寫了

[`TemplateState`](TemplateState.md).[`uponEnter`](TemplateState.md#uponenter)
