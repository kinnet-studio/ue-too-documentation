# @ue-too/animate v0.15.0

Keyframe-based animation library for TypeScript.

## Remarks

The `@ue-too/animate` package provides a flexible, composable animation system based on keyframes.
It supports animating various types (numbers, points, colors, strings) with easing functions,
delays, and complex animation sequencing through composition.

## Core Concepts

- **Keyframes**: Define animation values at specific points in time (0.0 to 1.0)
- **Animation**: Interpolates between keyframes to animate a single value
- **Composite Animation**: Sequences and overlaps multiple animations
- **Animation Helpers**: Type-specific interpolation logic (lerp functions)
- **Easing Functions**: Transform animation timing curves

## Key Features

- **Type-Safe Interpolation**: Built-in helpers for numbers, points, colors, strings
- **Composite Animations**: Sequence, overlap, and synchronize multiple animations
- **Lifecycle Hooks**: `onStart`, `onEnd`, `setUp`, `tearDown` callbacks
- **Looping**: Support for finite and infinite loops
- **Delays and Drag**: Add delays before animation start and drag time after completion
- **Reverse Playback**: Animations can play in reverse
- **Hierarchical Composition**: Nest composite animations to create complex sequences

## Main Exports

- [Animation](classes/Animation.md): Single keyframe animation for a value
- [CompositeAnimation](classes/CompositeAnimation.md): Container for sequencing multiple animations
- [Keyframe](type-aliases/Keyframe.md): Type defining a value at a percentage point in time
- [AnimatableAttributeHelper](interfaces/AnimatableAttributeHelper.md): Interface for type-specific interpolation
- Helper functions: [pointHelperFunctions](variables/pointHelperFunctions.md), [numberHelperFunctions](variables/numberHelperFunctions.md), [rgbHelperFunctions](variables/rgbHelperFunctions.md)

## Examples

Basic number animation
```typescript
import { Animation, numberHelperFunctions } from '@ue-too/animate';

let currentValue = 0;

const animation = new Animation(
  [
    { percentage: 0, value: 0 },
    { percentage: 0.5, value: 50 },
    { percentage: 1, value: 100 }
  ],
  (value) => { currentValue = value; }, // Apply function
  numberHelperFunctions,
  1000 // Duration in ms
);

animation.start();

// In your animation loop
function animate(deltaTime: number) {
  animation.animate(deltaTime);
  console.log('Current value:', currentValue);
  requestAnimationFrame(animate);
}
```

Composite animation sequence
```typescript
import { Animation, CompositeAnimation, numberHelperFunctions } from '@ue-too/animate';

let x = 0, y = 0;

const moveRight = new Animation(
  [{ percentage: 0, value: 0 }, { percentage: 1, value: 100 }],
  (value) => { x = value; },
  numberHelperFunctions,
  500
);

const moveDown = new Animation(
  [{ percentage: 0, value: 0 }, { percentage: 1, value: 100 }],
  (value) => { y = value; },
  numberHelperFunctions,
  500
);

const sequence = new CompositeAnimation();
sequence.addAnimation('moveRight', moveRight, 0);
sequence.addAnimationAfter('moveDown', moveDown, 'moveRight');

sequence.start();

// Animate in your loop
function loop(deltaTime: number) {
  sequence.animate(deltaTime);
  requestAnimationFrame(loop);
}
```

## See

 - [Animation](classes/Animation.md) for single value animations
 - [CompositeAnimation](classes/CompositeAnimation.md) for animation sequencing

## Core

- [Animation](classes/Animation.md)
- [Animator](interfaces/Animator.md)
- [AnimatorContainer](interfaces/AnimatorContainer.md)
- [CompositeAnimation](classes/CompositeAnimation.md)
- [UnSubscribe](type-aliases/UnSubscribe.md)

## Helpers

- [AnimatableAttributeHelper](interfaces/AnimatableAttributeHelper.md)
- [IntegerAnimationHelper](classes/IntegerAnimationHelper.md)
- [integerHelperFunctions](variables/integerHelperFunctions.md)
- [NumberAnimationHelper](classes/NumberAnimationHelper.md)
- [numberHelperFunctions](variables/numberHelperFunctions.md)
- [PointAnimationHelper](classes/PointAnimationHelper.md)
- [pointHelperFunctions](variables/pointHelperFunctions.md)
- [RGBAnimationHelper](classes/RGBAnimationHelper.md)
- [rgbHelperFunctions](variables/rgbHelperFunctions.md)
- [StringAnimationHelper](classes/StringAnimationHelper.md)
- [stringHelperFunctions](variables/stringHelperFunctions.md)

## Types

- [Keyframe](type-aliases/Keyframe.md)
- [RGB](type-aliases/RGB.md)

## Easing

- [linear](functions/linear.md)

## Other

- [Keyframes](interfaces/Keyframes.md)
- [KeyFramesContiner](classes/KeyFramesContiner.md)
