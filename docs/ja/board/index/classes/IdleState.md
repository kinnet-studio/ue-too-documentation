[@ue-too/board](../../modules.md) / [index](../index.md) / IdleState

# クラス: IdleState

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:109](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L109)

IDLE state - waiting for two-finger touch.

## Remarks

This state handles touch lifecycle but only transitions to PENDING when exactly
two touches are active. Single touches and three+ touches are ignored.

**Guard Condition**:
Transitions to PENDING only when `getCurrentTouchPointsCount() === 2`.
This ensures the state machine only handles two-finger gestures.

## 拡張

- `TemplateState`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

## コンストラクター

### コンストラクター

> **new IdleState**(): `IdleState`

#### 戻り値

`IdleState`

#### 継承元

`TemplateState< TouchEventMapping, TouchContext, TouchStates, TouchInputEventOutputMapping >.constructor`

## プロパティ

### \_defer

> `protected` **\_defer**: `Defer`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\> \| `undefined`

定義: packages/being/dist/interface.d.ts:581

#### 継承元

`TemplateState._defer`

***

### \_delay

> `protected` **\_delay**: `Delay`\<[`TouchContext`](../interfaces/TouchContext.md), [`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\> \| `undefined`

定義: packages/being/dist/interface.d.ts:580

#### 継承元

`TemplateState._delay`

***

### \_eventGuards

> `protected` **\_eventGuards**: `Partial`\<`EventGuards`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchContext`](../interfaces/TouchContext.md), *typeof* [`_guards`](#guards)\>\>

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:137](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L137)

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

> `protected` **\_eventReactions**: `EventReactions`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:115](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L115)

#### 上書き

`TemplateState._eventReactions`

***

### \_guards

> `protected` **\_guards**: `Guard`\<[`TouchContext`](../interfaces/TouchContext.md), `"touchPointsCount"`\>

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:131](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L131)

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

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

##### to

`"TERMINAL"` | [`TouchStates`](../type-aliases/TouchStates.md)

#### 戻り値

`void`

#### 継承元

`TemplateState.beforeExit`

***

### handles()

> **handles**\<`K`\>(`args`, `context`, `stateMachine`): `EventResult`\<[`TouchStates`](../type-aliases/TouchStates.md), `K` *extends* `"touchmove"` ? [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

定義: packages/being/dist/interface.d.ts:590

#### 型パラメーター

##### K

`K` *extends* `string`

#### パラメータ

##### args

`EventArgs`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), `K`\>

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

#### 戻り値

`EventResult`\<[`TouchStates`](../type-aliases/TouchStates.md), `K` *extends* `"touchmove"` ? [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\[`K`\<`K`\>\] : `void`\>

#### 継承元

`TemplateState.handles`

***

### touchend()

> **touchend**(`context`, `payload`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:163](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L163)

#### パラメータ

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### 戻り値

`void`

***

### touchstart()

> **touchstart**(`context`, `payload`): `void`

定義: [packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts:159](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/input-state-machine/touch-input-state-machine.ts#L159)

#### パラメータ

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### payload

[`TouchEventPayload`](../type-aliases/TouchEventPayload.md)

#### 戻り値

`void`

***

### uponEnter()

> **uponEnter**(`context`, `stateMachine`, `from`): `void`

定義: packages/being/dist/interface.d.ts:588

#### パラメータ

##### context

[`TouchContext`](../interfaces/TouchContext.md)

##### stateMachine

`StateMachine`\<[`TouchEventMapping`](../type-aliases/TouchEventMapping.md), [`TouchContext`](../interfaces/TouchContext.md), [`TouchStates`](../type-aliases/TouchStates.md), [`TouchInputEventOutputMapping`](../type-aliases/TouchInputEventOutputMapping.md)\>

##### from

`"INITIAL"` | [`TouchStates`](../type-aliases/TouchStates.md)

#### 戻り値

`void`

#### 継承元

`TemplateState.uponEnter`
