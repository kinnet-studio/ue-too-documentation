[@ue-too/board](../globals.md) / InProgressState

# Class: InProgressState

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:275](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L275)

## Description

The in progress state of the touch input state machine.

## Extends

- `TemplateState`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

## Constructors

### Constructor

> **new InProgressState**(): `InProgressState`

#### Returns

`InProgressState`

#### Inherited from

`TemplateState< TouchEventMapping, TouchContext, TouchStates, TouchInputEventOutputMapping >.constructor`

## Properties

### \_defer

> `protected` **\_defer**: `Defer`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:492

#### Inherited from

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:491

#### Inherited from

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: packages/being/dist/interface.d.ts:490

#### Inherited from

`TemplateState._eventGuards`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:281](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L281)

#### Overrides

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

Defined in: packages/being/dist/interface.d.ts:489

#### Inherited from

`TemplateState._guards`

## Accessors

### delay

#### Get Signature

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:497

##### Returns

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### Inherited from

`TemplateState.delay`

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

Defined in: packages/being/dist/interface.d.ts:495

##### Returns

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### Inherited from

`TemplateState.eventGuards`

***

### eventReactions

#### Get Signature

> **get** **eventReactions**(): `EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: packages/being/dist/interface.d.ts:496

##### Returns

`EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Inherited from

`TemplateState.eventReactions`

***

### guards

#### Get Signature

> **get** **guards**(): `Guard`\<`Context`\>

Defined in: packages/being/dist/interface.d.ts:494

##### Returns

`Guard`\<`Context`\>

#### Inherited from

`TemplateState.guards`

***

### handlingEvents

#### Get Signature

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

Defined in: packages/being/dist/interface.d.ts:493

##### Returns

keyof `EventPayloadMapping`[]

#### Inherited from

`TemplateState.handlingEvents`

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: packages/being/dist/interface.d.ts:499

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

Defined in: packages/being/dist/interface.d.ts:500

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:370](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L370)

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

Defined in: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:301](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L301)

#### Parameters

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### Returns

[`TouchOutputEvent`](../type-aliases/TouchOutputEvent.md)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: packages/being/dist/interface.d.ts:498

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
