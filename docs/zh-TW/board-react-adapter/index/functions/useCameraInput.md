[@ue-too/board-react-adapter](../../modules.md) / [index](../index.md) / useCameraInput

# 函式: useCameraInput()

> **useCameraInput**(): `object`

定義於: [hooks/useBoardify.tsx:148](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board-react-adapter/src/hooks/useBoardify.tsx#L148)

Hook to get camera control functions for programmatic camera manipulation.

## 回傳

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

#### 參數

##### delta

`Point`

#### 回傳

`void`

### panByWorld()

> **panByWorld**: (`delta`) => `void`

#### 參數

##### delta

`Point`

#### 回傳

`void`

### panToViewPort()

> **panToViewPort**: (`viewPortPosition`) => `void`

#### 參數

##### viewPortPosition

`Point`

#### 回傳

`void`

### panToWorld()

> **panToWorld**: (`worldPosition`) => `void`

#### 參數

##### worldPosition

`Point`

#### 回傳

`void`

### rotateBy()

> **rotateBy**: (`rotationDelta`) => `void`

#### 參數

##### rotationDelta

`number`

#### 回傳

`void`

### rotateTo()

> **rotateTo**: (`rotation`) => `void`

#### 參數

##### rotation

`number`

#### 回傳

`void`

### zoomBy()

> **zoomBy**: (`zoomDelta`) => `void`

#### 參數

##### zoomDelta

`number`

#### 回傳

`void`

### zoomTo()

> **zoomTo**: (`zoomLevel`) => `void`

#### 參數

##### zoomLevel

`number`

#### 回傳

`void`

### zoomToAtViewPort()

> **zoomToAtViewPort**: (`zoomLevel`, `at`) => `void`

#### 參數

##### zoomLevel

`number`

##### at

`Point`

#### 回傳

`void`

### zoomToAtWorld()

> **zoomToAtWorld**: (`zoomLevel`, `at`) => `void`

#### 參數

##### zoomLevel

`number`

##### at

`Point`

#### 回傳

`void`

## 備註

This hook provides a stable set of functions to control the camera programmatically.
The functions are memoized and only recreate when the board instance changes.

All camera operations go through the camera rig, which enforces boundaries,
restrictions, and other constraints configured on the board.

## 範例

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
