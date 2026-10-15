[@ue-too/board](../../modules.md) / [index](../index.md) / MAX\_WHEEL\_ZOOM\_FACTOR

# 変数: MAX\_WHEEL\_ZOOM\_FACTOR

> `const` **MAX\_WHEEL\_ZOOM\_FACTOR**: `1.25` = `1.25`

定義: [packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts:223](https://github.com/kinnet-studio/ue-too/blob/930a76bbea33e382298c04824ccf0063a87cf0f3/packages/board/src/input-interpretation/input-state-machine/kmt-input-state-machine.ts#L223)

Largest zoom change a single wheel event may make: ×1.25 in, ÷1.25 out.

## Remarks

The camera rig applies a zoom delta additively (`zoom + delta·zoom`), and a
standard Windows wheel notch is `deltaY = 100`, so a delta linear in
`deltaY` can take a single zoom-out notch to a zoom ≤ 0. [KmtIdleState](../classes/KmtIdleState.md)
instead treats the scaled wheel delta as a log step (`delta = exp(step) − 1`),
which keeps the zoom positive and in/out symmetric, and caps the step at
this factor so one event is bounded whatever `deltaY` the platform reports.
Small trackpad/pinch deltas are effectively unchanged.
