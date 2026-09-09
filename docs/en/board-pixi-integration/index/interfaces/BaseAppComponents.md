[@ue-too/board-pixi-integration](../../modules.md) / [index](../index.md) / BaseAppComponents

# Interface: BaseAppComponents

Defined in: [init-app.ts:31](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L31)

## Properties

### app

> **app**: `Application`

Defined in: [init-app.ts:32](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L32)

***

### camera

> **camera**: `DefaultBoardCamera`

Defined in: [init-app.ts:33](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L33)

***

### cameraRig

> **cameraRig**: `CameraRig`

Defined in: [init-app.ts:35](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L35)

***

### canvasProxy

> **canvasProxy**: `CanvasProxy`

Defined in: [init-app.ts:34](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L34)

***

### cleanup()

> **cleanup**: () => `void`

Defined in: [init-app.ts:44](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L44)

The base teardown (parsers + canvas proxy). Also registered as the
 first entry of `cleanups`; prefer extending via `cleanups.push(…)`
 over replacing this property.

#### Returns

`void`

***

### cleanups

> **cleanups**: () => `void`[]

Defined in: [init-app.ts:48](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L48)

Teardown extension point: run in order by the React integration on
 unmount, before the Pixi app is destroyed. Push app-level teardown
 (window listeners, preference subscriptions, swapped-in parsers) here.

#### Returns

`void`

***

### inputOrchestrator

> **inputOrchestrator**: `InputOrchestrator`

Defined in: [init-app.ts:36](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L36)

***

### kmtInputStateMachine

> **kmtInputStateMachine**: `StateMachine`

Defined in: [init-app.ts:38](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L38)

***

### kmtParser

> **kmtParser**: `VanillaKMTEventParser`

Defined in: [init-app.ts:39](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L39)

***

### observableInputTracker

> **observableInputTracker**: `ObservableInputTracker`

Defined in: [init-app.ts:37](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L37)

***

### touchParser

> **touchParser**: `TouchEventParser`

Defined in: [init-app.ts:40](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board-pixi-integration/src/init-app.ts#L40)
