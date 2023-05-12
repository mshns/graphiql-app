import { Box } from '@mui/material';
import { FC } from 'react';
import { PrettifyButton, RequestButton } from 'entities';

export const EditorTools: FC = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '0.5em',
        position: 'absolute',
        top: '0.5em',
        right: '1.2em'
      }}
    >
      <RequestButton />
      <PrettifyButton />
    </Box>
  );
};