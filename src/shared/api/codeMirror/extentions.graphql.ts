import { EditorView, lineNumbers, keymap, drawSelection } from '@codemirror/view';
import { history, historyKeymap, indentWithTab } from '@codemirror/commands';
import { autocompletion, closeBrackets } from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting, indentOnInput } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { AUTOCOMPLETE_KEYMAP } from './keymap.grapphql';
import { QUERY_EDITOR_THEME } from './theme.graphql';

export const EXTENTIONS = [
  QUERY_EDITOR_THEME,
  syntaxHighlighting(oneDarkHighlightStyle),
  bracketMatching(),
  closeBrackets(),
  history(),
  drawSelection(),
  indentOnInput(),
  lineNumbers(),
  autocompletion({ defaultKeymap: false, activateOnTyping: true }),
  keymap.of([...AUTOCOMPLETE_KEYMAP, ...historyKeymap, indentWithTab]),
  EditorView.lineWrapping
];
