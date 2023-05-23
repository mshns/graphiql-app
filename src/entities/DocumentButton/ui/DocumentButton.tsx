import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import { default as ArrowClose } from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { default as ArrowOpen } from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { Button, Typography } from '@mui/material';

type Props = {
  docButton: MutableRefObject<HTMLButtonElement | null>;
  isDocumentOpen: boolean;
  setIsDocumentOpen: Dispatch<SetStateAction<boolean>>;
};

export const DocumentButton: FC<Props> = ({ docButton, isDocumentOpen, setIsDocumentOpen }) => {
  return (
    <Button
      ref={docButton}
      onClick={() => setIsDocumentOpen(!isDocumentOpen)}
      sx={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-start' }}
    >
      {isDocumentOpen ? <ArrowClose sx={{ fontSize: '1.5em' }} /> : <ArrowOpen sx={{ fontSize: '1.5em' }} />}

      <Typography variant="caption">Documentation</Typography>
    </Button>
  );
};
