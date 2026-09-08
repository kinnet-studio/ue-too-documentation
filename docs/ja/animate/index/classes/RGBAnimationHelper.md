[@ue-too/animate](../../modules.md) / [index](../index.md) / RGBAnimationHelper

# クラス: RGBAnimationHelper

定義: [animatable-attribute.ts:299](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/animatable-attribute.ts#L299)

Interface for type-specific interpolation helpers.

## Remarks

Animation helpers provide the `lerp` (linear interpolation) logic for specific types.
Different types require different interpolation strategies:
- Numbers: Simple linear interpolation
- Points: Component-wise interpolation
- Colors (RGB): Component-wise color interpolation
- Strings: Step-based (threshold) interpolation

## 例

```typescript
const myHelper: AnimatableAttributeHelper<number> = {
  lerp: (ratio, start, end) => {
    const t = (ratio - start.percentage) / (end.percentage - start.percentage);
    return start.value + t * (end.value - start.value);
  }
};
```

## 実装

- [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<[`RGB`](../type-aliases/RGB.md)\>

## コンストラクター

### コンストラクター

> **new RGBAnimationHelper**(): `RGBAnimationHelper`

定義: [animatable-attribute.ts:300](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/animatable-attribute.ts#L300)

#### 戻り値

`RGBAnimationHelper`

## メソッド

### lerp()

> **lerp**(`ratio`, `start`, `end`): [`RGB`](../type-aliases/RGB.md)

定義: [animatable-attribute.ts:302](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/animate/src/animatable-attribute.ts#L302)

Interpolates between two keyframes at a given ratio.

#### パラメータ

##### ratio

`number`

Current animation progress (0.0 to 1.0)

##### start

[`Keyframe`](../type-aliases/Keyframe.md)\<[`RGB`](../type-aliases/RGB.md)\>

Starting keyframe

##### end

[`Keyframe`](../type-aliases/Keyframe.md)\<[`RGB`](../type-aliases/RGB.md)\>

Ending keyframe

#### 戻り値

[`RGB`](../type-aliases/RGB.md)

Interpolated value at the given ratio

#### の実装

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md).[`lerp`](../interfaces/AnimatableAttributeHelper.md#lerp)
