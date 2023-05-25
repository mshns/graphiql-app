import { Box, useTheme } from '@mui/material';
import { FC } from 'react';
import { ButtonPrettify, ButtonRequest } from 'entities';

export const EditorTools: FC = () => {
  const theme = useTheme();

  return (
    <Box
      display="flex"
      flexDirection="column"
      gap={theme.spacing(1)}
      position="absolute"
      top={theme.spacing(1)}
      right={theme.spacing(1)}
    >
      <ButtonRequest />
      <ButtonPrettify />
    </Box>
  );
};
