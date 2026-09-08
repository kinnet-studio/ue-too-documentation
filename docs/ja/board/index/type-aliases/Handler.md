[@ue-too/board](../../modules.md) / [index](../index.md) / Handler

# 型エイリアス: Handler()\<T, Args\>

> **Handler**\<`T`, `Args`\> = (`value`, ...`args`) => `T`

定義: [packages/board/src/utils/handler-pipeline.ts:9](https://github.com/kinnet-studio/ue-too/blob/f9369bfff28ecea2c285556271a8eb3145e74ec2/packages/board/src/utils/handler-pipeline.ts#L9)

## 型パラメーター

### T

`T`

### Args

`Args` *extends* `any`[]

## パラメータ

### value

`T`

### args

...`Args`

## 戻り値

`T`

## Description

Type definition for a handler function that takes a generic value and additional arguments
The handler must return the same type as its first argument
This is a utility type to be used in the handler pipeline. (Probably don't need to use this directly)
Using the [createHandlerChain](../functions/createHandlerChain.md) function to create a handler chain would have typescript infer the correct type for the handler chain.
