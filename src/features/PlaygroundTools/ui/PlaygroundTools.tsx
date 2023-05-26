import { Box } from '@mui/material';
import { FC } from 'react';
import { ButtonDocument, ResponseStatus } from 'entities';

export const PlaygroundTools: FC = () => {
  return (
    <Box display="flex" justifyContent="space-between">
      <ButtonDocument />
      <ResponseStatus />
    </Box>
  );
};
