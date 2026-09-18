[@ue-too/board](../../modules.md) / [index](../index.md) / SynchronousObservable

# 類別: SynchronousObservable\<T\>

定義於: [packages/board/src/utils/observable.ts:210](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L210)

Synchronous Observable implementation that notifies observers immediately.

## 備註

This Observable calls all observers synchronously and immediately when
`notify()` is called. The notify method doesn't return until all observers
have executed.

Use SynchronousObservable when:
- You need immediate, guaranteed execution of observers
- Observer execution order matters and must be predictable
- You're in a performance-critical path (no async overhead)

Caution: Can lead to recursion issues if observers trigger notifications.

## 範例

```typescript
const observable = new SynchronousObservable<[string]>();

observable.subscribe((message) => {
  console.log('Observer received:', message);
});

console.log('Before notify');
observable.notify('Hello');
console.log('After notify');

// Output:
// Before notify
// Observer received: Hello
// After notify
```

## 參閱

[AsyncObservable](AsyncObservable.md) for asynchronous notifications

## 型別參數

### T

`T` *extends* `any`[]

Tuple type of data emitted to observers

## 實作

- [`Observable`](../interfaces/Observable.md)\<`T`\>

## 建構函式

### 建構函式

> **new SynchronousObservable**\<`T`\>(): `SynchronousObservable`\<`T`\>

#### 回傳

`SynchronousObservable`\<`T`\>

## 方法

### notify()

> **notify**(...`data`): `void`

定義於: [packages/board/src/utils/observable.ts:262](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L262)

Notifies all observers with the provided data synchronously.

#### 參數

##### data

...`T`

The data to pass to all observers

#### 回傳

`void`

#### 備註

Each observer is called immediately in order. This method blocks until
all observers have completed execution.

#### 實作了

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

定義於: [packages/board/src/utils/observable.ts:224](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L224)

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
