[@ue-too/being](../../modules.md) / [index](../index.md) / DelegatingState

# 抽象 クラス: DelegatingState\<EventPayloadMapping, Context, States, Child, EventOutputMapping\>

定義: [delegating-state.ts:65](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L65)

A state that hosts a complete child state machine and forwards events to it.

## Remarks

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

## 例

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

## 拡張

- [`TemplateState`](TemplateState.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

## 型パラメーター

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

## コンストラクター

### コンストラクター

> **new DelegatingState**\<`EventPayloadMapping`, `Context`, `States`, `Child`, `EventOutputMapping`\>(`child`): `DelegatingState`\<`EventPayloadMapping`, `Context`, `States`, `Child`, `EventOutputMapping`\>

定義: [delegating-state.ts:81](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L81)

#### パラメータ

##### child

`Child`

#### 戻り値

`DelegatingState`\<`EventPayloadMapping`, `Context`, `States`, `Child`, `EventOutputMapping`\>

#### 上書き

[`TemplateState`](TemplateState.md).[`constructor`](TemplateState.md#constructor)

## プロパティ

### \_defer

> `protected` **\_defer**: [`Defer`](../type-aliases/Defer.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\>

定義: [delegating-state.ts:91](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L91)

#### 上書き

[`TemplateState`](TemplateState.md).[`_defer`](TemplateState.md#defer)

***

### \_delay

> `protected` **\_delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined` = `undefined`

定義: [interface.ts:1003](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1003)

#### 継承元

[`TemplateState`](TemplateState.md).[`_delay`](TemplateState.md#delay)

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義: [interface.ts:993](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L993)

#### 継承元

[`TemplateState`](TemplateState.md).[`_eventGuards`](TemplateState.md#eventguards)

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義: [interface.ts:998](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L998)

#### 継承元

[`TemplateState`](TemplateState.md).[`_eventPreconditions`](TemplateState.md#eventpreconditions)

***

### \_eventReactions

> `protected` **\_eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義: [interface.ts:981](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L981)

#### 継承元

[`TemplateState`](TemplateState.md).[`_eventReactions`](TemplateState.md#eventreactions)

***

### \_guards

> `protected` **\_guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

定義: [interface.ts:992](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L992)

#### 継承元

[`TemplateState`](TemplateState.md).[`_guards`](TemplateState.md#guards)

## アクセッサー

### child

#### 署名を取得する

> **get** **child**(): `Child`

定義: [delegating-state.ts:87](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L87)

The hosted child machine, for introspection and tests.

##### 戻り値

`Child`

***

### delay

#### 署名を取得する

> **get** **delay**(): [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義: [interface.ts:1042](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1042)

##### 戻り値

[`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 継承元

[`TemplateState`](TemplateState.md).[`delay`](TemplateState.md#delay)

***

### eventGuards

#### 署名を取得する

> **get** **eventGuards**(): `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義: [interface.ts:1021](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1021)

##### 戻り値

`Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

#### 継承元

[`TemplateState`](TemplateState.md).[`eventGuards`](TemplateState.md#eventguards)

***

### eventPreconditions

#### 署名を取得する

> **get** **eventPreconditions**(): `Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義: [interface.ts:1027](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1027)

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

定義: [interface.ts:1033](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1033)

##### 戻り値

[`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 継承元

[`TemplateState`](TemplateState.md).[`eventReactions`](TemplateState.md#eventreactions)

***

### guards

#### 署名を取得する

> **get** **guards**(): [`Guard`](../type-aliases/Guard.md)\<`Context`\>

定義: [interface.ts:1017](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1017)

##### 戻り値

[`Guard`](../type-aliases/Guard.md)\<`Context`\>

#### 継承元

[`TemplateState`](TemplateState.md).[`guards`](TemplateState.md#guards)

***

### handlingEvents

#### 署名を取得する

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義: [interface.ts:1011](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1011)

##### 戻り値

keyof `EventPayloadMapping`[]

#### 継承元

[`TemplateState`](TemplateState.md).[`handlingEvents`](TemplateState.md#handlingevents)

## メソッド

### beforeExit()

> **beforeExit**(`_context`, `_stateMachine`, `_to`): `void`

定義: [delegating-state.ts:129](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L129)

#### パラメータ

##### \_context

`Context`

##### \_stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

##### \_to

`"TERMINAL"` | `States`

#### 戻り値

`void`

#### 上書き

[`TemplateState`](TemplateState.md).[`beforeExit`](TemplateState.md#beforeexit)

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

定義: [interface.ts:1074](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L1074)

#### 型パラメーター

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### パラメータ

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 戻り値

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

#### 継承元

[`TemplateState`](TemplateState.md).[`handles`](TemplateState.md#handles)

***

### uponEnter()

> **uponEnter**(`_context`, `_stateMachine`, `_from`): `void`

定義: [delegating-state.ts:112](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/delegating-state.ts#L112)

#### パラメータ

##### \_context

`Context`

##### \_stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

##### \_from

`"INITIAL"` | `States`

#### 戻り値

`void`

#### 上書き

[`TemplateState`](TemplateState.md).[`uponEnter`](TemplateState.md#uponenter)
