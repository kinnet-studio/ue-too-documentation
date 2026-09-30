[@ue-too/being-devtools](../globals.md) / MachineDebugger

# Class: MachineDebugger

Defined in: [debugger.ts:89](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L89)

A debugger panel: a pannable state chart plus a sidebar with one tab per
attached machine, the current state, a context inspector, fire buttons,
reset, and a coalescing event log.

## Remarks

Every attached machine is borrowed. The panel never calls `wrapup()` —
that parks a live machine in `TERMINAL` and, for a board machine, stops
the real board responding to input. `reset()` is offered because it
round-trips through `TERMINAL` and restarts; it is the recovery for a
machine stranded by a hand-fired half-gesture.

## Example

```ts
const panel = new MachineDebugger();
const handle = panel.attach(machine, { name: 'pan-control' });
// later
handle.dispose();
panel.dispose();
```

## Constructors

### Constructor

> **new MachineDebugger**(`options`): `MachineDebugger`

Defined in: [debugger.ts:102](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L102)

#### Parameters

##### options

[`MachineDebuggerOptions`](../type-aliases/MachineDebuggerOptions.md) = `{}`

#### Returns

`MachineDebugger`

## Accessors

### board

#### Get Signature

> **get** **board**(): `Board`

Defined in: [debugger.ts:144](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L144)

The panel's own graph viewport, so a page can diagram the board it pans.

##### Returns

`Board`

***

### isOpen

#### Get Signature

> **get** **isOpen**(): `boolean`

Defined in: [debugger.ts:148](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L148)

##### Returns

`boolean`

***

### machines

#### Get Signature

> **get** **machines**(): `ReadonlyMap`\<`string`, [`MachineLike`](../type-aliases/MachineLike.md)\>

Defined in: [debugger.ts:158](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L158)

Name → machine for every attached machine.

##### Returns

`ReadonlyMap`\<`string`, [`MachineLike`](../type-aliases/MachineLike.md)\>

***

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [debugger.ts:153](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L153)

Number of attached machines.

##### Returns

`number`

## Methods

### attach()

> **attach**(`machine`, `options`): [`AttachHandle`](../type-aliases/AttachHandle.md)

Defined in: [debugger.ts:171](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L171)

Attaches a machine as a new tab.

#### Parameters

##### machine

[`MachineLike`](../type-aliases/MachineLike.md)

##### options

[`AttachOptions`](../type-aliases/AttachOptions.md) = `{}`

#### Returns

[`AttachHandle`](../type-aliases/AttachHandle.md)

#### Throws

Error when `options.name` is already attached to this panel.

***

### attachBoard()

> **attachBoard**(`board`, `options`): [`AttachHandle`](../type-aliases/AttachHandle.md)

Defined in: [debugger.ts:194](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L194)

Attaches every `being` machine the board exposes (see
`resolveBoardMachines`). Attaches what it finds; throws only
when it finds nothing.

#### Parameters

##### board

[`BoardLike`](../type-aliases/BoardLike.md)

##### options

###### namePrefix?

`string`

#### Returns

[`AttachHandle`](../type-aliases/AttachHandle.md)

***

### close()

> **close**(): `void`

Defined in: [debugger.ts:241](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L241)

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [debugger.ts:262](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L262)

Detaches every machine, stops the render loop, and removes the panel.

#### Returns

`void`

***

### open()

> **open**(): `void`

Defined in: [debugger.ts:230](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L230)

#### Returns

`void`

***

### toggle()

> **toggle**(): `void`

Defined in: [debugger.ts:253](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-devtools/src/debugger.ts#L253)

#### Returns

`void`
