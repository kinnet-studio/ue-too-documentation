[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / ColorName

# 型エイリアス: ColorName

> **ColorName** = `"ink"` \| `"red"` \| `"blue"` \| `"green"` \| `"orange"`

定義: [packages/board/src/whiteboard/document/types.ts:22](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/document/types.ts#L22)

A named colour. Records store the name, never a colour value, so the
renderer maps it per theme (light and dark) and a later palette change
doesn't rewrite saved drawings.
