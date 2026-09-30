[@ue-too/being-devtools](../globals.md) / MachineDebugger

# クラス: MachineDebugger

定義: [debugger.ts:89](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L89)

A debugger panel: a pannable state chart plus a sidebar with one tab per
attached machine, the current state, a context inspector, fire buttons,
reset, and a coalescing event log.

## Remarks

Every attached machine is borrowed. The panel never calls `wrapup()` —
that parks a live machine in `TERMINAL` and, for a board machine, stops
the real board responding to input. `reset()` is offered because it
round-trips through `TERMINAL` and restarts; it is the recovery for a
machine stranded by a hand-fired half-gesture.

## 例

```ts
const panel = new MachineDebugger();
const handle = panel.attach(machine, { name: 'pan-control' });
// later
handle.dispose();
panel.dispose();
```

## コンストラクター

### コンストラクター

> **new MachineDebugger**(`options`): `MachineDebugger`

定義: [debugger.ts:102](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L102)

#### パラメータ

##### options

[`MachineDebuggerOptions`](../type-aliases/MachineDebuggerOptions.md) = `{}`

#### 戻り値

`MachineDebugger`

## アクセッサー

### board

#### 署名を取得する

> **get** **board**(): `Board`

定義: [debugger.ts:144](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L144)

The panel's own graph viewport, so a page can diagram the board it pans.

##### 戻り値

`Board`

***

### isOpen

#### 署名を取得する

> **get** **isOpen**(): `boolean`

定義: [debugger.ts:148](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L148)

##### 戻り値

`boolean`

***

### machines

#### 署名を取得する

> **get** **machines**(): `ReadonlyMap`\<`string`, [`MachineLike`](../type-aliases/MachineLike.md)\>

定義: [debugger.ts:158](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L158)

Name → machine for every attached machine.

##### 戻り値

`ReadonlyMap`\<`string`, [`MachineLike`](../type-aliases/MachineLike.md)\>

***

### size

#### 署名を取得する

> **get** **size**(): `number`

定義: [debugger.ts:153](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L153)

Number of attached machines.

##### 戻り値

`number`

## メソッド

### attach()

> **attach**(`machine`, `options`): [`AttachHandle`](../type-aliases/AttachHandle.md)

定義: [debugger.ts:171](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L171)

Attaches a machine as a new tab.

#### パラメータ

##### machine

[`MachineLike`](../type-aliases/MachineLike.md)

##### options

[`AttachOptions`](../type-aliases/AttachOptions.md) = `{}`

#### 戻り値

[`AttachHandle`](../type-aliases/AttachHandle.md)

#### Throws

Error when `options.name` is already attached to this panel.

***

### attachBoard()

> **attachBoard**(`board`, `options`): [`AttachHandle`](../type-aliases/AttachHandle.md)

定義: [debugger.ts:194](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L194)

Attaches every `being` machine the board exposes (see
`resolveBoardMachines`). Attaches what it finds; throws only
when it finds nothing.

#### パラメータ

##### board

[`BoardLike`](../type-aliases/BoardLike.md)

##### options

###### namePrefix?

`string`

#### 戻り値

[`AttachHandle`](../type-aliases/AttachHandle.md)

***

### close()

> **close**(): `void`

定義: [debugger.ts:241](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L241)

#### 戻り値

`void`

***

### dispose()

> **dispose**(): `void`

定義: [debugger.ts:262](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L262)

Detaches every machine, stops the render loop, and removes the panel.

#### 戻り値

`void`

***

### open()

> **open**(): `void`

定義: [debugger.ts:230](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L230)

#### 戻り値

`void`

***

### toggle()

> **toggle**(): `void`

定義: [debugger.ts:253](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L253)

#### 戻り値

`void`
