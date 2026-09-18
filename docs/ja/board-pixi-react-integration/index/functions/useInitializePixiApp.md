[@ue-too/board-pixi-react-integration](../../modules.md) / [index](../index.md) / useInitializePixiApp

# 関数: useInitializePixiApp()

> **useInitializePixiApp**\<`T`\>(`option`, `initFunction`, `className?`): `object`

定義: [board-pixi-react-integration/src/hooks/pixi/initialization.ts:33](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-pixi-react-integration/src/hooks/pixi/initialization.ts#L33)

Initializes a Pixi application into a container element and tears it down on
unmount. Attach the returned `containerRef` to a wrapping element; a fresh
`<canvas>` is created inside it for each initialization.

The design below prevents a class of WebGL-context bugs that hard-freeze the
GPU process on some drivers (notably Linux/Mesa):

1. **Init runs once per mount.** Callers routinely pass an inline `option`
   object and `initFunction` closure, so keying the effect on them would
   re-initialize Pixi on every render — destroying and recreating the GL
   context on the same canvas, which collides with the in-flight renderer
   and wedges the GPU. The latest values are read from refs instead, so the
   effect depends only on the stable `setResult`.
2. **Init/teardown are serialized** through a promise chain, so two
   initializations never overlap (e.g. React StrictMode's mount→unmount→
   mount in dev, or a fast remount). The previous context is fully destroyed
   before the next one is created.
3. **A fresh `<canvas>` per init.** Pixi calls `WEBGL_lose_context` when the
   renderer is destroyed; a canvas whose context was lost cannot be
   reinitialized, so each init gets a brand-new element and the old one is
   detached on teardown (`removeView`).

## 型パラメーター

### T

`T` *extends* `InitAppOptions` = `InitAppOptions`

## パラメータ

### option

`Partial`\<`T`\>

### initFunction

(`canvas`, `option`) => `Promise`\<`BaseAppComponents`\>

### className?

`string`

## 戻り値

`object`

### containerRef

> **containerRef**: `RefObject`\<`HTMLDivElement` \| `null`\>
