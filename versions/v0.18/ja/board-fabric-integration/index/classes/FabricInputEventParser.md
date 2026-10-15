[@ue-too/board-fabric-integration](../../modules.md) / [index](../index.md) / FabricInputEventParser

# クラス: FabricInputEventParser

定義: [fabric-input-event-parser.ts:9](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L9)

## コンストラクター

### コンストラクター

> **new FabricInputEventParser**(`fabricCanvas`, `kmtInputStateMachine`, `inputOrchestrator`): `FabricInputEventParser`

定義: [fabric-input-event-parser.ts:17](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L17)

#### パラメータ

##### fabricCanvas

`StaticCanvas`

##### kmtInputStateMachine

`KmtInputStateMachine`

##### inputOrchestrator

`InputOrchestrator`

#### 戻り値

`FabricInputEventParser`

## アクセッサー

### disabled

#### 署名を取得する

> **get** **disabled**(): `boolean`

定義: [fabric-input-event-parser.ts:104](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L104)

##### 戻り値

`boolean`

## メソッド

### bindFunctions()

> **bindFunctions**(): `void`

定義: [fabric-input-event-parser.ts:30](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L30)

#### 戻り値

`void`

***

### disable()

> **disable**(): `void`

定義: [fabric-input-event-parser.ts:96](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L96)

#### 戻り値

`void`

***

### enable()

> **enable**(): `void`

定義: [fabric-input-event-parser.ts:100](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L100)

#### 戻り値

`void`

***

### keydownHandler()

> **keydownHandler**(`event`): `void`

定義: [fabric-input-event-parser.ts:184](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L184)

#### パラメータ

##### event

`KeyboardEvent`

#### 戻り値

`void`

***

### keyupHandler()

> **keyupHandler**(`event`): `void`

定義: [fabric-input-event-parser.ts:197](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L197)

#### パラメータ

##### event

`KeyboardEvent`

#### 戻り値

`void`

***

### pointerDownHandler()

> **pointerDownHandler**(`event`): `void`

定義: [fabric-input-event-parser.ts:70](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L70)

#### パラメータ

##### event

`TPointerEventInfo`\<`TPointerEvent`\> & `object`

#### 戻り値

`void`

***

### pointerMoveHandler()

> **pointerMoveHandler**(`event`): `void`

定義: [fabric-input-event-parser.ts:133](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L133)

#### パラメータ

##### event

`TPointerEventInfo`

#### 戻り値

`void`

***

### pointerUpHandler()

> **pointerUpHandler**(`event`): `void`

定義: [fabric-input-event-parser.ts:108](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L108)

#### パラメータ

##### event

`TPointerEventInfo`\<`TPointerEvent`\> & `object`

#### 戻り値

`void`

***

### scrollHandler()

> **scrollHandler**(`event`): `void`

定義: [fabric-input-event-parser.ts:162](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L162)

#### パラメータ

##### event

`TPointerEventInfo`\<`WheelEvent`\>

#### 戻り値

`void`

***

### setUp()

> **setUp**(): `void`

定義: [fabric-input-event-parser.ts:39](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L39)

#### 戻り値

`void`

***

### tearDown()

> **tearDown**(): `void`

定義: [fabric-input-event-parser.ts:52](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board-fabric-integration/src/fabric-input-event-parser.ts#L52)

#### 戻り値

`void`
