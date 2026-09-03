[@ue-too/board](../../modules.md) / [index](../index.md) / AsyncObservable

# クラス: AsyncObservable\<T\>

定義: [packages/board/src/utils/observable.ts:113](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/utils/observable.ts#L113)

Asynchronous Observable implementation that notifies observers via microtasks.

## Remarks

This Observable uses `queueMicrotask` to defer observer notifications,
ensuring they execute after the current execution context completes but
before the next task. This prevents recursive notification issues and
allows the notifier to complete before observers run.

Use AsyncObservable when:
- You want to prevent recursion issues in notifications
- Observer execution should not block the notifier
- You need guaranteed async behavior

## 例

```typescript
const observable = new AsyncObservable<[string]>();

observable.subscribe((message) => {
  console.log('Observer received:', message);
});

console.log('Before notify');
observable.notify('Hello');
console.log('After notify');

// Output:
// Before notify
// After notify
// Observer received: Hello
```

## 参照

[SynchronousObservable](SynchronousObservable.md) for synchronous notifications

## 型パラメーター

### T

`T` *extends* `any`[]

Tuple type of data emitted to observers

## 実装

- [`Observable`](../interfaces/Observable.md)\<`T`\>

## コンストラクター

### コンストラクター

> **new AsyncObservable**\<`T`\>(): `AsyncObservable`\<`T`\>

#### 戻り値

`AsyncObservable`\<`T`\>

## メソッド

### notify()

> **notify**(...`data`): `void`

定義: [packages/board/src/utils/observable.ts:165](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/utils/observable.ts#L165)

Notifies all observers with the provided data asynchronously.

#### パラメータ

##### data

...`T`

The data to pass to all observers

#### 戻り値

`void`

#### Remarks

Each observer is called via `queueMicrotask`, ensuring async execution.
This method returns immediately; observers run later in the event loop.

#### の実装

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

定義: [packages/board/src/utils/observable.ts:127](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/utils/observable.ts#L127)

Subscribes an observer to receive notifications.

#### パラメータ

##### observer

[`Observer`](../type-aliases/Observer.md)\<`T`\>

The callback function to be notified

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

Optional subscription options including AbortSignal

#### 戻り値

Unsubscribe function to remove this observer

> (): `void`

##### 戻り値

`void`

#### Remarks

If an AbortSignal is provided and is already aborted, the observer
is not added and the returned unsubscribe function is a no-op.

#### の実装

[`Observable`](../interfaces/Observable.md).[`subscribe`](../interfaces/Observable.md#subscribe)
