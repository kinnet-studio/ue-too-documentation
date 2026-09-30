[@ue-too/board](../../modules.md) / [index](../index.md) / Handler

# 型別別名: Handler()\<T, Args\>

> **Handler**\<`T`, `Args`\> = (`value`, ...`args`) => `T`

定義於: [packages/board/src/utils/handler-pipeline.ts:9](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/utils/handler-pipeline.ts#L9)

## 型別參數

### T

`T`

### Args

`Args` *extends* `any`[]

## 參數

### value

`T`

### args

...`Args`

## 回傳

`T`

## Description

Type definition for a handler function that takes a generic value and additional arguments
The handler must return the same type as its first argument
This is a utility type to be used in the handler pipeline. (Probably don't need to use this directly)
Using the [createHandlerChain](../functions/createHandlerChain.md) function to create a handler chain would have typescript infer the correct type for the handler chain.
