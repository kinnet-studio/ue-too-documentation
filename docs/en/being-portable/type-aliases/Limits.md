[@ue-too/being-portable](../globals.md) / Limits

# Type Alias: Limits

> **Limits** = `object`

Defined in: [being-portable/src/limits.ts:6](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/limits.ts#L6)

Caps that keep a document from a stranger from exhausting memory or time.

## Properties

### maxEventWork

> `readonly` **maxEventWork**: `number`

Defined in: [being-portable/src/limits.ts:32](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/limits.ts#L32)

Work units one event, start, reset or wrapup may use. Each evaluated
expression node and statement costs one unit, plus the length of any
list or string an operation copies or scans.

***

### maxExpressionDepth

> `readonly` **maxExpressionDepth**: `number`

Defined in: [being-portable/src/limits.ts:18](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/limits.ts#L18)

Expression nesting depth.

***

### maxListLength

> `readonly` **maxListLength**: `number`

Defined in: [being-portable/src/limits.ts:24](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/limits.ts#L24)

Items in any list value.

***

### maxMachineInstances

> `readonly` **maxMachineInstances**: `number`

Defined in: [being-portable/src/limits.ts:22](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/limits.ts#L22)

Machine instances the tree builds.

***

### maxMachines

> `readonly` **maxMachines**: `number`

Defined in: [being-portable/src/limits.ts:10](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/limits.ts#L10)

Machines in `machines` plus the root.

***

### maxNestingDepth

> `readonly` **maxNestingDepth**: `number`

Defined in: [being-portable/src/limits.ts:20](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/limits.ts#L20)

Child-machine nesting depth.

***

### maxNodes

> `readonly` **maxNodes**: `number`

Defined in: [being-portable/src/limits.ts:8](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/limits.ts#L8)

Total JSON values in a document or snapshot.

***

### maxStatementDepth

> `readonly` **maxStatementDepth**: `number`

Defined in: [being-portable/src/limits.ts:16](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/limits.ts#L16)

Nested `if` depth.

***

### maxStatements

> `readonly` **maxStatements**: `number`

Defined in: [being-portable/src/limits.ts:14](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/limits.ts#L14)

Statements per list.

***

### maxStates

> `readonly` **maxStates**: `number`

Defined in: [being-portable/src/limits.ts:12](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/limits.ts#L12)

States per machine.

***

### maxStringLength

> `readonly` **maxStringLength**: `number`

Defined in: [being-portable/src/limits.ts:26](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/being-portable/src/limits.ts#L26)

Characters in any string value.
