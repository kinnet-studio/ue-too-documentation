[@ue-too/being-portable](../globals.md) / defineHost

# Function: defineHost()

> **defineHost**(`definition`): [`Host`](../interfaces/Host.md)

Defined in: [being-portable/src/host.ts:92](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/being-portable/src/host.ts#L92)

Validates and freezes a host. Host code is trusted, so a malformed host
throws instead of returning errors.

## Parameters

### definition

[`HostDefinition`](../type-aliases/HostDefinition.md) = `{}`

## Returns

[`Host`](../interfaces/Host.md)
