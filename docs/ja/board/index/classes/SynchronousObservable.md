[@ue-too/board](../../modules.md) / [index](../index.md) / SynchronousObservable

# クラス: SynchronousObservable\<T\>

定義: [packages/board/src/utils/observable.ts:210](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/utils/observable.ts#L210)

Synchronous Observable implementation that notifies observers immediately.

## Remarks

This Observable calls all observers synchronously and immediately when
`notify()` is called. The notify method doesn't return until all observers
have executed.

Use SynchronousObservable when:
- You need immediate, guaranteed execution of observers
- Observer execution order matters and must be predictable
- You're in a performance-critical path (no async overhead)

Caution: Can lead to recursion issues if observers trigger notifications.

## 例

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

## 参照

[AsyncObservable](AsyncObservable.md) for asynchronous notifications

## 型パラメーター

### T

`T` *extends* `any`[]

Tuple type of data emitted to observers

## 実装

- [`Observable`](../interfaces/Observable.md)\<`T`\>

## コンストラクター

### コンストラクター

> **new SynchronousObservable**\<`T`\>(): `SynchronousObservable`\<`T`\>

#### 戻り値

`SynchronousObservable`\<`T`\>

## メソッド

### notify()

> **notify**(...`data`): `void`

定義: [packages/board/src/utils/observable.ts:262](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/utils/observable.ts#L262)

Notifies all observers with the provided data synchronously.

#### パラメータ

##### data

...`T`

The data to pass to all observers

#### 戻り値

`void`

#### Remarks

Each observer is called immediately in order. This method blocks until
all observers have completed execution.

#### の実装

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

定義: [packages/board/src/utils/observable.ts:224](https://github.com/kinnet-studio/ue-too/blob/123d9a09420f76e5c89682b78b72a33f0d4c9daf/packages/board/src/utils/observable.ts#L224)

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
