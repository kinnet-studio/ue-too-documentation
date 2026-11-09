[@ue-too/board](../globals.md) / CanvasPositionDimensionPublisher

# Class: CanvasPositionDimensionPublisher

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:304](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L304)

Monitors and publishes position and dimension changes for HTML Canvas elements.

## Remarks

Similar to [SvgPositionDimensionPublisher](SvgPositionDimensionPublisher.md) but specifically for HTMLCanvasElement.
Automatically handles device pixel ratio adjustments to maintain crisp rendering
at different screen densities.

Key differences from SVG version:
- Automatically adjusts canvas.width/height attributes based on devicePixelRatio
- Synchronizes CSS dimensions (style.width/height) with canvas buffer size
- Ensures canvas maintains proper resolution on high-DPI displays

The class uses multiple browser APIs for comprehensive change detection:
- ResizeObserver: Detects size changes
- IntersectionObserver: Detects visibility and position changes
- MutationObserver: Detects attribute changes and synchronizes dimensions
- Window scroll/resize events: Detects changes from page layout

## Example

```typescript
const canvas = document.querySelector('canvas');
const publisher = new CanvasPositionDimensionPublisher(canvas);

// Subscribe to updates
publisher.onPositionUpdate((rect) => {
  // Canvas dimensions automatically adjusted for devicePixelRatio
  console.log(`Canvas at (${rect.x}, ${rect.y})`);
  console.log(`Display size: ${rect.width}x${rect.height}`);
});

publisher.dispose();
```

## See

[SvgPositionDimensionPublisher](SvgPositionDimensionPublisher.md) for SVG elements

## Constructors

### Constructor

> **new CanvasPositionDimensionPublisher**(`canvas?`): `CanvasPositionDimensionPublisher`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:326](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L326)

Creates a new Canvas position/dimension publisher.

#### Parameters

##### canvas?

`HTMLCanvasElement`

Optional canvas element to immediately attach to

#### Returns

`CanvasPositionDimensionPublisher`

#### Remarks

If a canvas is provided, observers are immediately attached and monitoring begins.
The canvas dimensions are automatically adjusted for devicePixelRatio.

## Methods

### attach()

> **attach**(`canvas`): `void`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:401](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L401)

Attaches observers to a canvas element and begins monitoring.

#### Parameters

##### canvas

`HTMLCanvasElement`

The canvas element to monitor

#### Returns

`void`

#### Remarks

Automatically calls [dispose](#dispose) first to clean up any previous attachments.
Sets up all observers, adjusts canvas dimensions for devicePixelRatio,
and records the initial position/dimensions.

***

### dispose()

> **dispose**(): `void`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:383](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L383)

Cleans up all observers and event listeners.

#### Returns

`void`

#### Remarks

Disconnects all observers and removes window event listeners.
Always call this method when the publisher is no longer needed to prevent memory leaks.

***

### onPositionUpdate()

> **onPositionUpdate**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/utils/canvas-position-dimension.ts:493](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/canvas-position-dimension.ts#L493)

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

The observer is called synchronously whenever the canvas position or dimensions change.
The DOMRect represents the actual content area (excluding padding and borders).
Canvas buffer dimensions are automatically adjusted for devicePixelRatio.
