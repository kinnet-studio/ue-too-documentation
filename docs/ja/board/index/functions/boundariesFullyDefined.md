[@ue-too/board](../../modules.md) / [index](../index.md) / boundariesFullyDefined

# 関数: boundariesFullyDefined()

> **boundariesFullyDefined**(`boundaries`): `boundaries is { max: { x: number; y: number }; min: { x: number; y: number } }`

定義: [packages/board/src/camera/utils/position.ts:196](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/utils/position.ts#L196)

Checks if boundaries have all four constraints (min/max for both x and y) defined.

## パラメータ

### boundaries

The boundaries to check

[`Boundaries`](../type-aliases/Boundaries.md) | `undefined`

## 戻り値

`boundaries is { max: { x: number; y: number }; min: { x: number; y: number } }`

True if all four constraints are defined, false otherwise

## Remarks

Returns true only if boundaries define a complete rectangular region:
- min.x, min.y, max.x, and max.y are all defined

## 例

```typescript
boundariesFullyDefined({
  min: { x: 0, y: 0 },
  max: { x: 100, y: 100 }
}); // true

boundariesFullyDefined({
  min: { x: 0, y: 0 },
  max: { x: 100 }  // missing max.y
}); // false

boundariesFullyDefined({ min: { x: 0 } }); // false
boundariesFullyDefined(undefined);          // false
```
