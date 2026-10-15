[@ue-too/being-devtools](../globals.md) / MachineDebugger

# 類別: MachineDebugger

定義於: [debugger.ts:89](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/debugger.ts#L89)

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

定義於: [debugger.ts:102](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/debugger.ts#L102)

#### 參數

##### options

[`MachineDebuggerOptions`](../type-aliases/MachineDebuggerOptions.md) = `{}`

#### 回傳

`MachineDebugger`

## 存取器

### board

#### Getter 簽章

> **get** **board**(): `Board`

定義於: [debugger.ts:132](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/debugger.ts#L132)

The panel's own graph viewport, so a page can diagram the board it pans.

##### 回傳

`Board`

***

### isOpen

#### Getter 簽章

> **get** **isOpen**(): `boolean`

定義於: [debugger.ts:136](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/debugger.ts#L136)

##### 回傳

`boolean`

***

### machines

#### Getter 簽章

> **get** **machines**(): `ReadonlyMap`\<`string`, [`MachineLike`](../type-aliases/MachineLike.md)\>

定義於: [debugger.ts:146](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/debugger.ts#L146)

Name → machine for every attached machine.

##### 回傳

`ReadonlyMap`\<`string`, [`MachineLike`](../type-aliases/MachineLike.md)\>

***

### size

#### Getter 簽章

> **get** **size**(): `number`

定義於: [debugger.ts:141](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/debugger.ts#L141)

Number of attached machines.

##### 回傳

`number`

## 方法

### attach()

> **attach**(`machine`, `options`): [`AttachHandle`](../type-aliases/AttachHandle.md)

定義於: [debugger.ts:159](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/debugger.ts#L159)

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

定義於: [debugger.ts:182](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/debugger.ts#L182)

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

定義於: [debugger.ts:229](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/debugger.ts#L229)

#### 回傳

`void`

***

### dispose()

> **dispose**(): `void`

定義於: [debugger.ts:250](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/debugger.ts#L250)

Detaches every machine, stops the render loop, and removes the panel.

#### 回傳

`void`

***

### open()

> **open**(): `void`

定義於: [debugger.ts:218](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/debugger.ts#L218)

#### 回傳

`void`

***

### toggle()

> **toggle**(): `void`

定義於: [debugger.ts:241](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being-devtools/src/debugger.ts#L241)

#### 回傳

`void`
