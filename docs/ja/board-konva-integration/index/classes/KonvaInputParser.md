[@ue-too/board-konva-integration](../../modules.md) / [index](../index.md) / KonvaInputParser

# クラス: KonvaInputParser

定義: [konva-input-event-parser.ts:10](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-konva-integration/src/konva-input-event-parser.ts#L10)

## コンストラクター

### コンストラクター

> **new KonvaInputParser**(`stage`, `kmtInputStateMachine`, `inputOrchestrator`): `KonvaInputParser`

定義: [konva-input-event-parser.ts:17](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-konva-integration/src/konva-input-event-parser.ts#L17)

#### パラメータ

##### stage

`Stage`

##### kmtInputStateMachine

`KmtInputStateMachine`

##### inputOrchestrator

`InputOrchestrator`

#### 戻り値

`KonvaInputParser`

## メソッド

### bindFunctions()

> **bindFunctions**(): `void`

定義: [konva-input-event-parser.ts:30](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-konva-integration/src/konva-input-event-parser.ts#L30)

#### 戻り値

`void`

***

### keydownHandler()

> **keydownHandler**(`event`): `void`

定義: [konva-input-event-parser.ts:141](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-konva-integration/src/konva-input-event-parser.ts#L141)

#### パラメータ

##### event

`KeyboardEvent`

#### 戻り値

`void`

***

### keyupHandler()

> **keyupHandler**(`event`): `void`

定義: [konva-input-event-parser.ts:151](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-konva-integration/src/konva-input-event-parser.ts#L151)

#### パラメータ

##### event

`KeyboardEvent`

#### 戻り値

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`eventObject`): `void`

定義: [konva-input-event-parser.ts:70](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-konva-integration/src/konva-input-event-parser.ts#L70)

#### パラメータ

##### eventObject

`KonvaEventObject`\<`PointerEvent`, `Stage`\>

#### 戻り値

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`eventObject`): `void`

定義: [konva-input-event-parser.ts:103](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-konva-integration/src/konva-input-event-parser.ts#L103)

#### パラメータ

##### eventObject

`KonvaEventObject`\<`PointerEvent`, `Stage`\>

#### 戻り値

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`eventObject`): `void`

定義: [konva-input-event-parser.ts:88](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-konva-integration/src/konva-input-event-parser.ts#L88)

#### パラメータ

##### eventObject

`KonvaEventObject`\<`PointerEvent`, `Stage`\>

#### 戻り値

`void`

***

### scrollHandler()

> **scrollHandler**(`eventObject`): `void`

定義: [konva-input-event-parser.ts:122](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-konva-integration/src/konva-input-event-parser.ts#L122)

#### パラメータ

##### eventObject

`KonvaEventObject`\<`WheelEvent`, `Stage`\>

#### 戻り値

`void`

***

### setUp()

> **setUp**(): `void`

定義: [konva-input-event-parser.ts:39](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-konva-integration/src/konva-input-event-parser.ts#L39)

#### 戻り値

`void`

***

### tearDown()

> **tearDown**(): `void`

定義: [konva-input-event-parser.ts:52](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-konva-integration/src/konva-input-event-parser.ts#L52)

#### 戻り値

`void`
