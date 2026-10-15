[@ue-too/board-pixi-react-integration](../../modules.md) / [index](../index.md) / TeardownTarget

# Interface: TeardownTarget

Defined in: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:3](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L3)

The slice of `BaseAppComponents` the teardown needs. Structural so it can
 be unit-tested without a Pixi renderer.

## Properties

### app

> **app**: `object`

Defined in: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:6](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L6)

#### destroy()

> **destroy**(`rendererOptions`, `options`): `void`

##### Parameters

###### rendererOptions

###### removeView

`boolean`

###### options

###### children

`boolean`

##### Returns

`void`

***

### cleanup()

> **cleanup**: () => `void`

Defined in: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:4](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L4)

#### Returns

`void`

***

### cleanups

> **cleanups**: () => `void`[]

Defined in: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:5](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L5)

#### Returns

`void`
