[@ue-too/being-portable](../globals.md) / validateDefinition

# Function: validateDefinition()

> **validateDefinition**(`document`, `options`): [`ValidationResult`](../type-aliases/ValidationResult.md)

Defined in: [being-portable/src/api.ts:18](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/being-portable/src/api.ts#L18)

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
