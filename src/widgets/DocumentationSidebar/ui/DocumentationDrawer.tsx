import { Dispatch, FC, SetStateAction } from 'react';
import { useMediaQuery, useTheme } from '@mui/material';
import { getLazyComponent } from 'shared';
import { DocumentationDrawerStyled } from './DocumentationDrawer.styled';

type Props = {
  isDocumentOpen: boolean;
  setIsDocumentOpen: Dispatch<SetStateAction<boolean>>;
};

const DocumentationSideBar = getLazyComponent('widgets', 'DocumentationSideBar');

export const DocumentationDrawer: FC<Props> = ({ isDocumentOpen, setIsDocumentOpen }) => {
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
