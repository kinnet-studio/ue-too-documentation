[@ue-too/board](../../modules.md) / [index](../index.md) / createDefaultCameraRig

# 関数: createDefaultCameraRig()

> **createDefaultCameraRig**(`camera`): [`CameraRig`](../interfaces/CameraRig.md)

定義: [packages/board/src/camera/camera-rig/camera-rig.ts:940](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/camera/camera-rig/camera-rig.ts#L940)

Creates a camera rig with sensible default configuration.

## パラメータ

### camera

[`ObservableBoardCamera`](../interfaces/ObservableBoardCamera.md)

Observable camera instance to control

## 戻り値

[`CameraRig`](../interfaces/CameraRig.md)

Configured camera rig ready for use

## Remarks

This factory function creates a [DefaultCameraRig](../classes/DefaultCameraRig.md) with a balanced default configuration:

**Enabled by default:**
- `limitEntireViewPort: true` - Entire viewport stays within boundaries
- `clampTranslation: true` - Position is clamped to boundaries
- `clampZoom: true` - Zoom is clamped to limits

**Disabled by default:**
- All movement restrictions (`restrictXTranslation`, `restrictYTranslation`, etc.)
- Zoom restrictions (`restrictZoom`)
- Relative translation restrictions

This configuration allows free camera movement with boundary enforcement,
suitable for most infinite canvas applications.

## 例

```typescript
const camera = new DefaultBoardCamera(1920, 1080);
const rig = createDefaultCameraRig(camera);

// Ready to use with sensible defaults
rig.configure({
  boundaries: {
    min: { x: -1000, y: -1000 },
    max: { x: 1000, y: 1000 }
  }
});

rig.panByViewPort({ x: 100, y: 50 });
rig.zoomByAt(0.1, mousePosition);
```

## 参照

 - [DefaultCameraRig](../classes/DefaultCameraRig.md) for the implementation
 - [CameraRigConfig](../type-aliases/CameraRigConfig.md) for all available configuration options
