[@ue-too/board](../globals.md) / SynchronousObservable

# Class: SynchronousObservable\<T\>

Defined in: [packages/board/src/utils/observable.ts:210](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/observable.ts#L210)

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

## Example

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

## See

[AsyncObservable](AsyncObservable.md) for asynchronous notifications

## Type Parameters

### T

`T` *extends* `any`[]

Tuple type of data emitted to observers

## Implements

- [`Observable`](../interfaces/Observable.md)\<`T`\>

## Constructors

### Constructor

> **new SynchronousObservable**\<`T`\>(): `SynchronousObservable`\<`T`\>

#### Returns

`SynchronousObservable`\<`T`\>

## Methods

### notify()

> **notify**(...`data`): `void`

Defined in: [packages/board/src/utils/observable.ts:262](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/observable.ts#L262)

Notifies all observers with the provided data synchronously.

#### Parameters

##### data

...`T`

The data to pass to all observers

#### Returns

`void`

#### Remarks

Each observer is called immediately in order. This method blocks until
all observers have completed execution.

#### Implementation of

[`Observable`](../interfaces/Observable.md).[`notify`](../interfaces/Observable.md#notify)

***

### subscribe()

> **subscribe**(`observer`, `options?`): () => `void`

Defined in: [packages/board/src/utils/observable.ts:224](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/observable.ts#L224)

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
