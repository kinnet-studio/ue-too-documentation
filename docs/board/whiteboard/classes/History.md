[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / History

# Class: History

Defined in: [packages/board/src/whiteboard/document/history.ts:24](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L24)

Undo and redo for one person's edits to a [WhiteboardDocument](WhiteboardDocument.md).

## Remarks

Only local changes are recorded; changes that came from other people
([WhiteboardDocument.applyRemote](WhiteboardDocument.md#applyremote)) never are, so undo only ever takes
back your own work. A tool brackets a gesture (one drag, one stroke) with
[History.begin](#begin) and [History.end](#end) so the whole gesture is one
step; changes outside a gesture are a step each. Undo puts back each
record's state from before the step, even if someone else changed it since
(last write wins).

## Constructors

### Constructor

> **new History**(`_doc`): `History`

Defined in: [packages/board/src/whiteboard/document/history.ts:33](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L33)

#### Parameters

##### \_doc

[`WhiteboardDocument`](WhiteboardDocument.md)

#### Returns

`History`

## Accessors

### canRedo

#### Get Signature

> **get** **canRedo**(): `boolean`

Defined in: [packages/board/src/whiteboard/document/history.ts:103](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L103)

##### Returns

`boolean`

***

### canUndo

#### Get Signature

> **get** **canUndo**(): `boolean`

Defined in: [packages/board/src/whiteboard/document/history.ts:99](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L99)

##### Returns

`boolean`

***

### open

#### Get Signature

> **get** **open**(): `boolean`

Defined in: [packages/board/src/whiteboard/document/history.ts:108](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L108)

Whether a step is open (a gesture is under way)

##### Returns

`boolean`

## Methods

### begin()

> **begin**(): `void`

Defined in: [packages/board/src/whiteboard/document/history.ts:38](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L38)

Opens a step; nested begin/end pairs join the outer step

#### Returns

`void`

***

### cancel()

> **cancel**(): `void`

Defined in: [packages/board/src/whiteboard/document/history.ts:56](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L56)

Reverts everything the open step changed and drops it

#### Returns

`void`

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/board/src/whiteboard/document/history.ts:124](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L124)

Stops recording

#### Returns

`void`

***

### end()

> **end**(): `void`

Defined in: [packages/board/src/whiteboard/document/history.ts:45](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L45)

Closes the step; an empty step is dropped

#### Returns

`void`

***

### redo()

> **redo**(): `boolean`

Defined in: [packages/board/src/whiteboard/document/history.ts:89](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L89)

Puts back the last undone step.

#### Returns

`boolean`

Whether there was anything to redo

***

### subscribe()

> **subscribe**(`listener`): () => `void`

Defined in: [packages/board/src/whiteboard/document/history.ts:118](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L118)

Listens for changes to [History.canUndo](#canundo), [History.canRedo](#canredo)
and [History.open](#open).

#### Parameters

##### listener

() => `void`

#### Returns

A function that stops the listener

> (): `void`

##### Returns

`void`

***

### undo()

> **undo**(): `boolean`

Defined in: [packages/board/src/whiteboard/document/history.ts:70](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L70)

Takes back the last step, cancelling an open one first.

#### Returns

`boolean`

Whether there was anything to undo
