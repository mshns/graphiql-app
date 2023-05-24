import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import { default as ArrowClose } from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { default as ArrowOpen } from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { Typography } from '@mui/material';
import { ButtonStyled } from 'shared';

type Props = {
  docButton: MutableRefObject<HTMLButtonElement | null>;
  isDocumentOpen: boolean;
  setIsDocumentOpen: Dispatch<SetStateAction<boolean>>;
};

export const ButtonDocument: FC<Props> = ({ docButton, isDocumentOpen, setIsDocumentOpen }) => {
  return (
    <ButtonStyled
      ref={docButton}
      onClick={() => setIsDocumentOpen(!isDocumentOpen)}
      sx={{ display: 'flex', alignItems: 'center', alignSelf: 'flex-start' }}
    >
      {isDocumentOpen ? <ArrowClose sx={{ fontSize: '1.5em' }} /> : <ArrowOpen sx={{ fontSize: '1.5em' }} />}

      <Typography variant="caption">Documentation</Typography>
    </ButtonStyled>
  );
};
