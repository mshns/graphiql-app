import React, { FC, useCallback, useContext, useEffect } from 'react';
import { GraphQLSchema } from 'graphql';
// import { diagnosticCount } from '@codemirror/lint';
import Codemirror from '@uiw/react-codemirror';
import { graphql, updateSchema } from 'cm6-graphql';
import { prettifyGraphql, useAppActions, useAppSelector, EXTENTIONS, EditorContext, lintEditorErrors } from 'shared';

type Props = {
  schema: GraphQLSchema | undefined;
};

export const QueryTerminal: FC<Props> = ({ schema }) => {
  const { queryRef, isOpenConfig } = useContext(EditorContext);
  const { setQuery } = useAppActions();
  const { query } = useAppSelector((state) => state.editorReducer);

  useEffect(() => {
    if (queryRef && schema) {
      if (queryRef.current?.view) {
        updateSchema(queryRef.current.view, schema);
      }
    }
  }, [schema, queryRef]);

  const handleChange = useCallback(
    (value: string) => {
      setQuery(value);
    },
    [setQuery]
  );

  const handlePrettify = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'KeyF' && e.getModifierState('Shift') && e.getModifierState('Alt')) {
      const isQueryError = lintEditorErrors(queryRef, 'query');

      if (!isQueryError) {
        prettifyGraphql(query, setQuery);
      }
    }
  };

  return (
    <Codemirror
      style={{ overflow: 'hidden', maxHeight: isOpenConfig ? '70%' : '100%', flex: '1 1 auto' }}
      ref={queryRef}
      height="100%"
      value={query}
      theme={'none'}
      onChange={handleChange}
      onKeyDown={handlePrettify}
      indentWithTab={false}
      extensions={[...EXTENTIONS, graphql()]}
      basicSetup={{
        highlightActiveLine: false,
        highlightActiveLineGutter: false,
        defaultKeymap: false,
        completionKeymap: false
      }}
    />
  );
};
