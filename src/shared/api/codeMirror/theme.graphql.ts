import { EditorView } from '@codemirror/view';

export const QUERY_EDITOR_THEME = EditorView.baseTheme({
  '&': {
    color: '#7e7e7e',
    backgroundColor: 'transparent'
  },
  '&.cm-editor.cm-focused': {
    outline: 'none'
  },
  '.cm-gutters': {
    backgroundColor: 'transparent',
    borderRight: 'none'
  },
  '.cm-mygutter': {
    width: '5px',
    order: 3
  },
  '.cm-foldGutter': {
    paddingLeft: '0.2em',
    order: 2
  },
  '&.cm-editor.cm-focused .cm-cursor-primary': {
    color: 'red',
    backgroundColor: 'white',
    borderLeft: '2px solid #686868'
  },
  '&.cm-focused .cm-line .cm-selectionBackground, ::selection': {
    backgroundColor: '#dbdbdb'
  }
});
