[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / ToolPointer

# Interface: ToolPointer

Defined in: [packages/board/src/whiteboard/editor/events.ts:54](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L54)

A pointer event as tools receive it.

## Properties

### button

> **button**: `number`

Defined in: [packages/board/src/whiteboard/editor/events.ts:66](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L66)

***

### client

> **client**: `Point`

Defined in: [packages/board/src/whiteboard/editor/events.ts:56](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L56)

***

### ctrlKey

> **ctrlKey**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/events.ts:68](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L68)

***

### delta

> **delta**: `Point`

Defined in: [packages/board/src/whiteboard/editor/events.ts:61](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L61)

Client pixels since the previous dispatched point; zero until the press
becomes a drag, and the first drag move measures from the press

***

### dragging

> **dragging**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/events.ts:65](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L65)

Whether the press has moved past 5 screen pixels

***

### metaKey

> **metaKey**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/events.ts:69](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L69)

***

### pointerType

> **pointerType**: `"pen"` \| `"mouse"` \| `"touch"`

Defined in: [packages/board/src/whiteboard/editor/events.ts:70](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L70)

***

### pressed

> **pressed**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/events.ts:63](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L63)

Whether a press is under way (false for a mouse hovering)

***

### shiftKey

> **shiftKey**: `boolean`

Defined in: [packages/board/src/whiteboard/editor/events.ts:67](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L67)

***

### world

> **world**: `Point`

Defined in: [packages/board/src/whiteboard/editor/events.ts:55](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/events.ts#L55)
