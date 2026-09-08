[@ue-too/board](../../modules.md) / [index](../index.md) / KmtIdleState

# クラス: KmtIdleState

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:233](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L233)

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

## 拡張

- `TemplateState`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

## コンストラクター

### コンストラクター

> **new KmtIdleState**(): `KmtIdleState`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:239](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L239)

#### 戻り値

`KmtIdleState`

#### 上書き

`TemplateState< KmtInputEventMapping, KmtInputContext, KmtInputStates, KmtInputEventOutputMapping >.constructor`

## プロパティ

### \_defer

> `protected` **\_defer**: `Defer`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\> \| `undefined`

定義: packages/being/dist/interface.d.ts:581

#### 継承元

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\> \| `undefined`

定義: packages/being/dist/interface.d.ts:580

#### 継承元

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `Guard`\<[`KmtInputContext`](../interfaces/KmtInputContext.md)\>\>\> = `{}`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:247](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L247)

#### 上書き

`TemplateState._eventGuards`

***

### \_eventPreconditions

> `protected` **\_eventPreconditions**: `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:579

#### 継承元

`TemplateState._eventPreconditions`

***

### \_eventReactions

> `protected` **\_eventReactions**: `EventReactions`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:318](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L318)

#### 上書き

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<[`KmtInputContext`](../interfaces/KmtInputContext.md), `"isIdle"`\>

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:243](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L243)

#### 上書き

`TemplateState._guards`

## アクセッサー

### delay

#### 署名を取得する

> **get** **delay**(): `Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

定義: packages/being/dist/interface.d.ts:587

##### 戻り値

`Delay`\<`Context`, `EventPayloadMapping`, `States`, `EventOutputMapping`\> \| `undefined`

#### 継承元

`TemplateState.delay`

***

### eventGuards

#### 署名を取得する

> **get** **eventGuards**(): `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:584

##### 戻り値

`Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

#### 継承元

`TemplateState.eventGuards`

***

### eventPreconditions

#### 署名を取得する

> **get** **eventPreconditions**(): `Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:585

Pre-action vetoes: named guards that must all pass before this state
handles an event. Optional so existing State implementations remain
valid; TemplateState always provides it.

##### 戻り値

`Partial`\<`EventPreconditions`\<`EventPayloadMapping`, `Context`, `Guard`\<`Context`\>\>\>

#### 継承元

`TemplateState.eventPreconditions`

***

### eventReactions

#### 署名を取得する

> **get** **eventReactions**(): `EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

定義: packages/being/dist/interface.d.ts:586

##### 戻り値

`EventReactions`\<`EventPayloadMapping`, `Context`, `States`, `EventOutputMapping`\>

#### 継承元

`TemplateState.eventReactions`

***

### guards

#### 署名を取得する

> **get** **guards**(): `Guard`\<`Context`\>

定義: packages/being/dist/interface.d.ts:583

##### 戻り値

`Guard`\<`Context`\>

#### 継承元

`TemplateState.guards`

***

### handlingEvents

#### 署名を取得する

> **get** **handlingEvents**(): keyof `EventPayloadMapping`[]

定義: packages/being/dist/interface.d.ts:582

##### 戻り値

keyof `EventPayloadMapping`[]

#### 継承元

`TemplateState.handlingEvents`

## メソッド

### beforeExit()

> **beforeExit**(`context`, `stateMachine`, `to`): `void`

定義: packages/being/dist/interface.d.ts:589

#### パラメータ

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

##### to

`"TERMINAL"` | `"IDLE"` | `"READY_TO_PAN_VIA_SPACEBAR"` | `"READY_TO_PAN_VIA_SCROLL_WHEEL"` | `"PAN"` | `"INITIAL_PAN"` | `"PAN_VIA_SCROLL_WHEEL"` | `"DISABLED"`

#### 戻り値

`void`

#### 継承元

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, `K` *extends* keyof [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md) ? [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義: packages/being/dist/interface.d.ts:590

#### 型パラメーター

##### K

`K` *extends* `string`

#### パラメータ

##### args

`EventArgs`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), `K`\>

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### stateMachine

`StateMachine`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), `"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

#### 戻り値

`EventResult`\<`"IDLE"` \| `"READY_TO_PAN_VIA_SPACEBAR"` \| `"READY_TO_PAN_VIA_SCROLL_WHEEL"` \| `"PAN"` \| `"INITIAL_PAN"` \| `"PAN_VIA_SCROLL_WHEEL"` \| `"DISABLED"`, `K` *extends* keyof [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md) ? [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### 継承元

`TemplateState.handles`

***

### middlePointerDownHandler()

> **middlePointerDownHandler**(`context`, `payload`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:358](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L358)

#### パラメータ

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`PointerEventPayload`](../type-aliases/PointerEventPayload.md)

#### 戻り値

`void`

***

### scrollHandler()

> **scrollHandler**(`context`, `payload`): [`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:295](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L295)

#### パラメータ

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)

#### 戻り値

[`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

***

### scrollPan()

> **scrollPan**(`context`, `payload`): [`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:257](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L257)

#### パラメータ

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`ScrollEventPayload`](../type-aliases/ScrollEventPayload.md)

#### 戻り値

[`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

***

### scrollWithCtrlHandler()

> **scrollWithCtrlHandler**(`context`, `payload`): [`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:311](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L311)

#### パラメータ

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)

#### 戻り値

[`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

***

### scrollZoom()

> **scrollZoom**(`context`, `payload`): [`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:271](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L271)

#### パラメータ

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

[`ScrollWithCtrlEventPayload`](../type-aliases/ScrollWithCtrlEventPayload.md)

#### 戻り値

[`KmtOutputEvent`](../type-aliases/KmtOutputEvent.md)

***

### spacebarDownHandler()

> **spacebarDownHandler**(`context`, `payload`): `number`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:350](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L350)

#### パラメータ

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

##### payload

`EmptyPayload`

#### 戻り値

`number`

***

### uponEnter()

> **uponEnter**(`context`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:346](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L346)

#### パラメータ

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### 戻り値

`void`

#### 上書き

`TemplateState.uponEnter`
