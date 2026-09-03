[@ue-too/board](../../modules.md) / [index](../index.md) / CameraMux

# インターフェイス: CameraMux

定義: [packages/board/src/camera/camera-mux/interface.ts:140](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-mux/interface.ts#L140)

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

## 例

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

## 参照

[Relay](../classes/Relay.md) for a simple passthrough implementation

## メソッド

### notifyPanInput()

> **notifyPanInput**(`diff`): [`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

定義: [packages/board/src/camera/camera-mux/interface.ts:147](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-mux/interface.ts#L147)

Processes a pan input request.

#### パラメータ

##### diff

`Point`

Pan displacement in viewport space (CSS pixels)

#### 戻り値

[`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

Output indicating if pan is allowed and the delta to apply

***

### notifyRotationInput()

> **notifyRotationInput**(`deltaRotation`): [`CameraMuxRotationOutput`](../type-aliases/CameraMuxRotationOutput.md)

定義: [packages/board/src/camera/camera-mux/interface.ts:167](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-mux/interface.ts#L167)

Processes a rotation input request.

#### パラメータ

##### deltaRotation

`number`

Change in rotation in radians

#### 戻り値

[`CameraMuxRotationOutput`](../type-aliases/CameraMuxRotationOutput.md)

Output indicating if rotation is allowed and the delta to apply

***

### notifyZoomInput()

> **notifyZoomInput**(`deltaZoomAmount`, `anchorPoint`): [`CameraMuxZoomOutput`](../type-aliases/CameraMuxZoomOutput.md)

定義: [packages/board/src/camera/camera-mux/interface.ts:156](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-mux/interface.ts#L156)

Processes a zoom input request.

#### パラメータ

##### deltaZoomAmount

`number`

Change in zoom level (positive = zoom in, negative = zoom out)

##### anchorPoint

`Point`

Point to zoom towards in viewport coordinates (typically cursor position)

#### 戻り値

[`CameraMuxZoomOutput`](../type-aliases/CameraMuxZoomOutput.md)

Output indicating if zoom is allowed and the parameters to apply
