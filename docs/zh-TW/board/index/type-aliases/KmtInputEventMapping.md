[@ue-too/board](../../modules.md) / [index](../index.md) / KmtInputEventMapping

# 型別別名: KmtInputEventMapping

> **KmtInputEventMapping** = `object`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:115](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L115)

Event mapping for the KMT input state machine.

## 備註

Maps event names to their payload types. Used by the state machine framework
to provide type-safe event handling.

Key events:
- **leftPointerDown/Up/Move**: Left mouse button interactions
- **middlePointerDown/Up/Move**: Middle mouse button interactions (pan)
- **spacebarDown/Up**: Spacebar for pan mode
- **scroll**: Regular scroll (pan or zoom depending on device)
- **scrollWithCtrl**: Ctrl + scroll (always zoom)
- **disable/enable**: Temporarily disable/enable input processing

## 屬性

### arrowDown

> **arrowDown**: `EmptyPayload`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:133](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L133)

***

### arrowUp

> **arrowUp**: `EmptyPayload`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:132](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L132)

***

### cursorOnElement

> **cursorOnElement**: `EmptyPayload`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:123](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L123)

***

### disable

> **disable**: `EmptyPayload`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:129](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L129)

***

### enable

> **enable**: `EmptyPayload`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:130](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L130)

***

### escapeKey

> **escapeKey**: `EmptyPayload`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:121](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L121)

***

### F

> **F**: `EmptyPayload`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:134](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L134)

***

### G

> **G**: `EmptyPayload`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:135](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L135)

***

### leftPointerDown

> **leftPointerDown**: [`PointerEventPayload`](PointerEventPayload.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:116](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L116)

***

### leftPointerMove

> **leftPointerMove**: [`PointerEventPayload`](PointerEventPayload.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:118](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L118)

***

### leftPointerUp

> **leftPointerUp**: [`PointerEventPayload`](PointerEventPayload.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:117](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L117)

***

### middlePointerDown

> **middlePointerDown**: [`PointerEventPayload`](PointerEventPayload.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:126](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L126)

***

### middlePointerMove

> **middlePointerMove**: [`PointerEventPayload`](PointerEventPayload.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:128](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L128)

***

### middlePointerUp

> **middlePointerUp**: [`PointerEventPayload`](PointerEventPayload.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:127](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L127)

***

### pointerMove

> **pointerMove**: [`PointerEventPayload`](PointerEventPayload.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:131](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L131)

***

### Q

> **Q**: `EmptyPayload`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:136](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L136)

***

### scroll

> **scroll**: [`ScrollWithCtrlEventPayload`](ScrollWithCtrlEventPayload.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:124](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L124)

***

### scrollWithCtrl

> **scrollWithCtrl**: [`ScrollWithCtrlEventPayload`](ScrollWithCtrlEventPayload.md)

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:125](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L125)

***

### spacebarDown

> **spacebarDown**: `EmptyPayload`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:119](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L119)

***

### spacebarUp

> **spacebarUp**: `EmptyPayload`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:120](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L120)

***

### stayIdle

> **stayIdle**: `EmptyPayload`

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:122](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L122)
