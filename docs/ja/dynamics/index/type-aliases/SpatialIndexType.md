[@ue-too/dynamics](../../modules.md) / [index](../index.md) / SpatialIndexType

# 型エイリアス: SpatialIndexType

> **SpatialIndexType** = `"quadtree"` \| `"dynamictree"` \| `"sap"`

定義: [world.ts:23](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/world.ts#L23)

Spatial indexing algorithm types.

## Remarks

Different algorithms have different performance characteristics:
- **quadtree**: Best for static or mostly-static worlds
- **dynamictree**: Good balance for mixed static/dynamic
- **sap**: Best for many dynamic bodies (sweep-and-prune)
