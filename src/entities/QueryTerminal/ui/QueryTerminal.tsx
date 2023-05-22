import React, { FC, useCallback, useEffect, useRef } from 'react';
import { GraphQLSchema } from 'graphql';
// import { diagnosticCount } from '@codemirror/lint';
import Codemirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { graphql, updateSchema } from 'cm6-graphql';
import { prettifyGraphql, useAppActions, useAppSelector, EXTENTIONS } from 'shared';

type Props = {
  schema: GraphQLSchema | undefined;
  isOpenConfig: boolean;
};

export const QueryTerminal: FC<Props> = ({ schema, isOpenConfig }) => {
  const codemirror = useRef<ReactCodeMirrorRef | null>(null);
  const { setQuery } = useAppActions();
  const { query } = useAppSelector((state) => state.editorReducer);
  const onChange = useCallback(
    (value: string) => {
      setQuery(value);

      if (codemirror.current?.view?.state) {
        // console.log(diagnosticCount(codemirror.current?.view?.state));
      }
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
      style={{ overflow: 'hidden', maxHeight: isOpenConfig ? '70%' : '100%', flex: '1 1 auto' }}
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
