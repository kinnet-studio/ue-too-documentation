[@ue-too/board-konva-integration](../globals.md) / KonvaInputParser

# Class: KonvaInputParser

Defined in: [konva-input-event-parser.ts:10](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-konva-integration/src/konva-input-event-parser.ts#L10)

## Constructors

### Constructor

> **new KonvaInputParser**(`stage`, `kmtInputStateMachine`, `inputOrchestrator`): `KonvaInputParser`

Defined in: [konva-input-event-parser.ts:17](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-konva-integration/src/konva-input-event-parser.ts#L17)

#### Parameters

##### stage

`Stage`

##### kmtInputStateMachine

`KmtInputStateMachine`

##### inputOrchestrator

`InputOrchestrator`

#### Returns

`KonvaInputParser`

## Methods

### bindFunctions()

> **bindFunctions**(): `void`

Defined in: [konva-input-event-parser.ts:30](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-konva-integration/src/konva-input-event-parser.ts#L30)

#### Returns

`void`

***

### keydownHandler()

> **keydownHandler**(`event`): `void`

Defined in: [konva-input-event-parser.ts:141](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-konva-integration/src/konva-input-event-parser.ts#L141)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### keyupHandler()

> **keyupHandler**(`event`): `void`

Defined in: [konva-input-event-parser.ts:151](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-konva-integration/src/konva-input-event-parser.ts#L151)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`eventObject`): `void`

Defined in: [konva-input-event-parser.ts:70](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-konva-integration/src/konva-input-event-parser.ts#L70)

#### Parameters

##### eventObject

`KonvaEventObject`\<`PointerEvent`, `Stage`\>

#### Returns

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`eventObject`): `void`

Defined in: [konva-input-event-parser.ts:103](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-konva-integration/src/konva-input-event-parser.ts#L103)

#### Parameters

##### eventObject

`KonvaEventObject`\<`PointerEvent`, `Stage`\>

#### Returns

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`eventObject`): `void`

Defined in: [konva-input-event-parser.ts:88](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-konva-integration/src/konva-input-event-parser.ts#L88)

#### Parameters

##### eventObject

`KonvaEventObject`\<`PointerEvent`, `Stage`\>

#### Returns

`void`

***

### scrollHandler()

> **scrollHandler**(`eventObject`): `void`

Defined in: [konva-input-event-parser.ts:122](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-konva-integration/src/konva-input-event-parser.ts#L122)

#### Parameters

##### eventObject

`KonvaEventObject`\<`WheelEvent`, `Stage`\>

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [konva-input-event-parser.ts:39](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-konva-integration/src/konva-input-event-parser.ts#L39)

#### Returns

`void`

***

### tearDown()

> **tearDown**(): `void`

Defined in: [konva-input-event-parser.ts:52](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-konva-integration/src/konva-input-event-parser.ts#L52)

#### Returns

`void`
