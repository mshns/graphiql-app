import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { default as ArrowClose } from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { default as ArrowOpen } from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import { Typography } from '@mui/material';
import { ButtonStyled, PlaygroundContext } from 'shared';

export const ButtonDocument: FC = () => {
  const { t } = useTranslation(['playground']);
  const { docButton, isDocumentOpen, setIsDocumentOpen } = useContext(PlaygroundContext);

  return (
    <ButtonStyled ref={docButton} onClick={() => setIsDocumentOpen(!isDocumentOpen)} sx={{ marginLeft: 1.5 }}>
      {isDocumentOpen ? <ArrowClose fontSize="small" /> : <ArrowOpen fontSize="small" />}

      <Typography variant="caption">{t('Documentation')}</Typography>
    </ButtonStyled>
  );
};
