[@ue-too/board](../../modules.md) / [index](../index.md) / Observable

# インターフェイス: Observable\<T\>

定義: [packages/board/src/utils/observable.ts:71](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L71)

Interface for the Observable pattern implementation.

## Remarks

Observables allow multiple observers to subscribe and receive notifications
when data is emitted. This is the pub-sub pattern for event handling.

Implementations can be synchronous or asynchronous:
- [SynchronousObservable](../classes/SynchronousObservable.md): Notifies observers immediately
- [AsyncObservable](../classes/AsyncObservable.md): Notifies observers via microtasks

## 型パラメーター

### T

`T` *extends* `any`[]

Tuple type of data emitted to observers

## メソッド

### notify()

> **notify**(...`data`): `void`

定義: [packages/board/src/utils/observable.ts:73](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L73)

#### パラメータ

##### data

...`T`

#### 戻り値

`void`

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

定義: [packages/board/src/utils/observable.ts:72](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L72)

#### パラメータ

##### observer

[`Observer`](../type-aliases/Observer.md)\<`T`\>

##### options?

[`SubscriptionOptions`](SubscriptionOptions.md)

#### 戻り値

> (): `void`

##### 戻り値

`void`
