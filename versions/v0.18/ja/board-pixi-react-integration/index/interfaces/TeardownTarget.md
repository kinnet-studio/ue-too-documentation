[@ue-too/board-pixi-react-integration](../../modules.md) / [index](../index.md) / TeardownTarget

# インターフェイス: TeardownTarget

定義: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:3](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L3)

The slice of `BaseAppComponents` the teardown needs. Structural so it can
 be unit-tested without a Pixi renderer.

## プロパティ

### app

> **app**: `object`

定義: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:6](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L6)

#### destroy()

> **destroy**(`rendererOptions`, `options`): `void`

##### パラメータ

###### rendererOptions

###### removeView

`boolean`

###### options

###### children

`boolean`

##### 戻り値

`void`

***

### cleanup()

> **cleanup**: () => `void`

定義: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:4](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L4)

#### 戻り値

`void`

***

### cleanups

> **cleanups**: () => `void`[]

定義: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:5](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L5)

#### 戻り値

`void`
