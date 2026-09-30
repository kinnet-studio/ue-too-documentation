[@ue-too/board](../../modules.md) / [index](../index.md) / AcceptingUserInputState

# Class: AcceptingUserInputState

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:196](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L196)

State implementation for accepting user pan input (idle/normal state).
Accepts user pan input and can transition to animation or locked states.

## Extends

- `TemplateState`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

## Constructors

### Constructor

> **new AcceptingUserInputState**(): `AcceptingUserInputState`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:202](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L202)

#### Returns

`AcceptingUserInputState`

#### Overrides

`TemplateState< PanEventPayloadMapping, BaseContext, PanControlStates, PanControlOutputMapping >.constructor`

## Properties

### \_defer

> `protected` **\_defer**: `Defer`\<`BaseContext`, [`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:581

#### Inherited from

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<`BaseContext`, [`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\> \| `undefined`

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

> `protected` **\_eventReactions**: `EventReactions`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:206](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L206)

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

`BaseContext`

##### stateMachine

`StateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

##### to

[`PanControlStates`](../type-aliases/PanControlStates.md) | `"TERMINAL"`

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `K` *extends* keyof [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md) ? [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: packages/being/dist/interface.d.ts:590

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `K`\>

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

#### Returns

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `K` *extends* keyof [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md) ? [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### Inherited from

`TemplateState.handles`

***

### lockedOnObjectPanByInputHandler()

> **lockedOnObjectPanByInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:245](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L245)

#### Parameters

##### context

`BaseContext`

##### payload

[`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)

#### Returns

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

***

### lockedOnObjectPanToInputHandler()

> **lockedOnObjectPanToInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:252](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L252)

#### Parameters

##### context

`BaseContext`

##### payload

[`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)

#### Returns

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: packages/being/dist/interface.d.ts:588

#### Parameters

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

##### from

[`PanControlStates`](../type-aliases/PanControlStates.md) | `"INITIAL"`

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`

***

### userPanByInputHandler()

> **userPanByInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:231](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L231)

#### Parameters

##### context

`BaseContext`

##### payload

[`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)

#### Returns

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

***

### userPanToInputHandler()

> **userPanToInputHandler**(`context`, `payload`): [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:238](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L238)

#### Parameters

##### context

`BaseContext`

##### payload

[`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)

#### Returns

[`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)
