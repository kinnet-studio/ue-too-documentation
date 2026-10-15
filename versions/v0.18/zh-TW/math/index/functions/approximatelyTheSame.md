[@ue-too/math](../../modules.md) / [index](../index.md) / approximatelyTheSame

# 函式: approximatelyTheSame()

> **approximatelyTheSame**(`a`, `b`, `precision?`): `boolean`

定義於: [index.ts:758](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/math/src/index.ts#L758)

Checks if two numbers are approximately equal within a tolerance.

## 參數

### a

`number`

First number

### b

`number`

Second number

### precision?

`number`

Optional tolerance (defaults to 0.000001)

## 回傳

`boolean`

True if the absolute difference is within the precision threshold

## 備註

Useful for floating-point comparisons where exact equality is unreliable.

## 範例

```typescript
approximatelyTheSame(1.0, 1.0000001); // true (within default epsilon)
approximatelyTheSame(1.0, 1.1); // false
approximatelyTheSame(1.0, 1.01, 0.02); // true (within custom precision)
```
