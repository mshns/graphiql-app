import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Tooltip, Typography, useMediaQuery, useTheme } from '@mui/material';
import { default as ArrowClose } from '@mui/icons-material/KeyboardDoubleArrowLeftRounded';
import { default as ArrowOpen } from '@mui/icons-material/KeyboardDoubleArrowRightRounded';
import ArticleIcon from '@mui/icons-material/Article';
import { ButtonStyled, PlaygroundContext } from 'shared';

export const ButtonDocument: FC = () => {
  const { t } = useTranslation(['playground']);
  const { isDocumentOpen, setIsDocumentOpen } = useContext(PlaygroundContext);

  const theme = useTheme();
  const isLessMd = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Tooltip title={t('Documentation')} disableInteractive>
      <ButtonStyled onClick={() => setIsDocumentOpen(!isDocumentOpen)}>
        {isDocumentOpen ? <ArrowClose fontSize="small" /> : <ArrowOpen fontSize="small" />}

        {isLessMd ? <ArticleIcon fontSize="medium" /> : <Typography variant="caption">{t('Documentation')}</Typography>}
      </ButtonStyled>
    </Tooltip>
  );
};
