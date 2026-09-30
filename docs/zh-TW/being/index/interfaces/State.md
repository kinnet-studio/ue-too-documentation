[@ue-too/being](../../modules.md) / [index](../index.md) / State

# 介面: State\<EventPayloadMapping, Context, States, EventOutputMapping\>

定義於: [interface.ts:349](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L349)

## Description

This is the interface for the state. The interface takes in a few generic parameters:
You can probably get by extending the TemplateState class.

Generic parameters:
- EventPayloadMapping: A mapping of events to their payloads.
- Context: The context of the state machine. (which can be used by each state to do calculations that would persist across states)
- States: All of the possible states that the state machine can be in. e.g. a string literal union like "IDLE" | "SELECTING" | "PAN" | "ZOOM"
- EventOutputMapping: A mapping of events to their output types. Defaults to void for all events.

A state's all possible states can be only a subset of the possible states of the state machine. (a state only needs to know what states it can transition to)
This allows for a state to be reusable across different state machines.

## 參閱

[TemplateState](../classes/TemplateState.md)

## 型別參數

### EventPayloadMapping

`EventPayloadMapping`

### Context

`Context` *extends* [`BaseContext`](BaseContext.md)

### States

`States` *extends* `string` = `"IDLE"`

### EventOutputMapping

`EventOutputMapping` *extends* `Partial`\<`Record`\<keyof `EventPayloadMapping`, `unknown`\>\> = [`DefaultOutputMapping`](../type-aliases/DefaultOutputMapping.md)\<`EventPayloadMapping`\>

## 屬性

### delay

> **delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義於: [interface.ts:403](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L403)

***

### eventGuards

> **eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

定義於: [interface.ts:392](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L392)

***

### eventPreconditions?

> `optional` **eventPreconditions**: `Partial`\<[`EventPreconditions`](../type-aliases/EventPreconditions.md)\<`EventPayloadMapping`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`, `string`\>\>\>

定義於: [interface.ts:400](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L400)

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; [TemplateState](../classes/TemplateState.md) always provides it.

***

### eventReactions

> **eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義於: [interface.ts:406](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L406)

***

### guards

> **guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

定義於: [interface.ts:391](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L391)

## 方法

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

定義於: [interface.ts:367](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L367)

#### 參數

##### context

`Context`

##### stateMachine

[`StateMachine`](StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

##### to

`States` | `"TERMINAL"`

#### 回傳

`void`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): [`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

定義於: [interface.ts:377](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L377)

#### 型別參數

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### 參數

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### context

`Context`

##### stateMachine

[`StateMachine`](StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 回傳

[`EventResult`](../type-aliases/EventResult.md)\<`States`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

定義於: [interface.ts:357](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being/src/interface.ts#L357)

#### 參數

##### context

`Context`

##### stateMachine

[`StateMachine`](StateMachine.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

##### from

`States` | `"INITIAL"`

#### 回傳

`void`
