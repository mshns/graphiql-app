import { EditorView } from '@codemirror/view';
import { theme } from 'shared/ui';

export const QUERY_EDITOR_THEME = EditorView.baseTheme({
  '&': {
    color: theme.palette.info.main,
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
    color: theme.palette.error.main,
    backgroundColor: 'white',
    borderLeft: '2px solid #686868'
  },
  '&.cm-focused .cm-line .cm-selectionBackground, ::selection': {
    backgroundColor: '#dbdbdb'
  }
});
