[@ue-too/board](../../modules.md) / [index](../index.md) / ZoomTransitionState

# Class: ZoomTransitionState

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:185](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L185)

State implementation for zoom animations and transitions.
Processes animation updates and allows user input to interrupt.

## Extends

- `TemplateState`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

## Constructors

### Constructor

> **new ZoomTransitionState**(): `ZoomTransitionState`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:191](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L191)

#### Returns

`ZoomTransitionState`

#### Overrides

`TemplateState< ZoomEventPayloadMapping, BaseContext, ZoomControlStates, ZoomControlOutputMapping >.constructor`

## Properties

### \_defer

> `protected` **\_defer**: `Defer`\<`BaseContext`, [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:581

#### Inherited from

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<`BaseContext`, [`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\> \| `undefined`

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

> `protected` **\_eventReactions**: `EventReactions`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:195](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L195)

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

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

##### to

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md) | `"TERMINAL"`

#### Returns

`void`

#### Inherited from

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: packages/being/dist/interface.d.ts:590

#### Type Parameters

##### K

`K` *extends* `string`

#### Parameters

##### args

`EventArgs`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `K`\>

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

#### Returns

`EventResult`\<[`ZoomControlStates`](../type-aliases/ZoomControlStates.md), `K` *extends* keyof [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md) ? [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### Inherited from

`TemplateState.handles`

***

### lockedOnObjectZoomByAtInput()

> **lockedOnObjectZoomByAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:235](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L235)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### lockedOnObjectZoomToAtInput()

> **lockedOnObjectZoomToAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:242](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L242)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomByAtCenterInput()

> **transitionZoomByAtCenterInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:282](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L282)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomByPayload`](../type-aliases/ZoomByPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomByAtInput()

> **transitionZoomByAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:271](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L271)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomToAtCenterInput()

> **transitionZoomToAtCenterInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:300](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L300)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomToAtInput()

> **transitionZoomToAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:289](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L289)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### transitionZoomToAtWorldInput()

> **transitionZoomToAtWorldInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:307](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L307)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: packages/being/dist/interface.d.ts:588

#### Parameters

##### context

`BaseContext`

##### stateMachine

`StateMachine`\<[`ZoomEventPayloadMapping`](../type-aliases/ZoomEventPayloadMapping.md), `BaseContext`, [`ZoomControlStates`](../type-aliases/ZoomControlStates.md), [`ZoomControlOutputMapping`](../type-aliases/ZoomControlOutputMapping.md)\>

##### from

[`ZoomControlStates`](../type-aliases/ZoomControlStates.md) | `"INITIAL"`

#### Returns

`void`

#### Inherited from

`TemplateState.uponEnter`

***

### userZoomByAtInput()

> **userZoomByAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:249](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L249)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomByAtInputPayload`](../type-aliases/ZoomByAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

***

### userZoomToAtInput()

> **userZoomToAtInput**(`context`, `payload`): [`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:260](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L260)

#### Parameters

##### context

`BaseContext`

##### payload

[`ZoomToAtInputPayload`](../type-aliases/ZoomToAtInputPayload.md)

#### Returns

[`ZoomControlOutputEvent`](../type-aliases/ZoomControlOutputEvent.md)
