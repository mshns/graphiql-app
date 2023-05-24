import { FC } from 'react';
import { default as jsonbeautify } from 'json-beautify';
import Codemirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { EditorView } from '@codemirror/view';
import { EditorState } from '@codemirror/state';
import { Box, Paper, Typography, useTheme } from '@mui/material';
import { Spinner, EXTENTIONS, RESPONSE_CODES } from 'shared';
import { useGetResponse } from '../model';

export const TerminalResponse: FC = () => {
  const { response, isLoading, responseStatus } = useGetResponse();
  const theme = useTheme();

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <Box position="relative" width="100%">
      {responseStatus ? (
        <Paper sx={{ padding: '0.2em', position: 'absolute', top: '0', right: '1em' }}>
          <Typography color={responseStatus === RESPONSE_CODES.ok ? 'success.main' : 'error.main'}>
            Status: {responseStatus}
          </Typography>
        </Paper>
      ) : null}

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
