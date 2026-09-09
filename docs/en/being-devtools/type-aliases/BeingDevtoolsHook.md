[@ue-too/being-devtools](../globals.md) / BeingDevtoolsHook

# Type Alias: BeingDevtoolsHook

> **BeingDevtoolsHook** = `object`

Defined in: [hook.ts:24](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/hook.ts#L24)

The console hook at `window.__UE_TOO_BEING__`, present while at least
one panel is alive.

## Remarks

`machines` is the union across every live panel. `open()` and `close()`
address the most recently created panel. `attach()` goes to the shared
overlay panel, exactly like `attachMachineDebugger`.

## Properties

### machines

> `readonly` **machines**: `ReadonlyMap`\<`string`, [`MachineLike`](MachineLike.md)\>

Defined in: [hook.ts:25](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/hook.ts#L25)

## Methods

### attach()

> **attach**(`machine`, `options?`): [`AttachHandle`](AttachHandle.md)

Defined in: [hook.ts:28](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/hook.ts#L28)

#### Parameters

##### machine

[`MachineLike`](MachineLike.md)

##### options?

[`AttachOptions`](AttachOptions.md)

#### Returns

[`AttachHandle`](AttachHandle.md)

***

### close()

> **close**(): `void`

Defined in: [hook.ts:27](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/hook.ts#L27)

#### Returns

`void`

***

### open()

> **open**(): `void`

Defined in: [hook.ts:26](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/hook.ts#L26)

#### Returns

`void`
