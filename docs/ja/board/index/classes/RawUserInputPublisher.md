[@ue-too/board](../../modules.md) / [index](../index.md) / RawUserInputPublisher

# クラス: RawUserInputPublisher

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:214](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L214)

Publisher for broadcasting raw user input events to observers.

## Remarks

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

## 例

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

## 実装

- [`UserInputPublisher`](../interfaces/UserInputPublisher.md)

## コンストラクター

### コンストラクター

> **new RawUserInputPublisher**(): `RawUserInputPublisher`

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:220](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L220)

#### 戻り値

`RawUserInputPublisher`

## メソッド

### notifyPan()

> **notifyPan**(`diff`): `void`

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:235](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L235)

Notifies subscribers of a pan gesture

#### パラメータ

##### diff

`Point`

#### 戻り値

`void`

#### の実装

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyPan`](../interfaces/UserInputPublisher.md#notifypan)

***

### notifyRotate()

> **notifyRotate**(`deltaRotation`): `void`

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:252](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L252)

Notifies subscribers of a rotate gesture

#### パラメータ

##### deltaRotation

`number`

#### 戻り値

`void`

#### の実装

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyRotate`](../interfaces/UserInputPublisher.md#notifyrotate)

***

### notifyZoom()

> **notifyZoom**(`deltaZoomAmount`, `anchorPoint`): `void`

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:240](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L240)

Notifies subscribers of a zoom gesture

#### パラメータ

##### deltaZoomAmount

`number`

##### anchorPoint

`Point`

#### 戻り値

`void`

#### の実装

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`notifyZoom`](../interfaces/UserInputPublisher.md#notifyzoom)

***

### on()

> **on**\<`K`\>(`eventName`, `callback`): [`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

定義: [packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts:257](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/board/src/input-interpretation/raw-input-publisher/raw-input-publisher.ts#L257)

Subscribes to input events

#### 型パラメーター

##### K

`K` *extends* keyof [`RawUserInputEventMap`](../type-aliases/RawUserInputEventMap.md)

#### パラメータ

##### eventName

`K`

##### callback

(`event`) => `void`

#### 戻り値

[`UnsubscribeToUserRawInput`](../type-aliases/UnsubscribeToUserRawInput.md)

#### の実装

[`UserInputPublisher`](../interfaces/UserInputPublisher.md).[`on`](../interfaces/UserInputPublisher.md#on)
