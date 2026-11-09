[@ue-too/board](../../modules.md) / [index](../index.md) / MAX\_WHEEL\_ZOOM\_FACTOR

# Variable: MAX\_WHEEL\_ZOOM\_FACTOR

> `const` **MAX\_WHEEL\_ZOOM\_FACTOR**: `1.25` = `1.25`

Defined in: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:226](https://github.com/kinnet-studio/ue-too/blob/fb7f3aecc96e31228ff551a8a152367c13d7c04e/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L226)

Largest zoom change a single wheel event may make: ×1.25 in, ÷1.25 out.

## Remarks

The camera rig applies a zoom delta additively (`zoom + delta·zoom`), and a
standard Windows wheel notch is `deltaY = 100`, so a delta linear in
`deltaY` can take a single zoom-out notch to a zoom ≤ 0. [KmtIdleState](../classes/KmtIdleState.md)
instead treats the scaled wheel delta as a log step (`delta = exp(step) − 1`),
which keeps the zoom positive and in/out symmetric, and caps the step at
this factor so one event is bounded whatever `deltaY` the platform reports.
Small trackpad/pinch deltas are effectively unchanged.
