[@ue-too/dynamics](../../modules.md) / [index](../index.md) / SpatialIndexType

# 型別別名: SpatialIndexType

> **SpatialIndexType** = `"quadtree"` \| `"dynamictree"` \| `"sap"`

定義於: [world.ts:23](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/dynamics/src/world.ts#L23)

Spatial indexing algorithm types.

## 備註

Different algorithms have different performance characteristics:
- **quadtree**: Best for static or mostly-static worlds
- **dynamictree**: Good balance for mixed static/dynamic
- **sap**: Best for many dynamic bodies (sweep-and-prune)
