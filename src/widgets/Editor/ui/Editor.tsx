import { FC } from 'react';
import { Divider, Paper } from '@mui/material';
import { EditorTools, QueryConfigBar, QueryTerminal } from 'features';
import { useIntrospection } from 'shared';

export const Editor: FC = () => {
  const { schema } = useIntrospection();

  return (
    <Paper
      sx={{
        flex: '0 0 100%',
        boxShadow: 3,
        position: 'relative',
        height: '100%'
      }}
    >
      <QueryTerminal schema={schema} />

      <EditorTools />

      <Divider />

      <QueryConfigBar schema={schema} />
    </Paper>
  );
};
