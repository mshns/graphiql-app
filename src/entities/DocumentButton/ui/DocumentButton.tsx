import { Dispatch, FC, SetStateAction } from 'react';
import { default as ArrowClose } from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { default as ArrowOpen } from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { Button, Typography } from '@mui/material';

type Props = {
  isDocumentOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const DocumentButton: FC<Props> = ({ isDocumentOpen, setIsOpen }) => {
  return (
    <Button
      onClick={() => setIsOpen(!isDocumentOpen)}
      sx={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-start' }}
    >
      {isDocumentOpen ? <ArrowClose sx={{ fontSize: '1.5em' }} /> : <ArrowOpen sx={{ fontSize: '1.5em' }} />}

      <Typography variant="caption">Documentation</Typography>
    </Button>
  );
};
