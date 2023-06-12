import { Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { default as ArrowClose } from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { default as ArrowOpen } from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import BackupIcon from '@mui/icons-material/Backup';
import { ButtonStyled, PlaygroundContext, useAppSelector } from 'shared';

export const ButtonResponse: FC = () => {
  const { t } = useTranslation('playground');
  const { isResponseOpen, setIsResponseOpen } = useContext(PlaygroundContext);
  const { response } = useAppSelector((state) => state.editorReducer);

  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  if (!isLessMd || !response) {
    return null;
  }

  return (
    <Tooltip title={t('Response')} disableInteractive>
      <ButtonStyled onClick={() => setIsResponseOpen(!isResponseOpen)}>
        {isResponseOpen ? <ArrowOpen fontSize="small" /> : <ArrowClose fontSize="small" />}

        {isLessMd ? <BackupIcon fontSize="medium" /> : <Typography variant="caption">{t('Response')}</Typography>}
      </ButtonStyled>
    </Tooltip>
  );
};
