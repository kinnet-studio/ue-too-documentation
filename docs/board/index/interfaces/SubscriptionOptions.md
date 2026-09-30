[@ue-too/board](../../modules.md) / [index](../index.md) / SubscriptionOptions

# Interface: SubscriptionOptions

Defined in: [packages/board/src/utils/observable.ts:52](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/utils/observable.ts#L52)

Options for subscribing to an Observable.

## Remarks

Subscription options allow for automatic cleanup of subscriptions using
the AbortController API. When the signal is aborted, the subscription
is automatically removed.

## Example

```typescript
const controller = new AbortController();

observable.subscribe(
  (data) => console.log(data),
  { signal: controller.signal }
);

// Later, abort to unsubscribe
controller.abort();
```

## Properties

### signal?

> `optional` **signal**: `AbortSignal`

Defined in: [packages/board/src/utils/observable.ts:53](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/utils/observable.ts#L53)

Optional AbortSignal for automatic unsubscription
