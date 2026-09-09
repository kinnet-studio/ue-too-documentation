[@ue-too/board](../../modules.md) / [index](../index.md) / convertDeltaToComplyWithRestriction

# 函式: convertDeltaToComplyWithRestriction()

> **convertDeltaToComplyWithRestriction**(`delta`, `camera`, `config`): `Point`

定義於: [packages/board/src/camera/camera-rig/pan-handler.ts:632](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/camera-rig/pan-handler.ts#L632)

Transforms a movement delta to comply with axis restriction configuration.

## 參數

### delta

`Point`

Original movement delta in world space

### camera

[`BoardCamera`](../interfaces/BoardCamera.md)

Current camera instance (provides rotation for relative restrictions)

### config

[`PanHandlerRestrictionConfig`](../type-aliases/PanHandlerRestrictionConfig.md)

Restriction configuration

## 回傳

`Point`

Transformed delta that respects all enabled restrictions

## 備註

This function applies axis-lock logic for both world-space and viewport-relative restrictions.
Restrictions are processed in priority order:

1. **Complete locks** (highest priority):
   - Both world axes locked → return zero delta
   - Both relative axes locked → return zero delta

2. **World-space axis locks**:
   - `restrictXTranslation` → Zero out X component
   - `restrictYTranslation` → Zero out Y component

3. **Viewport-relative axis locks** (rotation-aware):
   - `restrictRelativeXTranslation` → Project delta onto screen-vertical direction
   - `restrictRelativeYTranslation` → Project delta onto screen-horizontal direction

For viewport-relative restrictions:
- "Relative X" = horizontal in viewport/screen space
- "Relative Y" = vertical in viewport/screen space
- These account for camera rotation by projecting onto rotated axes

## Examples

```typescript
// World-space restriction: lock Y axis
const config1 = {
  restrictXTranslation: false,
  restrictYTranslation: true,
  restrictRelativeXTranslation: false,
  restrictRelativeYTranslation: false
};

const delta1 = { x: 50, y: 30 };
const result1 = convertDeltaToComplyWithRestriction(delta1, camera, config1);
// result1 = { x: 50, y: 0 } - Y component removed
```

```typescript
// Viewport-relative restriction: lock horizontal screen movement
const config2 = {
  restrictXTranslation: false,
  restrictYTranslation: false,
  restrictRelativeXTranslation: true,  // Lock screen-horizontal
  restrictRelativeYTranslation: false
};

// Camera rotated 45 degrees
const delta2 = { x: 100, y: 100 };
const result2 = convertDeltaToComplyWithRestriction(delta2, camera, config2);
// result2 projects delta onto screen-vertical direction
// (perpendicular to screen-horizontal)
```

## 參閱

 - [restrictPanByHandler](restrictPanByHandler.md) for usage in pan-by pipeline
 - [restrictPanToHandler](restrictPanToHandler.md) for usage in pan-to pipeline
