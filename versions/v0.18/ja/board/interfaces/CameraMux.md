[@ue-too/board](../globals.md) / CameraMux

# Interface: CameraMux

Defined in: [packages/board/src/camera/camera-mux/interface.ts:139](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/interface.ts#L139)

Input multiplexer interface for camera control flow management.
Acts as a gatekeeper that can allow or block camera inputs based on state.

## Remarks

The CameraMux pattern enables:
- **Input arbitration**: Decide which inputs should affect the camera
- **Animation systems**: Block user input during camera animations
- **State management**: Control camera behavior based on application state
- **Input filtering**: Modify or clamp inputs before applying to camera

Implementations can be:
- **Stateless**: Always pass through (e.g., [Relay](../classes/Relay.md))
- **Stateful**: Block inputs during animations or specific states
- **Smart**: Modify inputs based on context (e.g., smooth damping)

## Example

```typescript
// Simple relay implementation
class SimpleMux implements CameraMux {
  notifyPanInput(diff: Point): CameraMuxPanOutput {
    return { allowPassThrough: true, delta: diff };
  }
  notifyZoomInput(delta: number, anchor: Point): CameraMuxZoomOutput {
    return { allowPassThrough: true, delta, anchorPoint: anchor };
  }
  notifyRotationInput(delta: number): CameraMuxRotationOutput {
    return { allowPassThrough: true, delta };
  }
}

// Animation-blocking implementation
class AnimatedMux implements CameraMux {
  private isAnimating = false;

  notifyPanInput(diff: Point): CameraMuxPanOutput {
    if (this.isAnimating) {
      return { allowPassThrough: false };
    }
    return { allowPassThrough: true, delta: diff };
  }
  // ... similar for zoom and rotation
}
```

## See

[Relay](../classes/Relay.md) for a simple passthrough implementation

## Methods

### notifyPanInput()

> **notifyPanInput**(`diff`): [`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

Defined in: [packages/board/src/camera/camera-mux/interface.ts:146](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/interface.ts#L146)

Processes a pan input request.

#### Parameters

##### diff

`Point`

Pan displacement in viewport space (CSS pixels)

#### Returns

[`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

Output indicating if pan is allowed and the delta to apply

***

### notifyRotationInput()

> **notifyRotationInput**(`deltaRotation`): [`CameraMuxRotationOutput`](../type-aliases/CameraMuxRotationOutput.md)

Defined in: [packages/board/src/camera/camera-mux/interface.ts:166](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/interface.ts#L166)

Processes a rotation input request.

#### Parameters

##### deltaRotation

`number`

Change in rotation in radians

#### Returns

[`CameraMuxRotationOutput`](../type-aliases/CameraMuxRotationOutput.md)

Output indicating if rotation is allowed and the delta to apply

***

### notifyZoomInput()

> **notifyZoomInput**(`deltaZoomAmount`, `anchorPoint`): [`CameraMuxZoomOutput`](../type-aliases/CameraMuxZoomOutput.md)

Defined in: [packages/board/src/camera/camera-mux/interface.ts:155](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/interface.ts#L155)

Processes a zoom input request.

#### Parameters

##### deltaZoomAmount

`number`

Change in zoom level (positive = zoom in, negative = zoom out)

##### anchorPoint

`Point`

Point to zoom towards in viewport coordinates (typically cursor position)

#### Returns

[`CameraMuxZoomOutput`](../type-aliases/CameraMuxZoomOutput.md)

Output indicating if zoom is allowed and the parameters to apply
