[@ue-too/board-vue-adapter](../../modules.md) / [index](../index.md) / useAnimationFrameWithBoard

# Function: useAnimationFrameWithBoard()

> **useAnimationFrameWithBoard**(`callback?`): `void`

Defined in: [useBoard.ts:89](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/board-vue-adapter/src/useBoard.ts#L89)

Hook to run an animation loop integrated with the Board's step function.

## Parameters

### callback?

(`timestamp`, `ctx`) => `void`

Optional function to call after board.step(), receives timestamp and canvas context

## Returns

`void`
