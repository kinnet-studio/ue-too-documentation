[@ue-too/being-portable](../globals.md) / validateDefinition

# 関数: validateDefinition()

> **validateDefinition**(`document`, `options`): [`ValidationResult`](../type-aliases/ValidationResult.md)

定義: [being-portable/src/api.ts:18](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/being-portable/src/api.ts#L18)

Checks an untrusted document without building a machine. With a host, also
checks that the host supplies every declared effect with matching types.

Limits come from `options.limits` if given, else from the host, else the
defaults.

## パラメータ

### document

`unknown`

### options

#### host?

[`Host`](../interfaces/Host.md)

#### limits?

`Partial`\<[`Limits`](../type-aliases/Limits.md)\>

## 戻り値

[`ValidationResult`](../type-aliases/ValidationResult.md)
