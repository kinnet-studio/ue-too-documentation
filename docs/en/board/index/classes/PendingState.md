[@ue-too/board](../../modules.md) / [index](../index.md) / PendingState

# Class: PendingState

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:173](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L173)

## Description

The pending state of the touch input state machine.

## Extends

- `TemplateState`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

## Constructors

### Constructor

> **new PendingState**(): `PendingState`

#### Returns

`PendingState`

#### Inherited from

`TemplateState< TouchEventMapping, TouchContext, TouchStates, TouchInputEventOutputMapping >.constructor`

## Properties

### \_defer

> `protected` **\_defer**: `Defer`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:581

#### Inherited from

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\> \| `undefined`

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

> `protected` **\_eventReactions**: `EventReactions`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:179](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L179)

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

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

##### to

`"TERMINAL"` | [`TouchStates`](../type-aliases/TouchStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`TouchStates`](../type-aliases/TouchStates.md), `K` *extends* `"touchmove"` ? [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: packages/being/dist/interface.d.ts:590

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), `K`\>

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

#### Returns

`EventResult`\<[`TouchStates`](../type-aliases/TouchStates.md), `K` *extends* `"touchmove"` ? [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### Inherited from

`TemplateState.handles`

***

### touchend()

> **touchend**(`context`, `payload`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:203](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L203)

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### Returns

`void`

***

### touchmove()

> **touchmove**(`context`, `payload`): [`TouchOutputEvent`](../type-aliases/TouchOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:207](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L207)

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### Returns

[`TouchOutputEvent`](../type-aliases/TouchOutputEvent.md)

***

### touchstart()

> **touchstart**(`context`, `payload`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:199](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L199)

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### Returns

`void`

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: packages/being/dist/interface.d.ts:588

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

##### from

`"INITIAL"` | [`TouchStates`](../type-aliases/TouchStates.md)

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`
