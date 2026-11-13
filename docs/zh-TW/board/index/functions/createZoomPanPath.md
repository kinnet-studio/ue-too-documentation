[@ue-too/board](../../modules.md) / [index](../index.md) / createZoomPanPath

# 函式: createZoomPanPath()

> **createZoomPanPath**(`from`, `to`, `viewPortWidth`, `options`): [`ZoomPanPath`](../type-aliases/ZoomPanPath.md)

定義於: [packages/board/src/camera/utils/zoom-pan-path.ts:151](https://github.com/kinnet-studio/ue-too/blob/a2e1339cbd9fb4367774a7b277db2e31ac6c0dfb/packages/board/src/camera/utils/zoom-pan-path.ts#L151)

Creates a smooth zoom-and-pan camera path between two views.

## 參數

### from

[`CameraView`](../type-aliases/CameraView.md)

Start view

### to

[`CameraView`](../type-aliases/CameraView.md)

Target view

### viewPortWidth

`number`

Width of the viewport in CSS pixels
(`camera.viewPortWidth`). The visible world width is
`viewPortWidth / zoomLevel`, which sets how far the path zooms out.

### options

[`ZoomPanPathOptions`](../type-aliases/ZoomPanPathOptions.md) = `{}`

See [ZoomPanPathOptions](../type-aliases/ZoomPanPathOptions.md)

## 回傳

[`ZoomPanPath`](../type-aliases/ZoomPanPath.md)

The path; sample it with [ZoomPanPath.at](../type-aliases/ZoomPanPath.md#at)

## 拋出

RangeError if `viewPortWidth`, either zoom level or `rho` is not a
positive finite number, or either position has a coordinate that is not
finite

## 備註

Moving the camera and changing its zoom at the same rate looks wrong: the
zoom outruns the pan and the target drifts off screen before snapping back.
This follows Van Wijk & Nuij, "Smooth and efficient zooming and panning"
(2003): on a long trip the camera zooms out, glides across, and zooms back
in, so the viewer keeps their bearings. The path is the shortest one in the
paper's metric and moves at a constant perceived speed. Rotation is not
part of the path.

The function only computes views; drive it with your own frame loop and
apply each view to the camera. With [CameraMuxWithAnimationAndLock](../classes/CameraMuxWithAnimationAndLock.md)
(the [Board](../classes/Board.md) default), start the flight with `initatePanTransition()`
and `initateZoomTransition()`, then on each frame report the view through
`notifyZoomInputAnimation()` and `notifyPanToAnimationInput()` and apply it
with the camera rig. When the user pans or zooms, the mux's pan or zoom
state machine leaves `TRANSITION`: stop the flight then, so it doesn't fight
them. If the camera is locked on an object (`LOCKED_ON_OBJECT`), send
`mux.panStateMachine.happens('unlock')` first; `initatePanTransition()` does
nothing in that state. The camera's zoom and position limits still apply: a
path that zooms out past the minimum zoom is clamped there.

## 範例

Fly the camera to a point, handing it back if the user takes over
```typescript
const board = new Board(canvas);
const mux = board.cameraMux as CameraMuxWithAnimationAndLock;
const rig = board.getCameraRig();
const camera = board.camera;

const path = createZoomPanPath(
    { position: camera.position, zoomLevel: camera.zoomLevel },
    { position: { x: 5000, y: 0 }, zoomLevel: 2 },
    camera.viewPortWidth
);
mux.initatePanTransition();
mux.initateZoomTransition();

const duration = 1000;
const startTime = performance.now();
function frame(now: number) {
    // The user panned or zoomed: let them have the camera
    if (
        mux.panStateMachine.currentState !== 'TRANSITION' ||
        mux.zoomStateMachine.currentState !== 'TRANSITION'
    ) {
        return;
    }
    const t = Math.min(1, (now - startTime) / duration);
    const view = path.at((1 - Math.cos(Math.PI * t)) / 2);
    mux.notifyZoomInputAnimation(view.zoomLevel);
    rig.zoomTo(view.zoomLevel);
    if (mux.notifyPanToAnimationInput(view.position).allowPassThrough) {
        rig.panToWorld(view.position);
    }
    if (t < 1) requestAnimationFrame(frame);
}
requestAnimationFrame(frame);
```

See the camera-animation example in the ue-too repository for the same
flight driven by `@ue-too/animate`.
