import { Box } from '@mui/material';
import { FC, useContext } from 'react';
import { ButtonDocument, ButtonResponse, ResponseStatus } from 'entities';
import { PlaygroundContext } from 'shared';

export const PlaygroundTools: FC = () => {
  const { playgroundTools } = useContext(PlaygroundContext);

  return (
    <Box ref={playgroundTools} display="flex" justifyContent="space-between">
      <ButtonDocument />
      <ResponseStatus />
      <ButtonResponse />
    </Box>
  );
};
