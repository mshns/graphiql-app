import { FC, Suspense, useContext } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { PlaygroundContext, getLazyComponent, Spinner } from 'shared';
import { ButtonClose } from 'entities';
import { DocumentationDrawerStyled } from './DocumentationDrawer.styled';

const DocumentationSideBar = getLazyComponent('widgets', 'DocumentationSideBar');

export const DocumentationDrawer: FC = () => {
  const { isDocumentOpen, setIsDocumentOpen } = useContext(PlaygroundContext);

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
      {isLessLg ? <ButtonClose side="left" handler={handleClose} /> : null}

      <Suspense fallback={<Spinner />}>{isDocumentOpen && <DocumentationSideBar />}</Suspense>
    </DocumentationDrawerStyled>
  );
};
