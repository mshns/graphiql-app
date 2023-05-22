import React, { FC, useCallback, useContext, useEffect } from 'react';
import { GraphQLSchema } from 'graphql';
// import { diagnosticCount } from '@codemirror/lint';
import Codemirror from '@uiw/react-codemirror';
import { graphql, updateSchema } from 'cm6-graphql';
import { prettifyGraphql, useAppActions, useAppSelector, EXTENTIONS, EditorContext } from 'shared';

type Props = {
  schema: GraphQLSchema | undefined;
};

export const QueryTerminal: FC<Props> = ({ schema }) => {
  const { queryRef, isOpenConfig } = useContext(EditorContext);
  const { setQuery } = useAppActions();
  const { query } = useAppSelector((state) => state.editorReducer);
  const onChange = useCallback(
    (value: string) => {
      setQuery(value);

      if (queryRef.current?.view?.state) {
        // console.log(diagnosticCount(codemirror.current?.view?.state));
      }
    },
    [setQuery, queryRef]
  );

  const prettifyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'KeyF' && e.getModifierState('Shift') && e.getModifierState('Alt')) {
      prettifyGraphql(query, setQuery);
    }
  };

  useEffect(() => {
    if (queryRef && schema) {
      if (queryRef.current?.view) {
        updateSchema(queryRef.current.view, schema);
      }
    }
  }, [schema, queryRef]);

  return (
    <Codemirror
      style={{ overflow: 'hidden', maxHeight: isOpenConfig ? '70%' : '100%', flex: '1 1 auto' }}
      ref={queryRef}
      height="100%"
      value={query}
      theme={'none'}
      onChange={onChange}
      onKeyDown={prettifyHandler}
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
