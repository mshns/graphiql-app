import { FC, useEffect, useRef } from 'react';
import { EditorState } from '@codemirror/state';
import { EditorView, lineNumbers, keymap, highlightActiveLine } from '@codemirror/view';
import { history, historyKeymap, indentWithTab } from '@codemirror/commands';
import {
  autocompletion,
  closeBrackets,
  acceptCompletion,
  startCompletion,
  moveCompletionSelection,
  closeCompletion
} from '@codemirror/autocomplete';
import { bracketMatching, syntaxHighlighting, indentOnInput } from '@codemirror/language';
import { oneDarkHighlightStyle } from '@codemirror/theme-one-dark';
import { graphql, graphqlLanguageSupport, lint } from 'cm6-graphql';
import { useIntrospection } from 'shared';

const autoCompleteKeymap = [
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
  }
];

export const QueryTerminal: FC = () => {
  const editor = useRef<HTMLElement | null>(null);
  const { schema } = useIntrospection();

  useEffect(() => {
    if (editor.current && schema.current) {
      const state = EditorState.create({
        doc: ``,
        extensions: [
          syntaxHighlighting(oneDarkHighlightStyle),
          bracketMatching(),
          closeBrackets(),
          history(),
          highlightActiveLine(),
          indentOnInput(),
          graphqlLanguageSupport(),
          lineNumbers(),
          lint,
          autocompletion({ defaultKeymap: false }),
          keymap.of([...autoCompleteKeymap, ...historyKeymap, indentWithTab]),
          EditorView.lineWrapping,
          // EditorView.updateListener.of((update) => {
          //   if (update.changes) {
          //     onChange && onChange(update.state);
          //   }
          // }),
          graphql(schema.current, {
            onShowInDocs(field, type, parentType) {
              alert(`Showing in docs.: Field: ${field}, Type: ${type}, ParentType: ${parentType}`);
            },
            onFillAllFields(view, schema, _query, cursor, token) {
              alert(`Filling all fields. Token: ${token}`);
            }
          })
        ]
      });

      const view = new EditorView({
        state,
        parent: editor.current
      });

      return () => view.destroy();
    }
  }, [editor, schema]);

  return <section ref={editor}></section>;
};
