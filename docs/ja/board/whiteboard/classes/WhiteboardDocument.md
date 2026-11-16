[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / WhiteboardDocument

# クラス: WhiteboardDocument

定義: [packages/board/src/whiteboard/document/document.ts:40](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L40)

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

## 例

```ts
const doc = new WhiteboardDocument();
doc.subscribe(change => console.log(change.added.length));
doc.transact(() => {
    doc.put(shapeA);
    doc.put(shapeB);
}); // logs 2, once
```

## コンストラクター

### コンストラクター

> **new WhiteboardDocument**(`shapes`): `WhiteboardDocument`

定義: [packages/board/src/whiteboard/document/document.ts:49](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L49)

#### パラメータ

##### shapes

[`Shape`](../type-aliases/Shape.md)[] = `[]`

Records to start with; no change is emitted for them

#### 戻り値

`WhiteboardDocument`

## アクセッサー

### size

#### 署名を取得する

> **get** **size**(): `number`

定義: [packages/board/src/whiteboard/document/document.ts:59](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L59)

How many records there are

##### 戻り値

`number`

## メソッド

### all()

> **all**(): readonly [`Shape`](../type-aliases/Shape.md)[]

定義: [packages/board/src/whiteboard/document/document.ts:64](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L64)

Every record in stacking order (bottom first)

#### 戻り値

readonly [`Shape`](../type-aliases/Shape.md)[]

***

### applyRemote()

> **applyRemote**(`change`): `void`

定義: [packages/board/src/whiteboard/document/document.ts:125](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L125)

Applies a change made by another client: puts its added records and the
`after` side of its updates, removes its removed records, and reports
the result with `source: 'remote'`.

#### パラメータ

##### change

[`Change`](../interfaces/Change.md)

#### 戻り値

`void`

***

### get()

> **get**(`id`): [`Shape`](../type-aliases/Shape.md) \| `undefined`

定義: [packages/board/src/whiteboard/document/document.ts:54](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L54)

The record with this id, if any

#### パラメータ

##### id

`string`

#### 戻り値

[`Shape`](../type-aliases/Shape.md) \| `undefined`

***

### nextIndex()

> **nextIndex**(): `string`

定義: [packages/board/src/whiteboard/document/document.ts:160](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L160)

A stacking key above every record, for a new shape on top

#### 戻り値

`string`

***

### put()

> **put**(`shapes`): `void`

定義: [packages/board/src/whiteboard/document/document.ts:70](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L70)

Adds records, or replaces the records with the same ids

#### パラメータ

##### shapes

[`Shape`](../type-aliases/Shape.md) | [`Shape`](../type-aliases/Shape.md)[]

#### 戻り値

`void`

***

### remove()

> **remove**(`ids`): `void`

定義: [packages/board/src/whiteboard/document/document.ts:83](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L83)

Removes the records with these ids; unknown ids are ignored

#### パラメータ

##### ids

`string` | `string`[]

#### 戻り値

`void`

***

### subscribe()

> **subscribe**(`listener`): () => `void`

定義: [packages/board/src/whiteboard/document/document.ts:115](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L115)

Listens for changes, delivered after each outermost transaction.

#### パラメータ

##### listener

(`change`) => `void`

#### 戻り値

A function that stops the listener

> (): `void`

##### 戻り値

`void`

***

### toSnapshot()

> **toSnapshot**(): [`Snapshot`](../interfaces/Snapshot.md)

定義: [packages/board/src/whiteboard/document/document.ts:141](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L141)

The whole document as plain JSON, records in stacking order

#### 戻り値

[`Snapshot`](../interfaces/Snapshot.md)

***

### transact()

> **transact**\<`T`\>(`fn`): `T`

定義: [packages/board/src/whiteboard/document/document.ts:99](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L99)

Runs `fn` and reports everything it changed as one [Change](../interfaces/Change.md).
Nested calls join the outermost one.

#### 型パラメーター

##### T

`T`

#### パラメータ

##### fn

() => `T`

#### 戻り値

`T`

***

### fromSnapshot()

> `static` **fromSnapshot**(`json`): `WhiteboardDocument`

定義: [packages/board/src/whiteboard/document/document.ts:155](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/document.ts#L155)

A document holding a snapshot's records.

#### パラメータ

##### json

`unknown`

#### 戻り値

`WhiteboardDocument`

#### Throws

[SnapshotError](SnapshotError.md) when `json` isn't a snapshot this version
can read (see [parseSnapshot](../functions/parseSnapshot.md))
