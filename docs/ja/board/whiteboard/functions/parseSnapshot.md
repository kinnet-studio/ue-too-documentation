[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / parseSnapshot

# 関数: parseSnapshot()

> **parseSnapshot**(`json`): [`Shape`](../type-aliases/Shape.md)[]

定義: [packages/board/src/whiteboard/document/snapshot.ts:106](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/snapshot.ts#L106)

Reads the records out of a snapshot.

## パラメータ

### json

`unknown`

## 戻り値

[`Shape`](../type-aliases/Shape.md)[]

## Remarks

Records that aren't valid shapes, and repeats of an id already read, are
dropped so one bad record doesn't cost the rest. A later format version
adds its migration here.

## Throws

[SnapshotError](../classes/SnapshotError.md) when the value isn't a snapshot, has another
schema, or comes from a newer version
