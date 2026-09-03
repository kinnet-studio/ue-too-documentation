[@ue-too/board](../../modules.md) / [index](../index.md) / restrictPanToHandler

# 函式: restrictPanToHandler()

> **restrictPanToHandler**(`destination`, `camera`, `config`): `Point`

定義於: [packages/board/src/camera/camera-rig/pan-handler.ts:359](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/pan-handler.ts#L359)

Handler pipeline step that applies axis restrictions to "pan to" destinations.

## 參數

### destination

`Point`

Target camera position in world space

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance

### config

[`PanHandlerRestrictionConfig`](../type-aliases/PanHandlerRestrictionConfig.md)

Restriction configuration

## 回傳

`Point`

Restricted destination position

## 備註

This handler enforces axis-lock constraints on absolute camera positioning.
It converts the destination to a delta, applies restrictions, then converts back.

Algorithm:
1. Calculate delta from current position to destination
2. Apply restrictions using [convertDeltaToComplyWithRestriction](convertDeltaToComplyWithRestriction.md)
3. If delta becomes zero, return original destination (already at target)
4. Otherwise, return current position + restricted delta

Can be used standalone, but typically composed into a handler pipeline via
[createDefaultPanToHandler](createDefaultPanToHandler.md) or [createHandlerChain](createHandlerChain.md).

## 範例

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

## 參閱

 - [convertDeltaToComplyWithRestriction](convertDeltaToComplyWithRestriction.md) for restriction logic
 - [createDefaultPanToHandler](createDefaultPanToHandler.md) for default pipeline usage
