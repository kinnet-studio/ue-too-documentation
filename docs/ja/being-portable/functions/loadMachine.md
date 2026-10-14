[@ue-too/being-portable](../globals.md) / loadMachine

# 関数: loadMachine()

> **loadMachine**(`document`, `host`, `options`): [`LoadResult`](../type-aliases/LoadResult.md)

定義: [being-portable/src/api.ts:53](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/api.ts#L53)

Validates an untrusted document and builds its machine. Returns every error
instead of a machine when the document is invalid.

## パラメータ

### document

`unknown`

### host

[`Host`](../interfaces/Host.md)

### options

[`LoadOptions`](../type-aliases/LoadOptions.md) = `{}`

## 戻り値

[`LoadResult`](../type-aliases/LoadResult.md)

## 例

```ts
const result = loadMachine(JSON.parse(text), host);
if (!result.ok) return showErrors(result.errors);
result.machine.happens('insertCoin', { amount: 1 });
```
