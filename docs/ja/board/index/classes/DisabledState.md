[@ue-too/board](../../modules.md) / [index](../index.md) / DisabledState

# クラス: DisabledState

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:371](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L371)

## 拡張

- `TemplateState`\<[`KmtInputEventMapping`](../type-aliases/KmtInputEventMapping.md), [`KmtInputContext`](../interfaces/KmtInputContext.md), [`KmtInputStates`](../type-aliases/KmtInputStates.md), [`KmtInputEventOutputMapping`](../type-aliases/KmtInputEventOutputMapping.md)\>

## コンストラクター

### コンストラクター

> **new DisabledState**(): `DisabledState`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:377](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L377)

#### 戻り値

`DisabledState`

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

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<`EventPayloadMapping`, `States`, `Context`, `Guard`\<`Context`\>\>\>

定義: packages/being/dist/interface.d.ts:578

#### 継承元

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

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:390](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L390)

#### 上書き

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<`Context`\>

定義: packages/being/dist/interface.d.ts:577

#### 継承元

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

> **beforeExit**(`context`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:386](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L386)

#### パラメータ

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### 戻り値

`void`

#### 上書き

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

### uponEnter()

> **uponEnter**(`context`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:381](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L381)

#### パラメータ

##### context

[`KmtInputContext`](../interfaces/KmtInputContext.md)

#### 戻り値

`void`

#### 上書き

`TemplateState.uponEnter`
