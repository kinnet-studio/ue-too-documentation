[@ue-too/board](../../modules.md) / [index](../index.md) / rad2deg

# Function: rad2deg()

> **rad2deg**(`rad`): `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:327](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/rotation.ts#L327)

Converts radians to degrees.

## Parameters

### rad

`number`

Angle in radians

## Returns

`number`

Equivalent angle in degrees

## Example

```typescript
rad2deg(0);             // 0
rad2deg(Math.PI/2);     // 90
rad2deg(Math.PI);       // 180
rad2deg(2 * Math.PI);   // 360
rad2deg(-Math.PI/4);    // -45
```
