[@ue-too/being-devtools](../globals.md) / MachineDebugger

# クラス: MachineDebugger

定義: [debugger.ts:89](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L89)

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

定義: [debugger.ts:102](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L102)

#### パラメータ

##### options

[`MachineDebuggerOptions`](../type-aliases/MachineDebuggerOptions.md) = `{}`

#### 戻り値

`MachineDebugger`

## アクセッサー

### board

#### 署名を取得する

> **get** **board**(): `Board`

定義: [debugger.ts:132](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L132)

The panel's own graph viewport, so a page can diagram the board it pans.

##### 戻り値

`Board`

***

### isOpen

#### 署名を取得する

> **get** **isOpen**(): `boolean`

定義: [debugger.ts:136](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L136)

##### 戻り値

`boolean`

***

### machines

#### 署名を取得する

> **get** **machines**(): `ReadonlyMap`\<`string`, [`MachineLike`](../type-aliases/MachineLike.md)\>

定義: [debugger.ts:146](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L146)

Name → machine for every attached machine.

##### 戻り値

`ReadonlyMap`\<`string`, [`MachineLike`](../type-aliases/MachineLike.md)\>

***

### size

#### 署名を取得する

> **get** **size**(): `number`

定義: [debugger.ts:141](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L141)

Number of attached machines.

##### 戻り値

`number`

## メソッド

### attach()

> **attach**(`machine`, `options`): [`AttachHandle`](../type-aliases/AttachHandle.md)

定義: [debugger.ts:159](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L159)

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

定義: [debugger.ts:182](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L182)

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

定義: [debugger.ts:229](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L229)

#### 戻り値

`void`

***

### dispose()

> **dispose**(): `void`

定義: [debugger.ts:250](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L250)

Detaches every machine, stops the render loop, and removes the panel.

#### 戻り値

`void`

***

### open()

> **open**(): `void`

定義: [debugger.ts:218](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L218)

#### 戻り値

`void`

***

### toggle()

> **toggle**(): `void`

定義: [debugger.ts:241](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/debugger.ts#L241)

#### 戻り値

`void`
