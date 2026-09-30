[@ue-too/board](../../modules.md) / [index](../index.md) / deg2rad

# 函式: deg2rad()

> **deg2rad**(`deg`): `number`

定義於: [packages/board/src/camera/utils/rotation.ts:306](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/camera/utils/rotation.ts#L306)

Converts degrees to radians.

## 參數

### deg

`number`

Angle in degrees

## 回傳

`number`

Equivalent angle in radians

## 範例

```typescript
deg2rad(0);     // 0
deg2rad(90);    // π/2
deg2rad(180);   // π
deg2rad(360);   // 2π
deg2rad(-45);   // -π/4
```
