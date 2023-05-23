import { FC, useRef, useState } from 'react';
import { Divider, Paper } from '@mui/material';
import { ReactCodeMirrorRef } from '@uiw/react-codemirror';
import { QueryTerminal } from 'entities';
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
        boxShadow: 3
      }}
    >
      <EditorContext.Provider value={{ queryRef, headersRef, variablesRef, isOpenConfig, setIsOpenConfig }}>
        <QueryTerminal schema={schema} />

        <EditorTools />

        <Divider />

        <EditorConfigBar />
      </EditorContext.Provider>
    </Paper>
  );
};
