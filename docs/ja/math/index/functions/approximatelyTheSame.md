[@ue-too/math](../../modules.md) / [index](../index.md) / approximatelyTheSame

# 関数: approximatelyTheSame()

> **approximatelyTheSame**(`a`, `b`, `precision?`): `boolean`

定義: [index.ts:758](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/math/src/index.ts#L758)

Checks if two numbers are approximately equal within a tolerance.

## パラメータ

### a

`number`

First number

### b

`number`

Second number

### precision?

`number`

Optional tolerance (defaults to 0.000001)

## 戻り値

`boolean`

True if the absolute difference is within the precision threshold

## Remarks

Useful for floating-point comparisons where exact equality is unreliable.

## 例

```typescript
approximatelyTheSame(1.0, 1.0000001); // true (within default epsilon)
approximatelyTheSame(1.0, 1.1); // false
approximatelyTheSame(1.0, 1.01, 0.02); // true (within custom precision)
```
