[@ue-too/board](../../modules.md) / [index](../index.md) / ReadyToPanViaScrollWheelState

# Class: ReadyToPanViaScrollWheelState

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:521](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L521)

## Description

The ready to pan via scroll wheel state of the keyboard mouse and trackpad input state machine.

## Extends

- `TemplateState`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

## Constructors

### Constructor

> **new ReadyToPanViaScrollWheelState**(): `ReadyToPanViaScrollWheelState`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:527](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L527)

#### Returns

`ReadyToPanViaScrollWheelState`

#### Overrides

`TemplateState< KmtInputEventMapping, KmtInputContext, KmtInputStates, KmtInputEventOutputMapping >.constructor`

## Properties

### \_defer

> `protected` **\_defer**: `Defer`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:581

#### Inherited from

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:580

#### Inherited from

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: packages/being/dist/interface.d.ts:578

#### Inherited from

`TemplateState._eventGuards`

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: packages/being/dist/interface.d.ts:579

#### Inherited from

`TemplateState._eventPreconditions`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:531](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L531)

#### Overrides

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

Defined in: packages/being/dist/interface.d.ts:577

#### Inherited from

`TemplateState._guards`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:587

##### Returns

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### Inherited from

`TemplateState.delay`

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: packages/being/dist/interface.d.ts:584

##### Returns

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### Inherited from

`TemplateState.eventGuards`

***

### eventPreconditions

#### Get Signature

> **get** **eventPreconditions**(): `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: packages/being/dist/interface.d.ts:585

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; TemplateState always provides it.

##### Returns

`Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

#### Inherited from

`TemplateState.eventPreconditions`

***

### eventReactions

#### Get Signature

> **get** **eventReactions**(): `EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: packages/being/dist/interface.d.ts:586

##### Returns

`EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Inherited from

`TemplateState.eventReactions`

***

### guards

#### Get Signature

> **get** **guards**(): `Guard`\<`Context`\>

Defined in: packages/being/dist/interface.d.ts:583

##### Returns

`Guard`\<`Context`\>

#### Inherited from

`TemplateState.guards`

***

### handlingEvents

#### Get Signature

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

Defined in: packages/being/dist/interface.d.ts:582

##### Returns

keyof `EventPayloadMapping`[]

#### Inherited from

`TemplateState.handlingEvents`

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: packages/being/dist/interface.d.ts:589

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

##### to

`"TERMINAL"` | `"IDLE"` | `"READY_TO_PAN_VIA_SPACEBAR"` | `"READY_TO_PAN_VIA_SCROLL_WHEEL"` | `"PAN"` | `"INITIAL_PAN"` | `"PAN_VIA_SCROLL_WHEEL"` | `"DISABLED"`

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, `K` *extends* keyof [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md) ? [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: packages/being/dist/interface.d.ts:590

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `K`\>

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

#### Returns

`EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, `K` *extends* keyof [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md) ? [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### Inherited from

`TemplateState.handles`

***

### uponEnter()

> **uponEnter**(`context`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:547](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L547)

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### Returns

`void`

#### Overrides

`TemplateState.uponEnter`
