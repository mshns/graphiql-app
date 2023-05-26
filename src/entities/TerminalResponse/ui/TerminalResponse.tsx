import { FC } from 'react';
import { default as jsonbeautify } from 'json-beautify';
import Codemirror from '@uiw/react-codemirror';
import { json } from '@codemirror/lang-json';
import { Box, useTheme } from '@mui/material';
import { Spinner, EXTENTIONS } from 'shared';
import { useGetResponse } from '../model';

export const TerminalResponse: FC = () => {
  const { response, isLoading } = useGetResponse();
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
        editable={false}
        readOnly={true}
        basicSetup={{ highlightActiveLine: false, highlightActiveLineGutter: false }}
        extensions={[...EXTENTIONS, json()]}
      />
    </Box>
  );
};
