[@ue-too/being-portable](../globals.md) / Services

# Type Alias: Services

> **Services** = `object`

Defined in: [being-portable/src/host.ts:32](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being-portable/src/host.ts#L32)

Sources of randomness and time for `randomInt` and `now`.

## Properties

### now()

> `readonly` **now**: () => `number`

Defined in: [being-portable/src/host.ts:36](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being-portable/src/host.ts#L36)

A finite number, usually milliseconds.

#### Returns

`number`

***

### random()

> `readonly` **random**: () => `number`

Defined in: [being-portable/src/host.ts:34](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/being-portable/src/host.ts#L34)

A number in `[0, 1)`.

#### Returns

`number`
