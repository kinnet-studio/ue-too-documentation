[@ue-too/board](../../modules.md) / [index](../index.md) / rad2deg

# 関数: rad2deg()

> **rad2deg**(`rad`): `number`

定義: [packages/board/src/camera/utils/rotation.ts:327](https://github.com/kinnet-studio/ue-too/blob/930a76bbea33e382298c04824ccf0063a87cf0f3/packages/board/src/camera/utils/rotation.ts#L327)

Converts radians to degrees.

## パラメータ

### rad

`number`

Angle in radians

## 戻り値

`number`

Equivalent angle in degrees

## 例

```typescript
rad2deg(0);             // 0
rad2deg(Math.PI/2);     // 90
rad2deg(Math.PI);       // 180
rad2deg(2 * Math.PI);   // 360
rad2deg(-Math.PI/4);    // -45
```
