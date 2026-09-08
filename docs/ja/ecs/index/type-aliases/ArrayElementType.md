[@ue-too/ecs](../../modules.md) / [index](../index.md) / ArrayElementType

# 型エイリアス: ArrayElementType

> **ArrayElementType** = \{ `kind`: `"builtin"`; `type`: `Exclude`\<[`ComponentFieldType`](ComponentFieldType.md), `"array"`\>; \} \| \{ `kind`: `"custom"`; `typeName`: [`ComponentName`](ComponentName.md); \}

定義: [index.ts:158](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/ecs/src/index.ts#L158)

Discriminated union for array element types.
Supports both built-in types and custom component types.
