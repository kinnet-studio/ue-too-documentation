[@ue-too/math](../../modules.md) / [index](../index.md) / approximatelyTheSame

# Function: approximatelyTheSame()

> **approximatelyTheSame**(`a`, `b`, `precision?`): `boolean`

Defined in: [index.ts:758](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/math/src/index.ts#L758)

Checks if two numbers are approximately equal within a tolerance.

## Parameters

### a

`number`

First number

### b

`number`

Second number

### precision?

`number`

Optional tolerance (defaults to 0.000001)

## Returns

`boolean`

True if the absolute difference is within the precision threshold

## Remarks

Useful for floating-point comparisons where exact equality is unreliable.

## Example

```typescript
approximatelyTheSame(1.0, 1.0000001); // true (within default epsilon)
approximatelyTheSame(1.0, 1.1); // false
approximatelyTheSame(1.0, 1.01, 0.02); // true (within custom precision)
```
