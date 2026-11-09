[@ue-too/board-pixi-react-integration](../globals.md) / useInitializePixiApp

# Function: useInitializePixiApp()

> **useInitializePixiApp**\<`T`\>(`option`, `initFunction`): `object`

Defined in: [board-pixi-react-integration/src/hooks/pixi/initialization.ts:6](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-pixi-react-integration/src/hooks/pixi/initialization.ts#L6)

## Type Parameters

### T

`T` *extends* `InitAppOptions` = `InitAppOptions`

## Parameters

### option

`Partial`\<`T`\>

### initFunction

(`canvas`, `option`) => `Promise`\<`BaseAppComponents`\>

## Returns

`object`

### canvasRef

> **canvasRef**: `RefObject`\<`HTMLCanvasElement` \| `null`\>
