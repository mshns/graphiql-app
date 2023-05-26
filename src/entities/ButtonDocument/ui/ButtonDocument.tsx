import { FC, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, useMediaQuery, useTheme } from '@mui/material';
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
    <ButtonStyled onClick={() => setIsDocumentOpen(!isDocumentOpen)} sx={{ marginLeft: 1.5 }}>
      {isDocumentOpen ? <ArrowClose fontSize="small" /> : <ArrowOpen fontSize="small" />}

      {isLessMd ? <ArticleIcon fontSize="medium" /> : <Typography variant="caption">{t('Documentation')}</Typography>}
    </ButtonStyled>
  );
};
