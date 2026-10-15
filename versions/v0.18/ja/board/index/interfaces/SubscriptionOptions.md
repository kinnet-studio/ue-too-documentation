[@ue-too/board](../../modules.md) / [index](../index.md) / SubscriptionOptions

# インターフェイス: SubscriptionOptions

定義: [packages/board/src/utils/observable.ts:52](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L52)

Options for subscribing to an Observable.

## Remarks

Subscription options allow for automatic cleanup of subscriptions using
the AbortController API. When the signal is aborted, the subscription
is automatically removed.

## 例

```typescript
const controller = new AbortController();

observable.subscribe(
  (data) => console.log(data),
  { signal: controller.signal }
);

// Later, abort to unsubscribe
controller.abort();
```

## プロパティ

### signal?

> `optional` **signal**: `AbortSignal`

定義: [packages/board/src/utils/observable.ts:53](https://github.com/kinnet-studio/ue-too/blob/694dd991bbd83d600f08cceafc3fdc3d80392829/packages/board/src/utils/observable.ts#L53)

Optional AbortSignal for automatic unsubscription
