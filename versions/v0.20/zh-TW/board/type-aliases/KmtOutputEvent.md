[@ue-too/board](../globals.md) / KmtOutputEvent

# Type Alias: KmtOutputEvent

> **KmtOutputEvent** = \{ `delta`: `Point`; `type`: `"pan"`; \} \| \{ `anchorPointInViewPort`: `Point`; `delta`: `number`; `type`: `"zoom"`; \} \| \{ `deltaRotation`: `number`; `type`: `"rotate"`; \} \| \{ `style`: [`CursorStyle`](../enumerations/CursorStyle.md); `type`: `"cursor"`; \} \| \{ `type`: `"none"`; \}

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:170](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L170)

Output events produced by the KMT state machine for the orchestrator.

## Remarks

These high-level gesture events are the result of recognizing patterns in raw DOM events.
The orchestrator receives these events and coordinates camera control and observer notification.

**Event Types**:
- **pan**: Camera translation with delta in viewport coordinates
- **zoom**: Camera scale change with anchor point in viewport coordinates
- **rotate**: Camera rotation change (currently unused in KMT)
- **cursor**: Cursor style change request (handled by state uponEnter/beforeExit)
- **none**: No action required

**Coordinate Spaces**:
- Pan delta is in viewport pixels
- Zoom anchor point is in viewport coordinates (origin at viewport center)
