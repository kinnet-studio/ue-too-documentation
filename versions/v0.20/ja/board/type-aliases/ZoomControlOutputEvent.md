[@ue-too/board](../globals.md) / ZoomControlOutputEvent

# Type Alias: ZoomControlOutputEvent

> **ZoomControlOutputEvent** = \{ `anchorPoint`: `Point`; `deltaZoom`: `number`; `type`: `"zoomByAt"`; \} \| \{ `anchorPoint`: `Point`; `targetZoom`: `number`; `type`: `"zoomToAt"`; \} \| \{ `deltaZoom`: `number`; `type`: `"zoomBy"`; \} \| \{ `targetZoom`: `number`; `type`: `"zoomTo"`; \} \| \{ `anchorPoint`: `Point`; `deltaZoom`: `number`; `type`: `"zoomByAtWorld"`; \} \| \{ `anchorPoint`: `Point`; `targetZoom`: `number`; `type`: `"zoomToAtWorld"`; \} \| \{ `type`: `"none"`; \}

Defined in: [packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts:102](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/camera/camera-mux/animation-and-lock/zoom-control-state-machine.ts#L102)

Discriminated union of output events from zoom control state machine.

## Remarks

Output events instruct the camera system what zoom operation to perform:
- `zoomByAt`: Relative zoom around anchor point
- `zoomToAt`: Absolute zoom to target level around anchor point
- `zoomBy`: Relative zoom without anchor
- `zoomTo`: Absolute zoom to target level without anchor
- `zoomByAtWorld`: Relative zoom around world anchor point
- `zoomToAtWorld`: Absolute zoom to target level around world anchor point
- `none`: No operation (input blocked)
