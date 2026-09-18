[@ue-too/board](../../modules.md) / [index](../index.md) / AsyncObservable

# 類別: AsyncObservable\<T\>

定義於: [packages/board/src/utils/observable.ts:113](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L113)

Asynchronous Observable implementation that notifies observers via microtasks.

## 備註

This Observable uses `queueMicrotask` to defer observer notifications,
ensuring they execute after the current execution context completes but
before the next task. This prevents recursive notification issues and
allows the notifier to complete before observers run.

Use AsyncObservable when:
- You want to prevent recursion issues in notifications
- Observer execution should not block the notifier
- You need guaranteed async behavior

## 範例

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

## 參閱

[SynchronousObservable](SynchronousObservable.md) for synchronous notifications

## 型別參數

### T

`T` *extends* `any`[]

Tuple type of data emitted to observers

## 實作

- [`Observable`](../interfaces/Observable.md)\<`T`\>

## 建構函式

### 建構函式

> **new AsyncObservable**\<`T`\>(): `AsyncObservable`\<`T`\>

#### 回傳

`AsyncObservable`\<`T`\>

## 方法

### notify()

> **notify**(...`data`): `void`

定義於: [packages/board/src/utils/observable.ts:165](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L165)

Notifies all observers with the provided data asynchronously.

#### 參數

##### data

...`T`

The data to pass to all observers

#### 回傳

`void`

#### 備註

Each observer is called via `queueMicrotask`, ensuring async execution.
This method returns immediately; observers run later in the event loop.

#### 實作了

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

定義於: [packages/board/src/utils/observable.ts:127](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L127)

Subscribes an observer to receive notifications.

#### 參數

##### observer

[`Observer`](../type-aliases/Observer.md)\<`T`\>

The callback function to be notified

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

Optional subscription options including AbortSignal

#### 回傳

Unsubscribe function to remove this observer

> (): `void`

##### 回傳

`void`

#### 備註

If an AbortSignal is provided and is already aborted, the observer
is not added and the returned unsubscribe function is a no-op.

#### 實作了

[`Observable`](../interfaces/Observable.md).[`subscribe`](../interfaces/Observable.md#subscribe)
