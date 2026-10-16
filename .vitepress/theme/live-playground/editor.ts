/**
 * The playground's code editor: CodeMirror with JavaScript support, coloured
 * only through CSS variables so it follows the site's light/dark toggle.
 * Loaded on demand by LivePlayground, so other pages never download it.
 */

import { indentWithTab } from '@codemirror/commands'
import { javascript } from '@codemirror/lang-javascript'
import { HighlightStyle, indentUnit, syntaxHighlighting } from '@codemirror/language'
import { Prec, StateEffect, StateField, type Extension } from '@codemirror/state'
import { Decoration, EditorView, keymap, type DecorationSet } from '@codemirror/view'
import { tags } from '@lezer/highlight'
import { basicSetup } from 'codemirror'

export interface EditorHandle {
  getCode(): string
  setCode(code: string): void
  /** Highlights the line (1-based) and scrolls it into view; null clears it */
  setErrorLine(line: number | null): void
  destroy(): void
}

const setError = StateEffect.define<number | null>()
const errorLineDecoration = Decoration.line({ class: 'cm-error-line' })

// The highlighted error line; cleared whenever the code changes
const errorLine = StateField.define<DecorationSet>({
  create: () => Decoration.none,
  update(value, tr) {
    for (const effect of tr.effects) {
      if (effect.is(setError)) {
        if (effect.value === null) return Decoration.none
        const line = tr.state.doc.line(effect.value)
        return Decoration.set([errorLineDecoration.range(line.from)])
      }
    }
    return tr.docChanged ? Decoration.none : value
  },
  provide: field => EditorView.decorations.from(field),
})

const highlightStyle = HighlightStyle.define([
  { tag: [tags.keyword, tags.bool, tags.null, tags.operatorKeyword, tags.definitionKeyword, tags.moduleKeyword], color: 'var(--lp-tk-keyword)' },
  { tag: [tags.string, tags.special(tags.string), tags.regexp], color: 'var(--lp-tk-string)' },
  { tag: [tags.function(tags.variableName), tags.function(tags.propertyName), tags.className], color: 'var(--lp-tk-function)' },
  { tag: tags.number, color: 'var(--lp-tk-number)' },
  { tag: [tags.comment, tags.lineComment, tags.blockComment], color: 'var(--lp-tk-comment)', fontStyle: 'italic' },
  { tag: [tags.propertyName, tags.definition(tags.propertyName)], color: 'var(--lp-tk-property)' },
  { tag: [tags.punctuation, tags.operator, tags.bracket], color: 'var(--lp-tk-punct)' },
])

const theme = EditorView.theme({
  '&': {
    height: '100%',
    backgroundColor: 'var(--vp-c-bg-alt)',
    color: 'var(--vp-c-text-1)',
    fontSize: '13px',
  },
  '.cm-scroller': {
    fontFamily: 'var(--vp-font-family-mono)',
    lineHeight: '20px',
  },
  '.cm-content': { caretColor: 'var(--vp-c-text-1)', padding: '14px 0' },
  '.cm-cursor, .cm-dropCursor': { borderLeftColor: 'var(--vp-c-text-1)' },
  '.cm-gutters': {
    backgroundColor: 'var(--vp-c-bg-alt)',
    color: 'var(--vp-c-text-3)',
    borderRight: '1px solid var(--vp-c-divider)',
  },
  '.cm-activeLine, .cm-activeLineGutter': { backgroundColor: 'transparent' },
  '&.cm-focused': { outline: 'none' },
  '&.cm-focused .cm-selectionBackground, .cm-selectionBackground, .cm-content ::selection': {
    backgroundColor: 'var(--vp-c-brand-soft)',
  },
  '.cm-error-line': { backgroundColor: 'var(--vp-c-danger-soft)' },
})

export function createEditor(
  parent: HTMLElement,
  opts: {
    code: string
    ariaLabel: string
    onChange(code: string): void
    onRun(): void
  }
): EditorHandle {
  const extensions: Extension[] = [
    basicSetup,
    javascript(),
    indentUnit.of('    '),
    keymap.of([indentWithTab]),
    Prec.highest(
      keymap.of([
        {
          key: 'Mod-Enter',
          run: () => {
            opts.onRun()
            return true
          },
        },
      ])
    ),
    EditorView.contentAttributes.of({ 'aria-label': opts.ariaLabel }),
    EditorView.updateListener.of(update => {
      if (update.docChanged) opts.onChange(update.state.doc.toString())
    }),
    errorLine,
    syntaxHighlighting(highlightStyle),
    theme,
  ]

  const view = new EditorView({ doc: opts.code, extensions, parent })

  return {
    getCode: () => view.state.doc.toString(),
    setCode(code) {
      view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: code } })
      view.scrollDOM.scrollTop = 0
    },
    setErrorLine(line) {
      if (line === null || line < 1 || line > view.state.doc.lines) {
        view.dispatch({ effects: setError.of(null) })
        return
      }
      const pos = view.state.doc.line(line).from
      view.dispatch({ effects: [setError.of(line), EditorView.scrollIntoView(pos, { y: 'center' })] })
    },
    destroy: () => view.destroy(),
  }
}
