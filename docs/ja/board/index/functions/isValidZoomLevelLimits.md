[@ue-too/board](../../modules.md) / [index](../index.md) / isValidZoomLevelLimits

# 関数: isValidZoomLevelLimits()

> **isValidZoomLevelLimits**(`zoomLevelLimits`): `boolean`

定義: [packages/board/src/camera/utils/zoom.ts:37](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/zoom.ts#L37)

Validates that zoom level limits are logically consistent.

## パラメータ

### zoomLevelLimits

The zoom limits to validate

[`ZoomLevelLimits`](../type-aliases/ZoomLevelLimits.md) | `undefined`

## 戻り値

`boolean`

True if limits are valid or undefined, false if min > max

## Remarks

Returns true if:
- Limits are undefined (no constraints)
- Only min or max is defined
- Both are defined and min ≤ max

## 例

```typescript
isValidZoomLevelLimits({ min: 0.5, max: 5 });    // true
isValidZoomLevelLimits({ min: 5, max: 0.5 });    // false
isValidZoomLevelLimits({ min: 0.5 });            // true
isValidZoomLevelLimits(undefined);               // true
```
