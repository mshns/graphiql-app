import { FC, useRef, useState } from 'react';
import { Box, Divider, Paper } from '@mui/material';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { TerminalQuery } from 'entities';
import { EditorConfigBar, EditorTools } from 'features';
import { useIntrospection, EditorContext } from 'shared';

export const Editor: FC = () => {
  const { schema } = useIntrospection();
  const [isOpenConfig, setIsOpenConfig] = useState(false);

  const queryRef = useRef<ReactCodeMirrorRef | null>(null);
  const headersRef = useRef<ReactCodeMirrorRef | null>(null);
  const variablesRef = useRef<ReactCodeMirrorRef | null>(null);

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: '0 0 100%',
        position: 'relative',
        height: '100%',
        boxShadow: 2
      }}
    >
      <EditorContext.Provider value={{ queryRef, headersRef, variablesRef, isOpenConfig, setIsOpenConfig }}>
        <Box
          display="flex"
          height="100%"
          width="100%"
          maxHeight={isOpenConfig ? '70%' : '100%'}
          flex="1 1 auto"
          overflow="hidden"
        >
          <TerminalQuery schema={schema} />

          <EditorTools />
        </Box>

        <Divider />

        <EditorConfigBar />
      </EditorContext.Provider>
    </Paper>
  );
};
