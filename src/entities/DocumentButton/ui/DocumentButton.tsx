import { Dispatch, FC, SetStateAction } from 'react';
import { default as ArrowClose } from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { default as ArrowOpen } from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { Typography } from '@mui/material';
import { DocButton } from './DocButton.styled';

type Props = {
  isDocumentOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

export const DocumentButton: FC<Props> = ({ isDocumentOpen, setIsOpen }) => {
  return (
    <DocButton onClick={() => setIsOpen(!isDocumentOpen)}>
      {isDocumentOpen ? <ArrowClose /> : <ArrowOpen />}

      <Typography>Documentation</Typography>
    </DocButton>
  );
};
