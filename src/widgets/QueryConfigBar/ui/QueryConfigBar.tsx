import { FC, useCallback, useEffect, useRef } from 'react';
import { GraphQLSchema } from 'graphql';
import Codemirror, { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { Box } from '@mui/material';
import { graphql, updateSchema } from 'cm6-graphql';
import { useAppActions, useAppSelector } from 'shared';
import { EXTENTIONS } from 'shared/api';

export const QueryConfigBar: FC<{ schema: GraphQLSchema | undefined }> = ({ schema }) => {
  const codemirror = useRef<ReactCodeMirrorRef | null>(null);
  const { setVariables } = useAppActions();
  const { variables } = useAppSelector((state) => state.editorReducer);

  const onChange = useCallback(
    (value: string) => {
      setVariables(value);
    },
    [setVariables]
  );

  useEffect(() => {
    if (codemirror && schema) {
      if (codemirror.current?.view) {
        updateSchema(codemirror.current.view, schema);
      }
    }
  }, [schema, codemirror]);

  return (
    <Box sx={{ height: '20%' }}>
      <Codemirror
        style={{ height: '100%' }}
        ref={codemirror}
        value={variables}
        onChange={onChange}
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
