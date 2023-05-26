import { FC, useContext } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { PlaygroundContext, getLazyComponent } from 'shared';
import { DocumentationDrawerStyled } from './DocumentationDrawer.styled';

const DocumentationSideBar = getLazyComponent('widgets', 'DocumentationSideBar');

export const DocumentationDrawer: FC = () => {
  const { isDocumentOpen, setIsDocumentOpen } = useContext(PlaygroundContext);

  const theme = useTheme();
  const isLessLg = useMediaQuery(theme.breakpoints.down('lg'));

  return (
    <DocumentationDrawerStyled
      variant={isLessLg ? 'temporary' : 'persistent'}
      anchor="left"
      open={isDocumentOpen}
      onClose={() => setIsDocumentOpen(false)}
    >
      <DocumentationSideBar />
    </DocumentationDrawerStyled>
  );
};
