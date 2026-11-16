[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / EditorCommand

# 型エイリアス: EditorCommand

> **EditorCommand** = \{ `tool`: [`ToolName`](ToolName.md); `type`: `"tool"`; \} \| \{ `type`: `"delete"`; \} \| \{ `type`: `"escape"`; \} \| \{ `type`: `"undo"`; \} \| \{ `type`: `"redo"`; \} \| \{ `type`: `"selectAll"`; \}

定義: [packages/board/src/whiteboard/editor/keyboard.ts:8](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/keyboard.ts#L8)

Something a key press asks the editor to do.
