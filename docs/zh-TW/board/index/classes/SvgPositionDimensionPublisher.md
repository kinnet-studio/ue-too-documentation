[@ue-too/board](../../modules.md) / [index](../index.md) / SvgPositionDimensionPublisher

# 類別: SvgPositionDimensionPublisher

定義於: [packages/board/src/utils/canvas-position-dimension.ts:40](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/utils/canvas-position-dimension.ts#L40)

Monitors and publishes position and dimension changes for SVG elements.

## 備註

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

## 範例

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

## 建構函式

### 建構函式

> **new SvgPositionDimensionPublisher**(`canvas?`): `SvgPositionDimensionPublisher`

定義於: [packages/board/src/utils/canvas-position-dimension.ts:58](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/utils/canvas-position-dimension.ts#L58)

Creates a new SVG position/dimension publisher.

#### 參數

##### canvas?

`SVGSVGElement`

Optional SVG element to immediately attach to

#### 回傳

`SvgPositionDimensionPublisher`

#### 備註

If a canvas is provided, observers are immediately attached and monitoring begins.
Otherwise, call [attach](#attach) later to begin monitoring.

## 方法

### attach()

> **attach**(`canvas`): `void`

定義於: [packages/board/src/utils/canvas-position-dimension.ts:138](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/utils/canvas-position-dimension.ts#L138)

Attaches observers to an SVG element and begins monitoring.

#### 參數

##### canvas

`SVGSVGElement`

The SVG element to monitor

#### 回傳

`void`

#### 備註

Automatically calls [dispose](#dispose) first to clean up any previous attachments.
Sets up all observers and records the initial position/dimensions.

The initial rect is calculated immediately and stored, but no notification
is sent to observers for this initial state.

***

### dispose()

> **dispose**(): `void`

定義於: [packages/board/src/utils/canvas-position-dimension.ts:114](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/utils/canvas-position-dimension.ts#L114)

Cleans up all observers and event listeners.

#### 回傳

`void`

#### 備註

Disconnects all observers (ResizeObserver, IntersectionObserver, MutationObserver)
and removes window event listeners (scroll, resize). Always call this method
when the publisher is no longer needed to prevent memory leaks.

***

### onPositionUpdate()

> **onPositionUpdate**(`observer`, `options?`): () => `void`

定義於: [packages/board/src/utils/canvas-position-dimension.ts:215](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/utils/canvas-position-dimension.ts#L215)

Subscribes to position and dimension updates.

#### 參數

##### observer

[`Observer`](../type-aliases/Observer.md)\<\[`DOMRect`\]\>

Callback function that receives the updated DOMRect

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

Optional subscription options (e.g., AbortSignal for cleanup)

#### 回傳

Unsubscribe function to remove this observer

> (): `void`

##### 回傳

`void`

#### 備註

The observer is called synchronously whenever the SVG's position or dimensions change.
The DOMRect parameter represents the actual content area (excluding padding and borders).

#### 範例

```typescript
const unsubscribe = publisher.onPositionUpdate((rect) => {
  console.log(`Position: ${rect.x}, ${rect.y}`);
  console.log(`Size: ${rect.width}x${rect.height}`);
});

// Later, when done:
unsubscribe();
```
