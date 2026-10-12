[@ue-too/being-portable](../globals.md) / loadMachine

# Function: loadMachine()

> **loadMachine**(`document`, `host`, `options`): [`LoadResult`](../type-aliases/LoadResult.md)

Defined in: [being-portable/src/api.ts:53](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/being-portable/src/api.ts#L53)

Validates an untrusted document and builds its machine. Returns every error
instead of a machine when the document is invalid.

## Parameters

### document

`unknown`

### host

[`Host`](../interfaces/Host.md)

### options

[`LoadOptions`](../type-aliases/LoadOptions.md) = `{}`

## Returns

[`LoadResult`](../type-aliases/LoadResult.md)

## Example

```ts
const result = loadMachine(JSON.parse(text), host);
if (!result.ok) return showErrors(result.errors);
result.machine.happens('insertCoin', { amount: 1 });
```
