import { acceptCompletion, startCompletion, moveCompletionSelection, closeCompletion } from '@codemirror/autocomplete';
import { insertNewlineAndIndent } from '@codemirror/commands';

export const AUTOCOMPLETE_KEYMAP = [
  {
    key: 'Enter',
    run: acceptCompletion
  },
  {
    key: 'Escape',
    run: closeCompletion
  },
  {
    key: 'Tab',
    run: acceptCompletion
  },
  {
    key: 'Ctrl-Space',
    run: startCompletion
  },
  {
    key: 'ArrowDown',
    run: moveCompletionSelection(true)
  },
  {
    key: 'ArrowUp',
    run: moveCompletionSelection(false)
  },
  {
    key: 'Enter',
    run: insertNewlineAndIndent
  }
];
