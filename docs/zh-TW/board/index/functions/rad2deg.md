[@ue-too/board](../../modules.md) / [index](../index.md) / rad2deg

# 函式: rad2deg()

> **rad2deg**(`rad`): `number`

定義於: [packages/board/src/camera/utils/rotation.ts:327](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/rotation.ts#L327)

Converts radians to degrees.

## 參數

### rad

`number`

Angle in radians

## 回傳

`number`

Equivalent angle in degrees

## 範例

```typescript
rad2deg(0);             // 0
rad2deg(Math.PI/2);     // 90
rad2deg(Math.PI);       // 180
rad2deg(2 * Math.PI);   // 360
rad2deg(-Math.PI/4);    // -45
```
