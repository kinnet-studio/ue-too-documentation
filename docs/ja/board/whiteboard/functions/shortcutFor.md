[@ue-too/board](../../modules.md) / [whiteboard](../index.md) / shortcutFor

# 関数: shortcutFor()

> **shortcutFor**(`event`): [`EditorCommand`](../type-aliases/EditorCommand.md) \| `null`

定義: [packages/board/src/whiteboard/editor/keyboard.ts:69](https://github.com/kinnet-studio/ue-too/blob/365aee502d765098695d898e7b6317eba52f313e/packages/board/src/whiteboard/editor/keyboard.ts#L69)

The command a key press stands for, or null.

## パラメータ

### event

[`KeyLike`](../interfaces/KeyLike.md)

## 戻り値

[`EditorCommand`](../type-aliases/EditorCommand.md) \| `null`

## Remarks

Tool letters (H V R O A L P T N E), Delete or Backspace, Escape, and
Ctrl/Cmd + Z, Ctrl/Cmd + Shift + Z, Ctrl + Y, Ctrl/Cmd + A. Nothing fires
while the person is typing (in a field, a `contenteditable`, or mid IME
composition), and any other key with Ctrl, Cmd or Alt is left to the
browser. Space is the board's own temporary pan.
