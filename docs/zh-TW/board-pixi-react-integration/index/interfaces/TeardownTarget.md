[@ue-too/board-pixi-react-integration](../../modules.md) / [index](../index.md) / TeardownTarget

# 介面: TeardownTarget

定義於: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:3](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L3)

The slice of `BaseAppComponents` the teardown needs. Structural so it can
 be unit-tested without a Pixi renderer.

## 屬性

### app

> **app**: `object`

定義於: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:6](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L6)

#### destroy()

> **destroy**(`rendererOptions`, `options`): `void`

##### 參數

###### rendererOptions

###### removeView

`boolean`

###### options

###### children

`boolean`

##### 回傳

`void`

***

### cleanup()

> **cleanup**: () => `void`

定義於: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:4](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L4)

#### 回傳

`void`

***

### cleanups

> **cleanups**: () => `void`[]

定義於: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:5](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L5)

#### 回傳

`void`
