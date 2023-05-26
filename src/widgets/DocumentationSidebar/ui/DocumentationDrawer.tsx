import { FC, useContext } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { useTranslation } from 'react-i18next';
import { ButtonStyled, PlaygroundContext, getLazyComponent } from 'shared';
import { DocumentationDrawerStyled } from './DocumentationDrawer.styled';

const DocumentationSideBar = getLazyComponent('widgets', 'DocumentationSideBar');

export const DocumentationDrawer: FC = () => {
  const { isDocumentOpen, setIsDocumentOpen } = useContext(PlaygroundContext);

  const { t } = useTranslation('playground');

  const theme = useTheme();
  const isLessLg = useMediaQuery(theme.breakpoints.down('lg'));

  const handleClose = () => setIsDocumentOpen(false);

  return (
    <DocumentationDrawerStyled
      variant={isLessLg ? 'temporary' : 'persistent'}
      anchor="left"
      open={isDocumentOpen}
      onClose={handleClose}
    >
      {isLessLg ? (
        <ButtonStyled onClick={handleClose}>
          <ChevronLeftIcon fontSize="medium" />
          {t('close')}
        </ButtonStyled>
      ) : null}

      <DocumentationSideBar />
    </DocumentationDrawerStyled>
  );
};
