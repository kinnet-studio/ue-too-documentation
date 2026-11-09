[@ue-too/board](../globals.md) / Handler

# Type Alias: Handler()\<T, Args\>

> **Handler**\<`T`, `Args`\> = (`value`, ...`args`) => `T`

Defined in: [packages/board/src/utils/handler-pipeline.ts:9](https://github.com/ue-too/ue-too/blob/07fe90dac52658f644c26853a3d345b17ce08df7/packages/board/src/utils/handler-pipeline.ts#L9)

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
