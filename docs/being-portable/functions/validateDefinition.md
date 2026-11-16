[@ue-too/being-portable](../globals.md) / validateDefinition

# Function: validateDefinition()

> **validateDefinition**(`document`, `options`): [`ValidationResult`](../type-aliases/ValidationResult.md)

Defined in: [being-portable/src/api.ts:18](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/being-portable/src/api.ts#L18)

Checks an untrusted document without building a machine. With a host, also
checks that the host supplies every declared effect with matching types.

Limits come from `options.limits` if given, else from the host, else the
defaults.

## Parameters

### document

`unknown`

### options

#### host?

[`Host`](../interfaces/Host.md)

#### limits?

`Partial`\<[`Limits`](../type-aliases/Limits.md)\>

## Returns

[`ValidationResult`](../type-aliases/ValidationResult.md)
