[@ue-too/being-devtools](../globals.md) / BeingDevtoolsHook

# 型エイリアス: BeingDevtoolsHook

> **BeingDevtoolsHook** = `object`

定義: [hook.ts:24](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/hook.ts#L24)

The console hook at `window.__UE_TOO_BEING__`, present while at least
one panel is alive.

## Remarks

`machines` is the union across every live panel. `open()` and `close()`
address the most recently created panel. `attach()` goes to the shared
overlay panel, exactly like `attachMachineDebugger`.

## プロパティ

### machines

> `readonly` **machines**: `ReadonlyMap`\<`string`, [`MachineLike`](MachineLike.md)\>

定義: [hook.ts:25](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/hook.ts#L25)

## メソッド

### attach()

> **attach**(`machine`, `options?`): [`AttachHandle`](AttachHandle.md)

定義: [hook.ts:28](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/hook.ts#L28)

#### パラメータ

##### machine

[`MachineLike`](MachineLike.md)

##### options?

[`AttachOptions`](AttachOptions.md)

#### 戻り値

[`AttachHandle`](AttachHandle.md)

***

### close()

> **close**(): `void`

定義: [hook.ts:27](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/hook.ts#L27)

#### 戻り値

`void`

***

### open()

> **open**(): `void`

定義: [hook.ts:26](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being-devtools/src/hook.ts#L26)

#### 戻り値

`void`
