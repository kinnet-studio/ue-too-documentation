[@ue-too/board](../globals.md) / SvgPositionDimensionPublisher

# Class: SvgPositionDimensionPublisher

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:40](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L40)

Monitors and publishes position and dimension changes for SVG elements.

## Remarks

This class tracks SVG element position and dimensions using multiple browser APIs
to ensure comprehensive detection of all changes:
- ResizeObserver: Detects size changes
- IntersectionObserver: Detects visibility and position changes
- MutationObserver: Detects attribute changes (width, height, style)
- Window scroll/resize events: Detects changes from page layout

The reported DOMRect excludes padding and borders to provide the actual
content dimensions using [getTrueRect](../functions/getTrueRect.md).

Position and dimension changes are published synchronously to all subscribers,
ensuring immediate updates for coordinate transformations and rendering logic.

## Example

```typescript
const svg = document.querySelector('svg');
const publisher = new SvgPositionDimensionPublisher(svg);

// Subscribe to position/dimension updates
publisher.onPositionUpdate((rect) => {
  console.log(`SVG at (${rect.x}, ${rect.y}) with size ${rect.width}x${rect.height}`);
});

// Clean up when done
publisher.dispose();
```

## Constructors

### Constructor

> **new SvgPositionDimensionPublisher**(`canvas?`): `SvgPositionDimensionPublisher`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:58](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L58)

Creates a new SVG position/dimension publisher.

#### Parameters

##### canvas?

`SVGSVGElement`

Optional SVG element to immediately attach to

#### Returns

`SvgPositionDimensionPublisher`

#### Remarks

If a canvas is provided, observers are immediately attached and monitoring begins.
Otherwise, call [attach](#attach) later to begin monitoring.

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:138](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L138)

Attaches observers to an SVG element and begins monitoring.

#### Parameters

##### canvas

`SVGSVGElement`

The SVG element to monitor

#### Returns

`void`

#### Remarks

Automatically calls [dispose](#dispose) first to clean up any previous attachments.
Sets up all observers and records the initial position/dimensions.

The initial rect is calculated immediately and stored, but no notification
is sent to observers for this initial state.

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:114](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L114)

Cleans up all observers and event listeners.

#### Returns

`void`

#### Remarks

Disconnects all observers (ResizeObserver, IntersectionObserver, MutationObserver)
and removes window event listeners (scroll, resize). Always call this method
when the publisher is no longer needed to prevent memory leaks.

***

### onPositionUpdate()

> **onPositionUpdate**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:215](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L215)

Subscribes to position and dimension updates.

#### Parameters

##### observer

[`Observer`](../type-aliases/Observer.md)\<\[`DOMRect`\]\>

Callback function that receives the updated DOMRect

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

Optional subscription options (e.g., AbortSignal for cleanup)

#### Returns

Unsubscribe function to remove this observer

> (): `void`

##### Returns

`void`

#### Remarks

The observer is called synchronously whenever the SVG's position or dimensions change.
The DOMRect parameter represents the actual content area (excluding padding and borders).

#### Example

```typescript
const unsubscribe = publisher.onPositionUpdate((rect) => {
  console.log(`Position: ${rect.x}, ${rect.y}`);
  console.log(`Size: ${rect.width}x${rect.height}`);
});

// Later, when done:
unsubscribe();
```
