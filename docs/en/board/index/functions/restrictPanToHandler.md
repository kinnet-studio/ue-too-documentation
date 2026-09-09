[@ue-too/board](../../modules.md) / [index](../index.md) / restrictPanToHandler

# Function: restrictPanToHandler()

> **restrictPanToHandler**(`destination`, `camera`, `config`): `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:359](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-rig/pan-handler.ts#L359)

Handler pipeline step that applies axis restrictions to "pan to" destinations.

## Parameters

### destination

`Point`

Target camera position in world space

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`PanHandlerRestrictionConfig`](../type-aliases/PanHandlerRestrictionConfig.md)

Restriction configuration

## Returns

`Point`

Restricted destination position

## Remarks

This handler enforces axis-lock constraints on absolute camera positioning.
It converts the destination to a delta, applies restrictions, then converts back.

Algorithm:
1. Calculate delta from current position to destination
2. Apply restrictions using [convertDeltaToComplyWithRestriction](convertDeltaToComplyWithRestriction.md)
3. If delta becomes zero, return original destination (already at target)
4. Otherwise, return current position + restricted delta

Can be used standalone, but typically composed into a handler pipeline via
[createDefaultPanToHandler](createDefaultPanToHandler.md) or [createHandlerChain](createHandlerChain.md).

## Example

```typescript
// Standalone usage
const config: PanHandlerRestrictionConfig = {
  restrictYTranslation: true,  // Lock Y axis
  restrictXTranslation: false,
  restrictRelativeXTranslation: false,
  restrictRelativeYTranslation: false
};

const destination = { x: 1000, y: 500 };
const restricted = restrictPanToHandler(destination, camera, config);
// If camera is at { x: 0, y: 200 }, result is { x: 1000, y: 200 }
```

## See

 - [convertDeltaToComplyWithRestriction](convertDeltaToComplyWithRestriction.md) for restriction logic
 - [createDefaultPanToHandler](createDefaultPanToHandler.md) for default pipeline usage
