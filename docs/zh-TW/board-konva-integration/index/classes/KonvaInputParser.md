[@ue-too/board-konva-integration](../../modules.md) / [index](../index.md) / KonvaInputParser

# 類別: KonvaInputParser

定義於: [konva-input-event-parser.ts:10](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-konva-integration/src/konva-input-event-parser.ts#L10)

## 建構函式

### 建構函式

> **new KonvaInputParser**(`stage`, `kmtInputStateMachine`, `inputOrchestrator`): `KonvaInputParser`

定義於: [konva-input-event-parser.ts:17](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-konva-integration/src/konva-input-event-parser.ts#L17)

#### 參數

##### stage

`Stage`

##### kmtInputStateMachine

`KmtInputStateMachine`

##### inputOrchestrator

`InputOrchestrator`

#### 回傳

`KonvaInputParser`

## 方法

### bindFunctions()

> **bindFunctions**(): `void`

定義於: [konva-input-event-parser.ts:30](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-konva-integration/src/konva-input-event-parser.ts#L30)

#### 回傳

`void`

***

### keydownHandler()

> **keydownHandler**(`event`): `void`

定義於: [konva-input-event-parser.ts:141](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-konva-integration/src/konva-input-event-parser.ts#L141)

#### 參數

##### event

`KeyboardEvent`

#### 回傳

`void`

***

### keyupHandler()

> **keyupHandler**(`event`): `void`

定義於: [konva-input-event-parser.ts:151](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-konva-integration/src/konva-input-event-parser.ts#L151)

#### 參數

##### event

`KeyboardEvent`

#### 回傳

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`eventObject`): `void`

定義於: [konva-input-event-parser.ts:70](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-konva-integration/src/konva-input-event-parser.ts#L70)

#### 參數

##### eventObject

`KonvaEventObject`\<`PointerEvent`, `Stage`\>

#### 回傳

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`eventObject`): `void`

定義於: [konva-input-event-parser.ts:103](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-konva-integration/src/konva-input-event-parser.ts#L103)

#### 參數

##### eventObject

`KonvaEventObject`\<`PointerEvent`, `Stage`\>

#### 回傳

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`eventObject`): `void`

定義於: [konva-input-event-parser.ts:88](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-konva-integration/src/konva-input-event-parser.ts#L88)

#### 參數

##### eventObject

`KonvaEventObject`\<`PointerEvent`, `Stage`\>

#### 回傳

`void`

***

### scrollHandler()

> **scrollHandler**(`eventObject`): `void`

定義於: [konva-input-event-parser.ts:122](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-konva-integration/src/konva-input-event-parser.ts#L122)

#### 參數

##### eventObject

`KonvaEventObject`\<`WheelEvent`, `Stage`\>

#### 回傳

`void`

***

### setUp()

> **setUp**(): `void`

定義於: [konva-input-event-parser.ts:39](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-konva-integration/src/konva-input-event-parser.ts#L39)

#### 回傳

`void`

***

### tearDown()

> **tearDown**(): `void`

定義於: [konva-input-event-parser.ts:52](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board-konva-integration/src/konva-input-event-parser.ts#L52)

#### 回傳

`void`
