import { Dispatch, FC, SetStateAction } from 'react';
import { default as jsonbeautify } from 'json-beautify';
import Codemirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { Box, useTheme } from '@mui/material';
import { Spinner, EXTENTIONS } from 'shared';
import { useGetResponse } from '../model';

type Props = {
  setResponseStatus: Dispatch<SetStateAction<number>>;
};

export const TerminalResponse: FC<Props> = ({ setResponseStatus }) => {
  const { response, isLoading } = useGetResponse({ setResponseStatus });
  const theme = useTheme();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box position="relative" width="100%">
      <Codemirror
        style={{ overflow: 'hidden', height: '100%', width: '100%' }}
        height="100%"
        theme={theme.palette.mode}
        value={jsonbeautify(response, null!, 1.5, 100)}
        basicSetup={{ highlightActiveLine: false, highlightActiveLineGutter: false }}
        extensions={[...EXTENTIONS, json(), EditorView.editable.of(false), EditorState.readOnly.of(true)]}
      />
    </Box>
  );
};
