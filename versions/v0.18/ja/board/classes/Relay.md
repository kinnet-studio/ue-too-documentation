[@ue-too/board](../globals.md) / Relay

# Class: Relay

Defined in: [packages/board/src/camera/camera-mux/relay.ts:48](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/relay.ts#L48)

Stateless camera input multiplexer that always allows inputs to pass through.
This is the simplest [CameraMux](../interfaces/CameraMux.md) implementation with no filtering or state management.

## Remarks

The Relay class provides a "transparent" mux that:
- Never blocks inputs
- Passes all inputs unchanged
- Has no internal state
- Acts as a simple conduit between input sources and camera control

Use this when you want:
- Direct, unfiltered camera control
- No animation system or input blocking
- Maximum simplicity with minimal overhead

For more advanced use cases (animations, input blocking, state management),
implement a custom [CameraMux](../interfaces/CameraMux.md) or use a stateful implementation.

## Example

```typescript
const relay = new Relay();

// All inputs pass through unchanged
const panResult = relay.notifyPanInput({ x: 10, y: 5 });
// panResult = { allowPassThrough: true, delta: { x: 10, y: 5 } }

const zoomResult = relay.notifyZoomInput(0.5, { x: 100, y: 200 });
// zoomResult = { allowPassThrough: true, delta: 0.5, anchorPoint: { x: 100, y: 200 } }

const rotateResult = relay.notifyRotationInput(0.1);
// rotateResult = { allowPassThrough: true, delta: 0.1 }
```

## See

 - [CameraMux](../interfaces/CameraMux.md) for the interface specification
 - [createDefaultCameraMux](../functions/createDefaultCameraMux.md) for a factory function

## Implements

- [`CameraMux`](../interfaces/CameraMux.md)

## Constructors

### Constructor

> **new Relay**(): `Relay`

Defined in: [packages/board/src/camera/camera-mux/relay.ts:52](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/relay.ts#L52)

Creates a new stateless relay multiplexer.

#### Returns

`Relay`

## Methods

### notifyPanInput()

> **notifyPanInput**(`diff`): [`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

Defined in: [packages/board/src/camera/camera-mux/relay.ts:60](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/relay.ts#L60)

Processes pan input by always allowing it through unchanged.

#### Parameters

##### diff

`Point`

Pan displacement in viewport space

#### Returns

[`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

Output allowing passthrough with the original delta

#### Implementation of

[`CameraMux`](../interfaces/CameraMux.md).[`notifyPanInput`](../interfaces/CameraMux.md#notifypaninput)

***

### notifyRotationInput()

> **notifyRotationInput**(`deltaRotation`): [`CameraMuxRotationOutput`](../type-aliases/CameraMuxRotationOutput.md)

Defined in: [packages/board/src/camera/camera-mux/relay.ts:88](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/relay.ts#L88)

Processes rotation input by always allowing it through unchanged.

#### Parameters

##### deltaRotation

`number`

Change in rotation in radians

#### Returns

[`CameraMuxRotationOutput`](../type-aliases/CameraMuxRotationOutput.md)

Output allowing passthrough with the original delta

#### Implementation of

[`CameraMux`](../interfaces/CameraMux.md).[`notifyRotationInput`](../interfaces/CameraMux.md#notifyrotationinput)

***

### notifyZoomInput()

> **notifyZoomInput**(`deltaZoomAmount`, `anchorPoint`): [`CameraMuxZoomOutput`](../type-aliases/CameraMuxZoomOutput.md)

Defined in: [packages/board/src/camera/camera-mux/relay.ts:71](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/relay.ts#L71)

Processes zoom input by always allowing it through unchanged.

#### Parameters

##### deltaZoomAmount

`number`

Change in zoom level

##### anchorPoint

`Point`

Point to zoom towards in viewport coordinates

#### Returns

[`CameraMuxZoomOutput`](../type-aliases/CameraMuxZoomOutput.md)

Output allowing passthrough with the original parameters

#### Implementation of

[`CameraMux`](../interfaces/CameraMux.md).[`notifyZoomInput`](../interfaces/CameraMux.md#notifyzoominput)
