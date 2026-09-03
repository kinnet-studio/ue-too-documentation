[@ue-too/board](../../modules.md) / [index](../index.md) / restrictPanByHandler

# 関数: restrictPanByHandler()

> **restrictPanByHandler**(`delta`, `camera`, `config`): `Point`

定義: [packages/board/src/camera/camera-rig/pan-handler.ts:411](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/pan-handler.ts#L411)

Handler pipeline step that applies axis restrictions to "pan by" deltas.

## パラメータ

### delta

`Point`

Movement delta in world space

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`PanHandlerRestrictionConfig`](../type-aliases/PanHandlerRestrictionConfig.md)

Restriction configuration

## 戻り値

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

## 例

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

## 参照

 - [convertDeltaToComplyWithRestriction](convertDeltaToComplyWithRestriction.md) for restriction logic
 - [createDefaultPanByHandler](createDefaultPanByHandler.md) for default pipeline usage
