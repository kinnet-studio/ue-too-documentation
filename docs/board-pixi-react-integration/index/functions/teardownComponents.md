[@ue-too/board-pixi-react-integration](../../modules.md) / [index](../index.md) / teardownComponents

# Function: teardownComponents()

> **teardownComponents**(`components`): `void`

Defined in: [board-pixi-react-integration/src/hooks/pixi/teardown.ts:18](https://github.com/kinnet-studio/ue-too/blob/0b8c7a55b77018878f79549f091765753671b81b/packages/board-pixi-react-integration/src/hooks/pixi/teardown.ts#L18)

Tears down an initialized app: every registered cleanup, then the Pixi
 application.

 `cleanups` is the extension point — `baseInitApp` registers its own
 teardown there and apps push theirs after it. `cleanup` is kept for
 callers that still replace it via spread (`{ ...base, cleanup: … }`); it
 runs after the registered cleanups, but only when it is NOT already one
 of them, so the base teardown never runs twice and a replaced `cleanup`
 can no longer silently drop the base teardown.

## Parameters

### components

[`TeardownTarget`](../interfaces/TeardownTarget.md)

## Returns

`void`
