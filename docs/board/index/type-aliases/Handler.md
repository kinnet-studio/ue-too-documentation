[@ue-too/board](../../modules.md) / [index](../index.md) / Handler

# Type Alias: Handler()\<T, Args\>

> **Handler**\<`T`, `Args`\> = (`value`, ...`args`) => `T`

Defined in: [packages/board/src/utils/handler-pipeline.ts:9](https://github.com/kinnet-studio/ue-too/blob/d999426417cb36aad1770e44c1f7832705ca5338/packages/board/src/utils/handler-pipeline.ts#L9)

## Type Parameters

### T

`T`

### Args

`Args` *extends* `any`[]

## Parameters

### value

`T`

### args

...`Args`

## Returns

`T`

## Description

Type definition for a handler function that takes a generic value and additional arguments
The handler must return the same type as its first argument
This is a utility type to be used in the handler pipeline. (Probably don't need to use this directly)
Using the [createHandlerChain](../functions/createHandlerChain.md) function to create a handler chain would have typescript infer the correct type for the handler chain.
