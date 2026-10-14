[@ue-too/being-portable](../globals.md) / Services

# 型別別名: Services

> **Services** = `object`

定義於: [being-portable/src/host.ts:32](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/host.ts#L32)

Sources of randomness and time for `randomInt` and `now`.

## 屬性

### now()

> `readonly` **now**: () => `number`

定義於: [being-portable/src/host.ts:36](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/host.ts#L36)

A finite number, usually milliseconds.

#### 回傳

`number`

***

### random()

> `readonly` **random**: () => `number`

定義於: [being-portable/src/host.ts:34](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/being-portable/src/host.ts#L34)

A number in `[0, 1)`.

#### 回傳

`number`
