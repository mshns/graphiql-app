import { EditorView } from '@codemirror/view';

export const QUERY_EDITOR_THEME = EditorView.baseTheme({
  '&': {
    backgroundColor: 'transparent'
  },

  '&.cm-editor': {
    backgroundColor: 'transparent'
  },

  '&.cm-editor.cm-focused': {
    outline: 'none'
  },

  '&.cm-editor .cm-gutters': {
    color: 'inherit',
    backgroundColor: 'transparent',
    borderRight: 'none'
  },

  '&.cm-editor.cm-focused .cm-cursor-primary': {
    borderLeft: '3px solid #e660ba'
  }
});
