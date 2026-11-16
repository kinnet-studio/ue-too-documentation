[@ue-too/animate](../../modules.md) / [index](../index.md) / stringHelperFunctions

# 變數: stringHelperFunctions

> `const` **stringHelperFunctions**: [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`string`\>

定義於: [animatable-attribute.ts:177](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/animate/src/animatable-attribute.ts#L177)

Built-in interpolation helper for animating string values.

## 備註

Uses step-based interpolation with a 50% threshold. Returns start value until
50% progress, then switches to end value. Useful for discrete property changes.
