import { EditorView, keymap } from '@codemirror/view';
import { historyKeymap, indentWithTab } from '@codemirror/commands';
import { autocompletion } from '@codemirror/autocomplete';
import { syntaxHighlighting } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { AUTOCOMPLETE_KEYMAP } from './keymap.grapphql';
import { QUERY_EDITOR_THEME } from './theme.graphql';

export const EXTENTIONS = [
  QUERY_EDITOR_THEME,
  syntaxHighlighting(oneDarkHighlightStyle),
  autocompletion({ defaultKeymap: false, activateOnTyping: true }),
  keymap.of([...AUTOCOMPLETE_KEYMAP, ...historyKeymap, indentWithTab]),
  EditorView.lineWrapping
];
