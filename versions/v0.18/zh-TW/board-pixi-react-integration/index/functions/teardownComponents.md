[@ue-too/board-pixi-react-integration](../../modules.md) / [index](../index.md) / teardownComponents

# 函式: teardownComponents()

> **teardownComponents**(`components`): `void`

定義於: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:18](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L18)

Tears down an initialized app: every registered cleanup, then the Pixi
 application.

 `cleanups` is the extension point — `baseInitApp` registers its own
 teardown there and apps push theirs after it. `cleanup` is kept for
 callers that still replace it via spread (`{ ...base, cleanup: … }`); it
 runs after the registered cleanups, but only when it is NOT already one
 of them, so the base teardown never runs twice and a replaced `cleanup`
 can no longer silently drop the base teardown.

## 參數

### components

[`TeardownTarget`](../interfaces/TeardownTarget.md)

## 回傳

`void`
