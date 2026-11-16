[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / History

# クラス: History

定義: [packages/board/src/whiteboard/document/history.ts:24](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L24)

Undo and redo for one person's edits to a [WhiteboardDocument](WhiteboardDocument.md).

## Remarks

Only local changes are recorded; changes that came from other people
([WhiteboardDocument.applyRemote](WhiteboardDocument.md#applyremote)) never are, so undo only ever takes
back your own work. A tool brackets a gesture (one drag, one stroke) with
[History.begin](#begin) and [History.end](#end) so the whole gesture is one
step; changes outside a gesture are a step each. Undo puts back each
record's state from before the step, even if someone else changed it since
(last write wins).

## コンストラクター

### コンストラクター

> **new History**(`_doc`): `History`

定義: [packages/board/src/whiteboard/document/history.ts:33](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L33)

#### パラメータ

##### \_doc

[`WhiteboardDocument`](WhiteboardDocument.md)

#### 戻り値

`History`

## アクセッサー

### canRedo

#### 署名を取得する

> **get** **canRedo**(): `boolean`

定義: [packages/board/src/whiteboard/document/history.ts:103](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L103)

##### 戻り値

`boolean`

***

### canUndo

#### 署名を取得する

> **get** **canUndo**(): `boolean`

定義: [packages/board/src/whiteboard/document/history.ts:99](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L99)

##### 戻り値

`boolean`

***

### open

#### 署名を取得する

> **get** **open**(): `boolean`

定義: [packages/board/src/whiteboard/document/history.ts:108](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L108)

Whether a step is open (a gesture is under way)

##### 戻り値

`boolean`

## メソッド

### begin()

> **begin**(): `void`

定義: [packages/board/src/whiteboard/document/history.ts:38](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L38)

Opens a step; nested begin/end pairs join the outer step

#### 戻り値

`void`

***

### cancel()

> **cancel**(): `void`

定義: [packages/board/src/whiteboard/document/history.ts:56](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L56)

Reverts everything the open step changed and drops it

#### 戻り値

`void`

***

### dispose()

> **dispose**(): `void`

定義: [packages/board/src/whiteboard/document/history.ts:124](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L124)

Stops recording

#### 戻り値

`void`

***

### end()

> **end**(): `void`

定義: [packages/board/src/whiteboard/document/history.ts:45](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L45)

Closes the step; an empty step is dropped

#### 戻り値

`void`

***

### redo()

> **redo**(): `boolean`

定義: [packages/board/src/whiteboard/document/history.ts:89](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L89)

Puts back the last undone step.

#### 戻り値

`boolean`

Whether there was anything to redo

***

### subscribe()

> **subscribe**(`listener`): () => `void`

定義: [packages/board/src/whiteboard/document/history.ts:118](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L118)

Listens for changes to [History.canUndo](#canundo), [History.canRedo](#canredo)
and [History.open](#open).

#### パラメータ

##### listener

() => `void`

#### 戻り値

A function that stops the listener

> (): `void`

##### 戻り値

`void`

***

### undo()

> **undo**(): `boolean`

定義: [packages/board/src/whiteboard/document/history.ts:70](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/history.ts#L70)

Takes back the last step, cancelling an open one first.

#### 戻り値

`boolean`

Whether there was anything to undo
