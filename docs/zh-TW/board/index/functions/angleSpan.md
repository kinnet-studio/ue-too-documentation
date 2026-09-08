[@ue-too/board](../../modules.md) / [index](../index.md) / angleSpan

# 函式: angleSpan()

> **angleSpan**(`from`, `to`): `number`

定義於: [packages/board/src/camera/utils/rotation.ts:273](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/rotation.ts#L273)

Calculates the signed angular distance between two angles, taking the shorter path.

## 參數

### from

`number`

Starting angle in radians

### to

`number`

Target angle in radians

## 回傳

`number`

Signed angular difference in radians, in the range (-π, π]

## 備註

Returns the shortest angular path from `from` to `to`:
- Positive value: rotate counter-clockwise (positive direction)
- Negative value: rotate clockwise (negative direction)
- Always returns the smaller of the two possible paths

## 範例

```typescript
angleSpan(0, Math.PI/2);        // π/2 (90° ccw)
angleSpan(Math.PI/2, 0);        // -π/2 (90° cw)
angleSpan(0, 3*Math.PI/2);      // -π/2 (shorter to go cw)
angleSpan(3*Math.PI/2, 0);      // π/2 (shorter to go ccw)
angleSpan(0, Math.PI);          // π (180°, ambiguous)
```
