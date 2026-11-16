[@ue-too/being-portable](../globals.md) / loadMachine

# Function: loadMachine()

> **loadMachine**(`document`, `host`, `options`): [`LoadResult`](../type-aliases/LoadResult.md)

Defined in: [being-portable/src/api.ts:53](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/being-portable/src/api.ts#L53)

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
