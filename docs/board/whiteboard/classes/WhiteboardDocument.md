[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / WhiteboardDocument

# Class: WhiteboardDocument

Defined in: [packages/board/src/whiteboard/document/document.ts:40](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L40)

A whiteboard's shapes: a flat set of immutable records keyed by id, and a
stream of the changes made to them.

## Remarks

Every edit goes through [WhiteboardDocument.put](#put) and
[WhiteboardDocument.remove](#remove), grouped with
[WhiteboardDocument.transact](#transact), and every group reaches subscribers as
one [Change](../interfaces/Change.md). Saving, redrawing and a later sync layer all listen to
that stream; [WhiteboardDocument.applyRemote](#applyremote) is how a sync layer
feeds other people's changes back in. Conflicts are last-write-wins per
record.

## Example

```ts
const doc = new WhiteboardDocument();
doc.subscribe(change => console.log(change.added.length));
doc.transact(() => {
    doc.put(shapeA);
    doc.put(shapeB);
}); // logs 2, once
```

## Constructors

### Constructor

> **new WhiteboardDocument**(`shapes`): `WhiteboardDocument`

Defined in: [packages/board/src/whiteboard/document/document.ts:49](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L49)

#### Parameters

##### shapes

[`Shape`](../type-aliases/Shape.md)[] = `[]`

Records to start with; no change is emitted for them

#### Returns

`WhiteboardDocument`

## Accessors

### size

#### Get Signature

> **get** **size**(): `number`

Defined in: [packages/board/src/whiteboard/document/document.ts:59](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L59)

How many records there are

##### Returns

`number`

## Methods

### all()

> **all**(): readonly [`Shape`](../type-aliases/Shape.md)[]

Defined in: [packages/board/src/whiteboard/document/document.ts:64](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L64)

Every record in stacking order (bottom first)

#### Returns

readonly [`Shape`](../type-aliases/Shape.md)[]

***

### applyRemote()

> **applyRemote**(`change`): `void`

Defined in: [packages/board/src/whiteboard/document/document.ts:125](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L125)

Applies a change made by another client: puts its added records and the
`after` side of its updates, removes its removed records, and reports
the result with `source: 'remote'`.

#### Parameters

##### change

[`Change`](../interfaces/Change.md)

#### Returns

`void`

***

### get()

> **get**(`id`): [`Shape`](../type-aliases/Shape.md) \| `undefined`

Defined in: [packages/board/src/whiteboard/document/document.ts:54](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L54)

The record with this id, if any

#### Parameters

##### id

`string`

#### Returns

[`Shape`](../type-aliases/Shape.md) \| `undefined`

***

### nextIndex()

> **nextIndex**(): `string`

Defined in: [packages/board/src/whiteboard/document/document.ts:160](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L160)

A stacking key above every record, for a new shape on top

#### Returns

`string`

***

### put()

> **put**(`shapes`): `void`

Defined in: [packages/board/src/whiteboard/document/document.ts:70](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L70)

Adds records, or replaces the records with the same ids

#### Parameters

##### shapes

[`Shape`](../type-aliases/Shape.md) | [`Shape`](../type-aliases/Shape.md)[]

#### Returns

`void`

***

### remove()

> **remove**(`ids`): `void`

Defined in: [packages/board/src/whiteboard/document/document.ts:83](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L83)

Removes the records with these ids; unknown ids are ignored

#### Parameters

##### ids

`string` | `string`[]

#### Returns

`void`

***

### subscribe()

> **subscribe**(`listener`): () => `void`

Defined in: [packages/board/src/whiteboard/document/document.ts:115](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L115)

Listens for changes, delivered after each outermost transaction.

#### Parameters

##### listener

(`change`) => `void`

#### Returns

A function that stops the listener

> (): `void`

##### Returns

`void`

***

### toSnapshot()

> **toSnapshot**(): [`Snapshot`](../interfaces/Snapshot.md)

Defined in: [packages/board/src/whiteboard/document/document.ts:141](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L141)

The whole document as plain JSON, records in stacking order

#### Returns

[`Snapshot`](../interfaces/Snapshot.md)

***

### transact()

> **transact**\<`T`\>(`fn`): `T`

Defined in: [packages/board/src/whiteboard/document/document.ts:99](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L99)

Runs `fn` and reports everything it changed as one [Change](../interfaces/Change.md).
Nested calls join the outermost one.

#### Type Parameters

##### T

`T`

#### Parameters

##### fn

() => `T`

#### Returns

`T`

***

### fromSnapshot()

> `static` **fromSnapshot**(`json`): `WhiteboardDocument`

Defined in: [packages/board/src/whiteboard/document/document.ts:155](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L155)

A document holding a snapshot's records.

#### Parameters

##### json

`unknown`

#### Returns

`WhiteboardDocument`

#### Throws

[SnapshotError](SnapshotError.md) when `json` isn't a snapshot this version
can read (see [parseSnapshot](../functions/parseSnapshot.md))
