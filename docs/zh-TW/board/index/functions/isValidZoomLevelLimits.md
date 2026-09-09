[@ue-too/board](../../modules.md) / [index](../index.md) / isValidZoomLevelLimits

# 函式: isValidZoomLevelLimits()

> **isValidZoomLevelLimits**(`zoomLevelLimits`): `boolean`

定義於: [packages/board/src/camera/utils/zoom.ts:37](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/utils/zoom.ts#L37)

Validates that zoom level limits are logically consistent.

## 參數

### zoomLevelLimits

The zoom limits to validate

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) | `undefined`

## 回傳

`boolean`

True if limits are valid or undefined, false if min > max

## 備註

Returns true if:
- Limits are undefined (no constraints)
- Only min or max is defined
- Both are defined and min ≤ max

## 範例

```typescript
isValidZoomLevelLimits({ min: 0.5, max: 5 });    // true
isValidZoomLevelLimits({ min: 5, max: 0.5 });    // false
isValidZoomLevelLimits({ min: 0.5 });            // true
isValidZoomLevelLimits(undefined);               // true
```
