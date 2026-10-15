[@ue-too/board](../globals.md) / restrictPanByHandler

# Function: restrictPanByHandler()

> **restrictPanByHandler**(`delta`, `camera`, `config`): `Point`

Defined in: [packages/board/src/camera/camera-rig/pan-handler.ts:411](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-rig/pan-handler.ts#L411)

Handler pipeline step that applies axis restrictions to "pan by" deltas.

## Parameters

### delta

`Point`

Movement delta in world space

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`PanHandlerRestrictionConfig`](../type-aliases/PanHandlerRestrictionConfig.md)

Restriction configuration

## Returns

`Point`

Restricted movement delta

## Remarks

This handler enforces axis-lock constraints on relative camera movement.
It directly transforms the delta according to restriction rules.

Restrictions applied by [convertDeltaToComplyWithRestriction](convertDeltaToComplyWithRestriction.md):
- World-space axis locks (X/Y)
- Viewport-relative axis locks (horizontal/vertical, accounting for rotation)

Can be used standalone, but typically composed into a handler pipeline via
[createDefaultPanByHandler](createDefaultPanByHandler.md) or [createHandlerChain](createHandlerChain.md).

## Example

```typescript
// Standalone usage - lock to screen-horizontal movement
const config: PanHandlerRestrictionConfig = {
  restrictXTranslation: false,
  restrictYTranslation: false,
  restrictRelativeXTranslation: false,
  restrictRelativeYTranslation: true  // Lock screen-vertical
};

const delta = { x: 50, y: 30 };
const restricted = restrictPanByHandler(delta, camera, config);
// Result depends on camera rotation - only horizontal screen movement allowed
```

## See

 - [convertDeltaToComplyWithRestriction](convertDeltaToComplyWithRestriction.md) for restriction logic
 - [createDefaultPanByHandler](createDefaultPanByHandler.md) for default pipeline usage
