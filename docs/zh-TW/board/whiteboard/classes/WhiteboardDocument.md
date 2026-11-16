[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / WhiteboardDocument

# 類別: WhiteboardDocument

定義於: [packages/board/src/whiteboard/document/document.ts:40](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L40)

A whiteboard's shapes: a flat set of immutable records keyed by id, and a
stream of the changes made to them.

## 備註

Every edit goes through [WhiteboardDocument.put](#put) and
[WhiteboardDocument.remove](#remove), grouped with
[WhiteboardDocument.transact](#transact), and every group reaches subscribers as
one [Change](../interfaces/Change.md). Saving, redrawing and a later sync layer all listen to
that stream; [WhiteboardDocument.applyRemote](#applyremote) is how a sync layer
feeds other people's changes back in. Conflicts are last-write-wins per
record.

## 範例

```ts
const doc = new WhiteboardDocument();
doc.subscribe(change => console.log(change.added.length));
doc.transact(() => {
    doc.put(shapeA);
    doc.put(shapeB);
}); // logs 2, once
```

## 建構函式

### 建構函式

> **new WhiteboardDocument**(`shapes`): `WhiteboardDocument`

定義於: [packages/board/src/whiteboard/document/document.ts:49](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L49)

#### 參數

##### shapes

[`Shape`](../type-aliases/Shape.md)[] = `[]`

Records to start with; no change is emitted for them

#### 回傳

`WhiteboardDocument`

## 存取器

### size

#### Getter 簽章

> **get** **size**(): `number`

定義於: [packages/board/src/whiteboard/document/document.ts:59](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L59)

How many records there are

##### 回傳

`number`

## 方法

### all()

> **all**(): readonly [`Shape`](../type-aliases/Shape.md)[]

定義於: [packages/board/src/whiteboard/document/document.ts:64](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L64)

Every record in stacking order (bottom first)

#### 回傳

readonly [`Shape`](../type-aliases/Shape.md)[]

***

### applyRemote()

> **applyRemote**(`change`): `void`

定義於: [packages/board/src/whiteboard/document/document.ts:125](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L125)

Applies a change made by another client: puts its added records and the
`after` side of its updates, removes its removed records, and reports
the result with `source: 'remote'`.

#### 參數

##### change

[`Change`](../interfaces/Change.md)

#### 回傳

`void`

***

### get()

> **get**(`id`): [`Shape`](../type-aliases/Shape.md) \| `undefined`

定義於: [packages/board/src/whiteboard/document/document.ts:54](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L54)

The record with this id, if any

#### 參數

##### id

`string`

#### 回傳

[`Shape`](../type-aliases/Shape.md) \| `undefined`

***

### nextIndex()

> **nextIndex**(): `string`

定義於: [packages/board/src/whiteboard/document/document.ts:160](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L160)

A stacking key above every record, for a new shape on top

#### 回傳

`string`

***

### put()

> **put**(`shapes`): `void`

定義於: [packages/board/src/whiteboard/document/document.ts:70](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L70)

Adds records, or replaces the records with the same ids

#### 參數

##### shapes

[`Shape`](../type-aliases/Shape.md) | [`Shape`](../type-aliases/Shape.md)[]

#### 回傳

`void`

***

### remove()

> **remove**(`ids`): `void`

定義於: [packages/board/src/whiteboard/document/document.ts:83](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L83)

Removes the records with these ids; unknown ids are ignored

#### 參數

##### ids

`string` | `string`[]

#### 回傳

`void`

***

### subscribe()

> **subscribe**(`listener`): () => `void`

定義於: [packages/board/src/whiteboard/document/document.ts:115](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L115)

Listens for changes, delivered after each outermost transaction.

#### 參數

##### listener

(`change`) => `void`

#### 回傳

A function that stops the listener

> (): `void`

##### 回傳

`void`

***

### toSnapshot()

> **toSnapshot**(): [`Snapshot`](../interfaces/Snapshot.md)

定義於: [packages/board/src/whiteboard/document/document.ts:141](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L141)

The whole document as plain JSON, records in stacking order

#### 回傳

[`Snapshot`](../interfaces/Snapshot.md)

***

### transact()

> **transact**\<`T`\>(`fn`): `T`

定義於: [packages/board/src/whiteboard/document/document.ts:99](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L99)

Runs `fn` and reports everything it changed as one [Change](../interfaces/Change.md).
Nested calls join the outermost one.

#### 型別參數

##### T

`T`

#### 參數

##### fn

() => `T`

#### 回傳

`T`

***

### fromSnapshot()

> `static` **fromSnapshot**(`json`): `WhiteboardDocument`

定義於: [packages/board/src/whiteboard/document/document.ts:155](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/document.ts#L155)

A document holding a snapshot's records.

#### 參數

##### json

`unknown`

#### 回傳

`WhiteboardDocument`

#### 拋出

[SnapshotError](SnapshotError.md) when `json` isn't a snapshot this version
can read (see [parseSnapshot](../functions/parseSnapshot.md))
