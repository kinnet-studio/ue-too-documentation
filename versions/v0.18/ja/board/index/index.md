[@ue-too/board](../modules.md) / index

# index

Main entry point for the @ue-too/board package.

## Remarks

This package provides a high-performance infinite canvas with pan, zoom, and rotate capabilities.
The [Board](classes/Board.md) class is the primary API that orchestrates camera management, input handling,
and coordinate transformations for building interactive 2D canvas applications.

## Key Exports

- **[Board](classes/Board.md)**: Main class for creating an infinite canvas with camera controls
- **Camera System**: Camera classes, rigs, and multiplexers for viewport management
- **Input System**: Input parsers, state machines, and orchestration for user interaction
- **Utilities**: Helper functions for coordinate conversion, math operations, and more

## 例

Basic usage
```typescript
import { Board } from '@ue-too/board';

const canvas = document.querySelector('canvas') as HTMLCanvasElement;
const board = new Board(canvas);

function draw(timestamp: number) {
  board.step(timestamp);

  if (board.context) {
    board.context.fillRect(0, 0, 100, 100);
  }

  requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
```

## Board

- [Board](classes/Board.md)
- [~~drawAxis~~](functions/drawAxis.md)
- [~~drawBoundingBox~~](functions/drawBoundingBox.md)
- [~~drawCrossHair~~](functions/drawCrossHair.md)
- [~~drawGrid~~](functions/drawGrid.md)
- [~~drawPositionText~~](functions/drawPositionText.md)
- [~~drawReferenceCircle~~](functions/drawReferenceCircle.md)
- [~~drawRulerLegacy~~](functions/drawRulerLegacy.md)

## Camera

- [CameraUpdatePublisher](classes/CameraUpdatePublisher.md)
- [DefaultBoardCamera](classes/DefaultBoardCamera.md)
- [EdgeAutoCameraInput](classes/EdgeAutoCameraInput.md)
- [BoardCamera](interfaces/BoardCamera.md)
- [ObservableBoardCamera](interfaces/ObservableBoardCamera.md)
- [AllCameraEventPayload](type-aliases/AllCameraEventPayload.md)
- [AllObserver](type-aliases/AllObserver.md)
- [Boundaries](type-aliases/Boundaries.md)
- [Callback](type-aliases/Callback.md)
- [CameraEventMap](type-aliases/CameraEventMap.md)
- [CameraPanEvent](type-aliases/CameraPanEvent.md)
- [CameraPanEventPayload](type-aliases/CameraPanEventPayload.md)
- [CameraRotateEvent](type-aliases/CameraRotateEvent.md)
- [CameraRotateEventPayload](type-aliases/CameraRotateEventPayload.md)
- [CameraState](type-aliases/CameraState.md)
- [CameraZoomEvent](type-aliases/CameraZoomEvent.md)
- [CameraZoomEventPayload](type-aliases/CameraZoomEventPayload.md)
- [ConslidateCallback](type-aliases/ConslidateCallback.md)
- [PanObserver](type-aliases/PanObserver.md)
- [RotateObserver](type-aliases/RotateObserver.md)
- [RotationBoundary](type-aliases/RotationBoundary.md)
- [RotationLimits](type-aliases/RotationLimits.md)
- [TransformationMatrix](type-aliases/TransformationMatrix.md)
- [UnSubscribe](type-aliases/UnSubscribe.md)
- [ZoomLevelLimits](type-aliases/ZoomLevelLimits.md)
- [ZoomObserver](type-aliases/ZoomObserver.md)
- [angleSpan](functions/angleSpan.md)
- [boundariesFullyDefined](functions/boundariesFullyDefined.md)
- [cameraPositionToGet](functions/cameraPositionToGet.md)
- [clampPoint](functions/clampPoint.md)
- [clampPointEntireViewPort](functions/clampPointEntireViewPort.md)
- [clampRotation](functions/clampRotation.md)
- [clampZoomLevel](functions/clampZoomLevel.md)
- [convert2ViewPortSpaceAnchorAtCenter](functions/convert2ViewPortSpaceAnchorAtCenter.md)
- [convert2WorldSpace](functions/convert2WorldSpace.md)
- [convert2WorldSpaceAnchorAtCenter](functions/convert2WorldSpaceAnchorAtCenter.md)
- [convert2WorldSpaceWithTransformationMatrix](functions/convert2WorldSpaceWithTransformationMatrix.md)
- [convert2WorldSpaceWRT](functions/convert2WorldSpaceWRT.md)
- [convertDeltaInViewPortToWorldSpace](functions/convertDeltaInViewPortToWorldSpace.md)
- [convertDeltaInWorldToViewPortSpace](functions/convertDeltaInWorldToViewPortSpace.md)
- [createCameraMatrix](functions/createCameraMatrix.md)
- [decomposeCameraMatrix](functions/decomposeCameraMatrix.md)
- [deg2rad](functions/deg2rad.md)
- [halfTranslationHeightOf](functions/halfTranslationHeightOf.md)
- [halfTranslationWidthOf](functions/halfTranslationWidthOf.md)
- [invertFromWorldSpace](functions/invertFromWorldSpace.md)
- [isValidBoundaries](functions/isValidBoundaries.md)
- [isValidZoomLevelLimits](functions/isValidZoomLevelLimits.md)
- [minZoomLevelBaseOnDimensions](functions/minZoomLevelBaseOnDimensions.md)
- [minZoomLevelBaseOnHeight](functions/minZoomLevelBaseOnHeight.md)
- [minZoomLevelBaseOnWidth](functions/minZoomLevelBaseOnWidth.md)
- [normalizeAngleZero2TwoPI](functions/normalizeAngleZero2TwoPI.md)
- [pointIsInViewPort](functions/pointIsInViewPort.md)
- [rad2deg](functions/rad2deg.md)
- [rotationWithinBoundary](functions/rotationWithinBoundary.md)
- [rotationWithinLimits](functions/rotationWithinLimits.md)
- [transformationMatrixFromCamera](functions/transformationMatrixFromCamera.md)
- [translationHeightOf](functions/translationHeightOf.md)
- [translationWidthOf](functions/translationWidthOf.md)
- [withinBoundaries](functions/withinBoundaries.md)
- [zoomLevelBoundariesShouldUpdate](functions/zoomLevelBoundariesShouldUpdate.md)
- [zoomLevelWithinLimits](functions/zoomLevelWithinLimits.md)

## Camera Rig

- [DefaultCameraRig](classes/DefaultCameraRig.md)
- [CameraRig](interfaces/CameraRig.md)
- [CameraRigConfig](type-aliases/CameraRigConfig.md)
- [PanByHandlerFunction](type-aliases/PanByHandlerFunction.md)
- [PanHandlerClampConfig](type-aliases/PanHandlerClampConfig.md)
- [PanHandlerConfig](type-aliases/PanHandlerConfig.md)
- [PanHandlerRestrictionConfig](type-aliases/PanHandlerRestrictionConfig.md)
- [PanToHandlerFunction](type-aliases/PanToHandlerFunction.md)
- [RotateByHandlerFunction](type-aliases/RotateByHandlerFunction.md)
- [RotateToHandlerFunction](type-aliases/RotateToHandlerFunction.md)
- [RotationHandlerClampConfig](type-aliases/RotationHandlerClampConfig.md)
- [RotationHandlerConfig](type-aliases/RotationHandlerConfig.md)
- [RotationHandlerRestrictConfig](type-aliases/RotationHandlerRestrictConfig.md)
- [ZoomByHandlerFunction](type-aliases/ZoomByHandlerFunction.md)
- [ZoomHandlerClampConfig](type-aliases/ZoomHandlerClampConfig.md)
- [ZoomHandlerConfig](type-aliases/ZoomHandlerConfig.md)
- [ZoomHandlerRestrictConfig](type-aliases/ZoomHandlerRestrictConfig.md)
- [ZoomToHandlerFunction](type-aliases/ZoomToHandlerFunction.md)
- [clampByHandler](functions/clampByHandler.md)
- [clampRotateByHandler](functions/clampRotateByHandler.md)
- [clampRotateToHandler](functions/clampRotateToHandler.md)
- [clampToHandler](functions/clampToHandler.md)
- [clampZoomByHandler](functions/clampZoomByHandler.md)
- [clampZoomToHandler](functions/clampZoomToHandler.md)
- [convertDeltaToComplyWithRestriction](functions/convertDeltaToComplyWithRestriction.md)
- [convertUserInputDeltaToCameraDelta](functions/convertUserInputDeltaToCameraDelta.md)
- [createDefaultCameraRig](functions/createDefaultCameraRig.md)
- [createDefaultPanByHandler](functions/createDefaultPanByHandler.md)
- [createDefaultPanToHandler](functions/createDefaultPanToHandler.md)
- [createDefaultRotateByHandler](functions/createDefaultRotateByHandler.md)
- [createDefaultRotateToHandler](functions/createDefaultRotateToHandler.md)
- [createDefaultZoomByOnlyHandler](functions/createDefaultZoomByOnlyHandler.md)
- [createDefaultZoomToOnlyHandler](functions/createDefaultZoomToOnlyHandler.md)
- [restrictPanByHandler](functions/restrictPanByHandler.md)
- [restrictPanToHandler](functions/restrictPanToHandler.md)
- [restrictRotateByHandler](functions/restrictRotateByHandler.md)
- [restrictRotateToHandler](functions/restrictRotateToHandler.md)
- [restrictZoomByHandler](functions/restrictZoomByHandler.md)
- [restrictZoomToHandler](functions/restrictZoomToHandler.md)

## Canvas Position

- [CanvasPositionDimensionPublisher](classes/CanvasPositionDimensionPublisher.md)
- [SvgPositionDimensionPublisher](classes/SvgPositionDimensionPublisher.md)
- [getTrueRect](functions/getTrueRect.md)
- [invertYAxisForDrawImageWith9Args](functions/invertYAxisForDrawImageWith9Args.md)
- [reverseYAxis](functions/reverseYAxis.md)

## Coordinate Conversion

- [convertFromCanvas2ViewPort](functions/convertFromCanvas2ViewPort.md)
- [convertFromCanvas2Window](functions/convertFromCanvas2Window.md)
- [convertFromViewPort2Canvas](functions/convertFromViewPort2Canvas.md)
- [convertFromViewport2World](functions/convertFromViewport2World.md)
- [convertFromWindow2Canvas](functions/convertFromWindow2Canvas.md)
- [convertFromWindow2ViewPortWithCanvasOperator](functions/convertFromWindow2ViewPortWithCanvasOperator.md)
- [convertFromWorld2Viewport](functions/convertFromWorld2Viewport.md)
- [pointConversion](functions/pointConversion.md)

## Drawing Utilities

- [HALF\_TICK\_LENGTH](variables/HALF_TICK_LENGTH.md)
- [MAJOR\_TICK\_LENGTH](variables/MAJOR_TICK_LENGTH.md)
- [MINOR\_TICK\_LENGTH](variables/MINOR_TICK_LENGTH.md)
- [TEXT\_HALF\_TICK\_FONT\_SIZE](variables/TEXT_HALF_TICK_FONT_SIZE.md)
- [TEXT\_HALF\_TICK\_OFFSET](variables/TEXT_HALF_TICK_OFFSET.md)
- [TEXT\_MAJOR\_TICK\_FONT\_SIZE](variables/TEXT_MAJOR_TICK_FONT_SIZE.md)
- [TEXT\_MAJOR\_TICK\_OFFSET](variables/TEXT_MAJOR_TICK_OFFSET.md)
- [calculateOrderOfMagnitude](functions/calculateOrderOfMagnitude.md)
- [calculateTickValues](functions/calculateTickValues.md)
- [drawArrow](functions/drawArrow.md)
- [drawRuler](functions/drawRuler.md)

## Input Flow Control

- [AcceptingUserInputState](classes/AcceptingUserInputState.md)
- [CameraMuxWithAnimationAndLock](classes/CameraMuxWithAnimationAndLock.md)
- [LockedOnObjectState](classes/LockedOnObjectState.md)
- [PanControlStateMachine](classes/PanControlStateMachine.md)
- [Relay](classes/Relay.md)
- [RotateControlStateMachine](classes/RotateControlStateMachine.md)
- [RotationAcceptingUserInputState](classes/RotationAcceptingUserInputState.md)
- [RotationLockedOnObjectState](classes/RotationLockedOnObjectState.md)
- [RotationTransitionState](classes/RotationTransitionState.md)
- [TransitionState](classes/TransitionState.md)
- [ZoomAcceptingUserInputState](classes/ZoomAcceptingUserInputState.md)
- [ZoomControlStateMachine](classes/ZoomControlStateMachine.md)
- [ZoomLockedOnObjectState](classes/ZoomLockedOnObjectState.md)
- [ZoomTransitionState](classes/ZoomTransitionState.md)
- [CameraMux](interfaces/CameraMux.md)
- [CameraMuxPanOutput](type-aliases/CameraMuxPanOutput.md)
- [CameraMuxRotationOutput](type-aliases/CameraMuxRotationOutput.md)
- [CameraMuxZoomOutput](type-aliases/CameraMuxZoomOutput.md)
- [PanByInputEventPayload](type-aliases/PanByInputEventPayload.md)
- [PanControlOutputEvent](type-aliases/PanControlOutputEvent.md)
- [PanControlOutputMapping](type-aliases/PanControlOutputMapping.md)
- [PanControlStates](type-aliases/PanControlStates.md)
- [PanEventPayloadMapping](type-aliases/PanEventPayloadMapping.md)
- [PanToInputEventPayload](type-aliases/PanToInputEventPayload.md)
- [RotateByInputEventPayload](type-aliases/RotateByInputEventPayload.md)
- [RotateControlOutputEvent](type-aliases/RotateControlOutputEvent.md)
- [RotateControlOutputMapping](type-aliases/RotateControlOutputMapping.md)
- [RotateControlStates](type-aliases/RotateControlStates.md)
- [RotateEventPayloadMapping](type-aliases/RotateEventPayloadMapping.md)
- [RotateToInputEventPayload](type-aliases/RotateToInputEventPayload.md)
- [ZoomByAtInputPayload](type-aliases/ZoomByAtInputPayload.md)
- [ZoomByPayload](type-aliases/ZoomByPayload.md)
- [ZoomControlOutputEvent](type-aliases/ZoomControlOutputEvent.md)
- [ZoomControlOutputMapping](type-aliases/ZoomControlOutputMapping.md)
- [ZoomControlStates](type-aliases/ZoomControlStates.md)
- [ZoomEventPayloadMapping](type-aliases/ZoomEventPayloadMapping.md)
- [ZoomToAtInputPayload](type-aliases/ZoomToAtInputPayload.md)
- [ZoomToPayload](type-aliases/ZoomToPayload.md)
- [createCameraMuxWithAnimationAndLock](functions/createCameraMuxWithAnimationAndLock.md)
- [createDefaultCameraMux](functions/createDefaultCameraMux.md)
- [createDefaultPanControlStateMachine](functions/createDefaultPanControlStateMachine.md)
- [createDefaultPanControlStates](functions/createDefaultPanControlStates.md)
- [createDefaultRotateControlStateMachine](functions/createDefaultRotateControlStateMachine.md)
- [createDefaultRotateControlStates](functions/createDefaultRotateControlStates.md)
- [createDefaultZoomControlStateMachine](functions/createDefaultZoomControlStateMachine.md)
- [createDefaultZoomControlStates](functions/createDefaultZoomControlStates.md)

## Input Interpretation

- [InputOrchestrator](classes/InputOrchestrator.md)
- [OutputEvent](type-aliases/OutputEvent.md)

## Input State Machine

- [CursorStyle](enumerations/CursorStyle.md)
- [CanvasCacheInWebWorker](classes/CanvasCacheInWebWorker.md)
- [CanvasProxy](classes/CanvasProxy.md)
- [DummyCanvas](classes/DummyCanvas.md)
- [DummyKmtInputContext](classes/DummyKmtInputContext.md)
- [InitialPanState](classes/InitialPanState.md)
- [InProgressState](classes/InProgressState.md)
- [ObservableInputTracker](classes/ObservableInputTracker.md)
- [PanState](classes/PanState.md)
- [PanViaScrollWheelState](classes/PanViaScrollWheelState.md)
- [PendingState](classes/PendingState.md)
- [ReadyToPanViaScrollWheelState](classes/ReadyToPanViaScrollWheelState.md)
- [ReadyToPanViaSpaceBarState](classes/ReadyToPanViaSpaceBarState.md)
- [SvgProxy](classes/SvgProxy.md)
- [Canvas](interfaces/Canvas.md)
- [KmtInputContext](interfaces/KmtInputContext.md)
- [CanvasDimensions](type-aliases/CanvasDimensions.md)

## Input State Machine - KMT

- [KmtIdleState](classes/KmtIdleState.md)
- [KmtInputEventMapping](type-aliases/KmtInputEventMapping.md)
- [KmtInputEventOutputMapping](type-aliases/KmtInputEventOutputMapping.md)
- [KmtInputStateMachine](type-aliases/KmtInputStateMachine.md)
- [KmtInputStates](type-aliases/KmtInputStates.md)
- [KmtOutputEvent](type-aliases/KmtOutputEvent.md)
- [PointerEventPayload](type-aliases/PointerEventPayload.md)
- [ScrollEventPayload](type-aliases/ScrollEventPayload.md)
- [ScrollWithCtrlEventPayload](type-aliases/ScrollWithCtrlEventPayload.md)
- [createKmtInputStateMachine](functions/createKmtInputStateMachine.md)

## Input State Machine - Touch

- [IdleState](classes/IdleState.md)
- [TouchInputTracker](classes/TouchInputTracker.md)
- [TouchContext](interfaces/TouchContext.md)
- [TouchEventMapping](type-aliases/TouchEventMapping.md)
- [TouchEventPayload](type-aliases/TouchEventPayload.md)
- [TouchInputEventOutputMapping](type-aliases/TouchInputEventOutputMapping.md)
- [TouchInputStateMachine](type-aliases/TouchInputStateMachine.md)
- [TouchOutputEvent](type-aliases/TouchOutputEvent.md)
- [TouchPoints](type-aliases/TouchPoints.md)
- [TouchStates](type-aliases/TouchStates.md)
- [createTouchInputStateMachine](functions/createTouchInputStateMachine.md)

## Matrix

- [createTRSMatrix](functions/createTRSMatrix.md)
- [decomposeTRS](functions/decomposeTRS.md)
- [decomposeTRSSVD](functions/decomposeTRSSVD.md)
- [multiplyMatrix](functions/multiplyMatrix.md)

## Observable Pattern

- [AsyncObservable](classes/AsyncObservable.md)
- [SynchronousObservable](classes/SynchronousObservable.md)
- [Observable](interfaces/Observable.md)
- [SubscriptionOptions](interfaces/SubscriptionOptions.md)
- [Observer](type-aliases/Observer.md)

## Other

- [DisabledState](classes/DisabledState.md)
- [KmtEmptyState](classes/KmtEmptyState.md)
- [KmtInputStateMachineWebWorkerProxy](classes/KmtInputStateMachineWebWorkerProxy.md)
- [WorkerRelayCanvas](classes/WorkerRelayCanvas.md)
- [CameraOptions](type-aliases/CameraOptions.md)
- [KmtIdleStatePossibleTargetStates](type-aliases/KmtIdleStatePossibleTargetStates.md)
- [RotateToWithAnchorPointHandlerFunction](type-aliases/RotateToWithAnchorPointHandlerFunction.md)
- [DEFAULT\_BOARD\_CAMERA\_BOUNDARIES](variables/DEFAULT_BOARD_CAMERA_BOUNDARIES.md)
- [DEFAULT\_BOARD\_CAMERA\_OPTIONS](variables/DEFAULT_BOARD_CAMERA_OPTIONS.md)
- [DEFAULT\_BOARD\_CAMERA\_ROTATION\_BOUNDARIES](variables/DEFAULT_BOARD_CAMERA_ROTATION_BOUNDARIES.md)
- [DEFAULT\_BOARD\_CAMERA\_VIEWPORT\_HEIGHT](variables/DEFAULT_BOARD_CAMERA_VIEWPORT_HEIGHT.md)
- [DEFAULT\_BOARD\_CAMERA\_VIEWPORT\_WIDTH](variables/DEFAULT_BOARD_CAMERA_VIEWPORT_WIDTH.md)
- [DEFAULT\_BOARD\_CAMERA\_ZOOM\_BOUNDARIES](variables/DEFAULT_BOARD_CAMERA_ZOOM_BOUNDARIES.md)
- [createKmtInputStateMachineWithCanvas](functions/createKmtInputStateMachineWithCanvas.md)
- [getScrollBar](functions/getScrollBar.md)
- [getScrollBarDimension](functions/getScrollBarDimension.md)
- [getScrollBarPosition](functions/getScrollBarPosition.md)

## Raw Input Parser

- [VanillaKMTEventParser](classes/VanillaKMTEventParser.md)
- [VanillaTouchEventParser](classes/VanillaTouchEventParser.md)
- [KMTEventParser](interfaces/KMTEventParser.md)
- [StateMachine](interfaces/StateMachine.md)
- [TouchEventParser](interfaces/TouchEventParser.md)
- [EventTargetWithPointerEvents](type-aliases/EventTargetWithPointerEvents.md)
- [MinimumKeyboardEvent](type-aliases/MinimumKeyboardEvent.md)
- [MinimumPointerEvent](type-aliases/MinimumPointerEvent.md)
- [MinimumWheelEvent](type-aliases/MinimumWheelEvent.md)

## Raw Input Publisher

- [RawUserInputPublisher](classes/RawUserInputPublisher.md)
- [RawUserInputPublisherWithWebWorkerRelay](classes/RawUserInputPublisherWithWebWorkerRelay.md)
- [UserInputPublisher](interfaces/UserInputPublisher.md)
- [RawUserInputCallback](type-aliases/RawUserInputCallback.md)
- [RawUserInputEvent](type-aliases/RawUserInputEvent.md)
- [RawUserInputEventMap](type-aliases/RawUserInputEventMap.md)
- [RawUserPanInputEvent](type-aliases/RawUserPanInputEvent.md)
- [RawUserPanInputEventPayload](type-aliases/RawUserPanInputEventPayload.md)
- [RawUserRotateInputEvent](type-aliases/RawUserRotateInputEvent.md)
- [RawUserRotateInputEventPayload](type-aliases/RawUserRotateInputEventPayload.md)
- [RawUserZoomInputEvent](type-aliases/RawUserZoomInputEvent.md)
- [RawUserZoomInputEventPayload](type-aliases/RawUserZoomInputEventPayload.md)
- [UnsubscribeToUserRawInput](type-aliases/UnsubscribeToUserRawInput.md)
- [createDefaultRawUserInputPublisher](functions/createDefaultRawUserInputPublisher.md)

## Utils

- [Handler](type-aliases/Handler.md)
- [createHandlerChain](functions/createHandlerChain.md)
