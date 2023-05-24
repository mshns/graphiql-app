import { FC } from 'react';
import { Button } from '@mui/material';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import { usePrettifyEditors } from 'shared';

export const ButtonPrettify: FC = () => {
  const { prettifyHandler } = usePrettifyEditors();

  return (
    <Button onClick={() => prettifyHandler()} sx={{ minWidth: 'auto' }}>
      <FormatAlignLeftOutlinedIcon />
    </Button>
  );
};
