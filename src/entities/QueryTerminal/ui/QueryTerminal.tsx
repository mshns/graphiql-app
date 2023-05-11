import React, { FC, useCallback, useEffect, useRef } from 'react';
import { GraphQLSchema } from 'graphql';
import Codemirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { graphql, updateSchema } from 'cm6-graphql';
import { prettifyGraphql, useAppActions, useAppSelector, EXTENTIONS } from 'shared';

export const QueryTerminal: FC<{ schema: GraphQLSchema | undefined }> = ({ schema }) => {
  const codemirror = useRef<ReactCodeMirrorRef | null>(null);
  const { setQuery } = useAppActions();
  const { query } = useAppSelector((state) => state.editorReducer);
  const onChange = useCallback(
    (value: string) => {
      setQuery(value);
    },
    [setQuery]
  );

  const prettifyHandler = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.code === 'KeyF' && e.getModifierState('Shift') && e.getModifierState('Alt')) {
      prettifyGraphql(query, setQuery);
    }
  };

  useEffect(() => {
    if (codemirror && schema) {
      if (codemirror.current?.view) {
        updateSchema(codemirror.current.view, schema);
      }
    }
  }, [schema, codemirror]);

  return (
    <Codemirror
      style={{ overflow: 'hidden', maxHeight: '100%', flex: '1 1 auto' }}
      ref={codemirror}
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
