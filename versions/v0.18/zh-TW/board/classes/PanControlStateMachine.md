[@ue-too/board](../globals.md) / PanControlStateMachine

# Class: PanControlStateMachine

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:129](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L129)

State machine controlling pan input flow and animations.

## Remarks

This state machine manages the lifecycle of pan operations:
- **User input handling**: Accepts or blocks user pan gestures based on state
- **Animation control**: Manages smooth pan-to animations
- **Object tracking**: Supports locking camera to follow objects

**State transitions:**
- `ACCEPTING_USER_INPUT` → `TRANSITION`: Start animation (`initateTransition`)
- `ACCEPTING_USER_INPUT` → `LOCKED_ON_OBJECT`: Lock to object (`lockedOnObjectPan...`)
- `TRANSITION` → `ACCEPTING_USER_INPUT`: User input interrupts animation
- `LOCKED_ON_OBJECT` → `ACCEPTING_USER_INPUT`: Unlock (`unlock` event)

Helper methods simplify event dispatching without memorizing event names.

## Example

```typescript
const stateMachine = createDefaultPanControlStateMachine(cameraRig);

// User pans - accepted in ACCEPTING_USER_INPUT state
const result = stateMachine.notifyPanInput({ x: 50, y: 30 });

// Start animation - transitions to TRANSITION state
stateMachine.notifyPanToAnimationInput({ x: 1000, y: 500 });

// User input now blocked while animating
```

## See

[createDefaultPanControlStateMachine](../functions/createDefaultPanControlStateMachine.md) for factory function

## Extends

- `TemplateStateMachine`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>

## Constructors

### Constructor

> **new PanControlStateMachine**(`states`, `initialState`, `context`): `PanControlStateMachine`

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:135](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L135)

#### Parameters

##### states

`Record`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `State`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `BaseContext`, [`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\>\>

##### initialState

[`PanControlStates`](../type-aliases/PanControlStates.md)

##### context

`BaseContext`

#### Returns

`PanControlStateMachine`

#### Overrides

`TemplateStateMachine< PanEventPayloadMapping, BaseContext, PanControlStates, PanControlOutputMapping >.constructor`

## Properties

### \_context

> `protected` **\_context**: `BaseContext`

Defined in: packages/being/dist/interface.d.ts:383

#### Inherited from

`TemplateStateMachine._context`

***

### \_currentState

> `protected` **\_currentState**: [`PanControlStates`](../type-aliases/PanControlStates.md) \| `"INITIAL"` \| `"TERMINAL"`

Defined in: packages/being/dist/interface.d.ts:381

#### Inherited from

`TemplateStateMachine._currentState`

***

### \_happensCallbacks

> `protected` **\_happensCallbacks**: (`args`, `context`) => `void`[]

Defined in: packages/being/dist/interface.d.ts:386

#### Parameters

##### args

\[`"unlock"`\] | \[`"initateTransition"`\] | \[`"userPanByInput"`, [`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)\] | \[`"userPanToInput"`, [`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)\] | \[`"transitionPanByInput"`, [`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)\] | \[`"transitionPanToInput"`, [`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)\] | \[`"lockedOnObjectPanByInput"`, [`PanByInputEventPayload`](../type-aliases/PanByInputEventPayload.md)\] | \[`"lockedOnObjectPanToInput"`, [`PanToInputEventPayload`](../type-aliases/PanToInputEventPayload.md)\] | \[`string`, `unknown`\]

##### context

`BaseContext`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine._happensCallbacks`

***

### \_initialState

> `protected` **\_initialState**: [`PanControlStates`](../type-aliases/PanControlStates.md)

Defined in: packages/being/dist/interface.d.ts:388

#### Inherited from

`TemplateStateMachine._initialState`

***

### \_stateChangeCallbacks

> `protected` **\_stateChangeCallbacks**: `StateChangeCallback`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>[]

Defined in: packages/being/dist/interface.d.ts:385

#### Inherited from

`TemplateStateMachine._stateChangeCallbacks`

***

### \_states

> `protected` **\_states**: `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: packages/being/dist/interface.d.ts:382

#### Inherited from

`TemplateStateMachine._states`

***

### \_statesArray

> `protected` **\_statesArray**: [`PanControlStates`](../type-aliases/PanControlStates.md)[]

Defined in: packages/being/dist/interface.d.ts:384

#### Inherited from

`TemplateStateMachine._statesArray`

***

### \_timeouts

> `protected` **\_timeouts**: `number` \| `undefined`

Defined in: packages/being/dist/interface.d.ts:387

#### Inherited from

[`KmtInputStateMachineWebWorkerProxy`](KmtInputStateMachineWebWorkerProxy.md).[`_timeouts`](KmtInputStateMachineWebWorkerProxy.md#timeouts)

## Accessors

### currentState

#### Get Signature

> **get** **currentState**(): `States` \| `"INITIAL"` \| `"TERMINAL"`

Defined in: packages/being/dist/interface.d.ts:398

##### Returns

`States` \| `"INITIAL"` \| `"TERMINAL"`

#### Inherited from

`TemplateStateMachine.currentState`

***

### possibleStates

#### Get Signature

> **get** **possibleStates**(): `States`[]

Defined in: packages/being/dist/interface.d.ts:400

##### Returns

`States`[]

#### Inherited from

`TemplateStateMachine.possibleStates`

***

### states

#### Get Signature

> **get** **states**(): `Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

Defined in: packages/being/dist/interface.d.ts:401

##### Returns

`Record`\<`States`, `State`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>\>

#### Inherited from

`TemplateStateMachine.states`

## Methods

### happens()

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `K` *extends* keyof [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md) ? [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

Defined in: packages/being/dist/interface.d.ts:394

##### Type Parameters

###### K

`K` *extends* keyof [`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md)

##### Parameters

###### args

...`EventArgs`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `K`\>

##### Returns

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `K` *extends* keyof [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md) ? [`PanControlOutputMapping`](../type-aliases/PanControlOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

##### Inherited from

`TemplateStateMachine.happens`

#### Call Signature

> **happens**\<`K`\>(...`args`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `unknown`\>

Defined in: packages/being/dist/interface.d.ts:395

##### Type Parameters

###### K

`K` *extends* `string`

##### Parameters

###### args

...`EventArgs`\<[`PanEventPayloadMapping`](../type-aliases/PanEventPayloadMapping.md), `K`\>

##### Returns

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `unknown`\>

##### Inherited from

`TemplateStateMachine.happens`

***

### initateTransition()

> **initateTransition**(): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `void`\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:186](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L186)

Initiates transition to `TRANSITION` state.

#### Returns

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), `void`\>

#### Remarks

Forces state change to begin animation or transition sequence.
Called when starting programmatic camera movements.

***

### notifyPanInput()

> **notifyPanInput**(`diff`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:161](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L161)

Notifies the state machine of user pan input.

#### Parameters

##### diff

`Point`

Pan displacement in viewport coordinates

#### Returns

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)\>

Event handling result with output event

#### Remarks

Dispatches `userPanByInput` event. Accepted in `ACCEPTING_USER_INPUT` and `TRANSITION` states,
where it may transition back to `ACCEPTING_USER_INPUT` (user interrupting animation).

***

### notifyPanToAnimationInput()

> **notifyPanToAnimationInput**(`target`): `EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)\>

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts:175](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/pan-control-state-machine.ts#L175)

Initiates a pan animation to a target position.

#### Parameters

##### target

`Point`

Target position in world coordinates

#### Returns

`EventResult`\<[`PanControlStates`](../type-aliases/PanControlStates.md), [`PanControlOutputEvent`](../type-aliases/PanControlOutputEvent.md)\>

Event handling result

#### Remarks

Dispatches `transitionPanToInput` event, starting a pan animation.
Transitions to `TRANSITION` state where animation updates occur.

***

### onHappens()

> **onHappens**(`callback`): `void`

Defined in: packages/being/dist/interface.d.ts:397

#### Parameters

##### callback

(`args`, `context`) => `void`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.onHappens`

***

### onStateChange()

> **onStateChange**(`callback`): `void`

Defined in: packages/being/dist/interface.d.ts:396

#### Parameters

##### callback

`StateChangeCallback`\<[`PanControlStates`](../type-aliases/PanControlStates.md)\>

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.onStateChange`

***

### reset()

> **reset**(): `void`

Defined in: packages/being/dist/interface.d.ts:390

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.reset`

***

### setContext()

> **setContext**(`context`): `void`

Defined in: packages/being/dist/interface.d.ts:399

#### Parameters

##### context

`BaseContext`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.setContext`

***

### start()

> **start**(): `void`

Defined in: packages/being/dist/interface.d.ts:391

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.start`

***

### switchTo()

> **switchTo**(`state`): `void`

Defined in: packages/being/dist/interface.d.ts:393

#### Parameters

##### state

[`PanControlStates`](../type-aliases/PanControlStates.md) | `"INITIAL"` | `"TERMINAL"`

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.switchTo`

***

### wrapup()

> **wrapup**(): `void`

Defined in: packages/being/dist/interface.d.ts:392

#### Returns

`void`

#### Inherited from

`TemplateStateMachine.wrapup`
