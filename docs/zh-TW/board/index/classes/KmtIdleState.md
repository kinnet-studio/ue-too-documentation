[@ue-too/board](../../modules.md) / [index](../index.md) / KmtIdleState

# 類別: KmtIdleState

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:257](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L257)

IDLE state - default state waiting for user input.

## 備註

This is the default state of the KMT input state machine. It handles scroll events
for panning and zooming, and transitions to pan-ready states when the user presses
spacebar or middle-click.

**Responsibilities**:
- Process scroll events (pan or zoom depending on device and modifiers)
- Detect spacebar press to enter pan mode
- Detect middle-click to enter pan mode
- Feed input-modality scoring while auto-detection is on

**Scroll Behavior**:
- Ctrl + Scroll: Always zoom (both mouse and trackpad)
- Scroll (no Ctrl): Zoom in `'kmt'` mode (the default); Pan in `'trackpad'` mode
  and while auto-detection is undecided (`'TBD'`)

**Input Modality Detection** (off by default, see
[ObservableInputTracker.enableInputModeDetection](ObservableInputTracker.md#enableinputmodedetection)):
The state tracks horizontal scroll deltas to distinguish trackpads (which produce deltaX)
from mice (which typically only produce deltaY), and a middle-click settles on `'kmt'`.

## Extends

- `TemplateState`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

## 建構函式

### 建構函式

> **new KmtIdleState**(): `KmtIdleState`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:263](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L263)

#### 回傳

`KmtIdleState`

#### 覆寫了

`TemplateState< KmtInputEventMapping, KmtInputContext, KmtInputStates, KmtInputEventOutputMapping >.constructor`

## 屬性

### \_defer

> `protected` **\_defer**: `Defer`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:581

#### 繼承自

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:580

#### 繼承自

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `Guard`\<[`KmtInputContext`](../interfaces/KmtInputContext.md)\>\>\> = `{}`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:271](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L271)

#### 覆寫了

`TemplateState._eventGuards`

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

定義於: packages/being/dist/interface.d.ts:579

#### 繼承自

`TemplateState._eventPreconditions`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:345](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L345)

#### 覆寫了

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), `"isIdle"`\>

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:267](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L267)

#### 覆寫了

`TemplateState._guards`

## 存取器

### delay

#### Getter 簽章

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義於: packages/being/dist/interface.d.ts:587

##### 回傳

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 繼承自

`TemplateState.delay`

***

### eventGuards

#### Getter 簽章

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義於: packages/being/dist/interface.d.ts:584

##### 回傳

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### 繼承自

`TemplateState.eventGuards`

***

### eventPreconditions

#### Getter 簽章

> **get** **eventPreconditions**(): `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

定義於: packages/being/dist/interface.d.ts:585

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; TemplateState always provides it.

##### 回傳

`Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

#### 繼承自

`TemplateState.eventPreconditions`

***

### eventReactions

#### Getter 簽章

> **get** **eventReactions**(): `EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義於: packages/being/dist/interface.d.ts:586

##### 回傳

`EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 繼承自

`TemplateState.eventReactions`

***

### guards

#### Getter 簽章

> **get** **guards**(): `Guard`\<`Context`\>

定義於: packages/being/dist/interface.d.ts:583

##### 回傳

`Guard`\<`Context`\>

#### 繼承自

`TemplateState.guards`

***

### handlingEvents

#### Getter 簽章

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義於: packages/being/dist/interface.d.ts:582

##### 回傳

keyof `EventPayloadMapping`[]

#### 繼承自

`TemplateState.handlingEvents`

## 方法

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

定義於: packages/being/dist/interface.d.ts:589

#### 參數

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

##### to

`"TERMINAL"` | `"IDLE"` | `"READY_TO_PAN_VIA_SPACEBAR"` | `"READY_TO_PAN_VIA_SCROLL_WHEEL"` | `"PAN"` | `"INITIAL_PAN"` | `"PAN_VIA_SCROLL_WHEEL"` | `"DISABLED"`

#### 回傳

`void`

#### 繼承自

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, `K` *extends* keyof [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md) ? [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義於: packages/being/dist/interface.d.ts:590

#### 型別參數

##### K

`K` *extends* `string`

#### 參數

##### args

`EventArgs`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `K`\>

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

#### 回傳

`EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, `K` *extends* keyof [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md) ? [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### 繼承自

`TemplateState.handles`

***

### middlePointerDownHandler()

> **middlePointerDownHandler**(`context`, `payload`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:385](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L385)

#### 參數

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`PointerEventPayload`](../type-aliases/PointerEventPayload.md)

#### 回傳

`void`

***

### scrollHandler()

> **scrollHandler**(`context`, `payload`): [`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:322](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L322)

#### 參數

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)

#### 回傳

[`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

***

### scrollPan()

> **scrollPan**(`context`, `payload`): [`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:281](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L281)

#### 參數

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`ScrollEventPayload`](../type-aliases/ScrollEventPayload.md)

#### 回傳

[`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

***

### scrollWithCtrlHandler()

> **scrollWithCtrlHandler**(`context`, `payload`): [`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:338](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L338)

#### 參數

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)

#### 回傳

[`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

***

### scrollZoom()

> **scrollZoom**(`context`, `payload`): [`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:295](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L295)

#### 參數

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)

#### 回傳

[`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

***

### spacebarDownHandler()

> **spacebarDownHandler**(`context`, `payload`): `number`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:377](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L377)

#### 參數

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

`EmptyPayload`

#### 回傳

`number`

***

### uponEnter()

> **uponEnter**(`context`): `void`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:373](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L373)

#### 參數

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### 回傳

`void`

#### 覆寫了

`TemplateState.uponEnter`
