[@ue-too/board](../globals.md) / AsyncObservable

# Class: AsyncObservable\<T\>

Defined in: [packages/board/src/utils/observable.ts:113](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/observable.ts#L113)

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

## Example

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

## See

[SynchronousObservable](SynchronousObservable.md) for synchronous notifications

## Type Parameters

### T

`T` *extends* `any`[]

Tuple type of data emitted to observers

## Implements

- [`Observable`](../interfaces/Observable.md)\<`T`\>

## Constructors

### Constructor

> **new AsyncObservable**\<`T`\>(): `AsyncObservable`\<`T`\>

#### Returns

`AsyncObservable`\<`T`\>

## Methods

### notify()

> **notify**(...`data`): `void`

Defined in: [packages/board/src/utils/observable.ts:165](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/observable.ts#L165)

Notifies all observers with the provided data asynchronously.

#### Parameters

##### data

...`T`

The data to pass to all observers

#### Returns

`void`

#### Remarks

Each observer is called via `queueMicrotask`, ensuring async execution.
This method returns immediately; observers run later in the event loop.

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/utils/observable.ts:127](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/observable.ts#L127)

Subscribes an observer to receive notifications.

#### Parameters

##### observer

[`Observer`](../type-aliases/Observer.md)\<`T`\>

The callback function to be notified

##### options?

[`SubscriptionOptions`](../interfaces/SubscriptionOptions.md)

Optional subscription options including AbortSignal

#### Returns

Unsubscribe function to remove this observer

> (): `void`

##### Returns

`void`

#### Remarks

If an AbortSignal is provided and is already aborted, the observer
is not added and the returned unsubscribe function is a no-op.

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`subscribe`](../interfaces/Observable.md#subscribe)
