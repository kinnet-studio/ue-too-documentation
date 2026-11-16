[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / EditorCommand

# Type Alias: EditorCommand

> **EditorCommand** = \{ `tool`: [`ToolName`](ToolName.md); `type`: `"tool"`; \} \| \{ `type`: `"delete"`; \} \| \{ `type`: `"escape"`; \} \| \{ `type`: `"undo"`; \} \| \{ `type`: `"redo"`; \} \| \{ `type`: `"selectAll"`; \}

Defined in: [packages/board/src/whiteboard/editor/keyboard.ts:8](https://github.com/kinnet-studio/ue-too/blob/d5a4f4e24ceffb124b47501c2c57452fccb6febc/packages/board/src/whiteboard/editor/keyboard.ts#L8)

Something a key press asks the editor to do.
