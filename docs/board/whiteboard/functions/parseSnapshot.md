[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / parseSnapshot

# Function: parseSnapshot()

> **parseSnapshot**(`json`): [`Shape`](../type-aliases/Shape.md)[]

Defined in: [packages/board/src/whiteboard/document/snapshot.ts:106](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/document/snapshot.ts#L106)

Reads the records out of a snapshot.

## Parameters

### json

`unknown`

## Returns

[`Shape`](../type-aliases/Shape.md)[]

## Remarks

Records that aren't valid shapes, and repeats of an id already read, are
dropped so one bad record doesn't cost the rest. A later format version
adds its migration here.

## Throws

[SnapshotError](../classes/SnapshotError.md) when the value isn't a snapshot, has another
schema, or comes from a newer version
