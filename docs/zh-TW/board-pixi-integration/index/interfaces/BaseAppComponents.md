[@ue-too/board-pixi-integration](../../modules.md) / [index](../index.md) / BaseAppComponents

# 介面: BaseAppComponents

定義於: [init-app.ts:31](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L31)

## 屬性

### app

> **app**: `Application`

定義於: [init-app.ts:32](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L32)

***

### camera

> **camera**: `DefaultBoardCamera`

定義於: [init-app.ts:33](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L33)

***

### cameraRig

> **cameraRig**: `CameraRig`

定義於: [init-app.ts:35](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L35)

***

### canvasProxy

> **canvasProxy**: `CanvasProxy`

定義於: [init-app.ts:34](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L34)

***

### cleanup()

> **cleanup**: () => `void`

定義於: [init-app.ts:44](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L44)

The base teardown (parsers + canvas proxy). Also registered as the
 first entry of `cleanups`; prefer extending via `cleanups.push(…)`
 over replacing this property.

#### 回傳

`void`

***

### cleanups

> **cleanups**: () => `void`[]

定義於: [init-app.ts:48](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L48)

Teardown extension point: run in order by the React integration on
 unmount, before the Pixi app is destroyed. Push app-level teardown
 (window listeners, preference subscriptions, swapped-in parsers) here.

#### 回傳

`void`

***

### inputOrchestrator

> **inputOrchestrator**: `InputOrchestrator`

定義於: [init-app.ts:36](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L36)

***

### kmtInputStateMachine

> **kmtInputStateMachine**: `StateMachine`

定義於: [init-app.ts:38](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L38)

***

### kmtParser

> **kmtParser**: `VanillaKMTEventParser`

定義於: [init-app.ts:39](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L39)

***

### observableInputTracker

> **observableInputTracker**: `ObservableInputTracker`

定義於: [init-app.ts:37](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L37)

***

### touchParser

> **touchParser**: `TouchEventParser`

定義於: [init-app.ts:40](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L40)
