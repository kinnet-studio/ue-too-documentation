[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useCameraInput

# 関数: useCameraInput()

> **useCameraInput**(): `object`

定義: [hooks/useBoardify.tsx:148](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-react-adapter/src/hooks/useBoardify.tsx#L148)

Hook to get camera control functions for programmatic camera manipulation.

## 戻り値

`object`

Object containing camera control functions:
- `panToWorld` - Pan camera to a world position
- `panToViewPort` - Pan camera to a viewport position
- `zoomTo` - Set camera zoom to specific level
- `zoomBy` - Adjust camera zoom by delta
- `rotateTo` - Set camera rotation to specific angle
- `rotateBy` - Adjust camera rotation by delta

### panByViewPort()

> **panByViewPort**: (`delta`) => `void`

#### パラメータ

##### delta

`Point`

#### 戻り値

`void`

### panByWorld()

> **panByWorld**: (`delta`) => `void`

#### パラメータ

##### delta

`Point`

#### 戻り値

`void`

### panToViewPort()

> **panToViewPort**: (`viewPortPosition`) => `void`

#### パラメータ

##### viewPortPosition

`Point`

#### 戻り値

`void`

### panToWorld()

> **panToWorld**: (`worldPosition`) => `void`

#### パラメータ

##### worldPosition

`Point`

#### 戻り値

`void`

### rotateBy()

> **rotateBy**: (`rotationDelta`) => `void`

#### パラメータ

##### rotationDelta

`number`

#### 戻り値

`void`

### rotateTo()

> **rotateTo**: (`rotation`) => `void`

#### パラメータ

##### rotation

`number`

#### 戻り値

`void`

### zoomBy()

> **zoomBy**: (`zoomDelta`) => `void`

#### パラメータ

##### zoomDelta

`number`

#### 戻り値

`void`

### zoomTo()

> **zoomTo**: (`zoomLevel`) => `void`

#### パラメータ

##### zoomLevel

`number`

#### 戻り値

`void`

### zoomToAtViewPort()

> **zoomToAtViewPort**: (`zoomLevel`, `at`) => `void`

#### パラメータ

##### zoomLevel

`number`

##### at

`Point`

#### 戻り値

`void`

### zoomToAtWorld()

> **zoomToAtWorld**: (`zoomLevel`, `at`) => `void`

#### パラメータ

##### zoomLevel

`number`

##### at

`Point`

#### 戻り値

`void`

## Remarks

This hook provides a stable set of functions to control the camera programmatically.
The functions are memoized and only recreate when the board instance changes.

All camera operations go through the camera rig, which enforces boundaries,
restrictions, and other constraints configured on the board.

## 例

```tsx
function CameraControls() {
  const { panToWorld, zoomTo, rotateTo } = useCameraInput();

  return (
    <div>
      <button onClick={() => panToWorld({ x: 0, y: 0 })}>
        Center Camera
      </button>
      <button onClick={() => zoomTo(1.0)}>
        Reset Zoom
      </button>
      <button onClick={() => rotateTo(0)}>
        Reset Rotation
      </button>
    </div>
  );
}
```
