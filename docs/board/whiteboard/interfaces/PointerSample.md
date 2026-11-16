[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / PointerSample

# Interface: PointerSample

Defined in: [packages/board/src/whiteboard/editor/events.ts:34](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L34)

One pointer event as the editor needs it, from the DOM or any other
source (tests, a custom event layer).

## Properties

### altKey

> **altKey**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/events.ts:44](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L44)

***

### button

> **button**: `number`

Defined in: [packages/board/src/whiteboard/editor/events.ts:38](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L38)

0 primary, 1 middle, 2 secondary

***

### client

> **client**: `Point`

Defined in: [packages/board/src/whiteboard/editor/events.ts:40](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L40)

Window coordinates in CSS pixels

***

### ctrlKey

> **ctrlKey**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/events.ts:42](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L42)

***

### id

> **id**: `number`

Defined in: [packages/board/src/whiteboard/editor/events.ts:35](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L35)

***

### metaKey

> **metaKey**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/events.ts:43](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L43)

***

### pointerType

> **pointerType**: `"pen"` \| `"mouse"` \| `"touch"`

Defined in: [packages/board/src/whiteboard/editor/events.ts:36](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L36)

***

### shiftKey

> **shiftKey**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/events.ts:41](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L41)

***

### timeStamp

> **timeStamp**: `number`

Defined in: [packages/board/src/whiteboard/editor/events.ts:46](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L46)

Milliseconds, as `event.timeStamp`
