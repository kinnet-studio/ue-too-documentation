[@ue-too/board](../../modules.md) / [index](../index.md) / deg2rad

# Function: deg2rad()

> **deg2rad**(`deg`): `number`

Defined in: [packages/board/src/camera/utils/rotation.ts:306](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/camera/utils/rotation.ts#L306)

Converts degrees to radians.

## Parameters

### deg

`number`

Angle in degrees

## Returns

`number`

Equivalent angle in radians

## Example

```typescript
deg2rad(0);     // 0
deg2rad(90);    // π/2
deg2rad(180);   // π
deg2rad(360);   // 2π
deg2rad(-45);   // -π/4
```
