---
aside: false
pageClass: live-examples-page
---

<script setup>
import panAndZoom from './live-examples/pan-and-zoom.js?raw'
import zoomLimits from './live-examples/zoom-limits.js?raw'
import clickToPlace from './live-examples/click-to-place.js?raw'

const examples = [
  {
    id: 'pan-zoom',
    title: 'Pan and zoom',
    caption: 'A canvas with a grid and three shapes. Move around, then edit <code>shapes</code> and press Run.',
    code: panAndZoom,
  },
  {
    id: 'limits',
    title: 'Zoom limits',
    caption: 'The camera stays inside a fixed world and between two zoom levels. Change the numbers to feel the difference.',
    code: zoomLimits,
  },
  {
    id: 'click',
    title: 'Click to place',
    caption: 'Click anywhere to drop a dot. The click is converted to world coordinates, so dots stay put when you pan or zoom.',
    code: clickToPlace,
  },
]
</script>

# Live examples

Each example below runs `@ue-too/board` right in this page. Move around the canvas to get a feel for the camera, then change the code and press **Run** to see what your change does.

|                    | Pan                                                       | Zoom                |
| ------------------ | --------------------------------------------------------- | ------------------- |
| Mouse and keyboard | Hold `Space` and drag, or drag with the scroll wheel button | `Ctrl` + scroll     |
| Trackpad           | Two-finger swipe                                          | Two-finger pinch    |
| Touch              | Two-finger swipe                                          | Two-finger pinch    |

<LivePlayground :examples="examples" />

## Where to go next

- [Board](./index/classes/Board.md): Everything the examples use: `step()`, `context`, `convertWindowPoint2WorldCoord()`.
- [Camera](./index/interfaces/ObservableBoardCamera.md): Zoom limits, boundaries, and the `pan` / `zoom` / `rotate` events.
- [Extending Input State Machines](./extending-input-state-machines.md): Change what Space + drag and the other gestures do.
