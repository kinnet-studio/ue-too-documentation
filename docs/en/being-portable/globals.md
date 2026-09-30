# @ue-too/being-portable v0.19.0

Portable, serializable definitions for `@ue-too/being` state machines.

A machine is a JSON document whose behavior is a small, statically checked
language. Documents from untrusted authors can be loaded safely, compiled
into ordinary being machines, and snapshotted and restored elsewhere.

## Core

- [DEFAULT\_LIMITS](variables/DEFAULT_LIMITS.md)
- [defineHost](functions/defineHost.md)
- [loadMachine](functions/loadMachine.md)
- [validateDefinition](functions/validateDefinition.md)

## Types

- [Branch](type-aliases/Branch.md)
- [ChildDefinition](type-aliases/ChildDefinition.md)
- [ContextFieldDefinition](type-aliases/ContextFieldDefinition.md)
- [DoneReaction](type-aliases/DoneReaction.md)
- [EffectDeclaration](type-aliases/EffectDeclaration.md)
- [EffectImplementation](type-aliases/EffectImplementation.md)
- [Expr](type-aliases/Expr.md)
- [GuardRef](type-aliases/GuardRef.md)
- [Host](interfaces/Host.md)
- [HostDefinition](type-aliases/HostDefinition.md)
- [LevelSnapshot](type-aliases/LevelSnapshot.md)
- [Limits](type-aliases/Limits.md)
- [LoadError](type-aliases/LoadError.md)
- [LoadErrorCode](type-aliases/LoadErrorCode.md)
- [LoadOptions](type-aliases/LoadOptions.md)
- [LoadResult](type-aliases/LoadResult.md)
- [MachineBody](type-aliases/MachineBody.md)
- [MachineDefinition](type-aliases/MachineDefinition.md)
- [MachineSnapshot](type-aliases/MachineSnapshot.md)
- [PortableContext](interfaces/PortableContext.md)
- [PortableEvents](type-aliases/PortableEvents.md)
- [PortableMachine](interfaces/PortableMachine.md)
- [PortableOutputs](type-aliases/PortableOutputs.md)
- [Reaction](type-aliases/Reaction.md)
- [RestoreMode](type-aliases/RestoreMode.md)
- [RestoreReport](type-aliases/RestoreReport.md)
- [RestoreResult](type-aliases/RestoreResult.md)
- [RuntimeError](type-aliases/RuntimeError.md)
- [RuntimeErrorCode](type-aliases/RuntimeErrorCode.md)
- [Scalar](type-aliases/Scalar.md)
- [ScalarValue](type-aliases/ScalarValue.md)
- [Services](type-aliases/Services.md)
- [StateDefinition](type-aliases/StateDefinition.md)
- [Stmt](type-aliases/Stmt.md)
- [TypeSpec](type-aliases/TypeSpec.md)
- [ValidationResult](type-aliases/ValidationResult.md)
- [Value](type-aliases/Value.md)

## Other

- [HostEffect](type-aliases/HostEffect.md)
- [ValueType](type-aliases/ValueType.md)
