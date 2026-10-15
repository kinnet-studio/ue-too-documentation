[@ue-too/being](../../modules.md) / [index](../index.md) / BaseContext

# 介面: BaseContext

定義於: [interface.ts:29](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/interface.ts#L29)

Base context interface for state machines.

## 備註

The context is shared across all states in a state machine and can be used to store data
that persists between state transitions. All custom contexts must extend this interface.

The setup and cleanup methods provide lifecycle hooks for resource management:
- `setup()`: Called when the context is initialized
- `cleanup()`: Called when the context is destroyed

## 範例

```typescript
interface MyContext extends BaseContext {
  counter: number;
  data: string[];
  setup() {
    this.counter = 0;
    this.data = [];
  }
  cleanup() {
    this.data = [];
  }
}
```

## 方法

### cleanup()

> **cleanup**(): `void`

定義於: [interface.ts:31](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/interface.ts#L31)

#### 回傳

`void`

***

### setup()

> **setup**(): `void`

定義於: [interface.ts:30](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/being/src/interface.ts#L30)

#### 回傳

`void`
