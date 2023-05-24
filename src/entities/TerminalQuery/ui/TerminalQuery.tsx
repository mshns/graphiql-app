import React, { FC, useCallback, useContext, useEffect } from 'react';
import { GraphQLSchema } from 'graphql';
import Codemirror from '@uiw/react-codemirror';
import { graphql, updateSchema } from 'cm6-graphql';
import { useTheme } from '@mui/material';
import { graphqlParseGuard, useAppActions, useAppSelector, EXTENTIONS, EditorContext, lintEditorErrors } from 'shared';

type Props = {
  schema: GraphQLSchema | undefined;
};

export const TerminalQuery: FC<Props> = ({ schema }) => {
  const { queryRef, isOpenConfig } = useContext(EditorContext);
  const { setQuery } = useAppActions();
  const { query } = useAppSelector((state) => state.editorReducer);
  const theme = useTheme();

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
      const isQueryPass = lintEditorErrors(queryRef, 'query');

      if (isQueryPass) {
        graphqlParseGuard(query, setQuery);
      }
    }
  };

  return (
    <Codemirror
      style={{ overflow: 'hidden', maxHeight: isOpenConfig ? '70%' : '100%', flex: '1 1 auto' }}
      ref={queryRef}
      height="100%"
      value={query}
      theme={theme.palette.mode}
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
