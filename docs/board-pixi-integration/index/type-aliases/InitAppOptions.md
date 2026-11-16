[@ue-too/board-pixi-integration](../../modules.md) / [index](../index.md) / InitAppOptions

# Type Alias: InitAppOptions

> **InitAppOptions** = `object`

Defined in: [init-app.ts:52](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board-pixi-integration/src/init-app.ts#L52)

## Properties

### boundaries

> **boundaries**: `object`

Defined in: [init-app.ts:56](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board-pixi-integration/src/init-app.ts#L56)

#### max

> **max**: `object`

##### max.x

> **x**: `number`

##### max.y

> **y**: `number`

#### min

> **min**: `object`

##### min.x

> **x**: `number`

##### min.y

> **y**: `number`

***

### camera

> **camera**: `DefaultBoardCamera`

Defined in: [init-app.ts:55](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board-pixi-integration/src/init-app.ts#L55)

***

### fullScreen

> **fullScreen**: `boolean`

Defined in: [init-app.ts:53](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board-pixi-integration/src/init-app.ts#L53)

***

### inputMode

> **inputMode**: `KmtInputMode`

Defined in: [init-app.ts:60](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board-pixi-integration/src/init-app.ts#L60)

The input device to start in: `'kmt'` (keyboard + mouse, the default;
 a plain scroll wheel zooms) or `'trackpad'` (a two-finger swipe pans).
 Switch later with `observableInputTracker.setMode`.

***

### limitEntireViewPort

> **limitEntireViewPort**: `boolean`

Defined in: [init-app.ts:54](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board-pixi-integration/src/init-app.ts#L54)
