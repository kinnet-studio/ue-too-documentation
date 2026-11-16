[@ue-too/board](../globals.md) / CameraUpdatePublisher

# Class: CameraUpdatePublisher

Defined in: [packages/board/src/camera/update-publisher.ts:212](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L212)

Event publisher for camera state changes using the Observable pattern.
Manages subscriptions and notifications for pan, zoom, and rotate events.

## Remarks

This class is used internally by [DefaultBoardCamera](DefaultBoardCamera.md) to implement the event system.
You typically don't instantiate this directly unless building custom camera implementations.

Each specific event (pan, zoom, rotate) also triggers the 'all' event, allowing
listeners to subscribe to any camera change with a single handler.

## Example

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

## See

[DefaultBoardCamera](DefaultBoardCamera.md) for the primary consumer of this class

## Constructors

### Constructor

> **new CameraUpdatePublisher**(): `CameraUpdatePublisher`

Defined in: [packages/board/src/camera/update-publisher.ts:221](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L221)

Creates a new camera event publisher with async observables for each event type.

#### Returns

`CameraUpdatePublisher`

## Methods

### notifyPan()

> **notifyPan**(`event`, `cameraState`): `void`

Defined in: [packages/board/src/camera/update-publisher.ts:235](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L235)

Notifies all pan event subscribers.
Also triggers the 'all' event with type discrimination.

#### Parameters

##### event

[`CameraPanEventPayload`](../type-aliases/CameraPanEventPayload.md)

Pan event payload containing position delta

##### cameraState

[`CameraState`](../type-aliases/CameraState.md)

Current camera state snapshot

#### Returns

`void`

***

### notifyRotate()

> **notifyRotate**(`event`, `cameraState`): `void`

Defined in: [packages/board/src/camera/update-publisher.ts:262](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L262)

Notifies all rotation event subscribers.
Also triggers the 'all' event with type discrimination.

#### Parameters

##### event

[`CameraRotateEventPayload`](../type-aliases/CameraRotateEventPayload.md)

Rotation event payload containing rotation delta

##### cameraState

[`CameraState`](../type-aliases/CameraState.md)

Current camera state snapshot

#### Returns

`void`

***

### notifyZoom()

> **notifyZoom**(`event`, `cameraState`): `void`

Defined in: [packages/board/src/camera/update-publisher.ts:247](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L247)

Notifies all zoom event subscribers.
Also triggers the 'all' event with type discrimination.

#### Parameters

##### event

[`CameraZoomEventPayload`](../type-aliases/CameraZoomEventPayload.md)

Zoom event payload containing zoom delta

##### cameraState

[`CameraState`](../type-aliases/CameraState.md)

Current camera state snapshot

#### Returns

`void`

***

### on()

> **on**\<`K`\>(`eventName`, `callback`, `options?`): [`UnSubscribe`](../type-aliases/UnSubscribe.md)

Defined in: [packages/board/src/camera/update-publisher.ts:321](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/update-publisher.ts#L321)

Subscribes to camera events with type-safe callbacks and optional AbortController support.

#### Type Parameters

##### K

`K` *extends* keyof [`CameraEventMap`](../type-aliases/CameraEventMap.md)

The event type key from CameraEventMap

#### Parameters

##### eventName

`K`

Event type to subscribe to ('pan', 'zoom', 'rotate', or 'all')

##### callback

(`event`, `cameraState`) => `void`

Function called when the event occurs

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

Optional subscription options including AbortController signal

#### Returns

[`UnSubscribe`](../type-aliases/UnSubscribe.md)

Function that unsubscribes this callback when called

#### Throws

Error if an invalid event name is provided

#### Remarks

Use the AbortController pattern for managing multiple subscriptions:

#### Example

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
