[@ue-too/board](../../modules.md) / [index](../index.md) / angleSpan

# 関数: angleSpan()

> **angleSpan**(`from`, `to`): `number`

定義: [packages/board/src/camera/utils/rotation.ts:273](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/utils/rotation.ts#L273)

Calculates the signed angular distance between two angles, taking the shorter path.

## パラメータ

### from

`number`

Starting angle in radians

### to

`number`

Target angle in radians

## 戻り値

`number`

Signed angular difference in radians, in the range (-π, π]

## Remarks

Returns the shortest angular path from `from` to `to`:
- Positive value: rotate counter-clockwise (positive direction)
- Negative value: rotate clockwise (negative direction)
- Always returns the smaller of the two possible paths

## 例

```typescript
angleSpan(0, Math.PI/2);        // π/2 (90° ccw)
angleSpan(Math.PI/2, 0);        // -π/2 (90° cw)
angleSpan(0, 3*Math.PI/2);      // -π/2 (shorter to go cw)
angleSpan(3*Math.PI/2, 0);      // π/2 (shorter to go ccw)
angleSpan(0, Math.PI);          // π (180°, ambiguous)
```
