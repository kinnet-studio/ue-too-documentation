[@ue-too/dynamics](../../modules.md) / [index](../index.md) / PairManager

# 類別: PairManager

定義於: [pair-manager.ts:59](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L59)

Manages collision pairs across frames.

## 備註

Tracks which bodies are colliding and for how long, enabling
collision lifecycle events (start, update, end). This is useful for
game logic like damage on collision start or triggers.

Automatically cleans up old inactive pairs to prevent memory leaks.

## 範例

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

## 建構函式

### 建構函式

> **new PairManager**(): `PairManager`

定義於: [pair-manager.ts:64](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L64)

#### 回傳

`PairManager`

## 方法

### clear()

> **clear**(): `void`

定義於: [pair-manager.ts:164](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L164)

#### 回傳

`void`

***

### getActivePairs()

> **getActivePairs**(): [`CollisionPair`](../interfaces/CollisionPair.md)[]

定義於: [pair-manager.ts:153](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L153)

#### 回傳

[`CollisionPair`](../interfaces/CollisionPair.md)[]

***

### getPair()

> **getPair**(`bodyA`, `bodyB`): [`CollisionPair`](../interfaces/CollisionPair.md) \| `undefined`

定義於: [pair-manager.ts:158](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L158)

#### 參數

##### bodyA

[`RigidBody`](../interfaces/RigidBody.md)

##### bodyB

[`RigidBody`](../interfaces/RigidBody.md)

#### 回傳

[`CollisionPair`](../interfaces/CollisionPair.md) \| `undefined`

***

### getStats()

> **getStats**(): `object`

定義於: [pair-manager.ts:170](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L170)

#### 回傳

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

定義於: [pair-manager.ts:80](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/dynamics/src/pair-manager.ts#L80)

#### 參數

##### newCollisions

`object`[]

#### 回傳

[`PairEvents`](../interfaces/PairEvents.md)
