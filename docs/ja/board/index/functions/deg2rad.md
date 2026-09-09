[@ue-too/board](../../modules.md) / [index](../index.md) / deg2rad

# 関数: deg2rad()

> **deg2rad**(`deg`): `number`

定義: [packages/board/src/camera/utils/rotation.ts:306](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/camera/utils/rotation.ts#L306)

Converts degrees to radians.

## パラメータ

### deg

`number`

Angle in degrees

## 戻り値

`number`

Equivalent angle in radians

## 例

```typescript
deg2rad(0);     // 0
deg2rad(90);    // π/2
deg2rad(180);   // π
deg2rad(360);   // 2π
deg2rad(-45);   // -π/4
```
