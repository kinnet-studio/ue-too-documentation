[@ue-too/board](../globals.md) / KmtIdleState

# Class: KmtIdleState

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:227](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L227)

IDLE state - default state waiting for user input.

## Remarks

This is the default state of the KMT input state machine. It handles scroll events
for panning and zooming, and transitions to pan-ready states when the user presses
spacebar or middle-click.

**Responsibilities**:
- Process scroll events (pan or zoom depending on device and modifiers)
- Detect spacebar press to enter pan mode
- Detect middle-click to enter pan mode
- Distinguish between mouse and trackpad input modalities

**Scroll Behavior**:
- Ctrl + Scroll: Always zoom (both mouse and trackpad)
- Scroll (no Ctrl): Pan (trackpad) or Zoom (mouse, determined by modality detection)

**Input Modality Detection**:
The state tracks horizontal scroll deltas to distinguish trackpads (which produce deltaX)
from mice (which typically only produce deltaY). This affects zoom behavior.

## Extends

- `TemplateState`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

## Constructors

### Constructor

> **new KmtIdleState**(): `KmtIdleState`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:233](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L233)

#### Returns

`KmtIdleState`

#### Overrides

`TemplateState< KmtInputEventMapping, KmtInputContext, KmtInputStates, KmtInputEventOutputMapping >.constructor`

## Properties

### \_defer

> `protected` **\_defer**: `Defer`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:492

#### Inherited from

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\> \| `undefined`

Defined in: packages/being/dist/interface.d.ts:491

#### Inherited from

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `Guard`\<[`KmtInputContext`](../interfaces/KmtInputContext.md)\>\>\> = `{}`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:241](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L241)

#### Overrides

`TemplateState._eventGuards`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:312](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L312)

#### Overrides

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), `"isIdle"`\>

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:237](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L237)

#### Overrides

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

Defined in: packages/being/dist/interface.d.ts:500

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

### middlePointerDownHandler()

> **middlePointerDownHandler**(`context`, `payload`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:352](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L352)

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`PointerEventPayload`](../type-aliases/PointerEventPayload.md)

#### Returns

`void`

***

### scrollHandler()

> **scrollHandler**(`context`, `payload`): [`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:289](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L289)

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)

#### Returns

[`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

***

### scrollPan()

> **scrollPan**(`context`, `payload`): [`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:251](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L251)

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`ScrollEventPayload`](../type-aliases/ScrollEventPayload.md)

#### Returns

[`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

***

### scrollWithCtrlHandler()

> **scrollWithCtrlHandler**(`context`, `payload`): [`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:305](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L305)

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)

#### Returns

[`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

***

### scrollZoom()

> **scrollZoom**(`context`, `payload`): [`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:265](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L265)

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)

#### Returns

[`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

***

### spacebarDownHandler()

> **spacebarDownHandler**(`context`, `payload`): `number`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:344](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L344)

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

`EmptyPayload`

#### Returns

`number`

***

### uponEnter()

> **uponEnter**(`context`): `void`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:340](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L340)

#### Parameters

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### Returns

`void`

#### Overrides

`TemplateState.uponEnter`
