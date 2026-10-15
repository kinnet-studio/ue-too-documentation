[@ue-too/animate](../../modules.md) / [index](../index.md) / IntegerAnimationHelper

# クラス: IntegerAnimationHelper

定義: [animatable-attribute.ts:239](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/animate/src/animatable-attribute.ts#L239)

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

- [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`number`\>

## コンストラクター

### コンストラクター

> **new IntegerAnimationHelper**(): `IntegerAnimationHelper`

定義: [animatable-attribute.ts:240](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/animate/src/animatable-attribute.ts#L240)

#### 戻り値

`IntegerAnimationHelper`

## メソッド

### lerp()

> **lerp**(`ratio`, `start`, `end`): `number`

定義: [animatable-attribute.ts:242](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/animate/src/animatable-attribute.ts#L242)

Interpolates between two keyframes at a given ratio.

#### パラメータ

##### ratio

`number`

Current animation progress (0.0 to 1.0)

##### start

[`Keyframe`](../type-aliases/Keyframe.md)\<`number`\>

Starting keyframe

##### end

[`Keyframe`](../type-aliases/Keyframe.md)\<`number`\>

Ending keyframe

#### 戻り値

`number`

Interpolated value at the given ratio

#### の実装

[`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md).[`lerp`](../interfaces/AnimatableAttributeHelper.md#lerp)
