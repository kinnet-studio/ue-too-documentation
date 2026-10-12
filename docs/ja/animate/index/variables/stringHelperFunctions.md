[@ue-too/animate](../../modules.md) / [index](../index.md) / stringHelperFunctions

# 変数: stringHelperFunctions

> `const` **stringHelperFunctions**: [`AnimatableAttributeHelper`](../interfaces/AnimatableAttributeHelper.md)\<`string`\>

定義: [animatable-attribute.ts:177](https://github.com/kinnet-studio/ue-too/blob/02bd04b7f474a7bcbee02ce00c03406bde363b51/packages/animate/src/animatable-attribute.ts#L177)

Built-in interpolation helper for animating string values.

## Remarks

Uses step-based interpolation with a 50% threshold. Returns start value until
50% progress, then switches to end value. Useful for discrete property changes.
