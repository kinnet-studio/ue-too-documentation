[@ue-too/being-portable](../globals.md) / HostEffect

# Type Alias: HostEffect

> **HostEffect** = `object`

Defined in: [being-portable/src/host.ts:54](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/being-portable/src/host.ts#L54)

An effect after [defineHost](../functions/defineHost.md) parsed its types.

## Properties

### args

> `readonly` **args**: `ReadonlyMap`\<`string`, [`ValueType`](ValueType.md)\>

Defined in: [being-portable/src/host.ts:55](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/being-portable/src/host.ts#L55)

***

### returns

> `readonly` **returns**: [`ValueType`](ValueType.md) \| `null`

Defined in: [being-portable/src/host.ts:56](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/being-portable/src/host.ts#L56)

***

### run()

> `readonly` **run**: (`args`) => [`Value`](Value.md) \| `void`

Defined in: [being-portable/src/host.ts:57](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/being-portable/src/host.ts#L57)

#### Parameters

##### args

`Readonly`\<`Record`\<`string`, [`Value`](Value.md)\>\>

#### Returns

[`Value`](Value.md) \| `void`
