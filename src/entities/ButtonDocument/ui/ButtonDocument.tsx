import { Dispatch, FC, MutableRefObject, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
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
  const { t } = useTranslation(['playground']);

  return (
    <ButtonStyled ref={docButton} onClick={() => setIsDocumentOpen(!isDocumentOpen)} sx={{ marginLeft: 1.5 }}>
      {isDocumentOpen ? <ArrowClose sx={{ fontSize: '1.5em' }} /> : <ArrowOpen sx={{ fontSize: '1.5em' }} />}

      <Typography variant="caption">{t('Documentation')}</Typography>
    </ButtonStyled>
  );
};
