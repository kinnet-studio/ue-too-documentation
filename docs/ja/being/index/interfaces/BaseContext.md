[@ue-too/being](../../modules.md) / [index](../index.md) / BaseContext

# インターフェイス: BaseContext

定義: [interface.ts:29](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L29)

Base context interface for state machines.

## Remarks

The context is shared across all states in a state machine and can be used to store data
that persists between state transitions. All custom contexts must extend this interface.

The setup and cleanup methods provide lifecycle hooks for resource management:
- `setup()`: Called when the context is initialized
- `cleanup()`: Called when the context is destroyed

## 例

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

## メソッド

### cleanup()

> **cleanup**(): `void`

定義: [interface.ts:31](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L31)

#### 戻り値

`void`

***

### setup()

> **setup**(): `void`

定義: [interface.ts:30](https://github.com/kinnet-studio/ue-too/blob/d1c63f78f12acd4d34b5d406b57fe083e6d58b38/packages/being/src/interface.ts#L30)

#### 戻り値

`void`
