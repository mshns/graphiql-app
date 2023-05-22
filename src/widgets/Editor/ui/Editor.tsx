import { FC, useState } from 'react';
import { Divider, Paper } from '@mui/material';
import { QueryTerminal } from 'entities';
import { EditorConfigBar, EditorTools } from 'features';
import { useIntrospection } from 'shared';

export const Editor: FC = () => {
  const { schema } = useIntrospection();
  const [isOpenConfig, setIsOpenConfig] = useState(false);

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 100%',
        boxShadow: 3,
        position: 'relative',
        height: '100%'
      }}
    >
      <QueryTerminal schema={schema} isOpenConfig={isOpenConfig} />

      <EditorTools />

      <Divider />

      <EditorConfigBar isOpenConfig={isOpenConfig} setIsOpenConfig={setIsOpenConfig} />
    </Paper>
  );
};
