[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / parseSnapshot

# 函式: parseSnapshot()

> **parseSnapshot**(`json`): [`Shape`](../type-aliases/Shape.md)[]

定義於: [packages/board/src/whiteboard/document/snapshot.ts:106](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/snapshot.ts#L106)

Reads the records out of a snapshot.

## 參數

### json

`unknown`

## 回傳

[`Shape`](../type-aliases/Shape.md)[]

## 備註

Records that aren't valid shapes, and repeats of an id already read, are
dropped so one bad record doesn't cost the rest. A later format version
adds its migration here.

## 拋出

[SnapshotError](../classes/SnapshotError.md) when the value isn't a snapshot, has another
schema, or comes from a newer version
