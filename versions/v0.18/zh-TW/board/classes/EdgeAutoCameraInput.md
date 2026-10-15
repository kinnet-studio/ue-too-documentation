[@ue-too/board](../globals.md) / EdgeAutoCameraInput

# Class: EdgeAutoCameraInput

Defined in: [packages/board/src/camera/camera-edge-auto-input.ts:53](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-edge-auto-input.ts#L53)

Automatic camera panning triggered by cursor proximity to viewport edges.
Commonly used in strategy games, map editors, and design tools.

## Remarks

This class implements edge-scrolling behavior where the camera automatically
pans when the cursor approaches the viewport edges. The panning speed is
constant and direction-based (no acceleration).

The camera moves in viewport space, meaning the speed is consistent regardless
of zoom level. The actual world-space movement will vary with zoom.

## Example

```typescript
const cameraMux = new CameraMux(camera);
const edgeScroll = new EdgeAutoCameraInput(cameraMux);

// Track mouse position relative to viewport edges
canvas.addEventListener('mousemove', (e) => {
  const rect = canvas.getBoundingClientRect();
  const edgeMargin = 50; // pixels from edge

  let horizontal: 'left' | 'right' | 'none' = 'none';
  let vertical: 'up' | 'down' | 'none' = 'none';

  if (e.clientX - rect.left < edgeMargin) horizontal = 'left';
  if (rect.right - e.clientX < edgeMargin) horizontal = 'right';
  if (e.clientY - rect.top < edgeMargin) vertical = 'up';
  if (rect.bottom - e.clientY < edgeMargin) vertical = 'down';

  edgeScroll.setDirection(horizontal, vertical);
  edgeScroll.toggleOn();
});

// Stop scrolling when mouse leaves
canvas.addEventListener('mouseleave', () => {
  edgeScroll.toggleOff();
});

// Update in render loop
function render(deltaTime: number) {
  edgeScroll.update(deltaTime / 1000); // convert ms to seconds
}
```

## See

[CameraMux](../interfaces/CameraMux.md) for the camera input multiplexer this feeds into

## Constructors

### Constructor

> **new EdgeAutoCameraInput**(`cameraMux`): `EdgeAutoCameraInput`

Defined in: [packages/board/src/camera/camera-edge-auto-input.ts:66](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-edge-auto-input.ts#L66)

Creates a new edge auto-scroll input controller.

#### Parameters

##### cameraMux

[`CameraMux`](../interfaces/CameraMux.md)

The camera multiplexer to send pan inputs to

#### Returns

`EdgeAutoCameraInput`

## Methods

### setDirection()

> **setDirection**(`horizontalDirection`, `verticalDirection`): `void`

Defined in: [packages/board/src/camera/camera-edge-auto-input.ts:103](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-edge-auto-input.ts#L103)

Sets the scrolling direction based on cursor position relative to edges.

#### Parameters

##### horizontalDirection

Horizontal scroll direction ('left', 'right', or 'none')

`"none"` | `"left"` | `"right"`

##### verticalDirection

Vertical scroll direction ('up', 'down', or 'none')

`"none"` | `"up"` | `"down"`

#### Returns

`void`

#### Remarks

Directions can be combined for diagonal scrolling.
Set both to 'none' to stop scrolling without disabling via [toggleOff](#toggleoff).

#### Example

```typescript
edgeScroll.setDirection('left', 'none');  // Scroll left only
edgeScroll.setDirection('right', 'up');   // Scroll diagonally up-right
edgeScroll.setDirection('none', 'none');  // Stop scrolling
```

***

### toggleOff()

> **toggleOff**(): `void`

Defined in: [packages/board/src/camera/camera-edge-auto-input.ts:74](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-edge-auto-input.ts#L74)

Disables edge scrolling.
The camera will stop panning even if direction is set.

#### Returns

`void`

***

### toggleOn()

> **toggleOn**(): `void`

Defined in: [packages/board/src/camera/camera-edge-auto-input.ts:82](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-edge-auto-input.ts#L82)

Enables edge scrolling.
The camera will pan according to the current direction setting.

#### Returns

`void`

***

### update()

> **update**(`deltaTime`): `void`

Defined in: [packages/board/src/camera/camera-edge-auto-input.ts:138](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-edge-auto-input.ts#L138)

Updates the camera position based on elapsed time and current direction.
Call this in your render loop or update tick.

#### Parameters

##### deltaTime

`number`

Time elapsed since last update in seconds

#### Returns

`void`

#### Remarks

The camera pans at a constant speed of 100 pixels/second in viewport space.
This is independent of zoom level - world-space movement varies with zoom.

If the state is 'idle', this method does nothing.

#### Example

```typescript
// In animation frame callback
let lastTime = performance.now();

function animate(currentTime: number) {
  const deltaTime = (currentTime - lastTime) / 1000; // Convert to seconds
  lastTime = currentTime;

  edgeScroll.update(deltaTime);

  requestAnimationFrame(animate);
}
```
