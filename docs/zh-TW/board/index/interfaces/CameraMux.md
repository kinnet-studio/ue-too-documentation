[@ue-too/board](../../modules.md) / [index](../index.md) / CameraMux

# 介面: CameraMux

定義於: [packages/board/src/camera/camera-mux/interface.ts:140](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/interface.ts#L140)

Input multiplexer interface for camera control flow management.
Acts as a gatekeeper that can allow or block camera inputs based on state.

## 備註

The CameraMux pattern enables:
- **Input arbitration**: Decide which inputs should affect the camera
- **Animation systems**: Block user input during camera animations
- **State management**: Control camera behavior based on application state
- **Input filtering**: Modify or clamp inputs before applying to camera

Implementations can be:
- **Stateless**: Always pass through (e.g., [Relay](../classes/Relay.md))
- **Stateful**: Block inputs during animations or specific states
- **Smart**: Modify inputs based on context (e.g., smooth damping)

## 範例

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

## 參閱

[Relay](../classes/Relay.md) for a simple passthrough implementation

## 方法

### notifyPanInput()

> **notifyPanInput**(`diff`): [`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

定義於: [packages/board/src/camera/camera-mux/interface.ts:147](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/interface.ts#L147)

Processes a pan input request.

#### 參數

##### diff

`Point`

Pan displacement in viewport space (CSS pixels)

#### 回傳

[`CameraMuxPanOutput`](../type-aliases/CameraMuxPanOutput.md)

Output indicating if pan is allowed and the delta to apply

***

### notifyRotationInput()

> **notifyRotationInput**(`deltaRotation`): [`CameraMuxRotationOutput`](../type-aliases/CameraMuxRotationOutput.md)

定義於: [packages/board/src/camera/camera-mux/interface.ts:167](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/interface.ts#L167)

Processes a rotation input request.

#### 參數

##### deltaRotation

`number`

Change in rotation in radians

#### 回傳

[`CameraMuxRotationOutput`](../type-aliases/CameraMuxRotationOutput.md)

Output indicating if rotation is allowed and the delta to apply

***

### notifyZoomInput()

> **notifyZoomInput**(`deltaZoomAmount`, `anchorPoint`): [`CameraMuxZoomOutput`](../type-aliases/CameraMuxZoomOutput.md)

定義於: [packages/board/src/camera/camera-mux/interface.ts:156](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/camera/camera-mux/interface.ts#L156)

Processes a zoom input request.

#### 參數

##### deltaZoomAmount

`number`

Change in zoom level (positive = zoom in, negative = zoom out)

##### anchorPoint

`Point`

Point to zoom towards in viewport coordinates (typically cursor position)

#### 回傳

[`CameraMuxZoomOutput`](../type-aliases/CameraMuxZoomOutput.md)

Output indicating if zoom is allowed and the parameters to apply
