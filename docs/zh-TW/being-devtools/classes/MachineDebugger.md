[@ue-too/being-devtools](../globals.md) / MachineDebugger

# 類別: MachineDebugger

定義於: [debugger.ts:89](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L89)

A debugger panel: a pannable state chart plus a sidebar with one tab per
attached machine, the current state, a context inspector, fire buttons,
reset, and a coalescing event log.

## 備註

Every attached machine is borrowed. The panel never calls `wrapup()` —
that parks a live machine in `TERMINAL` and, for a board machine, stops
the real board responding to input. `reset()` is offered because it
round-trips through `TERMINAL` and restarts; it is the recovery for a
machine stranded by a hand-fired half-gesture.

## 範例

```ts
const panel = new MachineDebugger();
const handle = panel.attach(machine, { name: 'pan-control' });
// later
handle.dispose();
panel.dispose();
```

## 建構函式

### 建構函式

> **new MachineDebugger**(`options`): `MachineDebugger`

定義於: [debugger.ts:102](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L102)

#### 參數

##### options

[`MachineDebuggerOptions`](../type-aliases/MachineDebuggerOptions.md) = `{}`

#### 回傳

`MachineDebugger`

## 存取器

### board

#### Getter 簽章

> **get** **board**(): `Board`

定義於: [debugger.ts:144](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L144)

The panel's own graph viewport, so a page can diagram the board it pans.

##### 回傳

`Board`

***

### isOpen

#### Getter 簽章

> **get** **isOpen**(): `boolean`

定義於: [debugger.ts:148](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L148)

##### 回傳

`boolean`

***

### machines

#### Getter 簽章

> **get** **machines**(): `ReadonlyMap`\<`string`, [`MachineLike`](../type-aliases/MachineLike.md)\>

定義於: [debugger.ts:158](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L158)

Name → machine for every attached machine.

##### 回傳

`ReadonlyMap`\<`string`, [`MachineLike`](../type-aliases/MachineLike.md)\>

***

### size

#### Getter 簽章

> **get** **size**(): `number`

定義於: [debugger.ts:153](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L153)

Number of attached machines.

##### 回傳

`number`

## 方法

### attach()

> **attach**(`machine`, `options`): [`AttachHandle`](../type-aliases/AttachHandle.md)

定義於: [debugger.ts:171](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L171)

Attaches a machine as a new tab.

#### 參數

##### machine

[`MachineLike`](../type-aliases/MachineLike.md)

##### options

[`AttachOptions`](../type-aliases/AttachOptions.md) = `{}`

#### 回傳

[`AttachHandle`](../type-aliases/AttachHandle.md)

#### 拋出

Error when `options.name` is already attached to this panel.

***

### attachBoard()

> **attachBoard**(`board`, `options`): [`AttachHandle`](../type-aliases/AttachHandle.md)

定義於: [debugger.ts:194](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L194)

Attaches every `being` machine the board exposes (see
`resolveBoardMachines`). Attaches what it finds; throws only
when it finds nothing.

#### 參數

##### board

[`BoardLike`](../type-aliases/BoardLike.md)

##### options

###### namePrefix?

`string`

#### 回傳

[`AttachHandle`](../type-aliases/AttachHandle.md)

***

### close()

> **close**(): `void`

定義於: [debugger.ts:241](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L241)

#### 回傳

`void`

***

### dispose()

> **dispose**(): `void`

定義於: [debugger.ts:262](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L262)

Detaches every machine, stops the render loop, and removes the panel.

#### 回傳

`void`

***

### open()

> **open**(): `void`

定義於: [debugger.ts:230](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L230)

#### 回傳

`void`

***

### toggle()

> **toggle**(): `void`

定義於: [debugger.ts:253](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L253)

#### 回傳

`void`
