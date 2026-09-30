[@ue-too/board](../../modules.md) / [index](../index.md) / SubscriptionOptions

# 介面: SubscriptionOptions

定義於: [packages/board/src/utils/observable.ts:52](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/utils/observable.ts#L52)

Options for subscribing to an Observable.

## 備註

Subscription options allow for automatic cleanup of subscriptions using
the AbortController API. When the signal is aborted, the subscription
is automatically removed.

## 範例

```typescript
const controller = new AbortController();

observable.subscribe(
  (data) => console.log(data),
  { signal: controller.signal }
);

// Later, abort to unsubscribe
controller.abort();
```

## 屬性

### signal?

> `optional` **signal**: `AbortSignal`

定義於: [packages/board/src/utils/observable.ts:53](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/utils/observable.ts#L53)

Optional AbortSignal for automatic unsubscription
