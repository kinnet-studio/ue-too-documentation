[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserInputPublisher

# 類別: RawUserInputPublisher

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:214](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L214)

Publisher for broadcasting raw user input events to observers.

## 備註

This class implements the observable pattern to distribute user input events
to external subscribers. It operates in parallel to camera control - the
orchestrator both sends events to this publisher AND controls the camera.

**Architecture**:
```
Orchestrator → Publisher → Observers (UI, analytics, etc.)
            ↓
         CameraMux → CameraRig
```

**Event Streams**:
- **Specific streams**: Subscribe to "pan", "zoom", or "rotate" for typed events
- **Unified stream**: Subscribe to "all" for all events with type discriminator

**Use Cases**:
- Update UI elements based on user interactions
- Log analytics about user gestures
- Synchronize secondary views or previews
- Implement custom gesture reactions independent of camera

**Observable Implementation**:
Uses AsyncObservable for asynchronous event delivery, preventing observers
from blocking the input processing pipeline.

## 範例

```typescript
const publisher = new RawUserInputPublisher();

// Subscribe to pan events
const unsubscribe = publisher.on("pan", (event) => {
  console.log("User panned by:", event.diff);
  updateMinimap(event.diff);
});

// Subscribe to all events
publisher.on("all", (event) => {
  switch (event.type) {
    case "pan":
      analytics.log("pan", event.diff);
      break;
    case "zoom":
      analytics.log("zoom", event.deltaZoomAmount, event.anchorPoint);
      break;
    case "rotate":
      analytics.log("rotate", event.deltaRotation);
      break;
  }
});

// Later, unsubscribe
unsubscribe();
```

## 實作

- [`UserInputPublisher`](../interfaces/UserInputPublisher.md)

## 建構函式

### 建構函式

> **new RawUserInputPublisher**(): `RawUserInputPublisher`

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:220](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L220)

#### 回傳

`RawUserInputPublisher`

## 方法

### notifyPan()

> **notifyPan**(`diff`): `void`

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:235](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L235)

Notifies subscribers of a pan gesture

#### 參數

##### diff

`Point`

#### 回傳

`void`

#### 實作了

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyPan`](../interfaces/UserInputPublisher.md#notifypan)

***

### notifyRotate()

> **notifyRotate**(`deltaRotation`): `void`

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:252](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L252)

Notifies subscribers of a rotate gesture

#### 參數

##### deltaRotation

`number`

#### 回傳

`void`

#### 實作了

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyRotate`](../interfaces/UserInputPublisher.md#notifyrotate)

***

### notifyZoom()

> **notifyZoom**(`deltaZoomAmount`, `anchorPoint`): `void`

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:240](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L240)

Notifies subscribers of a zoom gesture

#### 參數

##### deltaZoomAmount

`number`

##### anchorPoint

`Point`

#### 回傳

`void`

#### 實作了

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyZoom`](../interfaces/UserInputPublisher.md#notifyzoom)

***

### on()

> **on**\<`K`\>(`eventName`, `callback`): [`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

定義於: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:257](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L257)

Subscribes to input events

#### 型別參數

##### K

`K` *extends* keyof [`RawUserInputEventMap`](../type-aliases/RawUserInputEventMap.md)

#### 參數

##### eventName

`K`

##### callback

(`event`) => `void`

#### 回傳

[`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

#### 實作了

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`on`](../interfaces/UserInputPublisher.md#on)
