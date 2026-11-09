[@ue-too/being](../globals.md) / CompositeState

# Abstract Class: CompositeState\<EventPayloadMapping, Context, ParentStates, ChildStates, EventOutputMapping\>

Defined in: [hierarchical.ts:106](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L106)

Composite state that contains a child state machine.

## Remarks

A composite state is a state that contains its own internal state machine.
When the composite state is active, its child state machine is also active.
Events are first handled by the child state machine, and if unhandled,
they bubble up to the parent state machine.

## Example

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

## Type Parameters

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

## Constructors

### Constructor

> **new CompositeState**\<`EventPayloadMapping`, `Context`, `ParentStates`, `ChildStates`, `EventOutputMapping`\>(): `CompositeState`\<`EventPayloadMapping`, `Context`, `ParentStates`, `ChildStates`, `EventOutputMapping`\>

#### Returns

`CompositeState`\<`EventPayloadMapping`, `Context`, `ParentStates`, `ChildStates`, `EventOutputMapping`\>

#### Inherited from

[`TemplateState`](TemplateState.md).[`constructor`](TemplateState.md#constructor)

## Properties

### \_childStateMachineConfig

> `protected` **\_childStateMachineConfig**: [`ChildStateMachineConfig`](../interfaces/ChildStateMachineConfig.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\> \| `null` = `null`

Defined in: [hierarchical.ts:120](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L120)

***

### \_context

> `protected` **\_context**: `Context` \| `null` = `null`

Defined in: [hierarchical.ts:127](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L127)

***

### \_defer

> `protected` **\_defer**: [`Defer`](../type-aliases/Defer.md)\<`Context`, `EventPayloadMapping`, `ParentStates`, `EventOutputMapping`\> \| `undefined` = `undefined`

Defined in: [interface.ts:854](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L854)

#### Inherited from

[`TemplateState`](TemplateState.md).[`_defer`](TemplateState.md#defer)

***

### \_delay

> `protected` **\_delay**: [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `ParentStates`, `EventOutputMapping`\> \| `undefined` = `undefined`

Defined in: [interface.ts:850](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L850)

#### Inherited from

[`TemplateState`](TemplateState.md).[`_delay`](TemplateState.md#delay)

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:845](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L845)

#### Inherited from

[`TemplateState`](TemplateState.md).[`_eventGuards`](TemplateState.md#eventguards)

***

### \_eventReactions

> `protected` **\_eventReactions**: [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:833](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L833)

#### Inherited from

[`TemplateState`](TemplateState.md).[`_eventReactions`](TemplateState.md#eventreactions)

***

### \_guards

> `protected` **\_guards**: [`Guard`](../type-aliases/Guard.md)\<`Context`\>

Defined in: [interface.ts:844](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L844)

#### Inherited from

[`TemplateState`](TemplateState.md).[`_guards`](TemplateState.md#guards)

***

### \_historyState

> `protected` **\_historyState**: `ChildStates` \| `null` = `null`

Defined in: [hierarchical.ts:126](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L126)

## Accessors

### delay

#### Get Signature

> **get** **delay**(): [`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

Defined in: [interface.ts:883](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L883)

##### Returns

[`Delay`](../type-aliases/Delay.md)\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### Inherited from

[`TemplateState`](TemplateState.md).[`delay`](TemplateState.md#delay)

***

### eventGuards

#### Get Signature

> **get** **eventGuards**(): `Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

Defined in: [interface.ts:868](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L868)

##### Returns

`Partial`\<[`EventGuards`](../type-aliases/EventGuards.md)\<`EventPayloadMapping`, `States`, `Context`, [`Guard`](../type-aliases/Guard.md)\<`Context`\>\>\>

#### Inherited from

[`TemplateState`](TemplateState.md).[`eventGuards`](TemplateState.md#eventguards)

***

### eventReactions

#### Get Signature

> **get** **eventReactions**(): [`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

Defined in: [interface.ts:874](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L874)

##### Returns

[`EventReactions`](../type-aliases/EventReactions.md)\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### Inherited from

[`TemplateState`](TemplateState.md).[`eventReactions`](TemplateState.md#eventreactions)

***

### guards

#### Get Signature

> **get** **guards**(): [`Guard`](../type-aliases/Guard.md)\<`Context`\>

Defined in: [interface.ts:864](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L864)

##### Returns

[`Guard`](../type-aliases/Guard.md)\<`Context`\>

#### Inherited from

[`TemplateState`](TemplateState.md).[`guards`](TemplateState.md#guards)

***

### handlingEvents

#### Get Signature

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

Defined in: [interface.ts:858](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/interface.ts#L858)

##### Returns

keyof `EventPayloadMapping`[]

#### Inherited from

[`TemplateState`](TemplateState.md).[`handlingEvents`](TemplateState.md#handlingevents)

## Methods

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

Defined in: [hierarchical.ts:217](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L217)

#### Parameters

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

##### to

`"TERMINAL"` | `ParentStates`

#### Returns

`void`

#### Overrides

[`TemplateState`](TemplateState.md).[`beforeExit`](TemplateState.md#beforeexit)

***

### getChildStateMachine()

> `abstract` `protected` **getChildStateMachine**(): [`ChildStateMachineConfig`](../interfaces/ChildStateMachineConfig.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\>

Defined in: [hierarchical.ts:133](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L133)

Returns the configuration for the child state machine.
Override this method to provide child state machine setup.

#### Returns

[`ChildStateMachineConfig`](../interfaces/ChildStateMachineConfig.md)\<`EventPayloadMapping`, `Context`, `ChildStates`, `EventOutputMapping`\>

***

### getCurrentChildState()

> **getCurrentChildState**(): `ChildStates` \| `null`

Defined in: [hierarchical.ts:143](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L143)

Gets the current child state, or null if no child state machine is active.

#### Returns

`ChildStates` \| `null`

***

### getStatePath()

> **getStatePath**(`parentState`): [`HierarchicalStatePath`](../type-aliases/HierarchicalStatePath.md)\<`ParentStates`, `ChildStates`\>

Defined in: [hierarchical.ts:164](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L164)

Gets the full hierarchical path of the current state.

#### Parameters

##### parentState

`ParentStates`

#### Returns

[`HierarchicalStatePath`](../type-aliases/HierarchicalStatePath.md)\<`ParentStates`, `ChildStates`\>

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): [`EventResult`](../type-aliases/EventResult.md)\<`ParentStates`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

Defined in: [hierarchical.ts:255](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L255)

#### Type Parameters

##### K

`K` *extends* `string` \| `number` \| `symbol`

#### Parameters

##### args

[`EventArgs`](../type-aliases/EventArgs.md)\<`EventPayloadMapping`, `K`\>

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

#### Returns

[`EventResult`](../type-aliases/EventResult.md)\<`ParentStates`, `K` *extends* keyof `EventOutputMapping` ? `EventOutputMapping`\[`K`\<`K`\>\] : `void`\>

#### Overrides

[`TemplateState`](TemplateState.md).[`handles`](TemplateState.md#handles)

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

Defined in: [hierarchical.ts:177](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/being/src/hierarchical.ts#L177)

#### Parameters

##### context

`Context`

##### stateMachine

[`StateMachine`](../interfaces/StateMachine.md)\<`EventPayloadMapping`, `Context`, `ParentStates`, `EventOutputMapping`\>

##### from

`"INITIAL"` | `ParentStates`

#### Returns

`void`

#### Overrides

[`TemplateState`](TemplateState.md).[`uponEnter`](TemplateState.md#uponenter)
