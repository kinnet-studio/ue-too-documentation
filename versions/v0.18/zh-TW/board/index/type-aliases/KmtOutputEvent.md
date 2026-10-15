[@ue-too/board](../../modules.md) / [index](../index.md) / KmtOutputEvent

# 型別別名: KmtOutputEvent

> **KmtOutputEvent** = \{ `delta`: `Point`; `type`: `"pan"`; \} \| \{ `anchorPointInViewPort`: `Point`; `delta`: `number`; `type`: `"zoom"`; \} \| \{ `deltaRotation`: `number`; `type`: `"rotate"`; \} \| \{ `style`: [`CursorStyle`](../enumerations/CursorStyle.md); `type`: `"cursor"`; \} \| \{ `type`: `"none"`; \}

定義於: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:176](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L176)

Output events produced by the KMT state machine for the orchestrator.

## 備註

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
