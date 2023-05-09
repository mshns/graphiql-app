import { FC, useCallback, useEffect, useRef } from 'react';
import { GraphQLSchema } from 'graphql';
import Codemirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { Box } from '@mui/material';
import { graphql, updateSchema } from 'cm6-graphql';
import { useAppActions, useAppSelector } from 'shared';
import { EXTENTIONS } from 'shared/api';

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

  useEffect(() => {
    if (codemirror && schema) {
      if (codemirror.current?.view) {
        updateSchema(codemirror.current.view, schema);
      }
    }
  }, [schema, codemirror]);

  return (
    <Box sx={{ height: '80%' }}>
      <Codemirror
        style={{ height: '100%' }}
        ref={codemirror}
        value={query}
        theme={'none'}
        onChange={onChange}
        indentWithTab={false}
        extensions={[...EXTENTIONS, graphql()]}
        basicSetup={{
          highlightActiveLine: false,
          highlightActiveLineGutter: false,
          defaultKeymap: false,
          completionKeymap: false
        }}
      />
    </Box>
  );
};
