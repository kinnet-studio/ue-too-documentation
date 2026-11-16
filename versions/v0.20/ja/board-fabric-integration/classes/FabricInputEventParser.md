[@ue-too/board-fabric-integration](../globals.md) / FabricInputEventParser

# Class: FabricInputEventParser

Defined in: [fabric-input-event-parser.ts:9](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L9)

## Constructors

### Constructor

> **new FabricInputEventParser**(`fabricCanvas`, `kmtInputStateMachine`, `inputOrchestrator`): `FabricInputEventParser`

Defined in: [fabric-input-event-parser.ts:17](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L17)

#### Parameters

##### fabricCanvas

`StaticCanvas`

##### kmtInputStateMachine

`KmtInputStateMachine`

##### inputOrchestrator

`InputOrchestrator`

#### Returns

`FabricInputEventParser`

## Accessors

### disabled

#### Get Signature

> **get** **disabled**(): `boolean`

Defined in: [fabric-input-event-parser.ts:104](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L104)

##### Returns

`boolean`

## Methods

### bindFunctions()

> **bindFunctions**(): `void`

Defined in: [fabric-input-event-parser.ts:30](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L30)

#### Returns

`void`

***

### disable()

> **disable**(): `void`

Defined in: [fabric-input-event-parser.ts:96](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L96)

#### Returns

`void`

***

### enable()

> **enable**(): `void`

Defined in: [fabric-input-event-parser.ts:100](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L100)

#### Returns

`void`

***

### keydownHandler()

> **keydownHandler**(`event`): `void`

Defined in: [fabric-input-event-parser.ts:184](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L184)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### keyupHandler()

> **keyupHandler**(`event`): `void`

Defined in: [fabric-input-event-parser.ts:197](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L197)

#### Parameters

##### event

`KeyboardEvent`

#### Returns

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`event`): `void`

Defined in: [fabric-input-event-parser.ts:70](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L70)

#### Parameters

##### event

`TPointerEventInfo`\<`TPointerEvent`\> & `object`

#### Returns

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`event`): `void`

Defined in: [fabric-input-event-parser.ts:133](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L133)

#### Parameters

##### event

`TPointerEventInfo`

#### Returns

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`event`): `void`

Defined in: [fabric-input-event-parser.ts:108](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L108)

#### Parameters

##### event

`TPointerEventInfo`\<`TPointerEvent`\> & `object`

#### Returns

`void`

***

### scrollHandler()

> **scrollHandler**(`event`): `void`

Defined in: [fabric-input-event-parser.ts:162](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L162)

#### Parameters

##### event

`TPointerEventInfo`\<`WheelEvent`\>

#### Returns

`void`

***

### setUp()

> **setUp**(): `void`

Defined in: [fabric-input-event-parser.ts:39](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L39)

#### Returns

`void`

***

### tearDown()

> **tearDown**(): `void`

Defined in: [fabric-input-event-parser.ts:52](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L52)

#### Returns

`void`
