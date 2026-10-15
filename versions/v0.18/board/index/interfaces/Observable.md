[@ue-too/board](../../modules.md) / [index](../index.md) / Observable

# Interface: Observable\<T\>

Defined in: [packages/board/src/utils/observable.ts:71](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L71)

Interface for the Observable pattern implementation.

## Remarks

Observables allow multiple observers to subscribe and receive notifications
when data is emitted. This is the pub-sub pattern for event handling.

Implementations can be synchronous or asynchronous:
- [SynchronousObservable](../classes/SynchronousObservable.md): Notifies observers immediately
- [AsyncObservable](../classes/AsyncObservable.md): Notifies observers via microtasks

## Type Parameters

### T

`T` *extends* `any`[]

Tuple type of data emitted to observers

## Methods

### notify()

> **notify**(...`data`): `void`

Defined in: [packages/board/src/utils/observable.ts:73](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L73)

#### Parameters

##### data

...`T`

#### Returns

`void`

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/utils/observable.ts:72](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L72)

#### Parameters

##### observer

[`Observer`](../type-aliases/Observer.md)\<`T`\>

##### options?

[`SubscriptionOptions`](SubscriptionOptions.md)

#### Returns

> (): `void`

##### Returns

`void`
