[@ue-too/dynamics](../../modules.md) / [index](../index.md) / PairManager

# クラス: PairManager

定義: [pair-manager.ts:59](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L59)

Manages collision pairs across frames.

## Remarks

Tracks which bodies are colliding and for how long, enabling
collision lifecycle events (start, update, end). This is useful for
game logic like damage on collision start or triggers.

Automatically cleans up old inactive pairs to prevent memory leaks.

## 例

Using collision events
```typescript
const pairManager = world.getPairManager();

world.step(dt);

const events = pairManager.getActivePairs();
events.forEach(pair => {
  if (pair.frameCreated === world.currentFrame) {
    console.log('Collision started!');
  }
});
```

## コンストラクター

### コンストラクター

> **new PairManager**(): `PairManager`

定義: [pair-manager.ts:64](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L64)

#### 戻り値

`PairManager`

## メソッド

### clear()

> **clear**(): `void`

定義: [pair-manager.ts:164](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L164)

#### 戻り値

`void`

***

### getActivePairs()

> **getActivePairs**(): [`CollisionPair`](../interfaces/CollisionPair.md)[]

定義: [pair-manager.ts:153](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L153)

#### 戻り値

[`CollisionPair`](../interfaces/CollisionPair.md)[]

***

### getPair()

> **getPair**(`bodyA`, `bodyB`): [`CollisionPair`](../interfaces/CollisionPair.md) \| `undefined`

定義: [pair-manager.ts:158](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L158)

#### パラメータ

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### bodyB

[`RigidBody`](../interfaces/RigidBody.md)

#### 戻り値

[`CollisionPair`](../interfaces/CollisionPair.md) \| `undefined`

***

### getStats()

> **getStats**(): `object`

定義: [pair-manager.ts:170](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L170)

#### 戻り値

`object`

##### activePairs

> **activePairs**: `number`

##### frameNumber

> **frameNumber**: `number`

##### totalPairs

> **totalPairs**: `number`

***

### updatePairs()

> **updatePairs**(`newCollisions`): [`PairEvents`](../interfaces/PairEvents.md)

定義: [pair-manager.ts:80](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/dynamics/src/pair-manager.ts#L80)

#### パラメータ

##### newCollisions

`object`[]

#### 戻り値

[`PairEvents`](../interfaces/PairEvents.md)
