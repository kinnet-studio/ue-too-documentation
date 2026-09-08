[@ue-too/being](../../modules.md) / [index](../index.md) / EventArgs

# Type Alias: EventArgs\<EventPayloadMapping, K\>

> **EventArgs**\<`EventPayloadMapping`, `K`\> = `K` *extends* keyof `EventPayloadMapping` ? `IsEmptyObject`\<`EventPayloadMapping`\[`K`\]\> *extends* `true` ? \[`K`\] : \[`K`, `EventPayloadMapping`\[`K`\]\] : \[`K`, `unknown`\]

Defined in: [interface.ts:72](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/being/src/interface.ts#L72)

Type for event arguments with conditional payload requirement.

## Type Parameters

### EventPayloadMapping

`EventPayloadMapping`

Mapping of event names to their payload types

### K

`K`

The event key

## Remarks

This utility type determines whether an event requires a payload argument based on the
event payload mapping. If the payload is an empty object, no payload is required.
