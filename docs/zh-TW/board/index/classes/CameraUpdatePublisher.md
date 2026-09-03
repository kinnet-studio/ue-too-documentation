[@ue-too/board](../../modules.md) / [index](../index.md) / CameraUpdatePublisher

# 類別: CameraUpdatePublisher

定義於: [packages/board/src/camera/update-publisher.ts:212](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/update-publisher.ts#L212)

Event publisher for camera state changes using the Observable pattern.
Manages subscriptions and notifications for pan, zoom, and rotate events.

## 備註

This class is used internally by [DefaultBoardCamera](DefaultBoardCamera.md) to implement the event system.
You typically don't instantiate this directly unless building custom camera implementations.

Each specific event (pan, zoom, rotate) also triggers the 'all' event, allowing
listeners to subscribe to any camera change with a single handler.

## 範例

```typescript
const publisher = new CameraUpdatePublisher();

// Subscribe to pan events
publisher.on('pan', (event, state) => {
  console.log('Camera panned:', event.diff);
});

// Notify subscribers of a pan event
publisher.notifyPan(
  { diff: { x: 10, y: 20 } },
  { position: { x: 100, y: 200 }, zoomLevel: 1, rotation: 0 }
);
```

## 參閱

[DefaultBoardCamera](DefaultBoardCamera.md) for the primary consumer of this class

## 建構函式

### 建構函式

> **new CameraUpdatePublisher**(): `CameraUpdatePublisher`

定義於: [packages/board/src/camera/update-publisher.ts:221](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/update-publisher.ts#L221)

Creates a new camera event publisher with async observables for each event type.

#### 回傳

`CameraUpdatePublisher`

## 方法

### notifyPan()

> **notifyPan**(`event`, `cameraState`): `void`

定義於: [packages/board/src/camera/update-publisher.ts:235](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/update-publisher.ts#L235)

Notifies all pan event subscribers.
Also triggers the 'all' event with type discrimination.

#### 參數

##### event

[`CameraPanEventPayload`](../type-aliases/CameraPanEventPayload.md)

Pan event payload containing position delta

##### cameraState

[`CameraState`](../type-aliases/CameraState.md)

Current camera state snapshot

#### 回傳

`void`

***

### notifyRotate()

> **notifyRotate**(`event`, `cameraState`): `void`

定義於: [packages/board/src/camera/update-publisher.ts:262](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/update-publisher.ts#L262)

Notifies all rotation event subscribers.
Also triggers the 'all' event with type discrimination.

#### 參數

##### event

[`CameraRotateEventPayload`](../type-aliases/CameraRotateEventPayload.md)

Rotation event payload containing rotation delta

##### cameraState

[`CameraState`](../type-aliases/CameraState.md)

Current camera state snapshot

#### 回傳

`void`

***

### notifyZoom()

> **notifyZoom**(`event`, `cameraState`): `void`

定義於: [packages/board/src/camera/update-publisher.ts:247](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/update-publisher.ts#L247)

Notifies all zoom event subscribers.
Also triggers the 'all' event with type discrimination.

#### 參數

##### event

[`CameraZoomEventPayload`](../type-aliases/CameraZoomEventPayload.md)

Zoom event payload containing zoom delta

##### cameraState

[`CameraState`](../type-aliases/CameraState.md)

Current camera state snapshot

#### 回傳

`void`

***

### on()

> **on**\<`K`\>(`eventName`, `callback`, `options?`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

定義於: [packages/board/src/camera/update-publisher.ts:321](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/update-publisher.ts#L321)

Subscribes to camera events with type-safe callbacks and optional AbortController support.

#### 型別參數

##### K

`K` *extends* keyof [`CameraEventMap`](../type-aliases/CameraEventMap.md)

The event type key from CameraEventMap

#### 參數

##### eventName

`K`

Event type to subscribe to ('pan', 'zoom', 'rotate', or 'all')

##### callback

(`event`, `cameraState`) => `void`

Function called when the event occurs

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

Optional subscription options including AbortController signal

#### 回傳

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

Function that unsubscribes this callback when called

#### 拋出

Error if an invalid event name is provided

#### 備註

Use the AbortController pattern for managing multiple subscriptions:

#### 範例

```typescript
// Basic subscription
const unsubscribe = publisher.on('pan', (event, state) => {
  console.log(`Panned by (${event.diff.x}, ${event.diff.y})`);
});

// Later: unsubscribe
unsubscribe();

// Using AbortController for batch management
const controller = new AbortController();
publisher.on('pan', handlePan, { signal: controller.signal });
publisher.on('zoom', handleZoom, { signal: controller.signal });

// Unsubscribe all at once
controller.abort();

// Subscribe to all events with type discrimination
publisher.on('all', (event, state) => {
  switch (event.type) {
    case 'pan':
      console.log('Pan:', event.diff);
      break;
    case 'zoom':
      console.log('Zoom:', event.deltaZoomAmount);
      break;
    case 'rotate':
      console.log('Rotate:', event.deltaRotation);
      break;
  }
});
```
