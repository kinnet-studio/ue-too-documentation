[@ue-too/being-devtools](../globals.md) / BeingDevtoolsHook

# 型別別名: BeingDevtoolsHook

> **BeingDevtoolsHook** = `object`

定義於: [hook.ts:24](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/hook.ts#L24)

The console hook at `window.__UE_TOO_BEING__`, present while at least
one panel is alive.

## 備註

`machines` is the union across every live panel. `open()` and `close()`
address the most recently created panel. `attach()` goes to the shared
overlay panel, exactly like `attachMachineDebugger`.

## 屬性

### machines

> `readonly` **machines**: `ReadonlyMap`\<`string`, [`MachineLike`](MachineLike.md)\>

定義於: [hook.ts:25](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/hook.ts#L25)

## 方法

### attach()

> **attach**(`machine`, `options?`): [`AttachHandle`](AttachHandle.md)

定義於: [hook.ts:28](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/hook.ts#L28)

#### 參數

##### machine

[`MachineLike`](MachineLike.md)

##### options?

[`AttachOptions`](AttachOptions.md)

#### 回傳

[`AttachHandle`](AttachHandle.md)

***

### close()

> **close**(): `void`

定義於: [hook.ts:27](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/hook.ts#L27)

#### 回傳

`void`

***

### open()

> **open**(): `void`

定義於: [hook.ts:26](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being-devtools/src/hook.ts#L26)

#### 回傳

`void`
