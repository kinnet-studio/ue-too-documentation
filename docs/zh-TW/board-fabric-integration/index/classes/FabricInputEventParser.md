[@ue-too/board-fabric-integration](../../modules.md) / [index](../index.md) / FabricInputEventParser

# 類別: FabricInputEventParser

定義於: [fabric-input-event-parser.ts:9](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L9)

## 建構函式

### 建構函式

> **new FabricInputEventParser**(`fabricCanvas`, `kmtInputStateMachine`, `inputOrchestrator`): `FabricInputEventParser`

定義於: [fabric-input-event-parser.ts:17](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L17)

#### 參數

##### fabricCanvas

`StaticCanvas`

##### kmtInputStateMachine

`KmtInputStateMachine`

##### inputOrchestrator

`InputOrchestrator`

#### 回傳

`FabricInputEventParser`

## 存取器

### disabled

#### Getter 簽章

> **get** **disabled**(): `boolean`

定義於: [fabric-input-event-parser.ts:104](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L104)

##### 回傳

`boolean`

## 方法

### bindFunctions()

> **bindFunctions**(): `void`

定義於: [fabric-input-event-parser.ts:30](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L30)

#### 回傳

`void`

***

### disable()

> **disable**(): `void`

定義於: [fabric-input-event-parser.ts:96](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L96)

#### 回傳

`void`

***

### enable()

> **enable**(): `void`

定義於: [fabric-input-event-parser.ts:100](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L100)

#### 回傳

`void`

***

### keydownHandler()

> **keydownHandler**(`event`): `void`

定義於: [fabric-input-event-parser.ts:184](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L184)

#### 參數

##### event

`KeyboardEvent`

#### 回傳

`void`

***

### keyupHandler()

> **keyupHandler**(`event`): `void`

定義於: [fabric-input-event-parser.ts:197](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L197)

#### 參數

##### event

`KeyboardEvent`

#### 回傳

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`event`): `void`

定義於: [fabric-input-event-parser.ts:70](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L70)

#### 參數

##### event

`TPointerEventInfo`\<`TPointerEvent`\> & `object`

#### 回傳

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`event`): `void`

定義於: [fabric-input-event-parser.ts:133](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L133)

#### 參數

##### event

`TPointerEventInfo`

#### 回傳

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`event`): `void`

定義於: [fabric-input-event-parser.ts:108](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L108)

#### 參數

##### event

`TPointerEventInfo`\<`TPointerEvent`\> & `object`

#### 回傳

`void`

***

### scrollHandler()

> **scrollHandler**(`event`): `void`

定義於: [fabric-input-event-parser.ts:162](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L162)

#### 參數

##### event

`TPointerEventInfo`\<`WheelEvent`\>

#### 回傳

`void`

***

### setUp()

> **setUp**(): `void`

定義於: [fabric-input-event-parser.ts:39](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L39)

#### 回傳

`void`

***

### tearDown()

> **tearDown**(): `void`

定義於: [fabric-input-event-parser.ts:52](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L52)

#### 回傳

`void`
